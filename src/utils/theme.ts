/**
 * Theme utility for managing dark/light mode
 * Provides a consistent interface for theme management
 */

export type ThemeMode = 'light' | 'dark' | 'system';

/**
 * Get the current theme from localStorage or system preference
 */
export function getTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';

  // Check localStorage first
  const storedTheme = localStorage.getItem('theme') as ThemeMode;
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  // Fall back to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Set the theme in localStorage and apply it to the document
 */
export function setTheme(theme: ThemeMode): void {
  if (typeof window === 'undefined') return;

  // Handle 'system' theme
  const resolvedTheme = theme === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;

  // Apply theme to document
  if (resolvedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Store theme preference
  localStorage.setItem('theme', theme);
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): void {
  const currentTheme = getTheme();
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

/**
 * Initialize theme based on stored preference or system preference
 */
export function initTheme(): void {
  if (typeof window === 'undefined') return;

  // Check if theme is already set in localStorage
  const storedTheme = localStorage.getItem('theme') as ThemeMode;

  // If no theme is set, use system preference
  if (!storedTheme) {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemPrefersDark ? 'dark' : 'light');
    return;
  }

  // Apply stored theme
  setTheme(storedTheme);

  // Listen for system preference changes if theme is set to 'system'
  if (storedTheme === 'system') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    });
  }
}
