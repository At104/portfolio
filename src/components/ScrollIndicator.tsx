import { useEffect, useRef, useState } from "react";

/**
 * Custom scroll indicator: a fixed blue I-piece (4×1 tetromino) pinned to the
 * right edge that tracks scroll progress and can be dragged to scroll. The
 * native scrollbar is hidden in index.css; wheel/trackpad/keyboard scrolling
 * still work as normal.
 */
export default function ScrollIndicator() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pieceRef = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);

  // Follow scroll position (transform set directly to avoid re-rendering).
  useEffect(() => {
    const track = trackRef.current;
    const piece = pieceRef.current;
    if (!track || !piece) return;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setScrollable(max > 4);
      const progress = max > 0 ? doc.scrollTop / max : 0;
      const travel = track.clientHeight - piece.offsetHeight;
      piece.style.transform = `translateY(${Math.max(0, progress * travel)}px)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Recompute when page height changes (e.g. after navigating to a new route)
    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  // Drag the piece to scroll.
  useEffect(() => {
    const track = trackRef.current;
    const piece = pieceRef.current;
    if (!track || !piece) return;
    let dragging = false;

    const scrollToPointer = (clientY: number) => {
      const rect = track.getBoundingClientRect();
      const travel = track.clientHeight - piece.offsetHeight;
      const y = Math.min(Math.max(clientY - rect.top - piece.offsetHeight / 2, 0), travel);
      const progress = travel > 0 ? y / travel : 0;
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      window.scrollTo({ top: progress * max, behavior: "instant" as ScrollBehavior });
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      piece.setPointerCapture(e.pointerId);
      e.preventDefault();
    };
    const onMove = (e: PointerEvent) => {
      if (dragging) scrollToPointer(e.clientY);
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      try {
        piece.releasePointerCapture(e.pointerId);
      } catch {
        /* pointer already released */
      }
    };

    piece.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      piece.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className="fixed right-1.5 z-40"
      style={{ top: 84, bottom: 20, width: 15, pointerEvents: "none" }}
    >
      <div
        ref={pieceRef}
        className="scroll-piece"
        style={{
          pointerEvents: scrollable ? "auto" : "none",
          opacity: scrollable ? 1 : 0,
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="scroll-cell" />
        ))}
      </div>
    </div>
  );
}
