import React from 'react';

export interface RadioItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  switchText?: string;
  descriptionText?: string;
  showText?: boolean;
  showDescription?: boolean;
  size?: 'sm' | 'md';
}

export function RadioItem({
  active = false,
  switchText = 'Radio Button Text',
  descriptionText = 'This is a radio description.',
  showText = true,
  showDescription = true,
  size = 'sm',
  className,
  style,
  ...props
}: RadioItemProps) {
  const radioSize = size === 'md' ? 20 : 16;
  const labelFontSize = size === 'md' ? 16 : 14;
  const descFontSize = size === 'md' ? 14 : 12;
  const descLineHeight = size === 'md' ? '20px' : '16px';

  return (
    <button
      className={className}
      style={{
        display: 'inline-flex',
        gap: 8,
        alignItems: 'flex-start',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        textAlign: 'left',
        ...style,
      }}
      {...props}
    >
      {/* Radio circle */}
      <div style={{
        position: 'relative',
        width: radioSize,
        height: radioSize,
        borderRadius: 9999,
        border: active ? 'none' : '1px solid #6d6d6d',
        backgroundColor: active ? '#5258e4' : '#ffffff',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
      }}>
        {active && (
          <div style={{
            width: radioSize * 0.4,
            height: radioSize * 0.4,
            borderRadius: 9999,
            backgroundColor: '#ffffff',
          }} />
        )}
      </div>

      {/* Label + description */}
      {showText && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'flex-start',
        }}>
          {showText && (
            <span style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: active ? 700 : 500,
              fontSize: labelFontSize,
              lineHeight: 1,
              color: '#0d0d0d',
              whiteSpace: active ? 'nowrap' : undefined,
            }}>
              {switchText}
            </span>
          )}
          {showDescription && (
            <span style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 400,
              fontSize: descFontSize,
              lineHeight: descLineHeight,
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

export default RadioItem;
