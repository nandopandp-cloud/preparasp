/* PreparaSP · Relatório de pesquisa de campo
   ---------------------------------------------------------------------------
   Todo o conteúdo abaixo é derivado das conversas com os estudantes
   realizadas nas escolas (2º e 3º ano do Ensino Médio).
   Cada conversa foi documentada para análise, e as falas foram editadas
   para clareza, preservando o sentido.
   Os percentuais dos "temas" indicam a recorrência com que o assunto
   apareceu nas conversas (leitura qualitativa, não estatística).
   Edite o objeto DATA para atualizar o relatório.
   --------------------------------------------------------------------------- */
(function () {
  'use strict';

  const DATA = {
    /* ---- grandes temas: pct = recorrência com que o tema apareceu nas conversas ---- */
    themes: [
      { icon: '🗓️', title: 'Cronograma e organização do estudo', desc: 'O “por onde começar” é o nó central: muito conteúdo, pouca direção. Apareceu em todas as conversas com os estudantes. Os estudantes entendem que a visão semanal é basta poluída e causa ansiedade. Após visualizarem a opção do cronograma por dia, a aceitação foi unânime. Presente em todas as conversas.', pct: 100, tone: '' },
      { icon: '♿', title: 'Personalização e acessibilidade', desc: 'Recursos para necessidades específicas (ex.: TDAH). É visto como uma grande benefício e recurso essencial para evolução de aprendizagem dos estudantes. Presente em todas as conversas.', pct: 100, tone: '' },
      { icon: '📚', title: 'Conteúdo: vídeos, resumos e biblioteca', desc: 'Vídeos existem, mas o consumo é baixo e a biblioteca é quase ignorada. Pedem resumos nessa área assim como outros tipos de vídeos (mais curtas, estilo pílula de conhecimento). Presente em todas as conversas.', pct: 100, tone: '' },
      { icon: '🎮', title: 'Gamificação e recompensas', desc: 'A ofensiva, a Liga e os avatares já engajam de forma razoável; Porém, o desejo é por uma gamificação com mais coleções e prêmios. Recorrente na maioria das conversas.', pct: 75, tone: 'mint' },
      { icon: '📱', title: 'Acesso, dispositivos e ambiente', desc: 'Uso preso ao computador da escola; pouco ou nenhum uso em casa e no fim de semana. Recorrente na maioria das conversas.', pct: 75, tone: 'warm' },
      { icon: '📝', title: 'Simulados', desc: 'ENEM, Provão Paulista e SARESP: fáceis de localizar e bem reconhecidos. Citados na maioria das conversas.', pct: 75, tone: 'mint' },
      { icon: '🧭', title: 'Navegação e primeira impressão', desc: '“Estudar” é o clique natural, mas “tudo muito misturado”: pedem um onboarding para identificar todas as funcioanlidades da plataforma. Recorrente na maioria das conversas.', pct: 75, tone: '' },
      { icon: '✍️', title: 'Redação Paulista', desc: 'Tema dominante entre os estudantes do 3º ano: medo de perder o texto, envio engessado e temas difíceis. Apareceu em boa parte das conversas.', pct: 50, tone: 'warm' },
      { icon: '🎓', title: 'Futuro e escolha profissional', desc: 'Estudantes decidindo o vestibular pedem orientação, com interesse claro por um teste vocacional. Apareceu em parte das conversas.', pct: 25, tone: 'mint' },
    ],

    /* ---- dores ---- */
    pains: [
      {
        icon: '💾', tag: 'Redação · confiabilidade',
        title: 'Perder a redação inteira',
        text: 'Sem salvamento automático confiável, basta sair sem querer do computador para perder todo o texto. Estudantes relatam que isso acontece com colegas de várias salas na plataforma "Redação Paulista", e essa é uma das frustrações mais fortes sobre o tema.',
        // metric: { v: '“perde tudo”', k: 'fala recorrente entre as turmas' },
      },
      {
        icon: '🖥️', tag: 'Acesso · dispositivos',
        title: 'Preso ao computador da escola',
        text: 'O uso fica concentrado no laboratório da escola. Reportaram dificuldades ao tentar acessar a plataforma pelo computador pessoal. “O computador não dá pra baixar e não tem como usar no sábado.” No celular, a adesão é pouca e sugeriram que o uso “seria bem maior” se tivesse um app com notificações.',
        // metric: { v: 'recorrente', k: 'barreira de acesso citada na maioria das conversas' },
      },
      {
        icon: '🌀', tag: 'Cronograma · sobrecarga',
        title: '“Não sei por onde começar”',
        text: 'O volume de atividades gera paralisia. “Me sinto confuso porque tem muita coisa”, relato ainda mais sensível para quem tem TDAH e precisa de um ponto de partida claro.',
        // metric: { v: 'muita coisa', k: 'excesso de conteúdo sem direção' },
      },
      {
        icon: '🧮', tag: 'Navegação · clareza',
        title: '“Tem muita coisa mas não sei por onde começar”',
        text: 'A plataforma é vista com bastante funcionalidade mas sem um direcionamento claro de onde iniciar e o que é preciso fazer.Sugeriram ter uma espécie de onboarding para explicar onde o estudante precisa iniciar a sua jornada no PreparaSP.',
        // metric: { v: 'simplificar', k: 'clareza + identidade visual' },
      },
      {
        icon: '🐞', tag: 'Confiança · bugs',
        title: 'Pequenas falhas que minam a confiança',
        text: '“Um botão flutuante cobre o “concluído”; Algumas questões de matemática aparecem como imagens ilegíveis (“não dá pra ler”). São sinalizações que podem afetar a adesão a plataforma.',
        // metric: { v: 'não abre', k: 'recursos que falham' },
      },
      {
        icon: '🗄️', tag: 'Descoberta · valor',
        title: 'Recursos valiosos que ninguém encontra',
        text: 'A biblioteca quase não é acessada (“ninguém da minha tumra acessou essa área.”). Isso foi sinalizado pela falta de tempo ao utilizar a plataforma em sala de aula. Como acesso fora da escola é baixo, colabora para o esquecimento da funcionalidade.',
        // metric: { v: '≈ 0', k: 'acessos à biblioteca relatados' },
      },
    ],

    /* ---- oportunidades ---- */
    opps: [
      {
        icon: '💡', tag: 'Redação assistida',
        title: 'Salvar redação de forma automática',
        text: 'Salvamento automático elimina a maior dor atual da plataforma de redação mais utilizada pelos estudantes (Redação Paulista), além de garantir que o envio do conteúdo não apresente falha, como a ferramenta atual. Como feature adicional, sugeriram que o PreparaSP tivesse a possibilidade de enviar a redação através de uma foto alegando que isso destravaria o uso restrito da plataforma apenas dentro do do laboratório da escola.',
        // metric: { v: 'autosave', k: 'pedido nº 1 da redação' },
      },
      {
        icon: '🎯', tag: 'Onboarding guiado',
        title: 'Um “comece por aqui” para cada estudante',
        text: 'Trilhas guiadas e um primeiro passo claro resolvem a paralisia do excesso. Personalizar por objetivo e por necessidade (inclusive acessibilidade) transforma a primeira experiência e simplifica o que hoje parece “misturado”.',
        // metric: { v: '1º passo', k: 'direção em vez de catálogo' },
      },
      {
        icon: '🏆', tag: 'Gamificação',
        title: 'Da ofensiva à Liga, com progresso à vista',
        text: 'A ofensiva já cria hábito (alguns passam de 40 dias) e a Liga e os avatares animam a turma. Falta tornar o progresso visível (“só faço e não vejo o resultado”) e amarrar pontos, coleções, recompensas e até disputas entre amigos. Como resumiu um estudante: “preciso ser compensado pra querer estudar”.',
        // metric: { v: '47 dias', k: 'maior ofensiva relatada em campo' },
      },
      {
        icon: '🤖', tag: 'IA · assistente',
        title: 'Potencializar o assistente de IA',
        text: 'Por mais que o assistente AI do PreparaSP seja contextual e ajude no dia a dia, foi sugerido um link direto para os cursos, vídeos e conteúdos direcionado pelo assistente, caso o estudante pergunte por um tema específico. "Quero saber mais sobre oração subordinada". À partir desse momento, o Assistente já deixa um link direto desse tópico para que o estudante possa explorar o tema.',
        // metric: { v: 'IA nativa', k: 'tutor dentro da jornada' },
      },
      {
        icon: '🧩', tag: 'Personalização',
        title: 'Deixe o estudante editar a trilha',
        text: 'Reordenar o cronograma de acordo com o desejo do estudante (“deixa eu jogar isso pra frente”). Marcar o que foi feito e receber um lembrete no celular dá autonomia e ajuda o estudante a lembrar da atividade.',
        // metric: { v: 'editar', k: 'controle sobre o próprio plano' },
      },
      {
        icon: '🎓', tag: 'Futuro · carreira',
        title: 'Teste vocacional',
        text: 'Estudantes do 2º e 3º ano estão decidindo o vestibular e pedem orientação: “se tivesse um teste vocacional na plataforma...”. Uma trilha de descoberta de carreira conecta o estudo a um propósito concreto.',
        // metric: { v: 'vocação', k: 'ajudar a escolher o caminho' },
      },
      {
        icon: '⚡', tag: 'Biblioteca · formatos',
        title: 'Biblioteca viva: resumos, flashcards e mapas mentais',
        text: 'Hoje a biblioteca é só vídeo, e quase ninguém entra. Pedem resumos rápidos, flashcards, mapas mentais editáveis e vídeos mais ilustrados (“com desenhos, stickers”). Dar visibilidade e variar formatos atende diferentes formas de estudar.',
        // metric: { v: '+formatos', k: 'além do vídeo padrão' },
      },
      {
        icon: '🌎', tag: 'Inclusão · equidade',
        title: 'Acolher estudantes imigrantes',
        text: 'Em campo, educadores apontaram turmas com muitos imigrantes (Venezuela, Haiti, países de língua francesa) diante de uma plataforma só em português. Suporte a múltiplos idiomas é uma oportunidade real de equidade na rede estadual.',
        // metric: { v: 'multi-idioma', k: 'ninguém fica para trás' },
      },
    ],

    /* ---- vozes (falas representativas, editadas para clareza) ---- */
    quotes: [
      { text: 'Quando a gente sai sem querer do computador, não salva, e você perde tudo da redação. Se salvasse sozinho, ajudaria muito.', who: 'Estudante · 3º ano', meta: 'Sobre a Redação Paulista', hl: true },
      { text: 'Eu me sinto confuso porque tem muita coisa. Eu tenho TDAH, eu não sei onde vou estudar.', who: 'Estudante · 3º ano', meta: 'Sobre o cronograma', hl: false },
      { text: 'Achei tudo muito misturado, difícil de identificar. Eu deixaria o mais simples possível.', who: 'Estudante · 3º ano', meta: 'Sobre a interface', hl: false },
      // { text: 'A plataforma é muito branca. As redes que a gente usa são muito mais coloridas, mais alegres.', who: 'Estudante · 3º ano', meta: 'Sobre identidade visual', hl: false },
      { text: 'Quando clica em “ver histórico”, não aparece nada. Nem abre.', who: 'Estudante · 2º ano', meta: 'Sobre confiabilidade', hl: false },
      // { text: 'O computador não dá pra baixar, e não tem como usar no sábado.', who: 'Estudante · 2º ano', meta: 'Sobre acesso e dispositivos', hl: false },
      { text: 'Eu preciso ser compensado pra querer estudar. Estudar, pra mim, não é algo interessante por si só.', who: 'Estudante · 3º ano', meta: 'Sobre motivação', hl: true },
      { text: 'A gente tem muito aluno imigrante, da Venezuela, de países de língua francesa, e a plataforma só tem português.', who: 'Educador(a) · em campo', meta: 'Sobre inclusão e equidade', hl: false },
      // { text: 'A galera já tem 47 dias de ofensiva.', who: 'Conversa com estudantes', meta: 'Sobre engajamento e hábito', hl: true },
    ],

    /* ---- recomendações ---- */
    recs: [
      { pr: '01', prio: 'high', title: 'Redação à prova de falhas', text: 'Salvamento automático contínuo, recuperação de rascunho, resiliência à queda de conexão e envio por foto/celular. Maior ganho de confiança com o menor esforço.' },
      { pr: '02', prio: 'high', title: 'Reforçar a comunicação sobre o uso do PreparaSP fora da escola', text: 'A pesquisa indica uma oportunidade de comunicar com maior destaque que a plataforma também pode ser acessada pelo celular fora do ambiente escolar, ampliando a percepção de disponibilidade e incentivando o uso em casa e nos finais de semana.”.' },
      { pr: '03', prio: 'high', title: '“Comece por aqui”: onboarding guiado', text: 'Um primeiro passo claro e trilhas por objetivo, com suporte a necessidades específicas (acessibilidade, TDAH), para vencer a paralisia do excesso.' },
      { pr: '04', prio: 'high', title: 'Interface mais simples e mais viva', text: 'Reduzir densidade, priorizar a visão do dia, separar tarefa do professor da recomendação do algoritmo e dar mais cor e energia à identidade visual.' },
      // { pr: '05', prio: 'mid', title: 'Reconquistar a confiança', text: 'Corrigir bugs visíveis (ver histórico, botão coberto no tablet, questões de matemática ilegível).' },
      { pr: '05', prio: 'mid', title: 'Gamificação de ponta a ponta', text: 'Conectar ofensiva, Liga, avatares, pontos e recompensas da escola, com o progresso sempre visível e disputas entre os estudantes.' },
      { pr: '06', prio: 'mid', title: 'Cronograma editável, com lembretes', text: 'Permitir reordenar, marcar concluído e receber lembrete no celular, devolvendo autonomia ao estudante.' },
      // { pr: '08', prio: 'mid', title: 'Assistente de estudos com IA', text: 'Tornar a IA da plataforma contextual e visível, tirando dúvidas e levando o estudante direto ao conteúdo certo.' },
      { pr: '07', prio: 'mid', title: 'Biblioteca viva + acessibilidade visível', text: 'Dar destaque a recursos que já existem e ampliar formatos: resumos, flashcards, mapas mentais e vídeos ilustrados.' },
      { pr: '08', prio: 'mid', title: 'Inclusão, equidade e futuro', text: 'Suporte a múltiplos idiomas para estudantes imigrantes e um teste vocacional que conecte o estudo a um propósito.' },
    ],
  };

  /* ---------- renderers ---------- */
  function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }

  function renderThemes() {
    const root = document.getElementById('themesRows'); if (!root) return;
    DATA.themes.forEach((t, i) => {
      const toneClass = t.tone ? ' ' + t.tone : '';
      const node = el(`
        <div class="theme" data-reveal data-reveal-delay="${(i % 5) + 1}">
          <div class="ti">${t.icon}</div>
          <div class="tc"><h4>${t.title}</h4><p>${t.desc}</p></div>
          <div class="tbar">
            <div class="barwrap${toneClass}"><div class="bar" data-pct="${t.pct}"></div></div>
            <div class="pct" data-pct="${t.pct}">0%</div>
          </div>
        </div>`);
      root.appendChild(node);
    });
  }

  function renderCards(list, rootId, variant) {
    const root = document.getElementById(rootId); if (!root) return;
    list.forEach((c, i) => {
      const metric = c.metric ? `<div class="metric"><span class="v">${c.metric.v}</span><span class="k">${c.metric.k}</span></div>` : '';
      const node = el(`
        <article class="card ${variant}" data-reveal data-reveal-delay="${(i % 3) + 1}">
          <div class="ic">${c.icon}</div>
          <div class="tag">${c.tag}</div>
          <h3>${c.title}</h3>
          <p>${c.text}</p>
          ${metric}
        </article>`);
      root.appendChild(node);
    });
  }

  function renderQuotes() {
    const root = document.getElementById('quoteRail'); if (!root) return;
    DATA.quotes.forEach((q, i) => {
      const initials = (q.who || '•').replace(/[·].*/, '').trim().split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase() || '•';
      const node = el(`
        <figure class="qcard" data-reveal data-reveal-delay="${(i % 2) + 1}" tabindex="0">
          <div class="mark">&ldquo;</div>
          <blockquote>${q.text}</blockquote>
          <figcaption class="who">
            <span class="av">${initials}</span>
            <span class="meta"><b>${q.who}</b><span>${q.meta}</span></span>
          </figcaption>
        </figure>`);
      root.appendChild(node);
    });
  }

  function renderRecs() {
    const root = document.getElementById('recGrid'); if (!root) return;
    DATA.recs.forEach((r, i) => {
      const node = el(`
        <article class="rec p-${r.prio}" data-reveal data-reveal-delay="${(i % 2) + 1}">
          <div class="pr">${r.pr}</div>
          <div><h4>${r.title}</h4><p>${r.text}</p></div>
        </article>`);
      root.appendChild(node);
    });
  }

  renderThemes();
  renderCards(DATA.pains, 'painsGrid', 'card--pain');
  renderCards(DATA.opps, 'oppsGrid', 'card--opp');
  renderQuotes();
  renderRecs();
  // content.js runs before main.js, so the observers in main.js will pick up
  // these freshly injected [data-reveal] / [data-count] / .bar nodes.

  /* =========================================================================
     DOCUMENTO PDF — layout próprio, pensado para leitura impressa.
     Construído sob demanda (antes de imprimir) a partir do mesmo DATA,
     para não duplicar conteúdo e manter a identidade do PreparaSP.
     ========================================================================= */
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const num = (n) => Number(n).toLocaleString('pt-BR');

  // copy estática do relatório (espelha as seções da landing, em linguagem de PDF)
  const PDF_STATIC = {
    panorama: 'Fomos até as escolas para compreender as principais dores, frustrações, necessidades e expectativas dos estudantes que utilizam o PreparaSP e outras plataformas digitais como apoio na preparação para o vestibular e o ENEM. Este relatório reúne os principais insights coletados durante a pesquisa de campo.',
    method: [
      { n: '01', t: 'Visita às escolas', d: 'Cinco unidades da rede estadual, com turmas de 2º e 3º ano do Ensino Médio.' },
      { n: '02', t: 'Conversas com os estudantes', d: 'Conversas abertas, em grupo, sobre a rotina de estudo e o uso da plataforma.' },
      { n: '03', t: 'Documentação das conversas', d: 'Cada conversa foi documentada integralmente para análise, preservando a fala de cada estudante.' },
      { n: '04', t: 'Análise temática', d: 'Organização e codificação dos trechos em insights, dores e oportunidades acionáveis.' },
    ],
    schools: [
      { n: 'E.E. Professor Fidelino de Figueiredo', m: 'URE Centro' },
      { n: 'E.E. Brasílio Machado', m: 'URE Centro-Sul' },
      { n: 'E.E. João Ramalho', m: 'São Bernardo do Campo' },
      { n: 'E.E. Santa Dalmolin', m: 'São Bernardo do Campo' },
      { n: 'E.E. Professora Heloisa de Assumpção', m: 'Osasco' },
    ],
    educators: [
      { ure: 'URE Guarulhos Norte', t: 'A leitura dos educadores reforça que a plataforma é mais potente quando conectada à rotina pedagógica da escola, e não usada de forma isolada pelo estudante.' },
      { ure: 'URE Leste 3', t: 'A equipe destaca o valor do PreparaSP como apoio à preparação para o vestibular e o ENEM, e aponta a clareza de orientação ao estudante como ponto a fortalecer.' },
      { ure: 'URE Santo André', t: 'Os educadores observam que o acompanhamento próximo da turma faz diferença direta no engajamento e na constância de uso da plataforma.' },
    ],
  };

  function pdfPage(inner, opts) {
    opts = opts || {};
    const cls = 'pdfpage' + (opts.ink ? ' pdfpage--ink' : '') + (opts.cover ? ' pdfpage--cover' : '') + (opts.cls ? ' ' + opts.cls : '');
    if (opts.cover) {
      // capa não usa o esqueleto body/rodapé
      return `<section class="${cls}">${inner}</section>`;
    }
    const foot = `<div class="pdf-foot"><span>PreparaSP · Relatório de pesquisa de campo</span><span class="pdf-foot__pg"></span></div>`;
    return `<section class="${cls}"><div class="pdf-body">${inner}</div>${foot}</section>`;
  }

  /* cabeçalho de seção: na 1ª página mostra kicker+título+lead; nas continuações,
     um cabeçalho enxuto ("(continuação)") para manter contexto sem repetir tudo. */
  function pdfHead(kicker, tone, title, lead, leadInk) {
    return `${pdfKicker(kicker, tone)}
      <h2 class="pdf-h2">${title}</h2>
      <p class="pdf-lead${leadInk ? ' pdf-lead--ink' : ''}">${lead}</p>`;
  }
  function pdfHeadCont(kicker, tone, title) {
    return `${pdfKicker(kicker, tone)}
      <h2 class="pdf-h2 pdf-h2--cont">${title} <span class="pdf-cont">continuação</span></h2>`;
  }

  // divide uma lista de itens (strings de HTML) em páginas de no máx. `per` itens
  function paginate(items, per) {
    const pages = [];
    for (let i = 0; i < items.length; i += per) pages.push(items.slice(i, i + per));
    return pages;
  }

  function pdfKicker(label, tone) {
    return `<div class="pdf-kicker${tone ? ' is-' + tone : ''}"><span class="pdf-kicker__dot"></span>${esc(label)}</div>`;
  }

  function buildPdfDoc() {
    const host = document.getElementById('pdf-doc');
    if (!host || host.dataset.built === '1') return;

    const themesSorted = DATA.themes.slice().sort((a, b) => b.pct - a.pct);

    /* ---- CAPA (full-bleed) ---- */
    const cover = pdfPage(`
      <div class="pdf-cover__photo">
        <img src="assets/img/hero-estudantes-print.jpg" alt="" />
        <span class="pdf-cover__veil"></span>
      </div>
      <div class="pdf-cover__top">
        <img class="pdf-cover__logo" src="assets/img/logo-prepara.png" alt="PreparaSP" />
        <span class="pdf-cover__edition">Junho de 2026</span>
      </div>
      <div class="pdf-cover__body">
        <div class="pdf-cover__label">Relatório de pesquisa de campo</div>
        <h1 class="pdf-cover__title">A voz de quem usa<br><span class="grad">o PreparaSP</span><br>todos os dias.</h1>
        <p class="pdf-cover__sub">Uma imersão presencial com estudantes do 2º e 3º ano do Ensino Médio da rede estadual de São Paulo: o que funciona, o que trava e onde estão as maiores oportunidades.</p>
        <div class="pdf-cover__stats">
          <div><b>5</b><span>Escolas</span></div>
          <div><b>${num(300)}</b><span>Estudantes</span></div>
          <div><b>2</b><span>Séries (2º e 3º)</span></div>
          <div><b>3</b><span>UREs com educadores</span></div>
        </div>
      </div>`, { cover: true });

    /* ---- SUMÁRIO / PANORAMA + METODOLOGIA ---- */
    const intro = pdfPage(`
      ${pdfKicker('Panorama da pesquisa')}
      <h2 class="pdf-h2">O que aprendemos ouvindo a sala de aula.</h2>
      <p class="pdf-lead">${esc(PDF_STATIC.panorama)}</p>

      <div class="pdf-bignums">
        <div class="pdf-bignum"><b>${num(300)}</b><span>Estudantes na amostra</span><small>2º e 3º ano, ouvidos presencialmente.</small></div>
        <div class="pdf-bignum pdf-bignum--b"><b>5</b><span>Escolas visitadas</span><small>Perfis e níveis de adoção distintos.</small></div>
        <div class="pdf-bignum pdf-bignum--c"><b>2</b><span>Séries em foco</span><small>Conversas documentadas trecho a trecho.</small></div>
      </div>

      <div class="pdf-method">
        <div class="pdf-method__steps">
          <h3 class="pdf-h3">Metodologia</h3>
          ${PDF_STATIC.method.map((s) => `
            <div class="pdf-step"><span class="pdf-step__n">${s.n}</span><div><b>${esc(s.t)}</b><p>${esc(s.d)}</p></div></div>`).join('')}
        </div>
        <aside class="pdf-schools">
          <h4>Onde a pesquisa passou</h4>
          ${PDF_STATIC.schools.map((e) => `
            <div class="pdf-school"><span class="pdf-school__ic"></span><div><b>${esc(e.n)}</b><span>${esc(e.m)}</span></div></div>`).join('')}
        </aside>
      </div>`);

    /* ---- EDUCADORES + TEMAS ---- */
    const edu = pdfPage(`
      ${pdfKicker('Quem está na escola todo dia', 'light')}
      <h2 class="pdf-h2">A visão de quem conduz a sala de aula.</h2>
      <p class="pdf-lead pdf-lead--ink">Além dos estudantes, ouvimos professores, coordenadores e diretores. São eles que acompanham o uso do PreparaSP no dia a dia e enxergam o que sustenta o engajamento.</p>
      <div class="pdf-edu">
        ${PDF_STATIC.educators.map((e) => `
          <div class="pdf-edu__card">
            <h4>${esc(e.ure)}</h4>
            <span class="pdf-edu__role">Professores · coordenadores · diretores</span>
            <p>${esc(e.t)}</p>
          </div>`).join('')}
      </div>`, { ink: true });

    /* ---- TEMAS (paginado: ~5 por página) ---- */
    const themeItem = (t) => `
      <div class="pdf-theme">
        <div class="pdf-theme__head"><b>${esc(t.title)}</b><span class="pdf-theme__pct">${t.pct}%</span></div>
        <div class="pdf-theme__track"><span class="pdf-theme__fill${t.tone ? ' ' + t.tone : ''}" style="width:${t.pct}%"></span></div>
        <p>${esc(t.desc)}</p>
      </div>`;
    const themes = paginate(themesSorted.map(themeItem), 5).map((chunk, i) => pdfPage(`
      ${i === 0
        ? pdfHead('Os grandes temas', '', 'O que mais apareceu nas conversas.', 'As barras indicam a <b>recorrência</b> com que cada tema surgiu nas conversas com os estudantes. É uma leitura qualitativa de quanto o assunto se repetiu.')
        : pdfHeadCont('Os grandes temas', '', 'O que mais apareceu nas conversas.')}
      <div class="pdf-themes">${chunk.join('')}</div>`)).join('');

    /* ---- DORES (paginado: 6 cards por página) ---- */
    const painItem = (c) => `
      <div class="pdf-card pdf-card--warm">
        <span class="pdf-card__tag">${esc(c.tag)}</span>
        <b>${esc(c.title)}</b>
        <p>${esc(c.text)}</p>
      </div>`;
    const pains = paginate(DATA.pains.map(painItem), 6).map((chunk, i) => pdfPage(`
      ${i === 0
        ? pdfHead('Dores e fricções', 'warm', 'Onde a experiência ainda trava.', 'Os obstáculos que mais apareceram quando os estudantes falaram sobre usar, ou desistir de usar, o PreparaSP.')
        : pdfHeadCont('Dores e fricções', 'warm', 'Onde a experiência ainda trava.')}
      <div class="pdf-cards">${chunk.join('')}</div>`)).join('');

    /* ---- OPORTUNIDADES (paginado: 6 cards por página) ---- */
    const oppItem = (c) => `
      <div class="pdf-card pdf-card--mint">
        <span class="pdf-card__tag">${esc(c.tag)}</span>
        <b>${esc(c.title)}</b>
        <p>${esc(c.text)}</p>
      </div>`;
    const opps = paginate(DATA.opps.map(oppItem), 6).map((chunk, i) => pdfPage(`
      ${i === 0
        ? pdfHead('Oportunidades', 'mint', 'O que pode transformar a plataforma.', 'As oportunidades mais claras para tornar o PreparaSP mais útil, mais usado e mais querido pelos estudantes.')
        : pdfHeadCont('Oportunidades', 'mint', 'O que pode transformar a plataforma.')}
      <div class="pdf-cards">${chunk.join('')}</div>`)).join('');

    /* ---- VOZES (navy, paginado: 6 por página) ---- */
    const quoteItem = (q) => `
      <figure class="pdf-quote">
        <blockquote>${esc(q.text)}</blockquote>
        <figcaption><b>${esc(q.who)}</b><span>${esc(q.meta)}</span></figcaption>
      </figure>`;
    const voices = paginate(DATA.quotes.map(quoteItem), 6).map((chunk, i) => pdfPage(`
      ${i === 0
        ? pdfHead('Nas próprias palavras', 'light', 'As vozes dos estudantes.', 'Trechos reais das conversas, editados apenas para clareza, preservando o sentido da fala.', true)
        : pdfHeadCont('Nas próprias palavras', 'light', 'As vozes dos estudantes.')}
      <div class="pdf-quotes">${chunk.join('')}</div>`, { ink: true })).join('');

    /* ---- RECOMENDAÇÕES (navy) ---- */
    const highs = DATA.recs.filter((r) => r.prio === 'high');
    const mids = DATA.recs.filter((r) => r.prio !== 'high');
    const recRow = (r) => `
      <div class="pdf-rec pdf-rec--${r.prio === 'high' ? 'high' : 'mid'}">
        <span class="pdf-rec__n">${esc(r.pr)}</span>
        <div><b>${esc(r.title)}</b><p>${esc(r.text)}</p></div>
      </div>`;
    // página 1: prioridade alta · página 2: próximos passos (evita estourar a página)
    const recsP1 = pdfPage(`
      ${pdfHead('Caminho a seguir', 'light', 'Recomendações prioritárias.', 'Movimentos concretos, ordenados por prioridade, para evoluir o PreparaSP a partir do que ouvimos em campo.', true)}
      <div class="pdf-recgroup"><span class="pdf-recgroup__label">Prioridade alta</span>${highs.map(recRow).join('')}</div>`, { ink: true });
    const recsP2 = pdfPage(`
      ${pdfHeadCont('Caminho a seguir', 'light', 'Recomendações prioritárias.')}
      <div class="pdf-recgroup"><span class="pdf-recgroup__label">Próximos passos</span>${mids.map(recRow).join('')}</div>`, { ink: true });
    const recs = recsP1 + recsP2;

    /* ---- ENCERRAMENTO ---- */
    const closing = pdfPage(`
      <div class="pdf-close">
        <img class="pdf-close__logo" src="assets/img/logo-prepara.png" alt="PreparaSP" />
        <h2 class="pdf-h2">PreparaSP</h2>
        <p class="pdf-lead">Este relatório nasce da voz dos estudantes. O próximo passo é transformar cada insight em melhorias reais na experiência do PreparaSP.</p>
      </div>`, { ink: true, cls: 'pdfpage--close' });

    host.innerHTML = cover + intro + edu + themes + pains + opps + voices + recs + closing;
    host.dataset.built = '1';
  }

  // remove o documento de PDF do DOM após imprimir/cancelar, devolvendo a
  // página a um estado leve e evitando bugs de reflow do navegador.
  function teardownPdfDoc() {
    const host = document.getElementById('pdf-doc');
    if (!host) return;
    host.innerHTML = '';
    delete host.dataset.built;
  }

  window.PreparaPDF = { build: buildPdfDoc, teardown: teardownPdfDoc };
})();
