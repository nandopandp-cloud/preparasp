import React from 'react';
import { Calendar, CalendarDay } from './Calendar';

export interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  leftMonthText?: string;
  rightMonthText?: string;
  leftDays?: CalendarDay[];
  rightDays?: CalendarDay[];
  onClose?: () => void;
  onApply?: () => void;
  closeButtonText?: string;
  applyButtonText?: string;
}

export function DatePicker({
  leftMonthText = 'Novembro de 2025',
  rightMonthText = 'Dezembro de 2025',
  leftDays,
  rightDays,
  onClose,
  onApply,
  closeButtonText = 'Fechar',
  applyButtonText = 'Aplicar filtro',
  className,
  style,
  ...props
}: DatePickerProps) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e6e6e6',
        borderRadius: 6,
        boxShadow: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingTop: 16,
        paddingBottom: 0,
        ...style,
      }}
      {...props}
    >
      {/* Months row */}
      <div style={{ display: 'flex', gap: 16, padding: '0 16px' }}>
        <Calendar
          monthText={leftMonthText}
          days={leftDays}
          showPreviousButton
          showNextButton={false}
          style={{ border: 'none', boxShadow: 'none', padding: 0 }}
        />
        <Calendar
          monthText={rightMonthText}
          days={rightDays}
          showPreviousButton={false}
          showNextButton
          style={{ border: 'none', boxShadow: 'none', padding: 0 }}
        />
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '12px 16px',
        borderTop: '1px solid #e6e6e6',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <button
          onClick={onClose}
          style={{
            height: 36,
            padding: '0 10px',
            borderRadius: 8,
            border: '1px solid #e6e6e6',
            backgroundColor: '#ffffff',
            color: '#0d0d0d',
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            lineHeight: '20px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {closeButtonText}
        </button>
        <button
          onClick={onApply}
          style={{
            height: 36,
            padding: '0 10px',
            borderRadius: 8,
            border: 'none',
            backgroundColor: '#5258e4',
            color: '#ffffff',
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            lineHeight: '20px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {applyButtonText}
        </button>
      </div>
    </div>
  );
}

export default DatePicker;
