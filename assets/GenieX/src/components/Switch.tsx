import React from 'react';

export interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: 'sm' | 'md';
}

export function Switch({
  checked = false,
  onCheckedChange,
  size = 'md',
  className,
  style,
  onClick,
  disabled,
  ...props
}: SwitchProps) {
  const width = size === 'md' ? 44 : 36;
  const height = size === 'md' ? 24 : 20;
  const thumbSize = size === 'md' ? 20 : 16;
  const thumbOffset = size === 'md' ? 2 : 2;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onCheckedChange?.(!checked);
      onClick?.(e);
    }
  };

  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={handleClick}
      disabled={disabled}
      className={className}
      style={{
        position: 'relative',
        width,
        height,
        borderRadius: 9999,
        border: 'none',
        backgroundColor: checked ? '#5258e4' : 'rgba(0,0,0,0.15)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: 0,
        flexShrink: 0,
        opacity: disabled ? 0.5 : 1,
        transition: 'background-color 0.2s ease',
        ...style,
      }}
      {...props}
    >
      <div style={{
        position: 'absolute',
        top: thumbOffset,
        left: checked ? width - thumbSize - thumbOffset : thumbOffset,
        width: thumbSize,
        height: thumbSize,
        borderRadius: 9999,
        backgroundColor: '#ffffff',
        transition: 'left 0.2s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }} />
    </button>
  );
}

export default Switch;
