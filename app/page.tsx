import Link from "next/link";
import {
  ArrowRight, CalendarDays, ClipboardList, FileSignature, MessageCircle, Stethoscope, Wallet, ArrowLeftRight, ShieldCheck, Sparkles, Check,
} from "lucide-react";
import { IncisivoLogo } from "@/components/logo";
import { linkContato, site } from "@/config/site";

const RECURSOS = [
  { Icone: CalendarDays, titulo: "Agenda por profissional", texto: "Dia e semana, encaixe, bloqueios e status com um toque. O próximo paciente aparece numa pílula no topo da tela." },
  { Icone: Stethoscope, titulo: "Prontuário completo", texto: "Anamnese, odontograma por face, evolução que não se apaga, arquivos e radiografias. Tudo por paciente, com trilha de acesso." },
  { Icone: FileSignature, titulo: "Orçamento vira contrato", texto: "Plano de tratamento com itens e desconto; o contrato sai do modelo e o paciente assina no próprio celular." },
  { Icone: Wallet, titulo: "Pagamentos e retornos", texto: "Parcelas, recebido e pendente por paciente. Quem passou de seis meses sem consulta aparece numa aba só." },
  { Icone: MessageCircle, titulo: "WhatsApp que atende", texto: "Uma IA responde dúvidas, oferece horário, confirma na véspera e só chama você quando precisa de gente." },
  { Icone: ArrowLeftRight, titulo: "Migração em um dia", texto: "Trazemos pacientes, consultas, evoluções, orçamentos, pagamentos e arquivos do seu sistema atual. Sem redigitar nada." },
];

const PASSOS = [
  { n: "01", titulo: "A gente importa o que você já tem", texto: "Cadastro, histórico e agenda do sistema antigo entram no Incisivo antes do primeiro dia de uso." },
  { n: "02", titulo: "Você abre e reconhece tudo", texto: "A tela segue a lógica que sua equipe já conhece: lista de pacientes, ficha com abas, agenda da semana." },
  { n: "03", titulo: "O WhatsApp começa a trabalhar", texto: "Confirmações, lembretes e primeiro atendimento passam a acontecer sozinhos, com você no controle." },
];

