import { ArrowUpRight } from 'lucide-react';
import { platforms } from '../data/repositories';
import ExternalLink from './ExternalLink';
import { PlatformIcon } from './Icons';

export default function PlatformLinks({ variant = 'default' }) {
  return (
    <div className={`platform-links platform-links--${variant}`} aria-label="晏阳技术组多平台入口">
      {platforms.map((platform) => (
        <ExternalLink key={platform.name} href={platform.href} className="platform-link" aria-label={`${platform.name}${platform.label ? `（${platform.label}）` : ''}（新标签页打开）`}>
          <PlatformIcon name={platform.icon} size={19} />
          <span>{platform.name}{platform.label && <small> / {platform.label}</small>}</span>
          <ArrowUpRight size={13} className="platform-arrow" aria-hidden="true" />
        </ExternalLink>
      ))}
    </div>
  );
}
