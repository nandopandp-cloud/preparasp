import React from 'react';

export interface TextareaProps extends React.HTMLAttributes<HTMLDivElement> {
  labelText?: string;
  placeholderText?: string;
  value?: string;
  descriptionText?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  state?: 'Default' | 'Focus' | 'Filled' | 'Disabled';
}

export function Textarea({
  labelText = 'Label Text',
  placeholderText = 'Placeholder',
  value,
  descriptionText = 'This is a textarea description.',
  showLabel = true,
  showDescription = true,
  state = 'Default',
  className,
  style,
  ...props
}: TextareaProps) {
  const isFilled = state === 'Filled';
  const isFocus = state === 'Focus';
  const isDisabled = state === 'Disabled';

  const textareaBoxStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    minHeight: 80,
    padding: '8px 12px',
    borderRadius: 6,
    border: '1px solid #e6e6e6',
    backgroundColor: '#ffffff',
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    flex: '1 0 0',
    ...(isFocus && {
      boxShadow: '0 0 0 2px #ffffff, 0 0 0 4px #5258e4',
      position: 'relative',
      zIndex: 0,
    }),
    ...(isDisabled && { opacity: 0.5 }),
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        width: '100%',
        ...style,
      }}
      {...props}
    >
      {showLabel && (
        <span style={{
          fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          lineHeight: 1,
          color: '#0d0d0d',
          width: '100%',
        }}>
          {labelText}
        </span>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', flex: '1 0 0' }}>
        <div style={textareaBoxStyle}>
          <span style={{
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '20px',
            color: isFilled ? '#0d0d0d' : '#6d6d6d',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%',
            flexShrink: 0,
          }}>
            {value ?? placeholderText}
          </span>
        </div>

        {showDescription && (
          <span style={{
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: '16px',
            color: '#6d6d6d',
            width: '100%',
          }}>
            {descriptionText}
          </span>
        )}
      </div>
    </div>
  );
}

export default Textarea;
