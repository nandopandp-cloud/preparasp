/* PreparaSP · Relatório — conteúdo dos achados da pesquisa
   ---------------------------------------------------------------------------
   Todo o conteúdo abaixo é derivado das 4 rodas de conversa em grupo
   gravadas nas escolas (2º e 3º ano do Ensino Médio).
   As falas foram editadas para clareza, preservando o sentido.
   Os percentuais dos "temas" indicam em quantas das 4 rodas o assunto
   apareceu de forma relevante (leitura qualitativa, não estatística).
   Edite o objeto DATA para atualizar o relatório.
   --------------------------------------------------------------------------- */
(function () {
  'use strict';

  const DATA = {
    /* ---- grandes temas: pct = % das rodas em que o tema apareceu ---- */
    themes: [
      { icon: '🗓️', title: 'Cronograma e organização do estudo', desc: 'O “por onde começar” é o nó central: muito conteúdo, pouca direção. Citado em 3 das 4 rodas.', pct: 75, tone: '' },
      { icon: '📱', title: 'Acesso, dispositivos e ambiente', desc: 'Uso preso ao computador da escola; pouco ou nenhum uso em casa e no fim de semana. 3 das 4 rodas.', pct: 75, tone: 'warm' },
      { icon: '✍️', title: 'Redação Paulista', desc: 'Tema forte e específico: medo de perder o texto, envio engessado e temas difíceis. 2 das 4 rodas.', pct: 50, tone: 'warm' },
      { icon: '🎮', title: 'Gamificação e recompensas', desc: 'A “ofensiva” já engaja; o desejo é por avatares, coleções e prêmios. 2 das 4 rodas.', pct: 50, tone: 'mint' },
      { icon: '📚', title: 'Conteúdo: vídeos, resumos e biblioteca', desc: 'Vídeos existem, mas o consumo é baixo. Pedido claro por resumos e flashcards. 3 das 4 rodas.', pct: 75, tone: '' },
      { icon: '📝', title: 'Simulados', desc: 'ENEM, Provão Paulista e SARESP — fáceis de localizar e bem reconhecidos. 3 das 4 rodas.', pct: 75, tone: 'mint' },
      { icon: '♿', title: 'Personalização e acessibilidade', desc: 'Necessidades específicas (ex.: TDAH) e vontade de editar a própria trilha. 2 das 4 rodas.', pct: 50, tone: '' },
      { icon: '🧭', title: 'Navegação e primeira impressão', desc: '“Estudar” é o primeiro clique natural; cores e seções ainda confundem. 2 das 4 rodas.', pct: 50, tone: '' },
    ],

    /* ---- dores ---- */
    pains: [
      {
        icon: '💾', tag: 'Redação · confiabilidade',
        title: 'Perder a redação inteira',
        text: 'Sem salvamento automático confiável, basta sair sem querer do computador para perder todo o texto. Estudantes relatam que isso acontece com colegas de várias salas — uma das frustrações mais citadas.',
        metric: { v: '“perde tudo”', k: 'fala recorrente entre as turmas' },
      },
      {
        icon: '🖥️', tag: 'Acesso · dispositivos',
        title: 'Preso ao computador da escola',
        text: 'O uso fica concentrado no laboratório/escola. “O computador não dá pra baixar e não tem como usar no sábado.” Falta um caminho fluido para estudar pelo celular e em casa.',
        metric: { v: '3/4', k: 'rodas citaram a barreira de acesso' },
      },
      {
        icon: '🌀', tag: 'Cronograma · sobrecarga',
        title: '“Não sei por onde começar”',
        text: 'O volume de atividades gera paralisia. “Me sinto confuso porque tem muita coisa” — relato ainda mais sensível para quem tem TDAH e precisa de um ponto de partida claro.',
        metric: { v: 'muita coisa', k: 'excesso de conteúdo sem direção' },
      },
      {
        icon: '🚫', tag: 'Confiança · bug',
        title: '“Ver histórico” não abre',
        text: 'Funções que não respondem corroem a confiança. “Quando clica em ver histórico, não aparece nada — nem abre.” Pequenas falhas com grande impacto na percepção.',
        metric: { v: '0 resposta', k: 'recurso clicado não abre' },
      },
      {
        icon: '⚖️', tag: 'Concorrência · simplicidade',
        title: 'O concorrente parece mais simples',
        text: 'Plataformas como o Descomplica são lembradas como “mais simples / mais fáceis”. Há também atrito percebido no acesso e login do PreparaSP frente às alternativas.',
        metric: { v: '“mais simples”', k: 'comparação espontânea' },
      },
      {
        icon: '🐢', tag: 'Performance',
        title: 'Lentidão e cursos que não abrem',
        text: 'Em momentos de uso simultâneo, a plataforma “trava”; há relatos de cursos que não abrem. A performance afeta diretamente a constância do estudo.',
        metric: { v: 'travou', k: 'lentidão em uso coletivo' },
      },
    ],

    /* ---- oportunidades ---- */
    opps: [
      {
        icon: '💡', tag: 'Redação assistida',
        title: 'Salvar sozinho e enviar pelo celular',
        text: 'Salvamento automático elimina a maior dor. E abrir o envio por foto (“escrevo no papel e tiro foto”) e por celular destrava o uso fora do laboratório. Há sinais de que o upload por imagem já começou — vale acelerar.',
        metric: { v: 'autosave', k: 'pedido nº 1 da redação' },
      },
      {
        icon: '🎯', tag: 'Onboarding guiado',
        title: 'Um “comece por aqui” para cada estudante',
        text: 'Trilhas guiadas e um primeiro passo claro resolvem a paralisia do excesso. Personalizar por objetivo e por necessidade (inclusive acessibilidade) transforma a primeira experiência.',
        metric: { v: '1º passo', k: 'direção em vez de catálogo' },
      },
      {
        icon: '🏆', tag: 'Gamificação',
        title: 'Da ofensiva à coleção',
        text: 'A “ofensiva” (sequência de dias) já cria hábito — alguns passam de 40 dias. O desejo é ampliar: pontos, avatares personalizáveis, álbum de figurinhas e um programa de recompensas ligado à escola.',
        metric: { v: '47 dias', k: 'maior ofensiva relatada em campo' },
      },
      {
        icon: '🧩', tag: 'Personalização',
        title: 'Deixe o estudante editar a trilha',
        text: 'Reordenar o cronograma (“deixa eu jogar isso pra frente”) e ajustar a experiência por necessidade dá autonomia e reduz a confusão entre o que é do professor e o que é recomendação do algoritmo.',
        metric: { v: 'editar', k: 'controle sobre o próprio plano' },
      },
      {
        icon: '⚡', tag: 'Biblioteca · formatos',
        title: 'Resumos e flashcards, não só vídeo',
        text: 'O consumo de vídeo é baixo (“assisti alguns... pouco”). Estudantes pedem resumos rápidos e flashcards para memorização — múltiplos formatos para diferentes formas de estudar.',
        metric: { v: '+formatos', k: 'além do vídeo' },
      },
      {
        icon: '🤝', tag: 'Escola + recompensa',
        title: 'Recompensas que a escola ativa',
        text: 'Conectar esforço a prêmios definidos pela própria escola (de itens a experiências) e reforçar o vínculo professor–aluno aumenta a motivação e o sentido de pertencimento.',
        metric: { v: 'pertencer', k: 'motivação ligada à escola' },
      },
    ],

    /* ---- vozes (falas representativas, editadas para clareza) ---- */
    quotes: [
      { text: 'Quando a gente sai sem querer do computador, não salva — você perde tudo da redação. Se salvasse sozinho, ajudaria muito.', who: 'Estudante · 3º ano', meta: 'Sobre a Redação Paulista', hl: true },
      { text: 'Eu me sinto confuso porque tem muita coisa. Eu tenho TDAH, eu não sei onde vou estudar.', who: 'Estudante · 3º ano', meta: 'Sobre o cronograma', hl: false },
      { text: 'Eu gosto de escrever minha redação no papel — queria tirar uma foto e botar na plataforma.', who: 'Estudante · 3º ano', meta: 'Sobre o envio da redação', hl: false },
      { text: 'Quando clica em “ver histórico”, não aparece nada. Nem abre.', who: 'Estudante · 2º ano', meta: 'Sobre confiabilidade', hl: false },
      { text: 'O computador não dá pra baixar, e não tem como usar no sábado.', who: 'Estudante · 2º ano', meta: 'Sobre acesso e dispositivos', hl: false },
      { text: 'A galera já tem 47 dias de ofensiva.', who: 'Roda de conversa', meta: 'Sobre engajamento e hábito', hl: true },
    ],

    /* ---- recomendações ---- */
    recs: [
      { pr: '01', prio: 'high', title: 'Salvamento automático na Redação Paulista', text: 'Eliminar a perda de texto com autosave contínuo e recuperação de rascunho. Maior ganho de confiança com menor esforço.' },
      { pr: '02', prio: 'high', title: 'Acesso pelo celular e fora da escola', text: 'Experiência mobile fluida e envio de redação por foto, para estudar em casa e no fim de semana — não só no laboratório.' },
      { pr: '03', prio: 'high', title: 'Onboarding guiado e personalizado', text: 'Um “comece por aqui” claro, trilhas por objetivo e suporte a necessidades específicas (acessibilidade, TDAH) para vencer a paralisia do excesso.' },
      { pr: '04', prio: 'mid', title: 'Corrigir as quebras de confiança', text: 'Resolver bugs visíveis (“ver histórico”, cursos que não abrem) e a lentidão em uso simultâneo. Pequenas falhas custam adesão.' },
      { pr: '05', prio: 'mid', title: 'Evoluir a gamificação', text: 'Ampliar a ofensiva com pontos, avatares, coleções e um programa de recompensas conectado à escola.' },
      { pr: '06', prio: 'mid', title: 'Biblioteca multiformato', text: 'Resumos e flashcards ao lado dos vídeos, com clareza entre o que é tarefa do professor e o que é recomendação do algoritmo.' },
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
        <figure class="qcard ${q.hl ? 'qcard--hl' : ''}" data-reveal data-reveal-delay="${(i % 2) + 1}">
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
})();
