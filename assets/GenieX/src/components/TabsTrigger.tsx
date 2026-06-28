import React from 'react';

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children?: React.ReactNode;
}

export function TabsTrigger({
  active = false,
  children = 'Tab',
  className,
  style,
  ...props
}: TabsTriggerProps) {
  return (
    <button
      className={className}
      style={{
        height: 40,
        padding: '0 16px',
        borderRadius: 8,
        border: 'none',
        backgroundColor: active ? '#5258e4' : 'transparent',
        color: active ? '#ffffff' : '#6d6d6d',
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontWeight: active ? 700 : 500,
        fontSize: 16,
        lineHeight: 1,
        cursor: 'pointer',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default TabsTrigger;
