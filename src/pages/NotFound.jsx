import { ArrowLeft, ArrowUpRight, CodeXml } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function NotFound({ repository = false }) {
  return <main id="main-content" className="not-found site-container" tabIndex={-1}><Reveal><div className="not-found-code" aria-hidden="true"><span>{'{'}</span>404<span>{'}'}</span></div><p className="eyebrow"><CodeXml size={14} aria-hidden="true" />PAGE NOT FOUND</p><h1>{repository ? '项目未找到' : '页面未找到'}</h1><p>请检查地址，或返回首页查看项目。</p><div className="not-found-actions"><Link to="/" className="btn btn-primary primary-button"><ArrowLeft size={17} aria-hidden="true" />返回首页</Link><Link to="/#projects" className="btn btn-ghost secondary-button">浏览项目<ArrowUpRight size={17} aria-hidden="true" /></Link></div></Reveal></main>;
}
