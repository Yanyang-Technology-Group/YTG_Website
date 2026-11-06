import { useEffect, useState } from 'react';

const storageKey = 'ytg-theme';

function readPreference() {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === 'light' || saved === 'dark' ? saved : 'system';
  } catch {
    return 'system';
  }
}

export default function useTheme() {
  const [preference, setPreference] = useState(readPreference);
  const [systemDark, setSystemDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
  const theme = preference === 'system' ? (systemDark ? 'dark' : 'light') : preference;

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const update = (event) => setSystemDark(event.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = `ytg-${theme}`;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0b101b' : '#f7f9fc';
    try {
      if (preference === 'system') localStorage.removeItem(storageKey);
      else localStorage.setItem(storageKey, preference);
    } catch {
      // Theme controls remain usable when browser storage is unavailable.
    }
  }, [preference, theme]);

  useEffect(() => {
    const sync = (event) => {
      if (event.key === storageKey || event.key === null) setPreference(readPreference());
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  return { theme, preference, setPreference };
}
