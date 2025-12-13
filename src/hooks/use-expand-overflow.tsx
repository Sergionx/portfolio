import { useEffect, useRef, useState } from "react";
export default function useExpandOverflow() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [overflowingItems, setOverflowingItems] = useState<
    Record<number, boolean>
  >({});
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const checkOverflow = () => {
      descriptionRefs.current.forEach((el, idx) => {
        if (!el || expandedItems[idx]) return;
        const isOverflow = el.scrollHeight > el.clientHeight + 1;

        setOverflowingItems((prev) =>
          prev[idx] === isOverflow ? prev : { ...prev, [idx]: isOverflow }
        );
      });
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [expandedItems]);

  return { expandedItems, setExpandedItems, overflowingItems, descriptionRefs };
}
