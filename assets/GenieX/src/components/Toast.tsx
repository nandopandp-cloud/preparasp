import React from 'react';

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  titleText?: string;
  descriptionText?: string;
  type?: 'Default' | 'Success' | 'Warning' | 'Destructive';
  showTitle?: boolean;
  showButton?: boolean;
  onClose?: () => void;
}

const toastVariants = {
  Default: {
    backgroundColor: '#ffffff',
    borderColor: '#e6e6e6',
    textColor: '#0d0d0d',
    buttonBorderColor: '#e6e6e6',
    buttonTextColor: '#0d0d0d',
  },
  Success: {
    backgroundColor: '#007a4d',
    borderColor: '#007a4d',
    textColor: '#ffffff',
    buttonBorderColor: '#ffffff',
    buttonTextColor: '#ffffff',
  },
  Warning: {
    backgroundColor: '#c59319',
    borderColor: '#c59319',
    textColor: '#ffffff',
    buttonBorderColor: '#ffffff',
    buttonTextColor: '#ffffff',
  },
  Destructive: {
    backgroundColor: '#d31510',
    borderColor: '#d31510',
    textColor: '#ffffff',
    buttonBorderColor: '#ffffff',
    buttonTextColor: '#ffffff',
  },
};

export function Toast({
  titleText = 'Title Text',
  descriptionText = 'This is a toast description.',
  type = 'Default',
  showTitle = true,
  showButton = true,
  onClose,
  className,
  ...props
}: ToastProps) {
  const variant = toastVariants[type];

  return (
    <div
      style={{
        backgroundColor: variant.backgroundColor,
        borderColor: variant.borderColor,
        borderWidth: type === 'Default' ? '1px' : '0px',
        borderStyle: 'solid',
        color: variant.textColor,
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        padding: '24px',
        borderRadius: '8px',
        width: '388px',
        boxShadow:
          '0px 10px 7.5px rgba(0, 0, 0, 0.1), 0px 4px 3px rgba(0, 0, 0, 0.05)',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
      className={className}
      {...props}
    >
      {/* Text Content */}
      <div
        style={{
          flex: '1 0 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          alignItems: 'flex-start',
        }}
      >
        {showTitle && (
          <p
            style={{
              margin: '0',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px',
              color: variant.textColor,
            }}
          >
            {titleText}
          </p>
        )}
        <p
          style={{
            margin: '0',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            color: variant.textColor,
            opacity: 0.9,
          }}
        >
          {descriptionText}
        </p>
      </div>

      {/* Close Button */}
      {showButton && (
        <button
          onClick={onClose}
          style={{
            backgroundColor: type === 'Default' ? '#ffffff' : variant.backgroundColor,
            border: `1px solid ${variant.buttonBorderColor}`,
            color: variant.buttonTextColor,
            height: '44px',
            padding: '8px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease-in-out',
            flexShrink: 0,
          }}
        >
          Fechar
        </button>
      )}
    </div>
  );
}

export default Toast;
