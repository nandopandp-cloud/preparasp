/**
 * Design Tokens - GenieX Design System
 * Gerado a partir do Figma Style Guide - GenieX
 * Sincronizado em: 2026-05-13
 */

export const colorTokens = {
  // Base Colors
  primary: 'var(--color-primary)',
  card: 'var(--color-card)',
  input: 'var(--color-input)',
  border: 'var(--color-border)',
  muted: 'var(--color-muted)',
  ring: 'var(--color-ring)',
  popover: 'var(--color-popover)',
  success: 'var(--color-success)',

  // Chart Colors
  chart: {
    1: 'var(--color-chart-1)',
    2: 'var(--color-chart-2)',
    3: 'var(--color-chart-3)',
    4: 'var(--color-chart-4)',
    5: 'var(--color-chart-5)',
  },

  // Shadows
  shadow: {
    sm: 'var(--shadow-sm)',
    xl2: 'var(--shadow-2xl)',
    inner: 'var(--shadow-inner)',
  },
} as const;

export const typographyTokens = {
  fontFamily: 'var(--typography-font-family)',

  fontSize: {
    xs: 'var(--typography-font-size-extra-small)',
    sm: 'var(--typography-font-size-small)',
    base: 'var(--typography-font-size-base)',
    lg: 'var(--typography-font-size-large)',
    xl: 'var(--typography-font-size-xlarge)',
    '2xl': 'var(--typography-font-size-2x-large)',
    '3xl': 'var(--typography-font-size-3x-large)',
    '4xl': 'var(--typography-font-size-4x-large)',
    '5xl': 'var(--typography-font-size-5x-large)',
  },

  lineHeight: {
    base: 'var(--typography-line-height-base)',
    sm: 'var(--typography-line-height-small)',
    lg: 'var(--typography-line-height-large)',
    '2xl': 'var(--typography-line-height-2x-large)',
  },
} as const;

export const breakpoints = {
  mobile: '375px',
} as const;

// CSS Variables para serem definidas no :root
export const cssVariables = `
  :root {
    /* Colors - Base */
    --color-primary: #000000; /* Ajustar com valor real do Figma */
    --color-card: #ffffff;
    --color-input: #f5f5f5;
    --color-border: #e0e0e0;
    --color-muted: #9ca3af;
    --color-ring: #3b82f6;
    --color-popover: #ffffff;
    --color-success: #10b981;

    /* Colors - Charts */
    --color-chart-1: #3b82f6;
    --color-chart-2: #ef4444;
    --color-chart-3: #fbbf24;
    --color-chart-4: #8b5cf6;
    --color-chart-5: #06b6d4;

    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);

    /* Typography */
    --typography-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

    /* Font Sizes */
    --typography-font-size-extra-small: 0.75rem; /* 12px */
    --typography-font-size-small: 0.875rem; /* 14px */
    --typography-font-size-base: 1rem; /* 16px */
    --typography-font-size-large: 1.125rem; /* 18px */
    --typography-font-size-xlarge: 1.25rem; /* 20px */
    --typography-font-size-2x-large: 1.5rem; /* 24px */
    --typography-font-size-3x-large: 1.875rem; /* 30px */
    --typography-font-size-4x-large: 2.25rem; /* 36px */
    --typography-font-size-5x-large: 3rem; /* 48px */

    /* Line Heights */
    --typography-line-height-base: 1.5;
    --typography-line-height-small: 1.5;
    --typography-line-height-large: 1.6;
    --typography-line-height-2x-large: 1.4;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      /* Dark Mode Colors */
      --color-primary: #ffffff;
      --color-card: #1f2937;
      --color-input: #111827;
      --color-border: #374151;
      --color-muted: #6b7280;
      --color-popover: #111827;
    }
  }
`;
