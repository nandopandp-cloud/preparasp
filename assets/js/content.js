/* PreparaSP · Relatório de pesquisa de campo
   ---------------------------------------------------------------------------
   Todo o conteúdo abaixo é derivado das 4 rodas de conversa em grupo
   realizadas nas escolas (2º e 3º ano do Ensino Médio).
   Cada conversa foi documentada para análise, e as falas foram editadas
   para clareza, preservando o sentido.
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
      { icon: '♿', title: 'Personalização e acessibilidade', desc: 'Recursos para necessidades específicas (ex.: TDAH) já existem, mas passam despercebidos. Há vontade de editar a própria trilha. 4 rodas.', pct: 100, tone: '' },
      { icon: '📚', title: 'Conteúdo: vídeos, resumos e biblioteca', desc: 'Vídeos existem, mas o consumo é baixo e a biblioteca é quase ignorada. Pedem resumos e flashcards. 4 rodas.', pct: 100, tone: '' },
      { icon: '🎮', title: 'Gamificação e recompensas', desc: 'A ofensiva, a Liga e os avatares já engajam; o desejo é por mais coleções e prêmios. 3 das 4 rodas.', pct: 75, tone: 'mint' },
      { icon: '📱', title: 'Acesso, dispositivos e ambiente', desc: 'Uso preso ao computador da escola; pouco ou nenhum uso em casa e no fim de semana. 3 das 4 rodas.', pct: 75, tone: 'warm' },
      { icon: '📝', title: 'Simulados', desc: 'ENEM, Provão Paulista e SARESP: fáceis de localizar e bem reconhecidos. 3 das 4 rodas.', pct: 75, tone: 'mint' },
      { icon: '🧭', title: 'Navegação e primeira impressão', desc: '“Estudar” é o clique natural, mas “tudo muito misturado”: pedem uma interface mais simples. 3 das 4 rodas.', pct: 75, tone: '' },
      { icon: '✍️', title: 'Redação Paulista', desc: 'Tema dominante na roda do 3º ano: medo de perder o texto, envio engessado e temas difíceis. 2 das 4 rodas.', pct: 50, tone: 'warm' },
      { icon: '🎓', title: 'Futuro e escolha profissional', desc: 'Estudantes decidindo o vestibular pedem orientação, com interesse claro por um teste vocacional. 1 das 4 rodas.', pct: 25, tone: 'mint' },
    ],

    /* ---- dores ---- */
    pains: [
      {
        icon: '💾', tag: 'Redação · confiabilidade',
        title: 'Perder a redação inteira',
        text: 'Sem salvamento automático confiável, basta sair sem querer do computador para perder todo o texto. Estudantes relatam que isso acontece com colegas de várias salas, e essa é uma das frustrações mais fortes da pesquisa.',
        metric: { v: '“perde tudo”', k: 'fala recorrente entre as turmas' },
      },
      {
        icon: '🖥️', tag: 'Acesso · dispositivos',
        title: 'Preso ao computador da escola',
        text: 'O uso fica concentrado no laboratório. “O computador não dá pra baixar e não tem como usar no sábado.” No celular, reconhecem, o uso “seria bem maior”, mas o caminho mobile ainda não flui.',
        metric: { v: '3/4', k: 'rodas citaram a barreira de acesso' },
      },
      {
        icon: '🌀', tag: 'Cronograma · sobrecarga',
        title: '“Não sei por onde começar”',
        text: 'O volume de atividades gera paralisia. “Me sinto confuso porque tem muita coisa”, relato ainda mais sensível para quem tem TDAH e precisa de um ponto de partida claro.',
        metric: { v: 'muita coisa', k: 'excesso de conteúdo sem direção' },
      },
      {
        icon: '🧮', tag: 'Navegação · clareza',
        title: '“Tudo muito misturado” e “muito branco”',
        text: 'A interface é vista como confusa (“difícil de identificar, deixaria o mais simples possível”) e visualmente apagada: “muito branca”, sem a energia das redes que eles usam. A visão semanal do cronograma concentra informação demais; preferem ver só o dia.',
        metric: { v: 'simplificar', k: 'clareza + identidade visual' },
      },
      {
        icon: '🐞', tag: 'Confiança · bugs',
        title: 'Pequenas falhas que minam a confiança',
        text: '“Ver histórico” não abre; no tablet, um botão flutuante cobre o “concluído”; questões de matemática aparecem como imagens ilegíveis (“não dá pra ler”); e há lentidão em uso simultâneo. São detalhes que custam adesão.',
        metric: { v: 'não abre', k: 'recursos que falham' },
      },
      {
        icon: '🗄️', tag: 'Descoberta · valor',
        title: 'Recursos valiosos que ninguém encontra',
        text: 'A biblioteca quase não é acessada (“ninguém nunca acessou?”) e os perfis de acessibilidade e temas, que já existem, passam despercebidos. O valor está lá, mas escondido.',
        metric: { v: '≈ 0', k: 'acessos à biblioteca relatados' },
      },
    ],

    /* ---- oportunidades ---- */
    opps: [
      {
        icon: '💡', tag: 'Redação assistida',
        title: 'Salvar sozinho, enviar pelo celular',
        text: 'Salvamento automático elimina a maior dor, incluindo o envio que falha quando cai a conexão. Abrir o envio por foto (“escrevo no papel e tiro foto”) e por celular destrava o uso fora do laboratório. O corretor deve dar repertório nos temas difíceis, não recomeçar do zero.',
        metric: { v: 'autosave', k: 'pedido nº 1 da redação' },
      },
      {
        icon: '🎯', tag: 'Onboarding guiado',
        title: 'Um “comece por aqui” para cada estudante',
        text: 'Trilhas guiadas e um primeiro passo claro resolvem a paralisia do excesso. Personalizar por objetivo e por necessidade (inclusive acessibilidade) transforma a primeira experiência e simplifica o que hoje parece “misturado”.',
        metric: { v: '1º passo', k: 'direção em vez de catálogo' },
      },
      {
        icon: '🏆', tag: 'Gamificação',
        title: 'Da ofensiva à Liga, com progresso à vista',
        text: 'A ofensiva já cria hábito (alguns passam de 40 dias) e a Liga e os avatares animam a turma. Falta tornar o progresso visível (“só faço e não vejo o resultado”) e amarrar pontos, coleções, recompensas e até disputas entre amigos. Como resumiu um estudante: “preciso ser compensado pra querer estudar”.',
        metric: { v: '47 dias', k: 'maior ofensiva relatada em campo' },
      },
      {
        icon: '🤖', tag: 'IA · assistente',
        title: 'Potencializar o assistente de IA',
        text: 'A turma toda já usa ChatGPT. A plataforma tem uma IA, e o caminho é torná-la contextual e visível: tirar dúvidas dentro do conteúdo e levar o estudante direto à unidade certa (“vá ao curso de Português, oração subordinada”).',
        metric: { v: 'IA nativa', k: 'tutor dentro da jornada' },
      },
      {
        icon: '🧩', tag: 'Personalização',
        title: 'Deixe o estudante editar a trilha',
        text: 'Reordenar o cronograma (“deixa eu jogar isso pra frente”), marcar o que foi feito e receber um lembrete no celular dá autonomia e separa com clareza o que é tarefa do professor e o que é recomendação do algoritmo.',
        metric: { v: 'editar', k: 'controle sobre o próprio plano' },
      },
      {
        icon: '🎓', tag: 'Futuro · carreira',
        title: 'Um teste vocacional de verdade',
        text: 'Estudantes do 2º e 3º ano estão decidindo o vestibular e pedem orientação: “se tivesse um teste vocacional na plataforma...”. Uma trilha de descoberta de carreira conecta o estudo a um propósito concreto.',
        metric: { v: 'vocação', k: 'ajudar a escolher o caminho' },
      },
      {
        icon: '⚡', tag: 'Biblioteca · formatos',
        title: 'Biblioteca viva: resumos, flashcards e mapas mentais',
        text: 'Hoje a biblioteca é só vídeo, e quase ninguém entra. Pedem resumos rápidos, flashcards, mapas mentais editáveis e vídeos mais ilustrados (“com desenhos, stickers”). Dar visibilidade e variar formatos atende diferentes formas de estudar.',
        metric: { v: '+formatos', k: 'além do vídeo padrão' },
      },
      {
        icon: '🌎', tag: 'Inclusão · equidade',
        title: 'Acolher estudantes imigrantes',
        text: 'Em campo, educadores apontaram turmas com muitos imigrantes (Venezuela, Haiti, países de língua francesa) diante de uma plataforma só em português. Suporte a múltiplos idiomas é uma oportunidade real de equidade na rede estadual.',
        metric: { v: 'multi-idioma', k: 'ninguém fica para trás' },
      },
    ],

    /* ---- vozes (falas representativas, editadas para clareza) ---- */
    quotes: [
      { text: 'Quando a gente sai sem querer do computador, não salva, e você perde tudo da redação. Se salvasse sozinho, ajudaria muito.', who: 'Estudante · 3º ano', meta: 'Sobre a Redação Paulista', hl: true },
      { text: 'Eu me sinto confuso porque tem muita coisa. Eu tenho TDAH, eu não sei onde vou estudar.', who: 'Estudante · 3º ano', meta: 'Sobre o cronograma', hl: false },
      { text: 'Achei tudo muito misturado, difícil de identificar. Eu deixaria o mais simples possível.', who: 'Estudante · 3º ano', meta: 'Sobre a interface', hl: false },
      { text: 'A plataforma é muito branca. As redes que a gente usa são muito mais coloridas, mais alegres.', who: 'Estudante · 3º ano', meta: 'Sobre identidade visual', hl: false },
      { text: 'Quando clica em “ver histórico”, não aparece nada. Nem abre.', who: 'Estudante · 2º ano', meta: 'Sobre confiabilidade', hl: false },
      { text: 'O computador não dá pra baixar, e não tem como usar no sábado.', who: 'Estudante · 2º ano', meta: 'Sobre acesso e dispositivos', hl: false },
      { text: 'Eu preciso ser compensado pra querer estudar. Estudar, pra mim, não é algo interessante por si só.', who: 'Estudante · 3º ano', meta: 'Sobre motivação', hl: true },
      { text: 'A gente tem muito aluno imigrante, da Venezuela, de países de língua francesa, e a plataforma só tem português.', who: 'Educador(a) · em campo', meta: 'Sobre inclusão e equidade', hl: false },
      { text: 'A galera já tem 47 dias de ofensiva.', who: 'Roda de conversa', meta: 'Sobre engajamento e hábito', hl: true },
    ],

    /* ---- recomendações ---- */
    recs: [
      { pr: '01', prio: 'high', title: 'Redação à prova de falhas', text: 'Salvamento automático contínuo, recuperação de rascunho, resiliência à queda de conexão e envio por foto/celular. Maior ganho de confiança com o menor esforço.' },
      { pr: '02', prio: 'high', title: 'Levar o PreparaSP para o celular e para casa', text: 'Experiência mobile fluida para estudar em casa e no fim de semana, contexto em que os estudantes dizem que o uso “seria bem maior”.' },
      { pr: '03', prio: 'high', title: '“Comece por aqui”: onboarding guiado', text: 'Um primeiro passo claro e trilhas por objetivo, com suporte a necessidades específicas (acessibilidade, TDAH), para vencer a paralisia do excesso.' },
      { pr: '04', prio: 'high', title: 'Interface mais simples e mais viva', text: 'Reduzir densidade, priorizar a visão do dia, separar tarefa do professor da recomendação do algoritmo e dar mais cor e energia à identidade visual.' },
      { pr: '05', prio: 'mid', title: 'Reconquistar a confiança', text: 'Corrigir bugs visíveis (ver histórico, botão coberto no tablet, matemática ilegível) e a lentidão em uso simultâneo.' },
      { pr: '06', prio: 'mid', title: 'Gamificação de ponta a ponta', text: 'Conectar ofensiva, Liga, avatares, pontos e recompensas da escola, com o progresso sempre visível e disputas entre amigos.' },
      { pr: '07', prio: 'mid', title: 'Cronograma editável, com lembretes', text: 'Permitir reordenar, marcar concluído e receber lembrete no celular, devolvendo autonomia ao estudante.' },
      { pr: '08', prio: 'mid', title: 'Assistente de estudos com IA', text: 'Tornar a IA da plataforma contextual e visível, tirando dúvidas e levando o estudante direto ao conteúdo certo. Eles já usam ChatGPT, então o caminho é trazer isso para dentro.' },
      { pr: '09', prio: 'mid', title: 'Biblioteca viva + acessibilidade visível', text: 'Dar destaque a recursos que já existem e ampliar formatos: resumos, flashcards, mapas mentais e vídeos ilustrados.' },
      { pr: '10', prio: 'mid', title: 'Inclusão, equidade e futuro', text: 'Suporte a múltiplos idiomas para estudantes imigrantes e um teste vocacional que conecte o estudo a um propósito.' },
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
