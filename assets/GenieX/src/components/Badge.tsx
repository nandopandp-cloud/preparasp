import React from 'react';

export type BadgeVariant = 'Default' | 'Secondary' | 'Outline' | 'Destructive';
export type BadgeState = 'Default' | 'Hover';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  variant?: BadgeVariant;
  state?: BadgeState;
}

const variantBase: Record<BadgeVariant, React.CSSProperties> = {
  Default:     { backgroundColor: '#5258e4', color: '#ffffff', border: 'none' },
  Secondary:   { backgroundColor: '#d3d5ff', color: '#4046ca', border: 'none' },
  Outline:     { backgroundColor: '#ffffff', color: '#0d0d0d', border: '1px solid #e6e6e6' },
  Destructive: { backgroundColor: '#d31510', color: '#ffffff', border: 'none' },
};

const variantHoverBg: Record<BadgeVariant, string> = {
  Default:     'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), linear-gradient(#5258e4,#5258e4)',
  Secondary:   'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), linear-gradient(#d3d5ff,#d3d5ff)',
  Outline:     'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), linear-gradient(#ffffff,#ffffff)',
  Destructive: 'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), linear-gradient(#d31510,#d31510)',
};

export function Badge({
  children = 'Badge',
  leftIcon,
  rightIcon,
  showLeftIcon = false,
  showRightIcon = false,
  variant = 'Default',
  state = 'Default',
  className,
  style,
  ...props
}: BadgeProps) {
  const isHover = state === 'Hover';
  const base = variantBase[variant];

  return (
    <div
      className={className}
      style={{
        ...base,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        height: 36,
        padding: '8px 12px',
        borderRadius: 8,
        boxSizing: 'border-box',
        cursor: 'default',
        ...(isHover && { backgroundImage: variantHoverBg[variant], backgroundColor: undefined }),
        ...style,
      }}
      {...props}
    >
      {showLeftIcon && leftIcon && (
        <span style={{ display: 'inline-flex', width: 20, height: 20, flexShrink: 0 }}>
          {leftIcon}
        </span>
      )}
      <span style={{
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        color: 'inherit',
      }}>
        {children}
      </span>
      {showRightIcon && rightIcon && (
        <span style={{ display: 'inline-flex', width: 20, height: 20, flexShrink: 0 }}>
          {rightIcon}
        </span>
      )}
    </div>
  );
}

export default Badge;
