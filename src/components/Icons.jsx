import { BookOpen, Box, Braces, GitFork, Globe2, MessagesSquare, Palette, Smartphone, TrainFront } from 'lucide-react';

export function BrandMark({ className = '' }) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#0062ff" />
      <path d="m10 11 10 10 10-10M20 21v10" stroke="white" strokeWidth="5" />
      <path d="M10 29h5" stroke="#a5c7ff" strokeWidth="3" />
    </svg>
  );
}

export function GitHubIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.08c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.54 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.08 1.15A10.7 10.7 0 0 1 12 6.2c.95 0 1.9.13 2.8.38 2.14-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.63 5.25-5.14 5.53.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

export function PlatformIcon({ name, size = 20, ...props }) {
  if (name === 'github') return <GitHubIcon size={size} {...props} />;
  if (name === 'gitee') {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M19.2 3H8a5 5 0 0 0-5 5v11a2 2 0 0 0 2 2h11a5 5 0 0 0 5-5V11H10v3h8v2a2 2 0 0 1-2 2H6V8a2 2 0 0 1 2-2h11.2V3Z" /></svg>;
  }
  const Icon = { gitea: GitFork, modrinth: Box, mcmod: BookOpen }[name] || Braces;
  return <Icon size={size} strokeWidth={1.7} aria-hidden="true" {...props} />;
}

export function ProjectIcon({ name, size = 22, ...props }) {
  const Icon = { community: MessagesSquare, mobile: Smartphone, web: Globe2, train: TrainFront, color: Palette }[name] || Braces;
  return <Icon size={size} strokeWidth={1.65} aria-hidden="true" {...props} />;
}
