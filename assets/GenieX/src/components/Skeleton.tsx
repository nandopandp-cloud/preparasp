import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual weight: Start is lighter (opacity 0.04), End is darker (opacity 0.08) */
  position?: 'Start' | 'End';
  width?: number | string;
  height?: number | string;
}

const skeletonKeyframes = `
@keyframes gx-skeleton-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.gx-skeleton { animation: gx-skeleton-pulse 1.5s ease-in-out infinite; }
`;

export function Skeleton({
  position = 'Start',
  width = 200,
  height = 40,
  className,
  style,
  ...props
}: SkeletonProps) {
  const bg = position === 'End' ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.04)';

  return (
    <>
      <style>{skeletonKeyframes}</style>
      <div
        className={`gx-skeleton${className ? ` ${className}` : ''}`}
        style={{
          width,
          height,
          borderRadius: 8,
          backgroundColor: bg,
          overflow: 'hidden',
          flexShrink: 0,
          ...style,
        }}
        {...props}
      />
    </>
  );
}

export default Skeleton;
