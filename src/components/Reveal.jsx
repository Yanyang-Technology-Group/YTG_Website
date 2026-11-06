import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} initial={{ opacity: 0, transform: reduced ? 'none' : 'translateY(16px)' }} whileInView={{ opacity: 1, transform: 'translateY(0px)' }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: reduced ? 0.15 : 0.5, delay: reduced ? 0 : delay, ease: [0.23, 1, 0.32, 1] }} {...props}>
      {children}
    </motion.div>
  );
}
