import React from 'react';

const LOGO_WHITE = '/assets/geniex/logo-white.png';

export interface LogoGenieXProps extends React.HTMLAttributes<HTMLDivElement> {
  iconOnly?: boolean;
  /** Tamanho do container do ícone em px */
  size?: number;
  /** 'light' = texto escuro (fundo claro) | 'dark' = texto branco (fundo escuro) */
  mode?: 'light' | 'dark';
}

export function LogoGenieX({
  iconOnly = false,
  size = 36,
  mode = 'light',
  className,
  style,
  ...props
}: LogoGenieXProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: iconOnly ? 0 : 12,
        ...style,
      }}
      {...props}
    >
      {/* Ícone: container escuro (#111) com logo mark branca — igual em todos os modos */}
      <div
        style={{
          width: size,
          height: size,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: Math.round(size * 0.22),
          background: '#111111',
          boxShadow: '0 2px 8px rgba(0,0,0,0.28)',
        }}
      >
        <img
          alt="GenieX"
          src={LOGO_WHITE}
          style={{ width: '62%', height: '62%', display: 'block', objectFit: 'contain' }}
        />
      </div>

      {/* Wordmark: cor adapta ao modo */}
      {!iconOnly && (
        <span style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 800,
          fontSize: size * 0.5,
          lineHeight: 1,
          color: mode === 'dark' ? '#ffffff' : '#111111',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          letterSpacing: '0.06em',
        }}>
          GENIEX
        </span>
      )}
    </div>
  );
}

export default LogoGenieX;
