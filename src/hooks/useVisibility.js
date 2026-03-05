import { useEffect, useRef, useState } from "react";

export const useVisibility = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // IMPORTANTE: Solo actualizamos si es true (entra en pantalla)
      // Esto optimiza para no disparar actualizaciones cuando sale.
      // Pero para este caso, necesitamos el estado actual
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);
  return [elementRef, isVisible];
};
