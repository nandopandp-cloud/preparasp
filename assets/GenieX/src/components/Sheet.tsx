import React from 'react';

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  titleText?: string;
  descriptionText?: string;
  showOverlay?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  width?: number;
}

export function Sheet({
  titleText = 'Title Text',
  descriptionText = 'This is a sheet description.',
  showOverlay = true,
  onClose,
  children,
  width = 384,
  className,
  style,
  ...props
}: SheetProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        position: 'relative',
        backgroundColor: showOverlay ? 'rgba(0,0,0,0.6)' : 'transparent',
        ...style,
      }}
      {...props}
    >
      <div style={{
        backgroundColor: '#ffffff',
        borderLeft: '1px solid #e6e6e6',
        boxShadow: '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width,
        height: '100%',
        padding: '24px 16px',
        position: 'relative',
        flexShrink: 0,
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          position: 'relative',
        }}>
          <span style={{
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 700,
            fontSize: 18,
            lineHeight: '28px',
            color: '#0d0d0d',
            paddingRight: 32,
          }}>
            {titleText}
          </span>
          <span style={{
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '20px',
            color: '#6d6d6d',
          }}>
            {descriptionText}
          </span>
          {onClose && (
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: -8,
                right: 0,
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                color: '#6d6d6d',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          )}
        </div>

        {/* Content */}
        {children && (
          <div style={{ flex: 1, overflow: 'auto' }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sheet;
