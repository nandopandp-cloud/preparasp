# GenieX Design System Rules

These rules guide all Figma-driven implementation in the GenieX codebase. Follow them consistently when translating Figma designs to code.

## Project Overview

- **Framework**: React + TypeScript
- **Component Library**: shadcn/ui (via CLI)
- **Styling**: CSS-in-JS with design tokens
- **Design System**: Figma variables with light/dark mode support
- **Mobile First**: Base breakpoint at 375px

## Component Organization

### Directory Structure

```
src/
  components/
    [ComponentName].tsx        # Component implementation
    index.ts                   # Exports for all components
```

- All UI components live in `src/components/`
- One component per file (PascalCase naming)
- Export components from `src/components/index.ts` for easy imports

### Component File Structure

Each component file must follow this structure:

```typescript
// 1. Imports (React, then design tokens, then utils)
import React from 'react';
import { colorTokens, typographyTokens } from '../design-tokens';

// 2. Type definitions
interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// 3. Style objects using design tokens
const styles = {
  // Define all styles here using design tokens
};

// 4. Component export
export function ComponentName({ ...props }: ComponentProps) {
  return <div style={styles.container}>{children}</div>;
}
```

### Naming Conventions

- Component names: **PascalCase** (e.g., `Button`, `MenuBar`, `Shortcut`)
- Prop names: **camelCase** (e.g., `variant`, `size`, `isDisabled`)
- Token references: **snake_case** (e.g., `color-primary`, `typography-font-size-base`)

## Design Tokens

### Token System

All design tokens are centralized in `design-tokens.ts`:

```typescript
import { colorTokens, typographyTokens } from '../design-tokens';
```

### Color Tokens

**IMPORTANT: Never hardcode colors. Always use tokens from `colorTokens`.**

Available colors:
- `colorTokens.primary` - Primary brand color
- `colorTokens.card` - Card background
- `colorTokens.input` - Input field background
- `colorTokens.border` - Border color
- `colorTokens.muted` - Disabled/muted text
- `colorTokens.ring` - Focus/outline color
- `colorTokens.popover` - Popover background
- `colorTokens.success` - Success state color
- `colorTokens.chart[1-5]` - Chart colors
- `colorTokens.shadow.sm` - Small shadow
- `colorTokens.shadow.xl2` - Extra-large shadow
- `colorTokens.shadow.inner` - Inner shadow

### Typography Tokens

**IMPORTANT: All text styling must use typography tokens.**

Font sizes (via `typographyTokens.fontSize`):
- `xs` - Extra small (12px)
- `sm` - Small (14px)
- `base` - Base (16px)
- `lg` - Large (18px)
- `xl` - X-large (20px)
- `2xl` - 2X-large (24px)
- `3xl` - 3X-large (30px)
- `4xl` - 4X-large (36px)
- `5xl` - 5X-large (48px)

Line heights (via `typographyTokens.lineHeight`):
- `base` - 1.5
- `sm` - 1.5
- `lg` - 1.6
- `2xl` - 1.4

