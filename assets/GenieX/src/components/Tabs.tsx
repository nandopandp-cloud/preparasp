import React from 'react';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function Tabs({
  children,
  className,
  style,
  ...props
}: TabsProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0,
        backgroundColor: '#f8f8f8',
        border: '1px solid #e6e6e6',
        borderRadius: 12,
        padding: 4,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default Tabs;
