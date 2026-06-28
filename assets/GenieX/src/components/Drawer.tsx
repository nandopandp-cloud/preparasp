import React from 'react';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  titleText?: string;
  descriptionText?: string;
  showOverlay?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  children?: React.ReactNode;
}

export function Drawer({
  titleText = 'Title Text',
  descriptionText = 'This is a drawer description.',
  showOverlay = true,
  primaryButtonText = 'Confirmar',
  secondaryButtonText = 'Cancelar',
  onPrimaryClick,
  onSecondaryClick,
  children,
  className,
  style,
  ...props
}: DrawerProps) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        ...style,
      }}
      {...props}
    >
      {showOverlay && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
        }} />
      )}
      <div style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        borderRadius: '16px 16px 0 0',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}>
        {/* Handle */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: 4,
        }}>
          <div style={{
            width: 120,
            height: 8,
            backgroundColor: '#e6e6e6',
            borderRadius: 9999,
          }} />
        </div>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 700,
            fontSize: 18,
            lineHeight: '28px',
            color: '#0d0d0d',
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
        </div>

        {/* Content */}
        {children && (
          <div>{children}</div>
        )}

        {/* Footer */}
        <div style={{
          display: 'flex',
          gap: 12,
          justifyContent: 'flex-end',
        }}>
          <button
            onClick={onSecondaryClick}
            style={{
              height: 44,
              padding: '0 20px',
              borderRadius: 8,
              border: '1px solid #e6e6e6',
              backgroundColor: '#ffffff',
              color: '#0d0d0d',
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            {secondaryButtonText}
          </button>
          <button
            onClick={onPrimaryClick}
            style={{
              height: 44,
              padding: '0 20px',
              borderRadius: 8,
              border: 'none',
              backgroundColor: '#5258e4',
              color: '#ffffff',
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            {primaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
