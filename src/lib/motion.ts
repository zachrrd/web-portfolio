import type { Transition, Variants } from "framer-motion";

export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const revealTransition: Transition = {
  duration: 0.65,
  ease: premiumEase,
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.99, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: revealTransition,
  },
};

export const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export const revealViewport = { once: true, margin: "-10%" } as const;
