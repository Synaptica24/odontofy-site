"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, MessageCircle, RotateCcw, Stethoscope } from "lucide-react";
import { NumeroRolante } from "@/components/fx/numero-rolante";
import { PilhaAtencao, type ItemAtencao } from "@/components/fx/pilha-atencao";
import { GrupoAvatares } from "@/components/fx/grupo-avatares";

/* Mock do painel na hero: dados fictícios (nomes de exemplo), só para mostrar o jeito da tela.
   Os números rolam de tempos em tempos como se a IA estivesse marcando e o dia andando. */

const AGENDA = [
  { h: "08:30", nome: "Mariana Souza", tipo: "Limpeza", estado: "confirmada", ok: true },
  { h: "09:30", nome: "Ana Lima", tipo: "Avaliação", estado: "a IA marcou", ok: false },
  { h: "11:00", nome: "Pedro Alves", tipo: "Canal", estado: "confirmada", ok: true },
  { h: "14:00", nome: "Júlia Castro", tipo: "Clareamento", estado: "lembrete enviado", ok: false },
];

const ATENCAO: ItemAtencao[] = [
  { chave: "esc", Icone: MessageCircle, tom: "alerta", titulo: "Carlos pediu encaixe hoje", texto: "A IA segurou e chamou você · há 4 min" },
  { chave: "conf", Icone: CalendarCheck, tom: "aviso", titulo: "2 consultas a confirmar", texto: "Lembrete enviado; falta a resposta" },
  { chave: "ret", Icone: RotateCcw, tom: "ia", titulo: "3 retornos para chamar", texto: "Previstos nos próximos 14 dias" },
];

// cenas que o mock percorre: novos na semana, previsto do dia, minutos até a próxima
const CENAS = [
  { novos: 3, previsto: "R$ 1.840", min: 12 },
  { novos: 4, previsto: "R$ 2.190", min: 11 },
  { novos: 4, previsto: "R$ 2.190", min: 10 },
  { novos: 5, previsto: "R$ 2.540", min: 9 },
];

export function HeroMock() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((x) => (x + 1) % CENAS.length), 2600);
    return () => window.clearInterval(id);
  }, []);
  const c = CENAS[i];

  return (
    <div className="mock enter" aria-hidden>
      <div className="mock-bar">
        <span className="mock-dot" /><span className="mock-dot" /><span className="mock-dot" />
        <span className="ml-3 text-[12px] font-medium text-ink-3">Hoje · quinta, 5 de março</span>
        <span className="mock-pill ml-auto"><Stethoscope className="size-3.5 text-[#7fb6d4]" /> Ana <b>em <NumeroRolante valor={String(c.min)} /> min</b></span>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-[1fr_1.4fr]">
        <div className="grid gap-3">
          <div className="mock-card">
            <p className="eyebrow">Novos na semana</p>
            <p className="tnum mt-1.5 text-[26px] font-semibold tracking-tight"><NumeroRolante valor={String(c.novos)} /> <span className="text-ink-3">/ 8</span></p>
          </div>
          <div className="mock-card">
            <p className="eyebrow">Previsto hoje</p>
            <p className="tnum mt-1.5 text-[22px] font-semibold tracking-tight"><NumeroRolante valor={c.previsto} /></p>
          </div>
          <div className="mock-card">
            <p className="eyebrow mb-2.5">Pede atenção · {ATENCAO.length}</p>
            <PilhaAtencao itens={ATENCAO} />
          </div>
        </div>
        <div className="mock-card">
          <div className="group flex items-center justify-between gap-2">
            <p className="eyebrow">Agenda de hoje</p>
            <GrupoAvatares tamanho={22} pessoas={AGENDA.map((a) => ({ nome: a.nome }))} />
          </div>
          <div className="mt-2">
            {AGENDA.map((a) => (
              <div key={a.h} className="mock-row">
                <span className={`marca ${a.ok ? "marca--ok" : ""}`} />
                <span><b className="tnum">{a.h}</b> · {a.nome.split(" ")[0]} · {a.tipo}</span>
                <span className="text-ink-3">{a.estado}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
