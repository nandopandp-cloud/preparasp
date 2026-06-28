import React from 'react';

export interface StepperIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  steps?: number;
  activeStep?: number;
}

export function StepperIndicator({
  steps = 6,
  activeStep = 0,
  className,
  style,
  ...props
}: StepperIndicatorProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        ...style,
      }}
      {...props}
    >
      {Array.from({ length: steps }).map((_, i) => {
        const isActive = i === activeStep;
        return (
          <div
            key={i}
            style={{
              width: isActive ? 20 : 8,
              height: 8,
              borderRadius: 9999,
              backgroundColor: isActive ? '#5258e4' : '#e6e6e6',
              transition: 'width 0.2s ease, background-color 0.2s ease',
              flexShrink: 0,
            }}
          />
        );
      })}
    </div>
  );
}

export default StepperIndicator;
