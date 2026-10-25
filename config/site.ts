/* Dados do produto. Preencha o WhatsApp comercial quando existir: sem ele, o botão de contato usa o e-mail. */
export const site = {
  nome: "OdontoFy",
  assinatura: "O consultório inteiro numa tela.",
  descricao: "Gestão para consultórios odontológicos: agenda, prontuário, orçamentos, pagamentos e um WhatsApp que marca e confirma sozinho.",
  url: "https://odontofy.vercel.app",
  painel: "https://dr-mateus-peixoto.vercel.app/entrar",
  whatsapp: "", // só dígitos com DDI, ex.: 5513999999999
  email: "gabrieltomaz442@gmail.com",
};

export function linkContato(texto?: string) {
  if (site.whatsapp) return `https://wa.me/${site.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ""}`;
  return `mailto:${site.email}?subject=${encodeURIComponent("Quero conhecer o OdontoFy")}${texto ? `&body=${encodeURIComponent(texto)}` : ""}`;
}
