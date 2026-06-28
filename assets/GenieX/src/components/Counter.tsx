import React from 'react';

export type CounterVariant = 'Default' | 'Secondary' | 'Outline' | 'Destructive';

export interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  number?: string | number;
  variant?: CounterVariant;
}

const variantStyles: Record<CounterVariant, React.CSSProperties> = {
  Default:     { backgroundColor: '#5258e4', color: '#ffffff', border: 'none' },
  Secondary:   { backgroundColor: '#d3d5ff', color: '#4046ca', border: 'none' },
  Outline:     { backgroundColor: '#ffffff', color: '#0d0d0d', border: '1px solid #e6e6e6' },
  Destructive: { backgroundColor: '#d31510', color: '#ffffff', border: 'none' },
};

export function Counter({
  number = '0',
  variant = 'Default',
  className,
  style,
  ...props
}: CounterProps) {
  return (
    <div
      className={className}
      style={{
        ...variantStyles[variant],
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 16,
        height: 16,
        borderRadius: 9999,
        flexShrink: 0,
        boxSizing: 'border-box',
        ...style,
      }}
      {...props}
    >
      <span style={{
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        color: 'inherit',
      }}>
        {number}
      </span>
    </div>
  );
}

export default Counter;
