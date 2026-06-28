import React from 'react';

const font = "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const DAY_HEADERS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

// ─── CalendarArrowButton ─────────────────────────────────────────────────────
export interface CalendarArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'Previous' | 'Next';
  state?: 'Default' | 'Hover' | 'Disabled';
}

export function CalendarArrowButton({
  variant = 'Previous',
  state = 'Default',
  className,
  style,
  ...props
}: CalendarArrowButtonProps) {
  const isDisabled = state === 'Disabled';
  return (
    <button
      className={className}
      disabled={isDisabled}
      style={{
        width: 28,
        height: 28,
        border: '1px solid #e6e6e6',
        borderRadius: 6,
        backgroundColor: state === 'Hover' ? '#e6e6e6' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        padding: 0,
        flexShrink: 0,
        ...style,
      }}
      {...props}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {variant === 'Previous' ? (
          <path d="M10 4L6 8L10 12" stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        ) : (
          <path d="M6 4L10 8L6 12" stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        )}
      </svg>
    </button>
  );
}

// ─── CalendarDayButton ────────────────────────────────────────────────────────
export type CalendarDayVariant = 'Default' | 'Current' | 'Outside' | 'Between';
export type CalendarDayState = 'Default' | 'Selected' | 'Hover' | 'Disabled';

export interface CalendarDayButtonProps extends React.HTMLAttributes<HTMLElement> {
  numberText?: string;
  variant?: CalendarDayVariant;
  state?: CalendarDayState;
}

export function CalendarDayButton({
  numberText = '1',
  variant = 'Default',
  state = 'Default',
  className,
  style,
  ...props
}: CalendarDayButtonProps) {
  const isSelected = state === 'Selected';
  const isOutside = variant === 'Outside';
  const isCurrent = variant === 'Current' && !isSelected;
  const isBetween = variant === 'Between' && isSelected;
  const isDisabled = state === 'Disabled';

  const bg = isSelected && !isBetween
    ? '#5258e4'
    : isBetween
    ? '#d3d5ff'
    : isCurrent
    ? '#e6e6e6'
    : state === 'Hover'
    ? '#e6e6e6'
    : 'transparent';

  const color = isSelected && !isBetween
    ? '#ffffff'
    : isBetween
    ? '#4046ca'
    : '#0d0d0d';

  const weight = isSelected && !isBetween ? 700 : 400;

  if (isSelected) {
    return (
      <button
        className={className}
        disabled={isDisabled}
        style={{
          width: 40,
          height: 40,
          borderRadius: 6,
          border: 'none',
          backgroundColor: bg,
          color,
          fontFamily: font,
          fontWeight: weight,
          fontSize: 14,
          lineHeight: '20px',
          textAlign: 'center',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          opacity: isOutside ? 0.5 : 1,
          flexShrink: 0,
          ...style,
        }}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {numberText}
      </button>
    );
  }

  return (
    <div
      className={className}
      style={{
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: bg,
        color,
        fontFamily: font,
        fontWeight: weight,
        fontSize: 14,
        lineHeight: '20px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isOutside ? 0.5 : isDisabled ? 0.5 : 1,
        flexShrink: 0,
        ...style,
      }}
      {...props}
    >
      {numberText}
    </div>
  );
}

// ─── Calendar ─────────────────────────────────────────────────────────────────
export interface CalendarDay {
  day: number;
  variant?: CalendarDayVariant;
  state?: CalendarDayState;
}

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  monthText?: string;
  days?: CalendarDay[];
  showPreviousButton?: boolean;
  showNextButton?: boolean;
  onPreviousMonth?: () => void;
  onNextMonth?: () => void;
  onDayClick?: (day: number) => void;
}

const DEFAULT_DAYS: CalendarDay[] = [
  { day: 30, variant: 'Outside' },
  { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }, { day: 6 },
  { day: 7 }, { day: 8 }, { day: 9 }, { day: 10, state: 'Selected' }, { day: 11 }, { day: 12 }, { day: 13 },
  { day: 14 }, { day: 15 }, { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 }, { day: 20 },
  { day: 21 }, { day: 22 }, { day: 23 }, { day: 24, variant: 'Current' }, { day: 25 }, { day: 26 }, { day: 27 },
  { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 },
  { day: 1, variant: 'Outside' }, { day: 2, variant: 'Outside' }, { day: 3, variant: 'Outside' },
];

export function Calendar({
  monthText = 'Dezembro de 2025',
  days = DEFAULT_DAYS,
  showPreviousButton = true,
  showNextButton = true,
  onPreviousMonth,
  onNextMonth,
  onDayClick,
  className,
  style,
  ...props
}: CalendarProps) {
  const paddedDays = [...days];
  while (paddedDays.length % 7 !== 0) {
    paddedDays.push({ day: 0, variant: 'Outside' });
  }

  const weeks: CalendarDay[][] = [];
  for (let i = 0; i < paddedDays.length; i += 7) {
    weeks.push(paddedDays.slice(i, i + 7));
  }

  return (
    <div
      className={className}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e6e6e6',
        borderRadius: 6,
        padding: 16,
        boxShadow: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: 16,
        ...style,
      }}
      {...props}
    >
      {/* Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {showPreviousButton
          ? <CalendarArrowButton variant="Previous" onClick={onPreviousMonth} />
          : <div style={{ width: 28 }} />
        }
        <span style={{
          fontFamily: font,
          fontWeight: 700,
          fontSize: 14,
          lineHeight: '20px',
          color: '#0d0d0d',
        }}>
          {monthText}
        </span>
        {showNextButton
          ? <CalendarArrowButton variant="Next" onClick={onNextMonth} />
          : <div style={{ width: 28 }} />
        }
      </div>

      {/* Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Day headers */}
        <div style={{ display: 'flex' }}>
          {DAY_HEADERS.map(h => (
            <div key={h} style={{
              flex: '1 0 0',
              height: 21,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: 12,
                lineHeight: '16px',
                color: '#6d6d6d',
              }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Weeks */}
        {weeks.map((week, wi) => (
          <div key={wi} style={{ display: 'flex', alignItems: 'center' }}>
            {week.map((d, di) => (
              <div key={di} style={{ flex: '1 0 0', display: 'flex', justifyContent: 'center' }}>
                {d.day === 0 ? (
                  <div style={{ width: 40, height: 40 }} />
                ) : (
                  <CalendarDayButton
                    numberText={String(d.day)}
                    variant={d.variant}
                    state={d.state}
                    onClick={() => d.variant !== 'Outside' && onDayClick?.(d.day)}
                    style={{ cursor: d.variant !== 'Outside' ? 'pointer' : 'default' }}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