export default function Home() {
  return (
    <div className="min-h-dvh">
      <header className="glass sticky top-0 z-20 border-b border-[var(--glass-line)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          <Link href="/" aria-label="Incisivo, início"><IncisivoLogo /></Link>
          <nav className="flex items-center gap-2">
            <a href="#recursos" className="hidden text-[14px] text-ink-2 hover:text-ink sm:inline-flex sm:px-3">Recursos</a>
            <a href="#como-funciona" className="hidden text-[14px] text-ink-2 hover:text-ink sm:inline-flex sm:px-3">Como funciona</a>
            <a href={site.painel} className="btn btn-secondary press">Entrar no painel</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="enter">
            <p className="eyebrow">Gestão para consultórios odontológicos</p>
            <h1 className="display mt-4 max-w-2xl">O consultório inteiro numa tela.</h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-2">
              Agenda, prontuário, orçamentos e pagamentos no mesmo lugar, e um WhatsApp que marca e confirma consulta sozinho. Feito para o dentista que atende e administra ao mesmo tempo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={linkContato("Olá! Quero conhecer o Incisivo para o meu consultório.")} className="btn btn-primary btn-lg press">
                Pedir uma demonstração <ArrowRight className="size-4" />
              </a>
              <a href="#recursos" className="btn btn-secondary btn-lg press">Ver o que faz</a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-ink-3">
              <li className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-ok" /> Dados no Brasil, LGPD</li>
              <li className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-ok" /> Migração do sistema atual incluída</li>
              <li className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-ok" /> Funciona no celular</li>
            </ul>
          </div>

          <div className="mock enter" aria-hidden>
            <div className="mock-bar">
              <span className="mock-dot" /><span className="mock-dot" /><span className="mock-dot" />
              <span className="ml-3 text-[12px] font-medium text-ink-3">Hoje · quinta, 5 de março</span>
              <span className="mock-pill ml-auto"><Stethoscope className="size-3.5 text-[#7fb6d4]" /> Ana <b>em 12 min</b></span>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-[1fr_1.4fr]">
              <div className="grid gap-3">
                <div className="mock-card">
                  <p className="eyebrow">Novos na semana</p>
                  <p className="tnum mt-1.5 text-[26px] font-semibold tracking-tight">3 <span className="text-ink-3">/ 8</span></p>
                </div>
                <div className="mock-card">
                  <p className="eyebrow">Pede atenção</p>
                  <p className="mt-1.5 text-[13px] font-medium">Carlos pediu encaixe hoje</p>
                  <p className="text-[12px] text-ink-3">A IA segurou e chamou você</p>
                </div>
              </div>
              <div className="mock-card">
                <p className="eyebrow">Agenda de hoje</p>
                <div className="mt-2">
                  <div className="mock-row"><span className="marca marca--ok" /><span><b className="tnum">08:30</b> · Mariana · Limpeza</span><span className="text-ink-3">confirmada</span></div>
                  <div className="mock-row"><span className="marca" /><span><b className="tnum">09:30</b> · Ana · Avaliação</span><span className="text-ink-3">a IA marcou</span></div>
                  <div className="mock-row"><span className="marca marca--ok" /><span><b className="tnum">11:00</b> · Pedro · Canal</span><span className="text-ink-3">confirmada</span></div>
                  <div className="mock-row"><span className="marca" /><span><b className="tnum">14:00</b> · Júlia · Clareamento</span><span className="text-ink-3">lembrete enviado</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
          <p className="eyebrow">Recursos</p>
          <h2 className="title-1 mt-3 max-w-xl">Tudo o que o consultório usa no dia, sem cara de sistema antigo.</h2>
          <ul className="stagger mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {RECURSOS.map((r) => (
              <li key={r.titulo} className="rounded-[20px] bg-surface p-6 shadow-card">
                <r.Icone className="size-6 text-accent" strokeWidth={1.75} />
                <h3 className="title-3 mt-4">{r.titulo}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{r.texto}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="como-funciona" className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <p className="eyebrow">Como funciona</p>
            <h2 className="title-1 mt-3 max-w-xl">Trocar de sistema não precisa parar o consultório.</h2>
            <ol className="mt-8 grid gap-6 lg:grid-cols-3">
              {PASSOS.map((p) => (
                <li key={p.n} className="rounded-[20px] border border-line bg-surface-2 p-6">
                  <span className="tnum text-[13px] font-semibold text-accent">{p.n}</span>
                  <h3 className="title-3 mt-3">{p.titulo}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="eyebrow">Segurança</p>
              <h2 className="title-1 mt-3">Dado de saúde é sensível. A gente trata assim.</h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {[
                { Icone: ShieldCheck, t: "Acesso por consultório", d: "Cada clínica só vê o que é dela. Quem abriu cada prontuário fica registrado." },
                { Icone: ClipboardList, t: "Evolução que não se apaga", d: "Registro clínico só acrescenta. Correção vira nova entrada, com data e autor." },
                { Icone: Sparkles, t: "IA com limite", d: "O WhatsApp responde o que você autorizou e escala para você no resto. Nada de conversa de paciente em ferramenta de terceiro." },
                { Icone: MessageCircle, t: "Canal do paciente", d: "Confirmação, lembrete e retorno pelo WhatsApp que o paciente já usa. Sem aplicativo para instalar." },
              ].map((i) => (
                <li key={i.t} className="flex gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft text-accent"><i.Icone className="size-5" strokeWidth={1.75} /></span>
                  <div>
                    <h3 className="text-[15px] font-semibold">{i.t}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-2">{i.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
          <div className="rounded-[24px] bg-ink px-6 py-12 text-center text-bg sm:px-12">
            <h2 className="title-1 mx-auto max-w-xl">Quer ver o Incisivo com os dados do seu consultório?</h2>
            <p className="mx-auto mt-3 max-w-lg text-[16px] leading-relaxed opacity-75">A demonstração usa a sua agenda e os seus pacientes de verdade, importados antes da conversa.</p>
            <a href={linkContato("Olá! Quero uma demonstração do Incisivo com os dados do meu consultório.")} className="btn btn-lg press mt-7 inline-flex bg-bg text-ink hover:opacity-90">
              Pedir uma demonstração <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-[13px] text-ink-3 sm:px-8">
          <span className="inline-flex items-center gap-2"><IncisivoLogo size={18} /> <span>© {new Date().getFullYear()}</span></span>
          <span>Feito no Brasil · dados no Brasil</span>
        </div>
      </footer>
    </div>
  );
}
