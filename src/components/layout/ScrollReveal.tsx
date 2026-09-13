'use client';

import { useEffect } from 'react';

/**
 * 문서 전체의 [data-reveal] 요소를 한 번에 관찰합니다.
 *
 * 이 컴포넌트 하나만 클라이언트 컴포넌트이면 되므로,
 * 각 섹션은 서버 컴포넌트로 남아 SSR HTML 그대로 내려갑니다.
 * 사용법: 아무 요소에나 data-reveal (또는 data-reveal="mask") 만 붙이면 됩니다.
 *
 * IntersectionObserver 를 기본으로 쓰되,
 * 앵커 점프처럼 한 프레임에 여러 화면을 건너뛰는 경우에는
 * 콜백이 누락될 수 있어 스크롤 스윕을 백업으로 함께 돌립니다.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = new Set(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    const reveal = (el: Element) => {
      el.setAttribute('data-revealed', 'true');
      targets.delete(el as HTMLElement);
    };

    const revealAll = () => targets.forEach(reveal);

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    targets.forEach((el) => io.observe(el));

    /* ---- 백업: 뷰포트 상단을 이미 지난 요소를 강제로 노출 ---- */
    let ticking = false;
    const sweep = () => {
      ticking = false;
      const limit = window.innerHeight * 0.92;
      targets.forEach((el) => {
        if (el.getBoundingClientRect().top < limit) {
          io.unobserve(el);
          reveal(el);
        }
      });
      if (!targets.size) teardown();
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(sweep);
    };

    const teardown = () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      io.disconnect();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return teardown;
  }, []);

  return null;
}
