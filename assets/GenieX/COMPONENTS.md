# 🎨 GenieX Components

Documentação dos componentes implementados baseados no Figma Style Guide.

## 📦 Componentes Implementados

### 1. Button Component

**Arquivo:** `src/components/Button.tsx`

Componente de botão altamente customizável com suporte a múltiplas variantes, tamanhos, ícones e estados.

#### Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText?: string;              // Texto do botão
  leftIcon?: React.ReactNode;       // Ícone à esquerda
  rightIcon?: React.ReactNode;      // Ícone à direita
  showLeftIcon?: boolean;           // Mostrar ícone esquerdo
  showRightIcon?: boolean;          // Mostrar ícone direito
  size?: 'sm' | 'md' | 'lg' | 'icon';
  state?: 'Default' | 'Hover' | 'Loading' | 'Disabled';
  variant?: 'Default' | 'Secondary' | 'Destructive' | 'Outline' | 'Ghost' | 'Link';
}
```

#### Variantes

| Variante | Descrição | Cor Background |
|----------|-----------|-----------------|
| **Default** | Botão primário | #5258e4 (Purple) |
| **Secondary** | Botão secundário | #f3f4f6 (Gray) |
| **Destructive** | Ação destrutiva | #ef4444 (Red) |
| **Outline** | Com borda | Transparente |
| **Ghost** | Sem fundo | Transparente |
| **Link** | Estilo link | Transparente |

#### Tamanhos

| Tamanho | Dimensões | Padding | Font Size |
|---------|-----------|---------|-----------|
| **sm** | Small | 0.5rem 1rem | 0.875rem (14px) |
| **md** | Medium | 0.625rem 1.25rem | 1rem (16px) |
| **lg** | Large | 0.75rem 1.5rem | 1.125rem (18px) |
| **icon** | Icon only | 0.5rem | 1rem (16px) |

#### Estados

| Estado | Comportamento |
|--------|---------------|
| **Default** | Estado normal, opacity: 1 |
| **Hover** | Hover state, opacity: 0.9 + shadow |
| **Loading** | Carregando, opacity: 0.7 |
| **Disabled** | Desabilitado, opacity: 0.5 |

#### Exemplos

```tsx
import { Button } from '@/components';

// Botão padrão
<Button buttonText="Click me" />

// Botão com ícone
<Button 
  buttonText="Download"
  leftIcon={<DownloadIcon />}
  showLeftIcon={true}
/>

// Botão grande destrutivo
<Button 
  buttonText="Delete"
  size="lg"
  variant="Destructive"
/>

// Botão desabilitado
<Button 
  buttonText="Submit"
  state="Disabled"
  disabled={true}
/>

// Botão link
<Button 
  buttonText="Learn more"
  variant="Link"
/>
```

---

### 2. Spinner Loading Component

**Arquivo:** `src/components/SpinnerLoading.tsx`

Componente de spinner/loader com animação de carregamento em 4 steps, múltiplas variantes e cores.

#### Props

```typescript
interface SpinnerLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  step?: '1' | '2' | '3' | '4';     // Etapa da animação
  variant?: 'Default' | 'Secondary' | 'Destructive' | 'Outline' | 'Ghost' | 'Link';
  size?: number;                     // Tamanho em pixels (padrão: 16)
}
```

#### Variantes

| Variante | Cor | Uso |
|----------|-----|-----|
| **Default** | #5258e4 (Purple) | Carregamento padrão |
| **Secondary** | #f3f4f6 (Gray) | Carregamento secundário |
| **Destructive** | #ef4444 (Red) | Carregamento de ação destrutiva |
| **Outline** | #e5e7eb (Border) | Carregamento com borda |
| **Ghost** | #ffffff (White) | Carregamento transparente |
| **Link** | #5258e4 (Purple) | Carregamento em link |

#### Steps de Animação

A animação passa por 4 steps para criar uma sequência suave:

1. **Step 1**: Primeira etapa da animação
2. **Step 2**: Segunda etapa (metade da rotação)
3. **Step 3**: Terceira etapa (3/4 da rotação)
4. **Step 4**: Etapa final com rotação completa

#### Tamanhos

O componente aceita qualquer tamanho em pixels:

```tsx
<SpinnerLoading size={16} />  // 16px (padrão)
<SpinnerLoading size={24} />  // 24px
<SpinnerLoading size={32} />  // 32px
<SpinnerLoading size={48} />  // 48px
```

#### Exemplos

```tsx
import { SpinnerLoading } from '@/components';

// Spinner padrão
<SpinnerLoading />

// Spinner grande
<SpinnerLoading size={48} />

// Spinner destrutivo
<SpinnerLoading variant="Destructive" size={32} />

// Spinner em um contexto de loading
<div>
  <SpinnerLoading variant="Default" size={24} />
  <p>Carregando...</p>
</div>

// Spinner em botão carregando
<Button 
  buttonText={<SpinnerLoading size={16} />}
  state="Loading"
  disabled={true}
