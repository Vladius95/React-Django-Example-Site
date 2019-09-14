import * as React from "react";
import { fill, compact, debounce } from "lodash";
import ResizeObserver from "resize-observer-polyfill";

import "./MasonryGrid.scss";

function useResizeObserver(onResize: VoidFunction, ref: React.RefObject<HTMLElement>) {
  const debouncedOnResize = debounce(onResize, 50);
  React.useEffect(() => {
    console.log("init resize");
    const observer = new ResizeObserver(debouncedOnResize);
    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onResize, ref]);
}

export interface MasonryGridProps {
  columns?: number;
}

function areEqualMasonryGridProps(prevProps: MasonryGridProps, nextProps: MasonryGridProps) {
  return false;
}

export const MasonryGrid: React.FC<MasonryGridProps> = React.memo(({ columns = 3, children }) => {
  const [grid, setGrid] = React.useState([]);

  const onResize = React.useCallback(() => {
    const windowWidth = window.innerWidth;
    const elementWidth = 400;
    const c = (windowWidth / elementWidth) >> 0;
    console.log(" resize", windowWidth, elementWidth, c);
    const _grid = [];

    for (let i = 0; i < c; i++) {
      _grid.push([]);
    }

    if (!Array.isArray(children)) {
      _grid[0].push(children);
    } else {
      const elements = Array.from(children as ArrayLike<React.ReactNode>);
      for (let i = 0; i < elements.length; i++) {
        _grid[i % c].push(elements[i]);
      }
    }

    setGrid(_grid);
  }, []);

  const refContainer: React.RefObject<HTMLDivElement> = React.useRef(null);

  useResizeObserver(onResize, refContainer);

  return (
    <div ref={refContainer} className="masonry-grid">
      {compact(grid).map((columns, key) => (
        <div key={key} className="masonry-grid__column">
          {columns.map((cell, key) => (
            <div key={key} className="masonry-grid__cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}, areEqualMasonryGridProps);

MasonryGrid.displayName = "MasonryGrid";
