import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { disclosure } from '../data/repositories';
import ExternalLink from './ExternalLink';
import { BrandMark, GitHubIcon } from './Icons';
import PlatformLinks from './PlatformLinks';
import ThemeSwitch from './ThemeSwitch';

function Brand({ footer = false }) {
  return (
    <Link to="/" className={`brand ${footer ? 'brand--footer' : ''}`} aria-label="晏阳技术组首页">
      <BrandMark />
      <span><strong>晏阳技术组</strong><small>YANYANG TECHNOLOGY GROUP</small></span>
    </Link>
  );
}

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const home = pathname === '/';
  return (
    <>
      <a className="skip-link" href="#main-content">跳转至主要内容</a>
      <header className="site-header">
        <div className="site-container navbar header-inner">
          <Brand />
          <nav className="main-nav" aria-label="主导航">
            <Link to="/#projects" className={home ? 'nav-link is-current' : 'nav-link'}>开源项目</Link>
            <Link to="/#about" className="nav-link">组织介绍</Link>
            <Link to="/#platforms" className="nav-link">平台入口<ArrowUpRight size={12} aria-hidden="true" /></Link>
          </nav>
          <div className="header-actions">
            <ThemeSwitch />
            <span className="header-divider" />
            <ExternalLink className="btn btn-sm github-button" href="https://github.com/yanyang-Technology-Group/" aria-label="在 GitHub 查看晏阳技术组（新标签页打开）"><GitHubIcon size={17} /><span>GitHub</span><ArrowUpRight size={14} aria-hidden="true" /></ExternalLink>
          </div>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-main">
            <div><Brand footer /><p className="footer-intro">社区应用 · Web 站点 · Minecraft</p></div>
            <div className="footer-platforms"><span className="eyebrow">平台入口 / PLATFORMS</span><PlatformLinks variant="footer" /></div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} 晏阳技术组 <span className="footer-english">Yanyang Technology Group</span></p>
            <p className="footer-disclosure"><Sparkles size={13} aria-hidden="true" />{disclosure}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
