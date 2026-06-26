// src/app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[hsl(var(--color-background))]">
      <h1 className="text-gradient-primary text-[length:var(--text-7xl)] font-bold">
        404
      </h1>
      <p className="mt-4 text-[length:var(--text-xl)] text-[hsl(var(--color-foreground-muted))]">
        Page not found
      </p>
      <Link
        href="/"
        className="mt-8 rounded-[var(--radius-lg)] bg-[hsl(var(--color-primary))] px-6 py-3 text-[length:var(--text-sm)] font-semibold text-[hsl(var(--color-primary-foreground))] transition-all duration-[var(--transition-base)] hover:bg-[hsl(var(--color-primary-light))]"
      >
        Go Home
      </Link>
    </div>
  );
}