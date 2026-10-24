/* Marca do Marfim: quadrado de cantos suaves em tinta, um "M" cuja base lembra a raiz de um dente, e um ponto azul-petróleo. */
export function MarfimMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className} aria-hidden>
      <rect width="64" height="64" rx="15" fill="var(--ink)" />
      <path d="M14 48V18l10 0 8 15 8-15h10v30h-8V31l-7 13h-6l-7-13v17z" fill="var(--bg)" />
      <circle cx="50" cy="16" r="4" fill="#2b6a8a" />
    </svg>
  );
}

export function MarfimLogo({ size = 26, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <MarfimMark size={size} />
      <span className="font-bold tracking-[-0.04em] text-ink" style={{ fontSize: size * 0.78 }}>
        marf<span className="relative">ı<span className="absolute left-1/2 top-[0.1em] size-[0.19em] -translate-x-1/2 rounded-full bg-accent" /></span>m
      </span>
    </span>
  );
}
