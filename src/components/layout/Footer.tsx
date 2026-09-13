import { profile } from '@/data/site';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} {profile.nameEn}. All rights reserved.
        </p>

        <p className={styles.built}>
          Built with Next.js · CSS Modules
        </p>

        <a href="#top" className={styles.top}>
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>

      {/* 대형 워터마크 — 장식용 그래픽이므로 SVG 로 그리고 접근성 트리에서 제외합니다.
          textLength 덕분에 이름이 길어져도 항상 푸터 폭에 정확히 들어맞습니다. */}
      <svg
        className={styles.watermark}
        viewBox="0 20 1200 122"
        preserveAspectRatio="xMidYMax meet"
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        <text
          x="600"
          y="128"
          textAnchor="middle"
          textLength="1180"
          lengthAdjust="spacingAndGlyphs"
        >
          {profile.nameEn.toUpperCase()}
        </text>
      </svg>
    </footer>
  );
}
