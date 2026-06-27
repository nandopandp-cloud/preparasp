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
    /* ---- grandes temas: pct = % das 4 rodas em que o tema apareceu ---- */
    themes: [
      { icon: '🗓️', title: 'Cronograma e organização do estudo', desc: 'O “por onde começar” é o nó central: muito conteúdo, pouca direção. Apareceu nas 4 rodas.', pct: 100, tone: '' },
      { icon: '♿', title: 'Personalização e acessibilidade', desc: 'Recursos para necessidades específicas (ex.: TDAH) já existem — mas passam despercebidos. Vontade de editar a própria trilha. 4 rodas.', pct: 100, tone: '' },
      { icon: '📚', title: 'Conteúdo: vídeos, resumos e biblioteca', desc: 'Vídeos existem, mas o consumo é baixo e a biblioteca é quase ignorada. Pedem resumos e flashcards. 4 rodas.', pct: 100, tone: '' },
      { icon: '🎮', title: 'Gamificação e recompensas', desc: 'A ofensiva, a Liga e os avatares já engajam; o desejo é por mais coleções e prêmios. 3 das 4 rodas.', pct: 75, tone: 'mint' },
      { icon: '📱', title: 'Acesso, dispositivos e ambiente', desc: 'Uso preso ao computador da escola; pouco ou nenhum uso em casa e no fim de semana. 3 das 4 rodas.', pct: 75, tone: 'warm' },
      { icon: '📝', title: 'Simulados', desc: 'ENEM, Provão Paulista e SARESP — fáceis de localizar e bem reconhecidos. 3 das 4 rodas.', pct: 75, tone: 'mint' },
      { icon: '🧭', title: 'Navegação e primeira impressão', desc: '“Estudar” é o clique natural, mas “tudo muito misturado”: pedem uma interface mais simples. 3 das 4 rodas.', pct: 75, tone: '' },
      { icon: '✍️', title: 'Redação Paulista', desc: 'Tema dominante na roda do 3º ano: medo de perder o texto, envio engessado e temas difíceis. 2 das 4 rodas.', pct: 50, tone: 'warm' },
      { icon: '🎓', title: 'Futuro e escolha profissional', desc: 'Estudantes decidindo o vestibular pedem orientação — interesse claro por um teste vocacional. 1 das 4 rodas.', pct: 25, tone: 'mint' },
    ],

    /* ---- dores ---- */
    pains: [
      {
        icon: '💾', tag: 'Redação · confiabilidade',
        title: 'Perder a redação inteira',
        text: 'Sem salvamento automático confiável, basta sair sem querer do computador para perder todo o texto. Estudantes relatam que isso acontece com colegas de várias salas — uma das frustrações mais fortes da pesquisa.',
        metric: { v: '“perde tudo”', k: 'fala recorrente entre as turmas' },
      },
      {
        icon: '🖥️', tag: 'Acesso · dispositivos',
        title: 'Preso ao computador da escola',
        text: 'O uso fica concentrado no laboratório. “O computador não dá pra baixar e não tem como usar no sábado.” No celular, reconhecem, o uso “seria bem maior” — mas o caminho mobile ainda não flui.',
        metric: { v: '3/4', k: 'rodas citaram a barreira de acesso' },
      },
      {
        icon: '🌀', tag: 'Cronograma · sobrecarga',
        title: '“Não sei por onde começar”',
        text: 'O volume de atividades gera paralisia. “Me sinto confuso porque tem muita coisa” — relato ainda mais sensível para quem tem TDAH e precisa de um ponto de partida claro.',
        metric: { v: 'muita coisa', k: 'excesso de conteúdo sem direção' },
      },
      {
        icon: '🧮', tag: 'Navegação · clareza',
        title: '“Tudo muito misturado”',
        text: 'A interface é vista como confusa: “difícil de identificar, deixaria o mais simples possível”. A visão semanal do cronograma concentra informação demais — preferem ver só o dia. O concorrente é lembrado como “mais simples”.',
        metric: { v: 'simplificar', k: 'pedido espontâneo de UI' },
      },
      {
        icon: '🐞', tag: 'Confiança · bugs',
        title: 'Pequenas falhas que minam a confiança',
        text: '“Ver histórico” não abre; no tablet, um botão flutuante cobre o “concluído”; questões de matemática aparecem como imagens ilegíveis (“não dá pra ler”); e há lentidão em uso simultâneo. Detalhes que custam adesão.',
        metric: { v: 'não abre', k: 'recursos que falham' },
      },
      {
        icon: '🗄️', tag: 'Descoberta · valor',
        title: 'Recursos valiosos que ninguém encontra',
        text: 'A biblioteca quase não é acessada (“ninguém nunca acessou?”) e os perfis de acessibilidade e temas — que já existem — passam despercebidos. O valor está lá, mas escondido.',
        metric: { v: '≈ 0', k: 'acessos à biblioteca relatados' },
      },
    ],

    /* ---- oportunidades ---- */
    opps: [
      {
        icon: '💡', tag: 'Redação assistida',
        title: 'Salvar sozinho e enviar pelo celular',
        text: 'Salvamento automático elimina a maior dor. Abrir o envio por foto (“escrevo no papel e tiro foto”) e por celular destrava o uso fora do laboratório. Há sinais de que o upload por imagem já começou — vale acelerar e dar sugestões de repertório nos temas difíceis.',
        metric: { v: 'autosave', k: 'pedido nº 1 da redação' },
      },
      {
        icon: '🎯', tag: 'Onboarding guiado',
        title: 'Um “comece por aqui” para cada estudante',
        text: 'Trilhas guiadas e um primeiro passo claro resolvem a paralisia do excesso. Personalizar por objetivo e por necessidade (inclusive acessibilidade) transforma a primeira experiência — e simplifica o que hoje parece “misturado”.',
        metric: { v: '1º passo', k: 'direção em vez de catálogo' },
      },
      {
        icon: '🏆', tag: 'Gamificação',
        title: 'Da ofensiva à Liga, do avatar ao prêmio',
        text: 'A ofensiva já cria hábito (alguns passam de 40 dias) e a Liga estadual e os avatares animam a turma. O caminho é amarrar tudo: pontos que viram itens, coleções e recompensas — “preciso ser compensado pra querer estudar”.',
        metric: { v: '47 dias', k: 'maior ofensiva relatada em campo' },
      },
      {
        icon: '🧩', tag: 'Personalização',
        title: 'Deixe o estudante editar a trilha',
        text: 'Reordenar o cronograma (“deixa eu jogar isso pra frente”), marcar o que foi feito e receber um lembrete no celular dá autonomia — e separa com clareza o que é tarefa do professor e o que é recomendação do algoritmo.',
        metric: { v: 'editar', k: 'controle sobre o próprio plano' },
      },
      {
        icon: '🧭', tag: 'Futuro · carreira',
        title: 'Um teste vocacional de verdade',
        text: 'Estudantes do 2º e 3º ano estão decidindo o vestibular e pedem orientação: “se tivesse um teste vocacional na plataforma...”. Uma trilha de descoberta de carreira conecta o estudo a um propósito concreto.',
        metric: { v: 'vocação', k: 'ajudar a escolher o caminho' },
      },
      {
        icon: '⚡', tag: 'Biblioteca · formatos',
        title: 'Biblioteca viva: resumos, flashcards e vídeos que prendem',
        text: 'O consumo de vídeo é baixo. Pedem resumos rápidos, flashcards para memorizar e vídeos mais ilustrados (“com desenhos, stickers”). Dar visibilidade à biblioteca e variar formatos atende diferentes formas de estudar.',
        metric: { v: '+formatos', k: 'além do vídeo padrão' },
      },
    ],

    /* ---- vozes (falas representativas, editadas para clareza) ---- */
    quotes: [
      { text: 'Quando a gente sai sem querer do computador, não salva — você perde tudo da redação. Se salvasse sozinho, ajudaria muito.', who: 'Estudante · 3º ano', meta: 'Sobre a Redação Paulista', hl: true },
      { text: 'Eu me sinto confuso porque tem muita coisa. Eu tenho TDAH, eu não sei onde vou estudar.', who: 'Estudante · 3º ano', meta: 'Sobre o cronograma', hl: false },
      { text: 'Achei tudo muito misturado, difícil de identificar. Eu deixaria o mais simples possível.', who: 'Estudante · 3º ano', meta: 'Sobre a interface', hl: false },
      { text: 'Eu queria poder editar o cronograma — colocar o que é meu e jogar pra frente o que eu não vou fazer agora.', who: 'Estudante · 2º ano', meta: 'Sobre autonomia no estudo', hl: false },
      { text: 'Quando clica em “ver histórico”, não aparece nada. Nem abre.', who: 'Estudante · 2º ano', meta: 'Sobre confiabilidade', hl: false },
      { text: 'O computador não dá pra baixar, e não tem como usar no sábado.', who: 'Estudante · 2º ano', meta: 'Sobre acesso e dispositivos', hl: false },
      { text: 'Eu preciso ser compensado pra querer estudar — estudar, pra mim, não é algo interessante por si só.', who: 'Estudante · 3º ano', meta: 'Sobre motivação', hl: false },
      { text: 'A galera já tem 47 dias de ofensiva.', who: 'Roda de conversa', meta: 'Sobre engajamento e hábito', hl: true },
    ],

    /* ---- recomendações ---- */
    recs: [
      { pr: '01', prio: 'high', title: 'Redação à prova de falhas', text: 'Salvamento automático contínuo, recuperação de rascunho e envio por foto/celular. Maior ganho de confiança com o menor esforço.' },
      { pr: '02', prio: 'high', title: 'Levar o PreparaSP para o celular e para casa', text: 'Experiência mobile fluida para estudar em casa e no fim de semana — onde os estudantes dizem que o uso “seria bem maior”.' },
      { pr: '03', prio: 'high', title: '“Comece por aqui”: onboarding guiado', text: 'Um primeiro passo claro e trilhas por objetivo, com suporte a necessidades específicas (acessibilidade, TDAH), para vencer a paralisia do excesso.' },
      { pr: '04', prio: 'high', title: 'Simplificar a navegação e o cronograma', text: 'Reduzir densidade, priorizar a visão do dia e separar com clareza tarefa do professor × recomendação do algoritmo. Menos é mais.' },
      { pr: '05', prio: 'mid', title: 'Reconquistar a confiança', text: 'Corrigir bugs visíveis (ver histórico, botão coberto no tablet, matemática ilegível) e a lentidão em uso simultâneo.' },
      { pr: '06', prio: 'mid', title: 'Gamificação de ponta a ponta', text: 'Conectar ofensiva, Liga, avatares, pontos e recompensas ativadas pela escola — transformando hábito em pertencimento.' },
      { pr: '07', prio: 'mid', title: 'Cronograma editável, com lembretes', text: 'Permitir reordenar, marcar concluído e receber lembrete no celular — devolvendo autonomia ao estudante.' },
      { pr: '08', prio: 'mid', title: 'Dar vida à biblioteca e à acessibilidade', text: 'Tornar visíveis recursos que já existem e ampliar formatos (resumos, flashcards, vídeos ilustrados). Além de um teste vocacional para conectar estudo e futuro.' },
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
