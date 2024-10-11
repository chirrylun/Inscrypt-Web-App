'use client'

import { useEffect, useState, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseIntersectionObserverReturn {
  ref: RefObject<Element>;
  inView: boolean;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  triggerOnce = false,
}: UseIntersectionObserverProps = {}): UseIntersectionObserverReturn {
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<Element>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          setInView(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return { ref, inView };
}