'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-sm"
    >
      <span className="hover:animate-bounce">
        {theme === 'dark' ? <Sun /> : <Moon />}
      </span>
    </Button>
  );
}
