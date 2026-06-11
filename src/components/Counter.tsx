import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

type CounterProps = {
  value: number;
  delay?: number;
};

export default function Counter({ value, delay = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const count = useMotionValue(0);

  const rounded = useTransform(() =>
    Math.round(count.get()).toLocaleString("fa-IR"),
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 2.5,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [count, value, delay, isInView]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {rounded}
    </motion.span>
  );
}
