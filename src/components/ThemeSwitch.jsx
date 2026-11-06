import { Monitor, Moon, Sun } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const modes = [
  { id: 'light', label: '浅色模式', Icon: Sun },
  { id: 'dark', label: '深色模式', Icon: Moon },
  { id: 'system', label: '跟随系统', Icon: Monitor },
];

export default function ThemeSwitch() {
  const { preference, setPreference } = useTheme();
  return (
    <div className="theme-switch" role="group" aria-label="颜色主题">
      {modes.map(({ id, label, Icon }) => (
        <button key={id} type="button" className={`btn btn-ghost btn-square theme-option ${preference === id ? 'is-selected' : ''}`} aria-label={label} title={label} aria-pressed={preference === id} onClick={() => setPreference(id)}>
          <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
