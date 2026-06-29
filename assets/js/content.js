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
      { text: 'A plataforma é muito branca. As redes que a gente usa são muito mais coloridas, mais alegres.', who: 'Estudante · 3º ano', meta: 'Sobre identidade visual', hl: false },
      { text: 'Quando clica em “ver histórico”, não aparece nada. Nem abre.', who: 'Estudante · 2º ano', meta: 'Sobre confiabilidade', hl: false },
      { text: 'O computador não dá pra baixar, e não tem como usar no sábado.', who: 'Estudante · 2º ano', meta: 'Sobre acesso e dispositivos', hl: false },
      { text: 'Eu preciso ser compensado pra querer estudar. Estudar, pra mim, não é algo interessante por si só.', who: 'Estudante · 3º ano', meta: 'Sobre motivação', hl: true },
      { text: 'A gente tem muito aluno imigrante, da Venezuela, de países de língua francesa, e a plataforma só tem português.', who: 'Educador(a) · em campo', meta: 'Sobre inclusão e equidade', hl: false },
      { text: 'A galera já tem 47 dias de ofensiva.', who: 'Conversa com estudantes', meta: 'Sobre engajamento e hábito', hl: true },
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
