interface PageHeaderProps {
  backHref?: string;
  backLabel?: string;
  rightContent?: React.ReactNode;
}

export default function PageHeader({ backHref = "/", backLabel, rightContent }: PageHeaderProps) {
  return (
    <header className="bg-white border-b border-[var(--color-cream-dark)] px-6 py-4">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <a href="/" className="font-serif text-xl text-[var(--color-warm-dark)]">
          よりそい
        </a>
        {backLabel ? (
          <a href={backHref} className="text-[var(--color-text-light)] hover:text-[var(--color-warm)] py-2 text-base">
            ← {backLabel}
          </a>
        ) : rightContent ? (
          rightContent
        ) : null}
      </div>
    </header>
  );
}
