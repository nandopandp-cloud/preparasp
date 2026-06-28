import React from 'react';

// Avatar sizes per Figma: xsm=24, sm=32, md=40, lg=48
const groupSizes = { xsm: 24, sm: 32, md: 40, lg: 48 };

// Overlap: avatars shift left by 8px (fixed per Figma)
const OVERLAP = 8;

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of image URLs to display */
  avatars: string[];
  /** Size variant */
  size?: 'xsm' | 'sm' | 'md' | 'lg';
  /** Alt text prefix — each avatar gets "{altPrefix} {n}" */
  altPrefix?: string;
}

export function AvatarGroup({
  avatars,
  size = 'md',
  altPrefix = 'Avatar',
  className,
  style,
  ...props
}: AvatarGroupProps) {
  const px = groupSizes[size];

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        ...style,
      }}
      {...props}
    >
      {avatars.map((src, i) => (
        <div
          key={i}
          style={{
            position: 'relative',
            width: px,
            height: px,
            borderRadius: '9999px',
            border: '1px solid #e6e6e6',
            overflow: 'hidden',
            flexShrink: 0,
            marginLeft: i === 0 ? 0 : -OVERLAP,
            zIndex: avatars.length - i,
            backgroundColor: '#f3f4f6',
          }}
        >
          <img
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '9999px',
              pointerEvents: 'none',
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default AvatarGroup;
