import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectArtwork } from './Artwork';
import ExternalLink from './ExternalLink';
import { GitHubIcon, ProjectIcon } from './Icons';

export default function RepositoryCard({ repository, featured = false }) {
  const reduced = useReducedMotion();
  return (
    <motion.article layout={!reduced} initial={{ opacity: 0, transform: reduced ? 'none' : 'translateY(12px)' }} animate={{ opacity: 1, transform: 'translateY(0px)' }} exit={{ opacity: 0, transition: { duration: 0.12 } }} transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} className={`card repository-card ${featured ? 'repository-card--featured' : ''}`}>
      <Link to={`/repos/${repository.slug}`} className="project-art-link" tabIndex={-1} aria-hidden="true"><ProjectArtwork type={repository.artwork} /></Link>
      <div className="card-body repository-card-body">
        <div className="project-category"><span className={`project-icon project-icon--${repository.icon}`}><ProjectIcon name={repository.icon} size={18} /></span><span>{repository.categoryLabel}</span><ExternalLink href={repository.github} className="project-github" aria-label={`在 GitHub 查看 ${repository.name}（新标签页打开）`}><GitHubIcon size={18} /><ArrowUpRight size={12} aria-hidden="true" /></ExternalLink></div>
        <h3><Link to={`/repos/${repository.slug}`}>{repository.name}</Link></h3>
        <p className="project-summary">{repository.summary}</p>
        <ul className="project-highlights">{repository.highlights.map((item) => <li key={item}><Check size={12} aria-hidden="true" />{item}</li>)}</ul>
        <div className="project-stack">{repository.stack.slice(0, 3).map((item) => <span className="badge badge-ghost" key={item}>{item}</span>)}</div>
        <div className="project-card-footer"><span className="language-label"><i className={`language-dot language-dot--${repository.language.toLowerCase()}`} />{repository.language}<span className="license-separator">/</span><span>{repository.license}</span></span><Link to={`/repos/${repository.slug}`} className="project-details-link" aria-label={`了解 ${repository.name} 的项目详情`}>了解项目<ArrowRight size={15} aria-hidden="true" /></Link></div>
      </div>
    </motion.article>
  );
}
