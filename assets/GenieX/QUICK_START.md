# 🚀 Quick Start - GenieX Components

Guia rápido para começar a usar os componentes implementados.

## 📦 Componentes Disponíveis

### 1. Button Component
Botão customizável com 6 variantes, 4 tamanhos e 4 estados.

```tsx
import { Button } from '@/components';

<Button 
  buttonText="Click me"
  size="md"
  variant="Default"
  state="Default"
/>
```

**Props principais:**
- `buttonText` - Texto do botão
- `size` - 'sm' | 'md' | 'lg' | 'icon'
- `variant` - 'Default' | 'Secondary' | 'Destructive' | 'Outline' | 'Ghost' | 'Link'
- `state` - 'Default' | 'Hover' | 'Loading' | 'Disabled'
- `leftIcon` - React.ReactNode para ícone esquerdo
- `rightIcon` - React.ReactNode para ícone direito

### 2. Spinner Loading Component
Spinner animado com 6 variantes e 4 steps de animação.

```tsx
import { SpinnerLoading } from '@/components';

<SpinnerLoading 
  step="1"
  variant="Default"
  size={24}
/>
```

**Props principais:**
- `step` - '1' | '2' | '3' | '4'
- `variant` - 'Default' | 'Secondary' | 'Destructive' | 'Outline' | 'Ghost' | 'Link'
- `size` - number (em pixels, default: 16)

### 3. Toast Component
Notificação/toast com múltiplos tipos e estados.

```tsx
import { Toast } from '@/components';

<Toast
  titleText="Sucesso!"
  descriptionText="Operação concluída."
  type="Success"
  showTitle={true}
  showButton={true}
/>
```

**Props principais:**
- `titleText` - Título do toast
- `descriptionText` - Descrição/mensagem
- `type` - 'Default' | 'Success' | 'Warning' | 'Destructive'
- `showTitle` - Exibir título (default: true)
- `showButton` - Exibir botão "Fechar" (default: true)
- `onClose` - Callback ao fechar

---

## 🎨 Exemplos de Uso

### Button - Variantes

```tsx
// Primary Button
<Button buttonText="Save" variant="Default" />

// Secondary Button
<Button buttonText="Cancel" variant="Secondary" />

// Destructive Button
<Button buttonText="Delete" variant="Destructive" />

// Outline Button
<Button buttonText="Action" variant="Outline" />

// Ghost Button
<Button buttonText="Learn More" variant="Ghost" />

// Link Button
<Button buttonText="View Details" variant="Link" />
```

### Button - Tamanhos

```tsx
// Small
<Button buttonText="Sm" size="sm" />

// Medium (default)
<Button buttonText="Md" size="md" />

// Large
<Button buttonText="Lg" size="lg" />

// Icon only
<Button size="icon" leftIcon={<Icon />} showLeftIcon />
```

### Button - Estados

```tsx
// Normal
<Button buttonText="Click" state="Default" />

// Hover effect
<Button buttonText="Hover me" state="Hover" />

// Loading state
<Button buttonText="Loading..." state="Loading" />

// Disabled
<Button buttonText="Disabled" state="Disabled" disabled />
```

### Button - Com Ícones

```tsx
// Ícone à esquerda
<Button 
  buttonText="Download"
  leftIcon={<DownloadIcon />}
  showLeftIcon={true}
/>

// Ícone à direita
<Button 
  buttonText="Next"
  rightIcon={<ArrowIcon />}
  showRightIcon={true}
/>

// Ambos os ícones
<Button 
  buttonText="Action"
  leftIcon={<LeftIcon />}
  rightIcon={<RightIcon />}
  showLeftIcon={true}
  showRightIcon={true}
/>
```

### Spinner - Básico

```tsx
// Tamanho padrão (16px)
<SpinnerLoading />

// Tamanho customizado
<SpinnerLoading size={32} />
<SpinnerLoading size={48} />
<SpinnerLoading size={64} />
```

### Spinner - Variantes

```tsx
<SpinnerLoading variant="Default" size={24} />
<SpinnerLoading variant="Secondary" size={24} />
<SpinnerLoading variant="Destructive" size={24} />
<SpinnerLoading variant="Outline" size={24} />
<SpinnerLoading variant="Ghost" size={24} />
<SpinnerLoading variant="Link" size={24} />
```

### Spinner - Animação (Steps)

