import { SITE_CONFIG } from "@/constants/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-5 flex flex-wrap items-center justify-between gap-3">
      <p className="text-[13px] text-muted-foreground">{SITE_CONFIG.copyright}</p>
      <p className="text-[13px] text-muted-foreground">
        {SITE_CONFIG.email} · {SITE_CONFIG.phone}
      </p>
    </footer>
  );
}