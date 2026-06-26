// src/app/loading.tsx

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[hsl(var(--color-background))]">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-12 w-12 animate-spin rounded-full border-4 border-[hsl(var(--color-border))] border-t-[hsl(var(--color-primary))]"
          role="status"
        />
        <p className="text-[length:var(--text-sm)] text-[hsl(var(--color-foreground-muted))]">
          Loading...
        </p>
      </div>
    </div>
  );
}