```tsx
// Step 1
<SpinnerLoading step="1" size={24} />

// Step 2
<SpinnerLoading step="2" size={24} />

// Step 3
<SpinnerLoading step="3" size={24} />

// Step 4
<SpinnerLoading step="4" size={24} />
```

### Toast - Tipos

```tsx
// Default
<Toast type="Default" titleText="Informação" descriptionText="Mensagem padrão" />

// Success
<Toast type="Success" titleText="Sucesso!" descriptionText="Ação concluída com sucesso" />

// Warning
<Toast type="Warning" titleText="Atenção" descriptionText="Verifique seus dados" />

// Destructive
<Toast type="Destructive" titleText="Erro" descriptionText="Algo deu errado" />
```

### Casos de Uso Reais

```tsx
// Button com loading state
const [loading, setLoading] = useState(false);

<Button
  buttonText={loading ? "Salvando..." : "Salvar"}
  state={loading ? "Loading" : "Default"}
  disabled={loading}
  onClick={async () => {
    setLoading(true);
    // ... do something
    setLoading(false);
  }}
/>

// Spinner em página de carregamento
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
  <SpinnerLoading size={48} variant="Default" />
  <p>Carregando dados...</p>
</div>

// Button com ícone e loading
<Button
  buttonText={isLoading ? "Processando..." : "Processar"}
  leftIcon={isLoading ? <SpinnerLoading size={16} /> : <ProcessIcon />}
  showLeftIcon={true}
  state={isLoading ? "Loading" : "Default"}
  disabled={isLoading}
/>

// Toast com notificação de sucesso
const [showToast, setShowToast] = useState(false);

{showToast && (
  <Toast
    type="Success"
    titleText="Salvo!"
    descriptionText="Seus dados foram salvos com sucesso."
    onClose={() => setShowToast(false)}
  />
)}

// Toast para erros
<Toast
  type="Destructive"
  titleText="Erro ao Salvar"
  descriptionText="Ocorreu um erro ao processar sua solicitação."
  showButton={true}
/>

// Toast de aviso
<Toast
  type="Warning"
  titleText="Aviso"
  descriptionText="Esta ação não pode ser desfeita."
  showButton={true}
/>
```

---

## 🎪 Ver Todos os Componentes

Para visualizar todos os componentes de forma interativa, importe o `ComponentShowcase`:

```tsx
import { ComponentShowcase } from '@/components/ComponentShowcase';

export default function ShowcasePage() {
  return <ComponentShowcase />;
}
```

O showcase oferece:
- Controles interativos
- Preview em tempo real
- Grade de todas as combinações
- Documentação integrada

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Button.tsx              # Componente de botão
│   ├── SpinnerLoading.tsx      # Componente de spinner
│   ├── Toast.tsx               # Componente de notificação
│   ├── ComponentShowcase.tsx   # Demonstração interativa
│   └── index.ts                # Exports
│
└── pages/
    └── components/
        └── showcase.tsx        # Página com showcase (opcional)
```

---

## 🔧 Instalação

Os componentes já estão criados e prontos para usar!

```tsx
// 1. Importe onde precisar
import { Button, SpinnerLoading, Toast } from '@/components';

// 2. Use nos seus componentes
export function MyComponent() {
  return (
    <>
      <Button buttonText="Click me" />
      <Toast type="Success" descriptionText="Bem-vindo!" />
    </>
  );
}
```

---

## 📚 Documentação Completa

Para mais detalhes, veja:
- `COMPONENTS.md` - Documentação detalhada
- `src/components/Button.tsx` - Código do Button
- `src/components/SpinnerLoading.tsx` - Código do Spinner
- `src/components/ComponentShowcase.tsx` - Exemplos interativos

---

## 🎯 Próximas Adições

Para adicionar mais componentes:

1. Crie um novo arquivo em `src/components/NovoComponente.tsx`
2. Exporte em `src/components/index.ts`
3. Adicione exemplos em `ComponentShowcase.tsx`
4. Documente em `COMPONENTS.md`

Siga o padrão dos componentes existentes para manter consistência!

---

## 💡 Dicas

- Todos os componentes suportam props nativas do HTML (className, style, etc)
- Use `buttonText` para o texto do botão (não children)
- Customize cores usando design tokens quando necessário
- Combine estados e variantes para diferentes efeitos visuais

---

**Versionado em:** 2026-05-13
**Versão:** 1.0.0
