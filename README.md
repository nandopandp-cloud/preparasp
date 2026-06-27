# PreparaSP · Relatório de Pesquisa de Campo

Landing page / relatório interativo que comunica os **insights, dores e
oportunidades** da plataforma **PreparaSP**, a partir de uma pesquisa de campo
com estudantes do **2º e 3º ano do Ensino Médio**.

> Amostra: **~480 estudantes** · **5 escolas** · **4 rodas de conversa em grupo**
> gravadas em áudio e analisadas trecho a trecho.
> Material preparado para apresentação à **Secretaria da Educação do Estado de São Paulo**.

## Como visualizar

É um site estático, sem build. Basta abrir o `index.html` no navegador, ou
servir a pasta:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Estrutura

```
index.html              Estrutura da página
assets/css/style.css    Design system, layout e animações
assets/css/print.css    Estilos para exportar em PDF (Ctrl/Cmd + P)
assets/js/main.js       Animações: scroll-reveal, count-up, parallax, dock
assets/js/content.js    >>> CONTEÚDO DOS ACHADOS <<< (edite aqui)
assets/img/             Fotografias da imersão (ver abaixo)
```

## Editar o conteúdo do relatório

Todo o conteúdo de **temas, dores, oportunidades, vozes e recomendações** vive
no objeto `DATA` em [`assets/js/content.js`](assets/js/content.js). Edite os
arrays correspondentes — a página se monta sozinha a partir deles.

Os números fixos (5 escolas, ~480 estudantes etc.) estão no `index.html`, nos
atributos `data-count`.

> Observação metodológica: as barras de "temas" indicam **em quantas das 4
> rodas** o assunto apareceu de forma relevante — leitura qualitativa, não
> estatística. As falas em "Vozes" foram editadas para clareza, preservando o
> sentido.

## Adicionar as fotografias da imersão

A seção **Registros da pesquisa** (`#galeria`) já tem os espaços preparados.
Para inserir uma foto, coloque o arquivo em `assets/img/` e troque o
placeholder pelo `<img>` correspondente no `index.html`:

```html
<!-- antes -->
<figure class="gal-item span-8 tall" data-reveal>
  <div class="ph"><span class="ic">📷</span>...</div>
  <figcaption class="cap">Roda de conversa com estudantes do 3º ano</figcaption>
</figure>

<!-- depois -->
<figure class="gal-item span-8 tall" data-reveal>
  <img src="assets/img/roda-3ano.jpg" alt="Roda de conversa com estudantes do 3º ano" />
  <figcaption class="cap">Roda de conversa com estudantes do 3º ano</figcaption>
</figure>
```

Classes de tamanho disponíveis: `span-4`, `span-6`, `span-8`, `span-12` e
`tall` (ocupa duas linhas).

## Exportar em PDF

Abra a página e use **Imprimir → Salvar como PDF**. O `print.css` revela as
animações, remove elementos flutuantes e organiza as quebras de página.

## Publicar (GitHub Pages)

Em *Settings → Pages*, selecione a branch e a raiz (`/`). Por ser estático,
não há etapa de build.
