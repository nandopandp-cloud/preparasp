import React from 'react';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'Horizontal' | 'Vertical';
  /** Whether to include 6px padding around the line */
  spacing?: boolean;
}

export function Separator({
  orientation = 'Horizontal',
  spacing = true,
  className,
  style,
  ...props
}: SeparatorProps) {
  const isVertical = orientation === 'Vertical';

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: isVertical ? 'row' : 'column',
        alignItems: isVertical ? 'center' : 'flex-start',
        gap: 0,
        position: 'relative',
        ...(isVertical
          ? { height: 20, paddingLeft: spacing ? 6 : 0, paddingRight: spacing ? 6 : 0 }
          : { width: '100%', paddingTop: spacing ? 6 : 0, paddingBottom: spacing ? 6 : 0 }),
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          ...(isVertical
            ? { width: 1, height: '100%', backgroundColor: '#e6e6e6', flexShrink: 0 }
            : { height: 1, width: '100%', backgroundColor: '#e6e6e6' }),
        }}
      />
    </div>
  );
}

export default Separator;
