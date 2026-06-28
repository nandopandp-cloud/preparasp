import React from 'react';

export type TooltipSidebarDirection = 'Bottom' | 'Up' | 'Left' | 'Right';

export interface TooltipSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  direction?: TooltipSidebarDirection;
}

const arrowMap: Record<TooltipSidebarDirection, React.CSSProperties> = {
  Bottom: {
    width: 0, height: 0,
    borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
    borderBottom: '6px solid #222222', alignSelf: 'center',
  },
  Up: {
    width: 0, height: 0,
    borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
    borderTop: '6px solid #222222', alignSelf: 'center',
  },
  Right: {
    width: 0, height: 0,
    borderTop: '6px solid transparent', borderBottom: '6px solid transparent',
    borderRight: '6px solid #222222', alignSelf: 'center',
  },
  Left: {
    width: 0, height: 0,
    borderTop: '6px solid transparent', borderBottom: '6px solid transparent',
    borderLeft: '6px solid #222222', alignSelf: 'center',
  },
};

const containerDir: Record<TooltipSidebarDirection, React.CSSProperties> = {
  Bottom: { flexDirection: 'column' },
  Up: { flexDirection: 'column-reverse' },
  Right: { flexDirection: 'row' },
  Left: { flexDirection: 'row-reverse' },
};

export function TooltipSidebar({
  text = 'Title',
  direction = 'Bottom',
  className,
  style,
  ...props
}: TooltipSidebarProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        overflow: 'hidden',
        ...containerDir[direction],
        ...style,
      }}
      {...props}
    >
      <div style={{
        backgroundColor: '#222222',
        borderRadius: 8,
        padding: '8px 12px',
        flexShrink: 0,
      }}>
        <span style={{
          fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: 1,
          color: '#ffffff',
          whiteSpace: 'nowrap',
        }}>
          {text}
        </span>
      </div>
      <div style={arrowMap[direction]} />
    </div>
  );
}

export default TooltipSidebar;
