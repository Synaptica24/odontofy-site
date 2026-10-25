/* Marca do OdontoFy: quadrado de cantos suaves em tinta com a silhueta de um dente (coroa larga, raiz única)
   e um ponto azul-petróleo no canto, o mesmo acento do painel. Nada copiado de outra marca. */
export function OdontoFyMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className} aria-hidden>
      <rect width="64" height="64" rx="15" fill="var(--ink)" />
      <path
        d="M22 14h20c3.3 0 5 2.2 5 5.5v9c0 3-1.3 5.2-3.6 6.5l-1.1.6c-1 .6-1.6 1.6-1.8 2.8L38.3 50c-.3 1.8-1.5 3-3 3s-2.6-1.1-3.1-2.8L32 46l-.2 4.2C31.3 51.9 30.1 53 28.6 53s-2.7-1.2-3-3l-2.2-11.6c-.2-1.2-.8-2.2-1.8-2.8l-1.1-.6C18.3 33.7 17 31.5 17 28.5v-9c0-3.3 1.7-5.5 5-5.5z"
        fill="var(--bg)"
      />
      <circle cx="50" cy="15" r="4" fill="#2b6a8a" />
    </svg>
  );
}

export function OdontoFyLogo({ size = 26, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <OdontoFyMark size={size} />
      <span className="font-bold tracking-[-0.04em] text-ink" style={{ fontSize: size * 0.78 }}>
        Odonto<span className="text-accent">Fy</span>
      </span>
    </span>
  );
}
