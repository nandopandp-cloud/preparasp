# GenieX Design System

Documentação completa do Design System da plataforma GenieX baseado no [Style Guide no Figma](https://www.figma.com/design/iy5VCqeA0OjOFKvS1bQaFN/%F0%9F%8E%A8-Style-Guide---GenieX).

## 📋 Visão Geral

O Design System GenieX é uma biblioteca centralizada de componentes, tokens de design e padrões visuais que garantem consistência em toda a plataforma.

## 🎨 Cores (Color Tokens)

### Cores Base
- **Primary** - `base colors/primary/primary` - Cor principal da marca
- **Card** - `base colors/card/card` - Fundo de cards
- **Input** - `base colors/input/input` - Fundo de inputs
- **Border** - `base colors/border/border` - Cor de bordas
- **Muted** - `base colors/muted/muted` - Texto e elementos desabilitados
- **Ring** - `base colors/ring/ring` - Foco e outline
- **Popover** - `base colors/popover/popover` - Fundo de popovers
- **Success** - `base colors/sucess/sucess` - Estados de sucesso

### Cores de Charts
- **Chart 1-5** - `base colors/chart/chart-[1-5]` - Cores para gráficos

### Sombras
- **Small** - `shadow/sm/color` - Sombra pequena
- **2XL** - `shadow/2xl/color` - Sombra extra grande
- **Inner** - `shadow/inner/color` - Sombra interna

## 🔤 Tipografia

### Família de Fontes
- **Font Family** - `typography/font family/font`

### Tamanhos Base
Escalas de tipos pré-definidas:
- **Extra Small** - `typography/base sizes/extra small/font-size`
- **Small** - `typography/base sizes/small/font-size`
- **Base** - `typography/base sizes/base/font-size`
- **Large** - `typography/base sizes/large/font-size`
- **X Large** - `typography/base sizes/xlarge/font-size`
- **2X Large** - `typography/base sizes/2x large/font-size`
- **3X Large** - `typography/base sizes/3x large/font-size`
- **4X Large** - `typography/base sizes/4x large/font-size`
- **5X Large** - `typography/base sizes/5x large/font-size`

### Line Height
- **Base** - `typography/base sizes/base/line-height`
- **Small** - `typography/base sizes/small/line-height`
- **Large** - `typography/base sizes/large/line-height`
- **2X Large** - `typography/base sizes/2x large/line-height`

## 🧩 Componentes

### Button
- **Componente Set**: Button
- **Última atualização**: 2026-02-20
- **Variantes**: Diferentes estilos e tamanhos de botões

### Menubar
- **Trigger** - Botão que dispara o menu
- **Menu** - Container do menu com itens

### Cursor
- **Componente Set** - Estilos de cursor da plataforma

### Shortcut
- **Componente** - Indicador de atalhos de teclado

### Mobile (375px)
- **Componente** - Frame de referência mobile

## 📱 Responsividade

- **Mobile**: 375px - Base para mobile primeiro design

## 🔗 Bibliotecas Conectadas

### Primária
- **🎨 Style Guide - GenieX** - Library Team principal

### Secundária
- **Biblioteca de Ícones - Untitled UI Icons v.7.0** - Ícones do sistema

### Disponíveis (Community)
- Material 3 Design Kit
- Simple Design System
- iOS/iPadOS/watchOS/visionOS/macOS UI Kits

## 📦 Estrutura de Variáveis

### Collections
1. **1. Properties** - Propriedades base (sombras, etc)
2. **2. Themes** - Tipografia e temas
3. **3. Modes** - Cores base com suporte a Light/Dark mode

## 🚀 Como Usar

### Importar Componentes
```
Acesse o Figma > Style Guide GenieX > Copie os componentes necessários
```

### Aplicar Cores
Use as variáveis CSS correspondentes:
- `var(--color-primary)`
- `var(--color-card)`
- `var(--color-border)`
- etc.

### Aplicar Tipografia
Use os tamanhos base:
- `font-size: var(--typography-base-font-size)`
- `line-height: var(--typography-base-line-height)`

## 🔄 Modo Claro/Escuro

As variáveis de cor na collection "3. Modes" suportam light e dark modes através da seleção de modos no Figma.

## 📚 Referências

- [Figma Style Guide](https://www.figma.com/design/iy5VCqeA0OjOFKvS1bQaFN/%F0%9F%8E%A8-Style-Guide---GenieX)
- Última sincronização: 2026-05-13

---

**Mantém-se atualizado com as mudanças no Figma e sincroniza regularmente com o código.**
