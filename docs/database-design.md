# よりそい - Database Design

## Tables

### users
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| email | text | unique |
| password_hash | text | |
| display_name | text | |
| gender | text | male/female/other |
| birth_year | int | |
| prefecture | text | 都道府県 |
| created_at | timestamp | |
| last_active_at | timestamp | |
| subscription_tier | text | free/standard/premium |
| subscription_expires_at | timestamp | |
| is_verified | boolean | 本人確認済み |

### profiles (AIが生成・更新)
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| user_id | uuid | FK → users |
| bio | text | AI生成の自己紹介 |
| personality_traits | jsonb | 性格特性 |
| interests | jsonb | 趣味・関心 |
| life_values | jsonb | 人生の価値観 |
| conversation_style | text | 会話スタイル |
| ai_summary | text | AIによるまとめ |
| updated_at | timestamp | |

### ai_conversations (AIコンシェルジュとの会話)
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| user_id | uuid | FK → users |
| role | text | user/assistant |
| content | text | |
| metadata | jsonb | 抽出した情報等 |
| created_at | timestamp | |

### daily_matches (毎日の紹介)
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| user_id | uuid | FK → users (紹介される側) |
| matched_user_id | uuid | FK → users (紹介相手) |
| ai_reason | text | AIの紹介理由 |
| status | text | pending/interested/passed |
| created_at | timestamp | |

### connections (マッチング成立)
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| user_a_id | uuid | FK → users |
| user_b_id | uuid | FK → users |
| ai_icebreaker | text | AIが作った最初の話題 |
| created_at | timestamp | |

### messages (ユーザー間メッセージ)
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| connection_id | uuid | FK → connections |
| sender_id | uuid | FK → users |
| content | text | |
| created_at | timestamp | |
| read_at | timestamp | |

### waitlist
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| email | text | unique |
| age_group | text | |
| created_at | timestamp | |
