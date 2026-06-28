import React from 'react';

const AVATAR_URL = 'https://www.figma.com/api/mcp/asset/637a2b9d-ebe0-4244-9aa9-a16727b0de42';

export type SidebarProfileState = 'Default' | 'SidebarMenuButton' | 'Focus';

export interface SidebarProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  handle?: string;
  avatarSrc?: string;
  state?: SidebarProfileState;
  onMoreClick?: () => void;
}

export function SidebarProfile({
  name = 'Fernando Rodrigues',
  handle = '@JovensGenios',
  avatarSrc = AVATAR_URL,
  state = 'Default',
  onMoreClick,
  className,
  style,
  ...props
}: SidebarProfileProps) {
  const isActive = state === 'SidebarMenuButton';
  const isFocus = state === 'Focus';

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 8,
        backgroundColor: isActive ? '#e6e6e6' : 'transparent',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: isFocus ? 'inset 0 0 0 2px #5258e4' : 'none',
        ...style,
      }}
      {...props}
    >
      {/* Avatar */}
      <div style={{
        position: 'relative',
        width: 32,
        height: 32,
        borderRadius: 9999,
        flexShrink: 0,
        backgroundColor: '#5258e4',
      }}>
        <img
          alt={name}
          src={avatarSrc}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 9999,
          }}
        />
      </div>

      {/* Name + Handle */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}>
        <span style={{
          fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          lineHeight: 1,
          color: '#0d0d0d',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1,
          color: '#6d6d6d',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
        }}>
          {handle}
        </span>
      </div>

      {/* More button */}
      <button
        onClick={onMoreClick}
        style={{
          position: 'absolute',
          top: 14,
          right: 14,
          width: 20,
          height: 20,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6d6d6d',
        }}
      >
        <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
          <circle cx="2" cy="2" r="1.5" fill="currentColor"/>
          <circle cx="8" cy="2" r="1.5" fill="currentColor"/>
          <circle cx="14" cy="2" r="1.5" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
}

export default SidebarProfile;