Font family (via `typographyTokens.fontFamily`):
- System fonts: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, etc.`

## Styling Approach

### CSS-in-JS with Design Tokens

All styling must use inline styles with design token variables:

```typescript
const styles = {
  button: {
    backgroundColor: colorTokens.primary,
    color: '#ffffff',
    fontSize: typographyTokens.fontSize.base,
    lineHeight: typographyTokens.lineHeight.base,
    fontFamily: typographyTokens.fontFamily,
    padding: '0.625rem 1.25rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    boxShadow: colorTokens.shadow.sm,
  },
};
```

### Component Props for Styling

Components must accept a `className` prop for composition:

```typescript
interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function Component({ className, ...props }: ComponentProps) {
  return <div style={styles.container} className={className} {...props} />;
}
```

### Variant Pattern

Use union types for variants:

```typescript
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}
```

## Figma MCP Integration Rules

### Required Workflow (do not skip)

1. **Get Design Context**: Run `get_design_context` with the exact node ID and file key to fetch the structured representation
2. **Get Screenshot**: Run `get_screenshot` to see a visual reference of the design
3. **Analyze Output**: Review the React + Tailwind reference code and understand the layout, structure, and interactions
4. **Map to Design Tokens**: Translate Figma colors, typography, and spacing to GenieX design tokens
5. **Implement Component**: Create component using the project's CSS-in-JS pattern with design tokens
6. **Validate**: Compare final implementation against the Figma screenshot for 1:1 visual parity

### Implementation Rules

- **IMPORTANT: Always run get_design_context first** — it provides the authoritative representation of the design
- Treat the Figma MCP output (React + Tailwind) as a design reference, not final code to copy
- Replace all hardcoded colors with `colorTokens` references
- Replace all hardcoded font sizes with `typographyTokens.fontSize` references
- Replace all hardcoded line heights with `typographyTokens.lineHeight` references
- Reuse existing components from `src/components/` instead of duplicating functionality
- Maintain consistent spacing using the 4px base scale (4px, 8px, 12px, 16px, 20px, 24px, 32px, etc.)
- Respect all existing patterns in the codebase for state management, event handling, and composition
- Strive for visual parity with the Figma design while maintaining code quality

### Asset Handling

- **IMPORTANT: Use localhost sources from Figma MCP server directly** — the server provides optimized asset URLs
- **IMPORTANT: DO NOT install new icon packages** — all icons should come from Figma or the design system
- **DO NOT use placeholders** if a localhost source is provided by the Figma MCP server
- Store downloaded assets in `public/assets/` if local storage is needed
- Reference assets using relative paths from the public directory

## Component Development Workflow

### When Implementing from Figma

1. Extract node ID and file key from the Figma URL
2. Call `get_design_context(nodeId, fileKey)` with the exact node
3. Call `get_screenshot(nodeId, fileKey)` for visual reference
4. Analyze the returned code structure and design tokens used
5. Create component in `src/components/[ComponentName].tsx`
6. Use design tokens for all styling (colors, typography, shadows)
7. Test all variants and states against the Figma design
8. Export from `src/components/index.ts`

### Component Checklist

- [ ] Uses only design tokens (no hardcoded values)
- [ ] Implements all variants defined in Figma
- [ ] Supports `className` prop for composition
- [ ] Uses proper TypeScript types for all props
- [ ] Follows the directory structure
- [ ] Exported from `src/components/index.ts`
- [ ] Matches Figma design visually (verified against screenshot)

## Design System References

### Figma Style Guide

- **File**: [🎨 Style Guide - GenieX](https://www.figma.com/design/iy5VCqeA0OjOFKvS1bQaFN/%F0%9F%8E%A8-Style-Guide---GenieX)
- **Libraries**: Untitled UI Icons v.7.0 (secondary library for icons)
- **Variables Collections**:
  - 1. Properties (shadows, spacing)
  - 2. Themes (typography, semantic tokens)
  - 3. Modes (colors with light/dark variants)

### Local Token Files

- `design-tokens.ts` - Central token definitions
- `DESIGN_SYSTEM.md` - Detailed design system documentation

## Light/Dark Mode Support

All color tokens automatically support light/dark mode through CSS variables:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #ffffff;
    --color-card: #1f2937;
    /* ... etc */
  }
}
```

When using `colorTokens`, the correct color is automatically selected based on system preference.

## Common Patterns

### Button with Variants and Sizes

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const buttonVariants = {
  primary: {
    backgroundColor: colorTokens.primary,
    color: '#ffffff',
    border: 'none',
  },
  // ... other variants
};

const buttonSizes = {
  md: {
    padding: '0.625rem 1.25rem',
    fontSize: typographyTokens.fontSize.base,
  },
  // ... other sizes
};

export function Button({ variant = 'primary', size = 'md', children, ...props }: ButtonProps) {
  return (
    <button style={{ ...buttonVariants[variant], ...buttonSizes[size] }} {...props}>
      {children}
    </button>
  );
}
```

### Composable Component with className

```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: colorTokens.card,
        borderRadius: '0.5rem',
        boxShadow: colorTokens.shadow.sm,
        padding: '1rem',
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
```

## Best Practices

### Do

- ✅ Use design tokens for all visual properties
- ✅ Keep components focused and single-responsibility
- ✅ Support composition via `className` prop
- ✅ Use TypeScript interfaces for prop types
- ✅ Follow the existing component patterns in `Button.tsx`
- ✅ Reference Figma designs for behavior and edge cases
- ✅ Test components against Figma screenshots
- ✅ Use meaningful variable names for style objects

### Don't

- ❌ Hardcode colors, sizes, or spacing values
- ❌ Import icon libraries — use Figma assets
- ❌ Create components in random locations
- ❌ Skip the `get_design_context` step when implementing from Figma
- ❌ Use CSS files or styled-components
- ❌ Duplicate existing components
- ❌ Use placeholder values in production
- ❌ Override design tokens without explicit approval

## Troubleshooting

### Issue: Figma colors don't match implementation

**Solution**: Verify you're using the correct token from `colorTokens`. Check that the CSS variable is defined in `design-tokens.ts`.

### Issue: Typography looks off

**Solution**: Ensure you're using `typographyTokens.fontFamily`, `typographyTokens.fontSize`, and `typographyTokens.lineHeight` together. Never mix hardcoded values with tokens.

### Issue: Component layout doesn't match Figma

**Solution**: Run `get_screenshot` again and compare the layout structure. Check padding, margin, and flexbox/grid properties. Verify that spacing values match the design system scale.

### Issue: Variant logic is complex

**Solution**: Use object maps (like `buttonVariants`) to keep variant styles organized and maintainable. Consider if multiple simpler components would be clearer than one complex component with many variants.

## Questions?

Refer to:
- `DESIGN_SYSTEM.md` - Design system overview
- `design-tokens.ts` - Available tokens
- `src/components/Button.tsx` - Reference implementation
- Figma Style Guide - Design reference

Last updated: 2026-05-13
