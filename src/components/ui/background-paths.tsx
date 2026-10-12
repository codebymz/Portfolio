"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';

function FloatingPaths({
  position,
  reducedMotion,
}: {
  position: number;
  reducedMotion: boolean;
}) {
  const paths = Array.from({ length: 18 }, (_, index) => ({
    id: index,
    d: `M-${380 - index * 10 * position} -${189 + index * 12}C-${
      380 - index * 10 * position
    } -${189 + index * 12} -${312 - index * 10 * position} ${216 - index * 12} ${
      152 - index * 10 * position
    } ${343 - index * 12}C${616 - index * 10 * position} ${470 - index * 12} ${
      684 - index * 10 * position
    } ${875 - index * 12} ${684 - index * 10 * position} ${875 - index * 12}`,
    width: 0.6 + index * 0.04,
    opacity: 0.08 + (index % 6) * 0.025,
  }));

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ contain: 'strict', isolation: 'isolate' }}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full opacity-70 dark:opacity-85"
        style={{
          color: 'var(--text)',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
        viewBox="0 0 696 316"
        fill="none"
        focusable="false"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            strokeLinecap="round"
            initial={
              reducedMotion
                ? { pathLength: 1, pathOffset: 0 }
                : { pathLength: 0.4, pathOffset: 0 }
            }
            animate={
              reducedMotion
                ? undefined
                : {
                    pathOffset: [0, 1],
                  }
            }
            transition={{
              duration: 28 + (path.id % 6) * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = 'Background Paths',
  backgroundOnly = false,
}: {
  title?: string;
  backgroundOnly?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;

  if (backgroundOnly) {
    return (
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <FloatingPaths position={1} reducedMotion={reducedMotion} />
        <FloatingPaths position={-1} reducedMotion={reducedMotion} />
      </div>
    );
  }

  const words = title.split(' ');

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="absolute inset-0">
        <FloatingPaths position={1} reducedMotion={reducedMotion} />
        <FloatingPaths position={-1} reducedMotion={reducedMotion} />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-8 text-5xl font-bold sm:text-7xl md:text-8xl">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="mr-4 inline-block last:mr-0">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={reducedMotion ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: 'spring',
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block bg-gradient-to-r from-neutral-900 to-neutral-700/80 bg-clip-text text-transparent dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div className="group relative inline-block overflow-hidden rounded-2xl bg-gradient-to-b from-black/10 to-white/10 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl dark:from-white/10 dark:to-black/10">
            <Button
              variant="ghost"
              className="rounded-[1.15rem] border border-black/10 bg-white/95 px-8 py-6 text-lg font-semibold text-black backdrop-blur-md transition-all duration-300 group-hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-black/95 dark:text-white dark:hover:bg-black"
            >
              <span className="opacity-90 transition-opacity group-hover:opacity-100">
                Discover Excellence
              </span>
              <span className="ml-3 opacity-70 transition-all group-hover:translate-x-1.5 group-hover:opacity-100">
                →
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}