import { profile, socials } from '@/data/site';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-label="소개">
      {/* 배경 그리드 라인 */}
      <div className={styles.grid} aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className={`container ${styles.inner}`}>
        <p className={styles.status} data-reveal>
          <span aria-hidden="true">◆</span>
          {profile.location} · {profile.role}
        </p>

        <h1 className={styles.headline}>
          {profile.headline.map((line, i) => (
            <span
              key={line}
              className={styles.lineMask}
              data-reveal="mask"
              style={{ '--reveal-delay': `${i * 110}ms` } as React.CSSProperties}
            >
              <span className={styles.line}>
                {line}
                {i === 1 && (
                  <em className={styles.dot} aria-hidden="true">
                    ●
                  </em>
                )}
              </span>
            </span>
          ))}
        </h1>

        <div className={styles.bottom}>
          <p
            className={styles.tagline}
            data-reveal
            style={{ '--reveal-delay': '320ms' } as React.CSSProperties}
          >
            {profile.tagline}
          </p>

          <div
            className={styles.aside}
            data-reveal
            style={{ '--reveal-delay': '420ms' } as React.CSSProperties}
          >
            <ul className={styles.socials}>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className={styles.social}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      s.href.startsWith('http')
                        ? 'noreferrer noopener'
                        : undefined
                    }
                  >
                    {s.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <a className={styles.cta} href="#works">
              <span>Selected Works</span>
              <i aria-hidden="true">↓</i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>SCROLL</span>
        <i />
      </div>
    </section>
  );
}
