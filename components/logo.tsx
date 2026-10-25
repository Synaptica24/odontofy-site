import Image from "next/image";

/* Marca do OdontoFy: o mascote (dente sorridente acenando) recortado num quadrado de cantos suaves.
   O fundo creme vem da própria imagem; o anel fino (cor da linha do tema) separa o quadrado do fundo nos dois modos. */
export function OdontoFyMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/odontofy-mascote.png"
      alt=""
      aria-hidden
      width={size}
      height={size}
      priority
      className={`shrink-0 rounded-[24%] ring-1 ring-[var(--line)] ${className}`}
    />
  );
}

export function OdontoFyLogo({ size = 26, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <OdontoFyMark size={Math.round(size * 1.25)} />
      <span className="font-bold tracking-[-0.04em] text-ink" style={{ fontSize: size * 0.78 }}>
        Odonto<span className="text-accent">Fy</span>
      </span>
    </span>
  );
}
