import React from 'react';

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  labelText?: string;
  sublabelText?: string;
  placeholderText?: string;
  value?: string;
  descriptionText?: string;
  linkText?: string;
  shortcutText?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  showLabel?: boolean;
  showSublabel?: boolean;
  showInfo?: boolean;
  showIcon?: boolean;
  showIconRight?: boolean;
  showDescription?: boolean;
  showLink?: boolean;
  showShortcut?: boolean;
  state?: 'Default' | 'Focus' | 'Filled' | 'Disabled';
  onLinkClick?: () => void;
}

// Inline SVGs for default icons
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="5.5" stroke="#6d6d6d" strokeWidth="1.5"/>
    <path d="M13.5 13.5L16.5 16.5" stroke="#6d6d6d" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10s3-5.5 8-5.5S18 10 18 10s-3 5.5-8 5.5S2 10 2 10Z" stroke="#6d6d6d" strokeWidth="1.5"/>
    <circle cx="10" cy="10" r="2" stroke="#6d6d6d" strokeWidth="1.5"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.5" stroke="#6d6d6d" strokeWidth="1"/>
    <path d="M8 7.5v4" stroke="#6d6d6d" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="8" cy="5.5" r="0.75" fill="#6d6d6d"/>
  </svg>
);

export function Input({
  labelText = 'Label',
  sublabelText,
  placeholderText = 'Placeholder',
  value,
  descriptionText = 'This is an input description.',
  linkText = 'Forgot your password?',
  shortcutText = '⌘ + G',
  icon,
  iconRight,
  showLabel = true,
  showSublabel = false,
  showInfo = false,
  showIcon = true,
  showIconRight = false,
  showDescription = false,
  showLink = false,
  showShortcut = false,
  state = 'Default',
  onLinkClick,
  className,
  style,
  ...props
}: InputProps) {
  const isFilled = state === 'Filled';
  const isFocus = state === 'Focus';
  const isDisabled = state === 'Disabled';

  const inputBoxStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    height: 44,
    padding: '8px 12px',
    borderRadius: 8,
    border: '1px solid #e6e6e6',
    backgroundColor: '#ffffff',
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    ...(isFocus && {
      boxShadow: '0 0 0 2px #ffffff, 0 0 0 4px #5258e4',
      position: 'relative',
      zIndex: 0,
    }),
    ...(isDisabled && { opacity: 0.5 }),
  };

  const textStyle: React.CSSProperties = {
    flex: '1 0 0',
    fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '20px',
    color: isFilled ? '#0d0d0d' : '#6d6d6d',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    minWidth: 0,
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        position: 'relative',
        width: '100%',
        ...style,
      }}
      {...props}
    >
      {/* Label row */}
      {showLabel && (
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <span style={{
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 1,
            color: '#0d0d0d',
            whiteSpace: 'nowrap',
          }}>
            {labelText}
          </span>
          {showSublabel && (
            <span style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: 1,
              color: '#6d6d6d',
              whiteSpace: 'nowrap',
            }}>
              {sublabelText || '(Sublabel)'}
            </span>
          )}
          {showInfo && (
            <span style={{ display: 'inline-flex', width: 16, height: 16, flexShrink: 0 }}>
              <InfoIcon />
            </span>
          )}
        </div>
      )}

      {/* Link (absolute, top-right) */}
      {showLink && (
        <button
          onClick={onLinkClick}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 1,
            color: '#6d6d6d',
            textDecoration: 'underline',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            whiteSpace: 'nowrap',
          }}
        >
          {linkText}
        </button>
      )}

      {/* Input wrapper */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
        <div style={inputBoxStyle}>
          {showIcon && (
            <span style={{ display: 'inline-flex', width: 20, height: 20, flexShrink: 0 }}>
              {icon ?? <SearchIcon />}
            </span>
          )}
          <span style={textStyle}>{value ?? placeholderText}</span>
          {showShortcut && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 20,
              padding: 4,
              borderRadius: 4,
              backgroundColor: '#e6e6e6',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: 1,
                color: '#6d6d6d',
                whiteSpace: 'nowrap',
              }}>
                {shortcutText}
              </span>
            </div>
          )}
          {showIconRight && (
            <span style={{ display: 'inline-flex', width: 20, height: 20, flexShrink: 0 }}>
              {iconRight ?? <EyeIcon />}
            </span>
          )}
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

export default Input;
