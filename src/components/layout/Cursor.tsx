'use client';

import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

/**
 * 데스크톱(포인터가 정밀한 환경) 전용 커스텀 커서.
 * a, button, [data-cursor] 위에서 확대됩니다.
 * 터치 기기와 reduced-motion 환경에서는 렌더링하지 않습니다.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches;
    if (!fine || reduced) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.translate = `${mouseX}px ${mouseY}px`;
      ring.dataset.visible = 'true';

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest('a, button, [data-cursor="hover"]'),
      );
      ring.dataset.hover = String(isInteractive);
    };

    const onLeave = () => {
      ring.dataset.visible = 'false';
    };

    // ring 은 관성을 주기 위해 rAF 로 따라붙습니다.
    const loop = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.translate = `${ringX}px ${ringY}px`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    document.documentElement.dataset.customCursor = 'true';

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      delete document.documentElement.dataset.customCursor;
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} data-visible="false" />
    </div>
  );
}
