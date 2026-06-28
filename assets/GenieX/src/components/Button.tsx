import React from 'react';
import { SpinnerLoading } from './SpinnerLoading';

type ButtonVariant = 'Default' | 'Secondary' | 'Destructive' | 'Outline' | 'Ghost' | 'Link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';
type ButtonState = 'Default' | 'Hover' | 'Loading' | 'Disabled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  size?: ButtonSize;
  state?: ButtonState;
  variant?: ButtonVariant;
}

const variantBase: Record<ButtonVariant, React.CSSProperties> = {
  Default: {
    backgroundColor: '#5258e4',
    color: '#ffffff',
    border: 'none',
  },
  Secondary: {
    backgroundColor: '#d3d5ff',
    color: '#4046ca',
    border: 'none',
  },
  Destructive: {
    backgroundColor: '#d31510',
    color: '#ffffff',
    border: 'none',
  },
  Outline: {
    backgroundColor: 'transparent',
    color: '#5258e4',
    border: '1px solid #5258e4',
  },
  Ghost: {
    backgroundColor: 'transparent',
    color: '#0d0d0d',
    border: 'none',
  },
  Link: {
    backgroundColor: 'transparent',
    color: '#5258e4',
    border: 'none',
  },
};

// Hover background-image overlay (rgba(0,0,0,0.1) over solid bg)
const variantHoverBg: Record<ButtonVariant, string | undefined> = {
  Default: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), linear-gradient(#5258e4, #5258e4)',
  Secondary: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), linear-gradient(#d3d5ff, #d3d5ff)',
  Destructive: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), linear-gradient(#d31510, #d31510)',
  Outline: undefined,
  Ghost: undefined,
  Link: undefined,
};

const variantHoverStyles: Record<ButtonVariant, React.CSSProperties> = {
  Default: { backgroundImage: variantHoverBg.Default },
  Secondary: { backgroundImage: variantHoverBg.Secondary },
  Destructive: { backgroundImage: variantHoverBg.Destructive },
  Outline: { backgroundColor: 'rgba(82,88,228,0.08)' },
  Ghost: { backgroundColor: 'rgba(0,0,0,0.1)' },
  Link: { textDecoration: 'underline' },
};

// Heights per Figma: sm=36px, md=44px, lg=64px, icon=40px
const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    height: 36,
    padding: '8px 10px',
    gap: 8,
  },
  md: {
    height: 44,
    padding: '8px 14px',
    gap: 8,
  },
  lg: {
    height: 64,
    padding: '16px 20px',
    gap: 8,
  },
  icon: {
    height: 40,
    width: 40,
    padding: 8,
    gap: 0,
  },
};

const spinnerVariant: Record<ButtonVariant, string> = {
  Default: 'Default',
  Secondary: 'Secondary',
  Destructive: 'Destructive',
  Outline: 'Outline',
  Ghost: 'Ghost',
  Link: 'Link',
};

export function Button({
  buttonText = 'Button',
  leftIcon = null,
  rightIcon = null,
  showLeftIcon = true,
  showRightIcon = false,
  size = 'md',
  state = 'Default',
  variant = 'Default',
  className,
  style,
  ...props
}: ButtonProps) {
  const isDisabled = state === 'Disabled' || state === 'Loading';
  const isHover = state === 'Hover';
  const isLoading = state === 'Loading';
  const isLink = variant === 'Link';

  const base = variantBase[variant];
  const sizeStyle = sizeStyles[size];
  const hoverOverride = isHover ? variantHoverStyles[variant] : {};

  const computedStyle: React.CSSProperties = {
    ...base,
    ...sizeStyle,
    ...hoverOverride,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '24px',
    borderRadius: 8,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.5 : 1,
    transition: 'all 0.15s ease-in-out',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    flexShrink: 0,
    textDecoration: isLink && !isHover ? 'none' : undefined,
    ...style,
  };

  const iconSize = 20;

  return (
    <button
      style={computedStyle}
      disabled={isDisabled}
      className={className}
      {...props}
    >
      {isLoading ? (
        <SpinnerLoading
          variant={spinnerVariant[variant] as any}
          size={iconSize}
          style={{ flexShrink: 0 }}
        />
      ) : (
        showLeftIcon && leftIcon && (
          <span style={{ display: 'flex', alignItems: 'center', width: iconSize, height: iconSize, flexShrink: 0 }}>
            {leftIcon}
          </span>
        )
      )}
      {size !== 'icon' && <span>{buttonText}</span>}
      {!isLoading && showRightIcon && rightIcon && (
        <span style={{ display: 'flex', alignItems: 'center', width: iconSize, height: iconSize, flexShrink: 0 }}>
          {rightIcon}
        </span>
      )}
    </button>
  );
}

export default Button;
