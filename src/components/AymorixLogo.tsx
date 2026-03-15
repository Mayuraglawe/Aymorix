'use client';

interface AymorixLogoProps {
  size?: number;
  className?: string;
  variant?: 'full' | 'icon';
  color?: string;
}

export function AymorixLogo({ size = 40, className = '', variant = 'full', color = '#14B8A6' }: AymorixLogoProps) {
  if (variant === 'icon') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" fill={color} opacity="0.1" />
        <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" stroke={color} strokeWidth="2" fill="none" />
        <path d="M32 16L44 44H38L35 36H29L26 44H20L32 16Z" fill={color} />
        <path d="M30.5 32H33.5L32 28L30.5 32Z" fill="white" />
        <circle cx="18" cy="22" r="2.5" fill={color} opacity="0.6" />
        <circle cx="46" cy="22" r="2.5" fill={color} opacity="0.6" />
        <circle cx="32" cy="52" r="2.5" fill={color} opacity="0.6" />
        <path d="M20 23L30 18" stroke={color} strokeWidth="1" opacity="0.3" />
        <path d="M44 23L34 18" stroke={color} strokeWidth="1" opacity="0.3" />
        <path d="M32 50L32 44" stroke={color} strokeWidth="1" opacity="0.3" />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" fill={color} opacity="0.1" />
        <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" stroke={color} strokeWidth="2" fill="none" />
        <path d="M32 16L44 44H38L35 36H29L26 44H20L32 16Z" fill={color} />
        <path d="M30.5 32H33.5L32 28L30.5 32Z" fill="white" />
        <circle cx="18" cy="22" r="2.5" fill={color} opacity="0.6" />
        <circle cx="46" cy="22" r="2.5" fill={color} opacity="0.6" />
        <circle cx="32" cy="52" r="2.5" fill={color} opacity="0.6" />
        <path d="M20 23L30 18" stroke={color} strokeWidth="1" opacity="0.3" />
        <path d="M44 23L34 18" stroke={color} strokeWidth="1" opacity="0.3" />
        <path d="M32 50L32 44" stroke={color} strokeWidth="1" opacity="0.3" />
      </svg>
      <span
        className={`font-extrabold tracking-tight leading-none text-xl ${color === '#14B8A6' ? 'text-[#14B8A6]' : 'text-[#0F172A]'}`}
      >
        Aymorix
      </span>
    </div>
  );
}
