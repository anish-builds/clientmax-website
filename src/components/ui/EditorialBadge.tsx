import React from 'react';

interface EditorialBadgeProps {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}

export function EditorialBadge({
  children,
  accent = false,
  className = '',
}: EditorialBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase py-1 px-2.5 border select-none ${
        accent
          ? 'border-[#20221F]/30 text-[#20221F] bg-[#B9D65A]/20'
          : 'border-[rgba(32,34,31,0.18)] text-[#4F5A48] bg-[#EAE5DA]'
      } ${className}`}
    >
      <span
        className={`inline-block h-1 w-1 rounded-full ${
          accent ? 'bg-[#20221F]' : 'bg-[#4F5A48]'
        }`}
      />
      {children}
    </span>
  );
}
