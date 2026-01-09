/**
 * 配色主題定義
 * 支援三種配色方案：深海幽靈、黑白經典、紅藍對比
 */

export type ThemeId = 'deep-sea' | 'monochrome' | 'red-blue';

export interface ColorTheme {
  id: ThemeId;
  name: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    muted: string;
    mutedForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    card: string;
    cardForeground: string;
  };
}

export const themes: Record<ThemeId, ColorTheme> = {
  'deep-sea': {
    id: 'deep-sea',
    name: '深海幽靈',
    colors: {
      background: '#020b1c',
      foreground: '#ffffff',
      primary: '#00f0ff',
      primaryForeground: '#020b1c',
      secondary: '#1a2332',
      muted: '#1a2332',
      mutedForeground: '#94a3b8',
      destructive: '#ff2a2a',
      destructiveForeground: '#ffffff',
      border: 'rgba(0, 240, 255, 0.2)',
      card: 'rgba(26, 35, 50, 0.5)',
      cardForeground: '#ffffff',
    },
  },
  'monochrome': {
    id: 'monochrome',
    name: '黑白經典',
    colors: {
      background: '#000000',
      foreground: '#ffffff',
      primary: '#ffffff',
      primaryForeground: '#000000',
      secondary: '#1a1a1a',
      muted: '#1a1a1a',
      mutedForeground: '#a0a0a0',
      destructive: '#ff0000',
      destructiveForeground: '#ffffff',
      border: 'rgba(255, 255, 255, 0.2)',
      card: 'rgba(26, 26, 26, 0.8)',
      cardForeground: '#ffffff',
    },
  },
  'red-blue': {
    id: 'red-blue',
    name: '紅藍對比',
    colors: {
      background: '#0a1628',
      foreground: '#ffffff',
      primary: '#ff3b3b',
      primaryForeground: '#ffffff',
      secondary: '#1e2a3a',
      muted: '#1e2a3a',
      mutedForeground: '#94a3b8',
      destructive: '#ff3b3b',
      destructiveForeground: '#ffffff',
      border: 'rgba(255, 59, 59, 0.3)',
      card: 'rgba(30, 42, 58, 0.6)',
      cardForeground: '#ffffff',
    },
  },
};

export function applyTheme(themeId: ThemeId) {
  const theme = themes[themeId];
  const root = document.documentElement;

  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    root.style.setProperty(cssVarName, value);
  });

  // 儲存使用者選擇
  localStorage.setItem('defense-budget-theme', themeId);
}

export function getStoredTheme(): ThemeId {
  const stored = localStorage.getItem('defense-budget-theme');
  return (stored as ThemeId) || 'deep-sea';
}
