import React from 'react';

export interface SpinnerLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Animation step (static snapshot for showcase — 1=start, 2=quarter, 3=half, 4=three-quarter) */
  step?: '1' | '2' | '3' | '4';
  /** Color variant matching button variants */
  variant?: 'Default' | 'Secondary' | 'Destructive' | 'Outline' | 'Ghost' | 'Link';
  /** Size in px (default 20 to match button icon slot) */
  size?: number;
}

const variantColors: Record<string, string> = {
  Default: '#5258e4',
  Secondary: '#4046ca',
  Destructive: '#d31510',
  Outline: '#5258e4',
  Ghost: '#0d0d0d',
  Link: '#5258e4',
};

// Stroke-dashoffset per step — maps to 4 arc sizes shown in Figma
const stepOffset: Record<string, number> = {
  '1': 0,
  '2': -35,
  '3': -70,
  '4': -100,
};

// Stroke-dasharray (arc length) per step
const stepDasharray: Record<string, string> = {
  '1': '90 40',
  '2': '65 65',
  '3': '40 90',
  '4': '20 110',
};

// Starting rotation angle per step (matches Figma positions)
const stepRotation: Record<string, number> = {
  '1': 0,
  '2': 90,
  '3': 180,
  '4': 270,
};

const styleTag = `
@keyframes gx-spinner-rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes gx-spinner-arc {
  0%   { stroke-dasharray: 1 150;   stroke-dashoffset: 0; }
  50%  { stroke-dasharray: 90 150;  stroke-dashoffset: -35; }
  100% { stroke-dasharray: 90 150;  stroke-dashoffset: -124; }
}
.gx-spinner-svg {
  animation: gx-spinner-rotate 1.4s linear infinite;
}
.gx-spinner-arc {
  animation: gx-spinner-arc 1.4s ease-in-out infinite;
  stroke-linecap: round;
  transform-origin: center;
}
`;

export function SpinnerLoading({
  step,
  variant = 'Default',
  size = 20,
  className,
  style,
  ...props
}: SpinnerLoadingProps) {
  const color = variantColors[variant] ?? '#5258e4';
  const r = 9;
  const cx = 12;
  const cy = 12;

  // Static mode when step is provided, animated otherwise
  const isStatic = step !== undefined;

  return (
    <>
      {!isStatic && <style>{styleTag}</style>}
      <div
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: size,
          height: size,
          flexShrink: 0,
          ...style,
        }}
        {...props}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={isStatic ? undefined : 'gx-spinner-svg'}
          style={{
            width: '100%',
            height: '100%',
            transform: isStatic ? `rotate(${stepRotation[step!]}deg)` : undefined,
          }}
        >
          {/* Track circle */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke={color}
            strokeOpacity={0.2}
            strokeWidth={2}
            strokeLinecap="round"
          />
          {/* Arc */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray={isStatic ? stepDasharray[step!] : undefined}
            strokeDashoffset={isStatic ? stepOffset[step!] : undefined}
            className={isStatic ? undefined : 'gx-spinner-arc'}
            style={{ transformOrigin: 'center' }}
          />
        </svg>
      </div>
    </>
  );
}

export default SpinnerLoading;
