import { useInView } from 'motion/react';
import { useRef } from 'react';

type UseInViewAnimationOptions = {
  once?: boolean;
  amount?: number;
};

export function useInViewAnimation(options?: UseInViewAnimationOptions) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    amount: options?.amount ?? 0.3,
  });
  return { ref, isInView };
}
