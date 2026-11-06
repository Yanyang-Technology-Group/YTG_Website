import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, FileCode2, Info, Layers, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getRepository, repositories, verifiedOn } from '../data/repositories';
import { ProjectArtwork } from '../components/Artwork';
import ExternalLink from '../components/ExternalLink';
import { GitHubIcon, PlatformIcon, ProjectIcon } from '../components/Icons';
import Reveal from '../components/Reveal';
import NotFound from './NotFound';

export default function RepositoryDetail() {
  const { slug } = useParams();
  const repository = getRepository(slug);
  if (!repository) return <NotFound repository />;
  const next = repositories[(repositories.indexOf(repository) + 1) % repositories.length];

  return (
    <main id="main-content" className="detail-page site-container" tabIndex={-1}>
      <Link to="/#projects" className="back-link"><ArrowLeft size={16} aria-hidden="true" />返回全部项目</Link>
      <Reveal className="detail-hero"><div className="detail-hero-copy"><p className="eyebrow"><span className="section-number">OPEN SOURCE /</span>{repository.categoryLabel}</p><span className="detail-project-icon"><ProjectIcon name={repository.icon} size={30} /></span><h1>{repository.name}</h1><p className="detail-tagline">{repository.tagline}</p><p className="detail-summary">{repository.summary}</p><div className="detail-actions"><ExternalLink href={repository.github} className="btn btn-primary primary-button"><GitHubIcon size={18} />GitHub<ArrowUpRight size={16} aria-hidden="true" /></ExternalLink><ExternalLink href={repository.gitee} className="btn secondary-button">Gitee<ArrowUpRight size={15} aria-hidden="true" /></ExternalLink><ExternalLink href={repository.gitea} className="btn secondary-button">Gitea<ArrowUpRight size={15} aria-hidden="true" /></ExternalLink></div>{repository.publishingPlatforms && <div className="publishing-platforms"><span className="publishing-platforms-label">下载与发布</span>{repository.publishingPlatforms.map((platform) => <ExternalLink key={platform.name} href={platform.href} className="publishing-platform-link"><PlatformIcon name={platform.icon} size={15} />{platform.name}<ArrowUpRight size={12} aria-hidden="true" /></ExternalLink>)}</div>}<div className="detail-meta"><span><FileCode2 size={14} aria-hidden="true" />{repository.language}</span><span><ShieldCheck size={14} aria-hidden="true" />{repository.license}</span></div></div><ProjectArtwork type={repository.artwork} large /></Reveal>

      <Reveal className="problem-panel"><span className="problem-icon"><Layers size={22} strokeWidth={1.5} aria-hidden="true" /></span><div><p className="eyebrow">WHY IT EXISTS</p><h2>解决的问题</h2><p>{repository.problem}</p></div></Reveal>

      <section className="detail-section" aria-labelledby="features-heading"><div className="detail-section-heading"><span className="eyebrow">01 / FEATURES</span><h2 id="features-heading">核心功能</h2></div><div className="feature-grid">{repository.features.map((feature, index) => <Reveal className="card feature-card" key={feature.title} delay={index * 0.05}><span className="feature-number">0{index + 1}</span><Check size={18} className="feature-check" aria-hidden="true" /><h3>{feature.title}</h3><p>{feature.description}</p></Reveal>)}</div></section>

      <section className="detail-section detail-overview" aria-labelledby="overview-heading"><Reveal className="detail-description"><span className="eyebrow">02 / OVERVIEW</span><h2 id="overview-heading">项目说明</h2>{repository.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<h3>关键实现</h3><p>{repository.implementation}</p><h3>适合谁使用</h3><p>{repository.audience}</p>{repository.note && <div className="alert project-note"><Info size={18} aria-hidden="true" /><p>{repository.note}</p></div>}</Reveal><Reveal className="detail-sidebar" delay={0.05}><div className="card stack-panel"><span className="eyebrow">BUILT WITH</span><h3>技术栈</h3><div className="detail-stack">{repository.stack.map((item) => <span className="badge" key={item}>{item}</span>)}</div><div className="stack-divider" /><span className="eyebrow">READ THE SOURCE</span><ExternalLink href={`${repository.github}#readme`} className="source-link"><BookOpen size={16} aria-hidden="true" />GitHub README<ArrowUpRight size={14} aria-hidden="true" /></ExternalLink>{repository.mcmod && <ExternalLink href={repository.mcmod} className="source-link"><BookOpen size={16} aria-hidden="true" />MC百科项目资料<ArrowUpRight size={14} aria-hidden="true" /></ExternalLink>}<p className="source-date">资料核实于 {verifiedOn}<br />项目动态以原仓库为准。</p></div></Reveal></section>

      <Link to={`/repos/${next.slug}`} className="next-project"><div><span className="eyebrow">下一个项目</span><strong>{next.name}</strong><span>{next.tagline}</span></div><span className="next-project-arrow"><ArrowRight size={24} aria-hidden="true" /></span></Link>
    </main>
  );
}
