import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A layout component that centers its children vertically and horizontally
 * within the full viewport. It provides the main structure for pages like
 * login or registration.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen items-center justify-center bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
