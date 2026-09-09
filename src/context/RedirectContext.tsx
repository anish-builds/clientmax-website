'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ExternalResource } from '@/content/resources';

interface RedirectContextType {
  initiateRedirect: (resource: ExternalResource) => void;
  activeResource: ExternalResource | null;
  isOpen: boolean;
  cancelRedirect: () => void;
}

const RedirectContext = createContext<RedirectContextType | undefined>(undefined);

export function RedirectProvider({ children }: { children: ReactNode }) {
  const [activeResource, setActiveResource] = useState<ExternalResource | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const initiateRedirect = useCallback((resource: ExternalResource) => {
    // Check for prefers-reduced-motion: if reduced motion requested, navigate immediately without modal
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.open(resource.url, '_blank', 'noopener,noreferrer');
      return;
    }

    setActiveResource(resource);
    setIsOpen(true);
  }, []);

  const cancelRedirect = useCallback(() => {
    setIsOpen(false);
    setActiveResource(null);
  }, []);

  return (
    <RedirectContext.Provider
      value={{
        initiateRedirect,
        activeResource,
        isOpen,
        cancelRedirect,
      }}
    >
      {children}
    </RedirectContext.Provider>
  );
}

export function useRedirect() {
  const context = useContext(RedirectContext);
  if (!context) {
    throw new Error('useRedirect must be used within a RedirectProvider');
  }
  return context;
}
