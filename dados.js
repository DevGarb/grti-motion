/*
  DADOS DA APRESENTAÇÃO
  ---------------------------------------------------------------
  Edite só este arquivo para mudar conteúdo. O index.html monta os
  slides sozinho a partir daqui.

  Ordem dos slides:
    capa > visão geral > setores e sistemas > 1 slide por sistema
    > próximo passo (Zymplo) > encerramento

  - sistemas: cadastro único de cada sistema. A ordem aqui é a ordem
      dos slides individuais.
      nome, cor, desc (frase curta)
      pontos (opcional): lista de tópicos "Na prática" no slide do sistema.
      exceto (opcional): setores que NÃO usam um sistema de uso geral
        (aparece como "Exceto ..." no slide do sistema).
      fluxo (opcional): { titulo, etapas: [...], destinos: [...] } desenha um
        mini funil animado embaixo da descrição.
      destaque (opcional): { titulo, itens: [...] } mostra itens em destaque
        (ex.: telefones) embaixo da descrição.
      motion (opcional): { rotulo, arquivo } mostra um botão que abre esse
        motion em tela cheia por cima da apresentação (Esc volta).
      sigla (opcional): força as letras do ícone.
  - setores: aparecem na página "Setores e seus sistemas".
      O primeiro (todos: true) vira a faixa "usado por todos".
      mapa (opcional): nome no círculo da tela "Visão geral".
*/
window.APRESENTACAO = {
  empresa: "Grupo Ramos",
  equipe: "Setor de T.I",
  titulo: ["Sistemas", "por setor"],
  subtitulo: "Quais ferramentas cada área da empresa usa — e para que cada uma serve.",

  /* Tela "Visão geral": empresas do grupo e setores atendidos pela T.I */
  ecossistema: {
    empresas: ["CearaGPS e filiais", "GRX", "Resolve"],
    setores: ["Comercial", "Administrativo Resolve", "Marketing", "Recepção", "Financeiro",
              "Recebíveis", "Central de Atendimento", "RH", "Área Técnica"]
  },

  sistemas: {
    "service-erp":     { nome: "Service ERP",      cor: "#8b9dff", desc: "Gestão operacional e administrativa.", pontos: [
      "Cadastro de clientes.",
      "Gestão das OS: abertura e fechamento.",
      "Movimentação e histórico financeiro dos clientes.",
      "Registro da venda e assinatura do aceite do cliente.",
      "Abertura de SACs para demandas e registros internos."
    ] },
    "grti":            { nome: "GRTI",             cor: "#60a5fa", desc: "Central de chamados da T.I: por ticket ou chat direto com um técnico.",
      motion: { rotulo: "Ver o Chat com a T.I", arquivo: "motion-chat/index.html" },
      pontos: [
      "Chamados por ticket para qualquer problema: sistemas, computador ou até a solicitação de uma pilha.",
      "Chat com a T.I: você entra na fila e um técnico assume a conversa em tempo real.",
      "No chat, dá para enviar prints e áudios explicando o problema.",
      "Solicitar ou agendar: pedidos de equipamentos e apoio para eventos.",
      "Acompanhe o status do chamado e avalie o atendimento no final."
    ] },
    "google-workspace":{ nome: "Google Workspace", cor: "#34d399", desc: "E-mail corporativo, Drive e agenda compartilhada.", pontos: [
      "E-mail corporativo de todas as empresas: @cearagps.com.br, @ramosgrupo.com.br e @resolve.org.br.",
      "Drive para guardar e compartilhar arquivos.",
      "Agenda compartilhada entre as equipes.",
      "Agenda das salas de treinamentos e feedbacks."
    ] },
    "kommo":           { nome: "Kommo CRM",        cor: "#f472b6", desc: "Gestão de leads, funil de vendas e conversas com clientes.",
      exceto: ["Área Técnica"],
      fluxo: { titulo: "Exemplo · funil de Recebíveis", etapas: ["Entrada", "Distribuição"], destinos: ["Cobrança", "Negativados", "Negociação"] },
      pontos: [
      "Cada setor tem seu próprio funil, organizado em colunas (pipelines).",
      "Os leads chegam na Entrada e, na Distribuição, seguem para a área certa do setor.",
      "Conversas registradas e acompanhadas: cada setor tem seu número de WhatsApp vinculado ao Kommo.",
      "Envio de templates da Meta nas conversas.",
      "Minicurso mensal do Kommo para todos se aprimorarem na ferramenta."
    ] },
    "meta-whatsapp":   { nome: "Meta WhatsApp",    cor: "#4ade80", desc: "Templates aprovados pela Meta para falar com clientes pelo WhatsApp oficial, direto do Kommo.",
      fluxo: { titulo: "Ciclo do template", etapas: ["Criação", "Aprovação da Meta", "Envio pelo Kommo"] },
      pontos: [
      "Template é uma mensagem pronta, aprovada pela Meta antes de ser usada.",
      "É o único jeito de iniciar uma conversa ou retomar contato depois de 24h sem resposta do cliente.",
      "Categorias: Marketing, Utilidade e Autenticação, cada uma com regras e custo próprios.",
      "No Kommo, o template é escolhido direto no chat do lead, pelo número de WhatsApp do setor.",
      "Os envios pela API são cobrados pela Meta (regras revistas em outubro/2026): use templates com critério."
    ] },
    "protrack":        { nome: "Protrack",         cor: "#2dd4bf", desc: "Rastreamento dos veículos dos clientes em tempo real.", pontos: [
      "Acompanhamento do rastreador de cada cliente.",
      "Envio de ações para o rastreador.",
      "Monitoramento em tempo real durante uma ocorrência.",
      "Dados do cliente e do rastreador no mesmo lugar."
    ] },
    "ileva":           { nome: "Ileva",            cor: "#fbbf24", desc: "ERP de controle da Resolve: associados, planos, sinistros e financeiro.", pontos: [
      "Cadastro dos associados.",
      "Orçamentos do plano da associação.",
      "Vistoria veicular do associado.",
      "Registro de sinistros e acompanhamento dos eventos.",
      "Financeiro: movimentação da empresa e dos clientes."
    ] },
    "goto":            { nome: "GoTo",             cor: "#fb923c", desc: "Plataforma do nosso PABX: recebe as ligações e distribui para os atendentes.",
      fluxo: { titulo: "Caminho de uma ligação", etapas: ["Ligação", "Menu", "Fila", "Atendente"] },
      destaque: { titulo: "Central de atendimento 24h", itens: ["0800 606 8153", "(85) 3484-6006"] },
      pontos: [
      "O 0800 e o número fixo caem na GoTo e são distribuídos aos atendentes por filas de chamadas.",
      "Ao ligar, o cliente escolhe no menu a área com que deseja falar.",
      "Durante a ligação, dá para transferir para outros setores pelos ramais."
    ] },
    "service-mobile":  { nome: "Service Mobile",   cor: "#a3e635", desc: "Gestão de OS: técnicos recebem, executam e fecham as ordens de serviço.", pontos: [] },
    "painel-recepcao": { nome: "Painel Recepção",  cor: "#22d3ee", desc: "Painel de comunicação entre recepção, cliente e área técnica.",
      fluxo: { titulo: "Jornada do cliente", etapas: ["Senha", "Chamada na TV", "Área Técnica"], destinos: ["Vistoria", "Manutenção", "Instalação", "Retirada"] },
      pontos: [
      "Ao chegar, o cliente retira a senha e os dados dele aparecem automaticamente na tela da atendente.",
      "A atendente chama o cliente pelo painel da TV da recepção e avança as etapas do atendimento.",
      "A área técnica usa o mesmo painel e é sinalizada para vistoria, manutenção, instalação ou retirada.",
      "O cliente recebe atualizações do processo pelo WhatsApp da recepção.",
      "No painel, ele acompanha a jornada e o tempo de espera de cada etapa."
    ] },
    "zymplo":          { nome: "Zymplo",           cor: "#c084fc", desc: "Futuro ERP da empresa, em fase final de desenvolvimento. Vai unificar as ferramentas e substituir Service ERP, Service Mobile, Kommo CRM e Ileva." }
  },

  setores: [
    { id: "geral",     nome: "Uso Geral",    mapa: "Grupo Ramos", todos: true, cor: "#8b9dff",
      sistemas: ["service-erp", "grti", "google-workspace", "kommo", "meta-whatsapp", "zymplo"] },
    { id: "central",   nome: "Central",      cor: "#2dd4bf", sistemas: ["protrack", "goto"] },
    { id: "resolve",   nome: "Resolve",      cor: "#fbbf24", sistemas: ["ileva", "goto"] },
    { id: "comercial", nome: "Comercial",    cor: "#f472b6", sistemas: ["kommo", "goto", "ileva"] },
    { id: "tecnica",   nome: "Área Técnica", cor: "#a3e635", sistemas: ["service-mobile", "painel-recepcao"] },
    { id: "recepcao",  nome: "Recepção",     cor: "#38bdf8", sistemas: ["painel-recepcao", "ileva"] }
  ],

  /* Slide "próximo passo": sistema que vai substituir os listados em "substitui". */
  futuro: {
    sistema: "zymplo",
    cor: "#c084fc",
    selo: "EM DESENVOLVIMENTO",
    titulo: ["Um ERP", "para tudo"],
    texto: "Em fase final de desenvolvimento, o Zymplo será o futuro ERP da empresa: vai unir em um só lugar o que hoje está espalhado entre Service ERP, Service Mobile, Kommo e Ileva.",
    substitui: ["service-erp", "service-mobile", "kommo", "ileva"]
  },

  encerramento: {
    titulo: ["Ficou alguma", "dúvida?"],
    pergunta: "Teve algum problema? Você já sabe a quem pedir.",
    cta: "Abra um chamado no GRTI",
    sub: "Por ticket ou chat direto com a T.I — acompanhamos do início ao fim.",
    sistema: "grti"
  }
};
