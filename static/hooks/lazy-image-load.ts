import * as React from "react";

export function useLazyImageLoad(imageClassName: string) {
  React.useEffect(() => {
    const images = Array.from(document.querySelectorAll(`.${imageClassName}`));

    const observer = new IntersectionObserver(entries => {
      entries.map(entry => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src = image.dataset.src;
          if (image.dataset.srcset) image.srcset = image.dataset.srcset;
          image.classList.remove(imageClassName);
          observer.unobserve(image);
        }
      });
    });

    images.map(image => observer.observe(image));

    return () => images.map(image => observer.unobserve(image));
  });
}
