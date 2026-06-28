import React from 'react';

export interface CheckboxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  labelText?: string;
  descriptionText?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  size?: 'sm' | 'lg';
  indeterminate?: boolean;
}

export function Checkbox({
  checked = false,
  onCheckedChange,
  labelText = 'Checkbox Label',
  descriptionText = 'This is a checkbox description.',
  showLabel = true,
  showDescription = false,
  size = 'sm',
  indeterminate = false,
  disabled,
  className,
  style,
  onClick,
  ...props
}: CheckboxProps) {
  const boxSize = size === 'lg' ? 20 : 16;
  const radius = size === 'lg' ? 5 : 4;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onCheckedChange?.(!checked);
      onClick?.(e);
    }
  };

  return (
    <button
      role="checkbox"
      aria-checked={indeterminate ? 'mixed' : checked}
      onClick={handleClick}
      disabled={disabled}
      className={className}
      style={{
        display: 'inline-flex',
        gap: 8,
        alignItems: 'flex-start',
        background: 'none',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: 0,
        textAlign: 'left',
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
      {...props}
    >
      {/* Box */}
      <div style={{
        width: boxSize,
        height: boxSize,
        borderRadius: radius,
        backgroundColor: (checked || indeterminate) ? '#5258e4' : '#ffffff',
        border: (checked || indeterminate) ? 'none' : '1px solid #6d6d6d',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
      }}>
        {checked && !indeterminate && (
          <svg width={boxSize * 0.6} height={boxSize * 0.5} viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {indeterminate && (
          <div style={{
            width: boxSize * 0.55,
            height: 2,
            backgroundColor: '#ffffff',
            borderRadius: 1,
          }} />
        )}
      </div>

      {/* Label + Description */}
      {showLabel && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 500,
            fontSize: size === 'lg' ? 16 : 14,
            lineHeight: 1,
            color: '#0d0d0d',
          }}>
            {labelText}
          </span>
          {showDescription && (
            <span style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: '16px',
              color: '#6d6d6d',
            }}>
              {descriptionText}
            </span>
          )}
        </div>
      )}
    </button>
  );
}

export default Checkbox;
