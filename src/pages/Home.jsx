import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, CodeXml, Globe2, Layers, MessagesSquare, Sparkles, TrainFront } from 'lucide-react';
import { categories, disclosure, repositories } from '../data/repositories';
import { HeroArtwork } from '../components/Artwork';
import ExternalLink from '../components/ExternalLink';
import PlatformLinks from '../components/PlatformLinks';
import RepositoryCard from '../components/RepositoryCard';
import Reveal from '../components/Reveal';

export default function Home() {
  const [category, setCategory] = useState('all');
  const visibleRepositories = category === 'all' ? repositories : repositories.filter((repository) => repository.category === category);

  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero-section site-container" aria-labelledby="hero-title">
        <Reveal className="hero-copy">
          <div className="hero-eyebrow"><span className="status-dot" /><span>开源项目</span><span className="hero-eyebrow-divider" /><span>OPEN SOURCE</span></div>
          <h1 id="hero-title">晏阳技术组<span className="hero-english-title">Yanyang Technology Group</span></h1>
          <p className="hero-description">社区应用、Web 站点与 Minecraft 项目。<br />查看功能说明、技术栈与源码。</p>
          <div className="hero-actions"><a className="btn btn-primary primary-button" href="#projects">浏览项目<ArrowDown size={17} aria-hidden="true" /></a><a className="btn btn-ghost secondary-button" href="#about">组织介绍<ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <p className="badge disclosure-badge"><Sparkles size={13} aria-hidden="true" /><span>{disclosure}</span></p>
        </Reveal>
        <Reveal className="hero-visual" delay={0.08}><HeroArtwork /></Reveal>
        <div className="hero-bottom-note"><span>YANYANG TECHNOLOGY GROUP</span><span>项目代码 · 文档 · 平台入口<ArrowDown size={12} aria-hidden="true" /></span></div>
      </section>

      <section className="platform-strip" id="platforms" aria-label="多平台入口">
        <div className="site-container platform-strip-inner"><div className="platform-strip-label"><span className="mini-orbit" /><span>组织平台<br /><strong>与发布入口</strong></span></div><PlatformLinks /></div>
      </section>

      <section className="projects-section site-container" id="projects" aria-labelledby="projects-heading">
        <Reveal className="section-heading"><div><p className="eyebrow"><span className="section-number">01 /</span> PROJECTS</p><h2 id="projects-heading">开源项目</h2><p className="section-description">5 个项目的功能、技术栈与适用场景。</p></div><ExternalLink href="https://github.com/yanyang-Technology-Group/" className="text-link section-github">GitHub 组织<ArrowUpRight size={16} aria-hidden="true" /></ExternalLink></Reveal>
        <div className="projects-toolbar"><div className="project-filters" role="group" aria-label="筛选开源项目">{categories.map((item) => { const count = item.id === 'all' ? repositories.length : repositories.filter((repo) => repo.category === item.id).length; return <button key={item.id} type="button" aria-pressed={category === item.id} className={`btn btn-sm filter-button ${category === item.id ? 'is-active' : ''}`} onClick={() => setCategory(item.id)}>{item.label}<span>{String(count).padStart(2, '0')}</span></button>; })}</div><span className="project-count" role="status" aria-live="polite">{String(visibleRepositories.length).padStart(2, '0')} 个开源项目<Layers size={14} aria-hidden="true" /></span></div>
        <div className={`repository-grid ${category === 'all' ? 'repository-grid--all' : ''}`}><AnimatePresence initial={false} mode="popLayout">{visibleRepositories.map((repository) => <RepositoryCard key={repository.slug} repository={repository} featured={category === 'all' && repository.slug === 'ycomm-website'} />)}</AnimatePresence></div>
        <p className="projects-source-note"><CodeXml size={13} aria-hidden="true" />项目介绍依据 GitHub README 整理；功能与兼容性以各仓库最新说明为准。</p>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-heading"><div className="site-container about-inner"><Reveal className="about-copy"><p className="eyebrow"><span className="section-number">02 /</span> ABOUT</p><h2 id="about-heading">关于组织</h2><p>晏阳技术组（Yanyang Technology Group）关注基础软件、开发者工具与创意应用。</p><p>本站收录社区应用、Web 站点和 Minecraft 相关的 5 个项目。项目资料以 GitHub README 为准，MC百科用于补充 Minecraft 项目背景。</p><ExternalLink href="https://github.com/yanyang-Technology-Group/" className="text-link">查看 GitHub 组织资料<ArrowUpRight size={16} aria-hidden="true" /></ExternalLink></Reveal><Reveal className="about-principles" delay={0.06}>{[{number:'02',Icon:MessagesSquare,title:'社区应用',text:'YComm 网页平台与 Flutter 客户端，提供讨论、资源与通知。'},{number:'01',Icon:Globe2,title:'Web 站点',text:'晏阳城市建设官网，提供服务器介绍、活动与加入指引。'},{number:'02',Icon:TrainFront,title:'Minecraft',text:'MTR 社区优化分支与 Paper 彩色文字插件。'}].map(({number,Icon,title,text}) => <div className="principle" key={title}><span className="principle-icon"><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div><span className="principle-number">{number}</span></div>)}</Reveal></div></section>
    </main>
  );
}
