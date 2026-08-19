import { useState, useEffect, useRef } from "react";

type UseIntersectionObserverReturn = {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
};

function useIntersectionObserver(options: UseIntersectionObserverReturn = {}) {
  // ref, isIntersectingを返す
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      // 一度画面内に入ったらtrueを保持
      if (entry.isIntersecting) {
        setIsIntersecting(entry.isIntersecting);
        intersectionObserver.unobserve(element);
      }
    }, options);

    intersectionObserver.observe(element);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [options]);
  // Intersection Observer APIを使用

  return { ref, isIntersecting };
}

type LazyImageProps = {
  src: string;
  alt: string;
};

function LazyImage({ src, alt }: LazyImageProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div ref={ref} style={{ minHeight: "200px", background: "#f0f0f0" }}>
      {isIntersecting ? (
        <img src={src} alt={alt} style={{ width: "100%" }} />
      ) : (
        <p>Scroll to load image...</p>
      )}
    </div>
  );
}

function Knock53() {
  return (
    <div>
      <h2>Lazy Loading Images</h2>
      <div style={{ height: "150vh" }}>
        <p>Scroll down to see images load</p>
      </div>
      <LazyImage src="https://picsum.photos/400/200?random=1" alt="Image 1" />
      <div style={{ height: "50vh" }} />
      <LazyImage src="https://picsum.photos/400/200?random=2" alt="Image 2" />
      <div style={{ height: "50vh" }} />
      <LazyImage src="https://picsum.photos/400/200?random=3" alt="Image 3" />
    </div>
  );
}

export default Knock53;
