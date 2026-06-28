import React from 'react';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

export function ProgressBar({
  value = 50,
  max = 100,
  className,
  style,
  ...props
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      className={className}
      style={{
        height: 12,
        borderRadius: 9999,
        backgroundColor: '#e6e6e6',
        overflow: 'hidden',
        width: '100%',
        ...style,
      }}
      {...props}
    >
      <div style={{
        height: '100%',
        width: `${pct}%`,
        borderRadius: 9999,
        backgroundColor: '#5258e4',
        transition: 'width 0.2s ease',
      }} />
    </div>
  );
}

export default ProgressBar;
