import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { fadeUp, pageLoad, staggerChildren } from '@/lib/animations';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 md:px-8">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-45" />

      <motion.div
        variants={pageLoad}
        initial="hidden"
        animate="visible"
        className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-2 lg:items-center"
      >
        <motion.div variants={staggerChildren()} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <motion.h1 variants={fadeUp} className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-6xl xl:text-7xl">
            Modern Software Solutions Built With Precision
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Umbrella Labs helps businesses and creators build fast, scalable, and modern software experiences from web platforms to mobile applications and custom systems.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow">Start a Project</a>
            <a href="#projects" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">View Work</a>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto h-[380px] w-full max-w-[520px] lg:h-[520px]">
          <motion.div
            className="absolute left-8 top-10 h-36 w-36 rounded-full bg-primary/45 blur-[68px]"
            animate={reduceMotion ? undefined : { y: [0, -14, 0], x: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-10 top-24 h-40 w-40 rounded-full bg-secondary/35 blur-[72px]"
            animate={reduceMotion ? undefined : { y: [0, 16, 0], x: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-12 left-20 h-32 w-32 rounded-full bg-highlight/25 blur-[58px]"
            animate={reduceMotion ? undefined : { y: [0, -10, 0], x: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />

          <div className="glass-panel relative mx-auto h-full w-full rounded-[28px] p-6">
            <div className="absolute inset-0 rounded-[28px] bg-radial-mesh opacity-80" />
            <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] rounded-2xl border border-white/15 bg-bg/60 p-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="mt-4 space-y-3 font-mono text-xs text-white/80 md:text-sm">
                <div className="rounded-lg bg-white/5 p-3">const product = build({`{`}</div>
                <div className="rounded-lg bg-white/5 p-3"> stack: &quot;modern&quot;,</div>
                <div className="rounded-lg bg-white/5 p-3"> quality: &quot;production-ready&quot;,</div>
                <div className="rounded-lg bg-white/5 p-3"> owner: &quot;Umbrella Labs&quot;</div>
                <div className="rounded-lg bg-white/5 p-3">{`}`});</div>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-xl border border-primary/30 bg-primary/10 px-3 py-2 text-xs text-text-secondary">
                <span>Deployment status</span>
                <span className="text-highlight">Healthy</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary" aria-label="Scroll to services">
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs"
        >
          Scroll <ArrowDown size={14} />
        </motion.span>
      </a>
    </section>
  );
}
