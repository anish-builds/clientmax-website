'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'minimal';
  external?: boolean;
  className?: string;
  cursorType?: 'view' | 'explore' | 'go' | 'pointer';
  arrow?: 'right' | 'up-right' | 'none';
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  external = false,
  className = '',
  cursorType,
  arrow = 'right',
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.15;
    const distanceY = (e.clientY - centerY) * 0.15;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Base styling for distinct luxury editorial aesthetics
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#20221F] text-[#F5F2EA] font-semibold hover:bg-[#383d35] border border-[#20221F] rounded-none';
      case 'secondary':
        return 'bg-[#EAE5DA] text-[#20221F] hover:bg-[#ded8cc] border border-[rgba(32,34,31,0.18)] rounded-none';
      case 'outline':
        return 'bg-transparent text-[#20221F] hover:bg-[#20221F] hover:text-[#F5F2EA] border border-[rgba(32,34,31,0.25)] rounded-none';
      case 'minimal':
        return 'bg-transparent text-[#20221F] hover:text-[#4F5A48] p-0 border-b border-transparent hover:border-[#20221F]';
      default:
        return 'bg-[#20221F] text-[#F5F2EA] rounded-none';
    }
  };

  const content = (
    <span
      className="inline-flex items-center justify-center gap-2.5 transition-transform duration-200 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <span className="tracking-widest uppercase text-xs font-mono">{children}</span>
      {arrow === 'right' && (
        <ArrowRight
          size={14}
          className="transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      )}
      {arrow === 'up-right' && (
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </span>
  );

  const sharedClasses = `group relative inline-flex items-center justify-center px-6 py-3.5 transition-all duration-300 select-none ${getVariantStyles()} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          ref={buttonRef as React.RefObject<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          data-cursor={cursorType || 'view'}
          className={sharedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor={cursorType || 'go'}
        className={sharedClasses}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorType || 'pointer'}
      className={sharedClasses}
      type="button"
    >
      {content}
    </button>
  );
}
