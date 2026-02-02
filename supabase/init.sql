-- よりそい Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Waitlist
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  age_group TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  ip TEXT
);

-- Users
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  display_name TEXT,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  birth_year INTEGER,
  prefecture TEXT,
  subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'standard', 'premium')),
  subscription_expires_at TIMESTAMPTZ,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_active_at TIMESTAMPTZ DEFAULT NOW()
);

-- Profiles (AI-generated)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  bio TEXT,
  personality_traits JSONB DEFAULT '{}',
  interests JSONB DEFAULT '[]',
  life_values JSONB DEFAULT '{}',
  conversation_style TEXT,
  ai_summary TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI Conversations
CREATE TABLE IF NOT EXISTS ai_conversations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Daily Matches
CREATE TABLE IF NOT EXISTS daily_matches (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  matched_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  ai_reason TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'interested', 'passed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, matched_user_id, created_at::date)
);

-- Connections (mutual interest)
CREATE TABLE IF NOT EXISTS connections (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_a_id UUID REFERENCES users(id) ON DELETE CASCADE,
  user_b_id UUID REFERENCES users(id) ON DELETE CASCADE,
  ai_icebreaker TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_a_id, user_b_id)
);

-- Messages
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  connection_id UUID REFERENCES connections(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  read_at TIMESTAMPTZ
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_ai_conversations_user ON ai_conversations(user_id, created_at);
CREATE INDEX IF NOT EXISTS idx_daily_matches_user ON daily_matches(user_id, created_at);
CREATE INDEX IF NOT EXISTS idx_messages_connection ON messages(connection_id, created_at);
CREATE INDEX IF NOT EXISTS idx_users_active ON users(last_active_at);

-- Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies (users can only see their own data)
CREATE POLICY "Users can read own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can read own AI profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can read own conversations" ON ai_conversations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own conversations" ON ai_conversations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own matches" ON daily_matches
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own matches" ON daily_matches
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can read own connections" ON connections
  FOR SELECT USING (auth.uid() = user_a_id OR auth.uid() = user_b_id);

CREATE POLICY "Users can read connection messages" ON messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM connections
      WHERE connections.id = messages.connection_id
      AND (connections.user_a_id = auth.uid() OR connections.user_b_id = auth.uid())
    )
  );

CREATE POLICY "Users can send messages in connections" ON messages
  FOR INSERT WITH CHECK (
    auth.uid() = sender_id AND
    EXISTS (
      SELECT 1 FROM connections
      WHERE connections.id = messages.connection_id
      AND (connections.user_a_id = auth.uid() OR connections.user_b_id = auth.uid())
    )
  );
