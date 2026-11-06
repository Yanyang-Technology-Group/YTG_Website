import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { getRepository } from './data/repositories';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import RepositoryDetail from './pages/RepositoryDetail';

function NavigationEffects({ location, viewRef }) {
  const { pathname, hash } = location;
  useEffect(() => {
    const repository = pathname.startsWith('/repos/') ? getRepository(pathname.split('/')[2]) : undefined;
    document.title = pathname === '/' ? '晏阳技术组 · Yanyang Technology Group' : repository ? `${repository.name} · 晏阳技术组` : '页面未找到 · 晏阳技术组';
    const description = document.querySelector('meta[name="description"]');
    description.content = repository?.summary || '晏阳技术组 Yanyang Technology Group：创新为骨，代码为韵。探索社区平台、跨平台客户端与 Minecraft 开源项目。';
    // The next frame runs after the new route commits, including hash links from detail pages.
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = viewRef.current?.querySelector(`[id="${CSS.escape(hash.slice(1))}"]`);
        if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
        viewRef.current?.querySelector('main')?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, viewRef]);
  return null;
}

function PageTransition({ location }) {
  const viewRef = useRef(null);
  const present = useIsPresent();
  const reduced = useReducedMotion();
  return <motion.div ref={viewRef} className="route-view" aria-hidden={present ? undefined : true} inert={present ? undefined : true} initial={{ opacity: 0, transform: reduced ? 'none' : 'translateY(6px)' }} animate={{ opacity: 1, transform: 'translateY(0px)' }} exit={{ opacity: 0, position: 'absolute', insetInline: 0, pointerEvents: 'none' }} transition={{ duration: reduced ? 0.1 : 0.2, ease: [0.23, 1, 0.32, 1] }}><NavigationEffects location={location} viewRef={viewRef} /><Routes location={location}><Route path="/" element={<Home />} /><Route path="/repos/:slug" element={<RepositoryDetail />} /><Route path="*" element={<NotFound />} /></Routes></motion.div>;
}

export default function App() {
  const location = useLocation();
  return <Layout><AnimatePresence mode="sync" initial={false}><PageTransition key={location.pathname} location={location} /></AnimatePresence></Layout>;
}
