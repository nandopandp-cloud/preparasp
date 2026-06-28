import React from 'react';

// Pixel sizes per Figma spec
const sizePx = { xsm: 10, sm: 14, md: 16, lg: 20, xl: 24 };

const statusColors = {
  Online:      '#22c55e',
  Offline:     '#9ca3af',
  'Not Disturb': '#ef4444',
};

export interface AvatarStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'Online' | 'Offline' | 'Not Disturb';
}

export function AvatarStatus({
  size = 'md',
  status = 'Online',
  className,
  style,
  ...props
}: AvatarStatusProps) {
  const outer = sizePx[size];
  // Inner dot is ~60% of outer container
  const inner = Math.round(outer * 0.6);
  const color = statusColors[status];

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: outer,
        height: outer,
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          width: inner,
          height: inner,
          borderRadius: '50%',
          backgroundColor: color,
        }}
      />
    </div>
  );
}

export default AvatarStatus;
