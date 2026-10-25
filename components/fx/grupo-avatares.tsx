// Do Brio (barbearia Figars), via o painel OdontoFy: rostos sobrepostos que se afastam sob o mouse.

export function Avatar({ nome, cor, tamanho = 32 }: { nome: string; cor?: string | null; tamanho?: number }) {
  const partes = nome.trim().split(/\s+/);
  const iniciais = ((partes[0]?.[0] ?? "") + (partes.length > 1 ? partes[partes.length - 1][0] : "")).toUpperCase();
  return (
    <span className="avatar tnum" style={{ width: tamanho, height: tamanho, fontSize: Math.round(tamanho * 0.38), ...(cor ? { background: cor, color: "#fff" } : {}) }} aria-hidden>
      {iniciais}
    </span>
  );
}

export function GrupoAvatares({ pessoas, tamanho = 28, maximo = 4, className = "" }: { pessoas: { nome: string; cor?: string | null }[]; tamanho?: number; maximo?: number; className?: string }) {
  const vistos = pessoas.slice(0, maximo);
  const resto = pessoas.length - vistos.length;
  return (
    <span className={`avg ${className}`} style={{ "--avg-s": `${tamanho}px` } as React.CSSProperties} aria-label={pessoas.map((p) => p.nome).join(", ")} role="img">
      {vistos.map((p, i) => (
        <span key={`${p.nome}-${i}`} className="avg-item" style={{ zIndex: vistos.length - i }}>
          <Avatar nome={p.nome} cor={p.cor} tamanho={tamanho} />
        </span>
      ))}
      {resto > 0 && (
        <span className="avg-item avg-more tnum" style={{ width: tamanho, height: tamanho, fontSize: Math.round(tamanho * 0.34) }}>
          +{resto}
        </span>
      )}
    </span>
  );
}