/>
```

---

### 3. Toast Component

**Arquivo:** `src/components/Toast.tsx`

Componente de notificação/toast com suporte a múltiplos tipos, título, descrição e ação de fechamento.

#### Props

```typescript
interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  titleText?: string;              // Título do toast
  descriptionText?: string;        // Descrição do toast
  type?: 'Default' | 'Success' | 'Warning' | 'Destructive';
  showTitle?: boolean;             // Mostrar título
  showButton?: boolean;            // Mostrar botão de fechar
  onClose?: () => void;            // Callback ao fechar
}
```

#### Tipos

| Tipo | Cor Background | Cor Texto | Cor Botão |
|------|-----------------|-----------|-----------|
| **Default** | #ffffff (White) | #0d0d0d (Black) | Border #e6e6e6 |
| **Success** | #007a4d (Green) | #ffffff (White) | Border White |
| **Warning** | #c59319 (Amber) | #ffffff (White) | Border White |
| **Destructive** | #d31510 (Red) | #ffffff (White) | Border White |

#### Características

- Suporte a título e descrição
- Botão "Fechar" customizável
- Sombra drop-shadow lg
- Border-radius: 8px
- Largura: 388px
- Padding: 24px
- Gap entre elementos: 16px
- Responsive com flexbox

#### Exemplos

```tsx
import { Toast } from '@/components';

// Toast padrão
<Toast
  titleText="Sucesso!"
  descriptionText="Sua ação foi concluída com sucesso."
  type="Success"
  showTitle={true}
  showButton={true}
/>

// Toast de erro
<Toast
  titleText="Erro"
  descriptionText="Algo deu errado. Tente novamente."
  type="Destructive"
  onClose={() => console.log('Toast fechado')}
/>

// Toast simples (sem título)
<Toast
  descriptionText="Notificação simples"
  type="Warning"
  showTitle={false}
/>

// Toast sem botão de ação
<Toast
  titleText="Carregando"
  descriptionText="Processando sua solicitação..."
  type="Default"
  showButton={false}
/>
```

#### Estados e Variações

- **showTitle**: Controla visibilidade do título
- **showButton**: Controla visibilidade do botão "Fechar"
- **type**: Define o tipo visual e semântico da notificação
- **onClose**: Handler para ação de fechar

---

## 🎯 Component Showcase

Para visualizar todos os componentes de forma interativa, use o `ComponentShowcase`:

**Arquivo:** `src/components/ComponentShowcase.tsx`

```tsx
import { ComponentShowcase } from '@/components/ComponentShowcase';

export default function Page() {
  return <ComponentShowcase />;
}
```

O showcase inclui:
- Seletor interativo de variantes, tamanhos e estados
- Grade visual de todas as combinações
- Preview em tempo real
- Exemplos de animação

---

## 📐 Design Tokens Utilizados

Todos os componentes usam design tokens baseados no Figma Style Guide:

### Cores
```css
--color-primary: #5258e4;
--color-primary-foreground: #ffffff;
--color-secondary: #f3f4f6;
--color-destructive: #ef4444;
--color-border: #e5e7eb;
```

### Tipografia
```css
--font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-size-sm: 0.875rem;     /* 14px */
--font-size-md: 1rem;          /* 16px */
--font-size-lg: 1.125rem;      /* 18px */
--font-weight-medium: 500;
```

### Espaçamento
```css
--border-radius-sm: 0.375rem;  /* 6px */
```

### Sombras
```css
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
```

---

## 🔧 Customização

### Estender um componente

```tsx
import { Button } from '@/components';

export function MyCustomButton(props) {
  return (
    <Button
      {...props}
      style={{
        ...props.style,
        fontWeight: 700, // Custom style
      }}
    />
  );
}
```

### Combinar com outras bibliotecas

```tsx
import { Button } from '@/components';
import { twMerge } from 'tailwind-merge'; // Se usando Tailwind

export function StyledButton({ className, ...props }) {
  return (
    <Button
      className={twMerge('custom-class', className)}
      {...props}
    />
  );
}
```

---

## 📋 Checklist de Implementação

### Button Component
- ✅ 6 variantes (Default, Secondary, Destructive, Outline, Ghost, Link)
- ✅ 4 tamanhos (sm, md, lg, icon)
- ✅ 4 estados (Default, Hover, Loading, Disabled)
- ✅ Suporte a ícones esquerdo e direito
- ✅ Props customizáveis (buttonText, leftIcon, rightIcon)
- ✅ Tipagem TypeScript completa
- ✅ Acessibilidade básica (disabled prop)

### Spinner Loading Component
- ✅ 6 variantes de cor
- ✅ 4 steps de animação
- ✅ Tamanho customizável
- ✅ Animação CSS suave
- ✅ Tipagem TypeScript completa
- ✅ SVG rendering

### Documentation
- ✅ README com exemplos
- ✅ Component Showcase interativo
- ✅ Definição de props
- ✅ Design tokens referenciados

---

## 🚀 Próximos Passos

Para adicionar mais componentes:

1. Criar novo arquivo em `src/components/[ComponentName].tsx`
2. Exportar em `src/components/index.ts`
3. Adicionar ao `ComponentShowcase.tsx`
4. Documentar em `COMPONENTS.md`

---

## 📞 Referências

- **Figma Style Guide**: https://www.figma.com/design/iy5VCqeA0OjOFKvS1bQaFN/Style-Guide---GenieX
- **Button Design**: node-id=275-6307
- **Spinner Loading Design**: node-id=275-6608
- **Avatar Design**: node-id=256-324

---

**Última atualização**: 2026-05-13
**Versão**: 1.0.0
