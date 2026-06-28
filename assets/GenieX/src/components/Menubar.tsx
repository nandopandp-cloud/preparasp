import React from 'react';

// ─── Shortcut ────────────────────────────────────────────────────────────────
export interface MenubarShortcutProps extends React.HTMLAttributes<HTMLDivElement> {
  keyText?: string;
}
export function MenubarShortcut({ keyText = '⌘ + G', className, style, ...props }: MenubarShortcutProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 20,
        padding: 4,
        borderRadius: 4,
        backgroundColor: '#e6e6e6',
        flexShrink: 0,
        ...style,
      }}
      {...props}
    >
      <span style={{
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 1,
        color: '#6d6d6d',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        width: '100%',
      }}>
        {keyText}
      </span>
    </div>
  );
}

// ─── MenubarItem ─────────────────────────────────────────────────────────────
export interface MenubarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  shortcut?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  showShortcut?: boolean;
  disabled?: boolean;
  active?: boolean;
}
export function MenubarItem({
  children = 'Menubar Item Text',
  leftIcon,
  rightIcon,
  shortcut = '⌘ + G',
  showLeftIcon = false,
  showRightIcon = false,
  showShortcut = false,
  disabled = false,
  active = false,
  className,
  style,
  ...props
}: MenubarItemProps) {
  return (
    <div
      className={className}
      style={{
        padding: '0 4px',
        width: '100%',
        boxSizing: 'border-box',
        ...style,
      }}
      {...props}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        height: 36,
        padding: '6px 8px',
        borderRadius: 4,
        backgroundColor: active ? '#e6e6e6' : 'transparent',
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        {showLeftIcon && leftIcon && (
          <span style={{ display: 'inline-flex', width: 20, height: 20, flexShrink: 0 }}>
            {leftIcon}
          </span>
        )}
        <span style={{
          flex: '1 0 0',
          fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: '20px',
          color: '#0d0d0d',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          minWidth: 0,
        }}>
          {children}
        </span>
        {showRightIcon && rightIcon && (
          <span style={{ display: 'inline-flex', width: 20, height: 20, flexShrink: 0 }}>
            {rightIcon}
          </span>
        )}
        {showShortcut && <MenubarShortcut keyText={shortcut} />}
      </div>
    </div>
  );
}

// ─── MenubarLabel ─────────────────────────────────────────────────────────────
export interface MenubarLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export function MenubarLabel({ children = 'LABEL', className, style, ...props }: MenubarLabelProps) {
  return (
    <div
      className={className}
      style={{ padding: '0 4px', width: '100%', boxSizing: 'border-box', ...style }}
      {...props}
    >
      <div style={{ padding: '6px 8px' }}>
        <span style={{
          fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          lineHeight: '16px',
          color: '#6d6d6d',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {children}
        </span>
      </div>
    </div>
  );
}

// ─── MenubarSeparator ─────────────────────────────────────────────────────────
export function MenubarSeparator({ className, style, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={className}
      style={{ padding: '6px 0', width: '100%', ...style }}
      {...props}
    >
      <div style={{ height: 1, backgroundColor: '#e6e6e6', width: '100%' }} />
    </div>
  );
}

// ─── MenubarMenu (dropdown panel) ─────────────────────────────────────────────
export interface MenubarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: number;
}
export function MenubarMenu({ children, width = 240, className, style, ...props }: MenubarMenuProps) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e6e6e6',
        borderRadius: 8,
        padding: '4px 0',
        width,
        boxSizing: 'border-box',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// ─── MenubarTrigger ───────────────────────────────────────────────────────────
export interface MenubarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}
export function MenubarTrigger({ children, active = false, className, style, ...props }: MenubarTriggerProps) {
  return (
    <button
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        padding: '6px 12px',
        borderRadius: 2,
        border: 'none',
        backgroundColor: active ? '#e6e6e6' : 'transparent',
        cursor: 'pointer',
        flexShrink: 0,
        ...style,
      }}
      {...props}
    >
      <span style={{
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px',
        color: '#0d0d0d',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
      }}>
        {children}
      </span>
    </button>
  );
}

// ─── Menubar (bar) ────────────────────────────────────────────────────────────
export interface MenubarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export function Menubar({ children, className, style, ...props }: MenubarProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: 4,
        backgroundColor: '#ffffff',
        border: '1px solid #e6e6e6',
        borderRadius: 6,
        cursor: 'pointer',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default Menubar;
