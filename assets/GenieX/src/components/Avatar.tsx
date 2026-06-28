import React from 'react';

type AvatarSize = 'xsm' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarType = 'Image' | 'Initials';
type StatusValue = 'Online' | 'Offline' | 'Not Disturb';

// Status dot rendered as pure CSS — no external assets needed
function StatusDot({ status, dotPx }: { status: StatusValue; dotPx: number }) {
  // Inner colored dot is ~60% of the white outer ring (matches Figma asset)
  const innerPx = Math.round(dotPx * 0.6);

  const colors: Record<StatusValue, string> = {
    Online: '#22c55e',
    Offline: '#9ca3af',
    'Not Disturb': '#ef4444',
  };

  return (
    <div
      style={{
        width: dotPx,
        height: dotPx,
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: innerPx,
          height: innerPx,
          borderRadius: '50%',
          backgroundColor: colors[status],
        }}
      />
    </div>
  );
}

// ─── Avatar sizes ───────────────────────────────────────────────────────────
const avatarSizes: Record<AvatarSize, { size: number; fontSize: number; fontWeight: number }> = {
  xsm: { size: 24, fontSize: 12, fontWeight: 500 },
  sm:  { size: 32, fontSize: 14, fontWeight: 500 },
  md:  { size: 40, fontSize: 16, fontWeight: 500 },
  lg:  { size: 48, fontSize: 18, fontWeight: 500 },
  xl:  { size: 56, fontSize: 24, fontWeight: 500 },
};

// Border-radius: circle = 9999px; rounded square = 8px (xsm: 6px)
function getBorderRadius(rounded: boolean, size: string) {
  if (!rounded) return '9999px';
  return size === 'xsm' ? '6px' : '8px';
}

// Status badge size + position per type + size + shape (values mirror Figma spec)
type StatusConfig = { dotPx: number; bottom: number; right: number };

const statusBadgeConfig: Record<AvatarType, Record<AvatarSize, { circle: StatusConfig; rounded: StatusConfig }>> = {
  Image: {
    xsm: { circle: { dotPx: 8,  bottom: -2, right: -2 },  rounded: { dotPx: 8,  bottom: -2, right: -2 } },
    sm:  { circle: { dotPx: 10, bottom: -3, right: -3 },  rounded: { dotPx: 10, bottom: -3, right: -3 } },
    md:  { circle: { dotPx: 16, bottom: -5, right: -5 },  rounded: { dotPx: 16, bottom: -5, right: -5 } },
    lg:  { circle: { dotPx: 20, bottom: -6, right: -6 },  rounded: { dotPx: 20, bottom: -6, right: -6 } },
    xl:  { circle: { dotPx: 24, bottom: -7, right: -7 },  rounded: { dotPx: 24, bottom: -7, right: -7 } },
  },
  Initials: {
    xsm: { circle: { dotPx: 8,  bottom: -2, right: -2 },  rounded: { dotPx: 8,  bottom: -2, right: -2 } },
    sm:  { circle: { dotPx: 10, bottom: -3, right: -3 },  rounded: { dotPx: 10, bottom: -3, right: -3 } },
    md:  { circle: { dotPx: 16, bottom: -5, right: -5 },  rounded: { dotPx: 16, bottom: -5, right: -5 } },
    lg:  { circle: { dotPx: 20, bottom: -6, right: -6 },  rounded: { dotPx: 20, bottom: -6, right: -6 } },
    xl:  { circle: { dotPx: 24, bottom: -7, right: -7 },  rounded: { dotPx: 24, bottom: -7, right: -7 } },
  },
};

function getStatusConfig(type: AvatarType, size: AvatarSize, rounded: boolean): StatusConfig {
  return statusBadgeConfig[type][size][rounded ? 'rounded' : 'circle'];
}

// ─── Props ───────────────────────────────────────────────────────────────────
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL — used when type="Image" */
  src?: string;
  /** Alt text for the avatar image */
  alt?: string;
  /** Initials text — used when type="Initials" (e.g. "LR") */
  initials?: string;
  /** Avatar type */
  type?: AvatarType;
  /** Size variant */
  size?: AvatarSize;
  /** Rounded-square shape instead of circle */
  rounded?: boolean;
  /** Show online/status indicator */
  showStatus?: boolean;
  /** Status value shown in indicator */
  status?: StatusValue;
}

export function Avatar({
  src,
  alt = '',
  initials = 'LR',
  type = 'Image',
  size = 'md',
  rounded = false,
  showStatus = false,
  status = 'Online',
  className,
  style,
  ...props
}: AvatarProps) {
  const { size: px, fontSize, fontWeight } = avatarSizes[size];
  const borderRadius = getBorderRadius(rounded, size);
  const statusCfg = getStatusConfig(type, size, rounded);

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: px,
        height: px,
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius,
        backgroundColor: type === 'Initials' ? '#5258e4' : 'transparent',
        ...style,
      }}
      {...props}
    >
      {type === 'Image' && src && (
        <img
          src={src}
          alt={alt}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius,
            pointerEvents: 'none',
          }}
        />
      )}

      {type === 'Initials' && (
        <span
          style={{
            fontSize,
            fontWeight,
            lineHeight: 1,
            color: '#ffffff',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            userSelect: 'none',
          }}
        >
          {initials}
        </span>
      )}

      {showStatus && (
        <div
          style={{
            position: 'absolute',
            bottom: statusCfg.bottom,
            right: statusCfg.right,
            zIndex: 1,
          }}
        >
          <StatusDot status={status} dotPx={statusCfg.dotPx} />
        </div>
      )}
    </div>
  );
}

export default Avatar;
