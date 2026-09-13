import { about, profile } from '@/data/site';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow="About"
          title={about.heading}
          description={about.body[0]}
        />

        {/* 벤토 그리드 */}
        <div className={styles.bento}>
          {/* 프로필 카드 */}
          <article className={`${styles.card} ${styles.profile}`} data-reveal>
            <div className={styles.portrait} aria-hidden="true">
              <span>{profile.nameEn.charAt(0)}</span>
            </div>
            <div className={styles.profileBody}>
              <h3 className={styles.name}>
                {profile.name}
                <em>{profile.nameEn}</em>
              </h3>
              <p className={styles.profileText}>{about.body[1]}</p>
            </div>
            <dl className={styles.facts}>
              <div>
                <dt>Based in</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Publishing · Frontend</dd>
              </div>
            </dl>
          </article>

          {/* 지표 카드 */}
          {about.stats.map((stat, i) => (
            <article
              key={stat.label}
              className={`${styles.card} ${styles.stat}`}
              data-reveal
              style={{ '--reveal-delay': `${(i + 1) * 80}ms` } as React.CSSProperties}
            >
              <strong className={styles.statValue}>{stat.value}</strong>
              <span className={styles.statLabel}>{stat.label}</span>
            </article>
          ))}

          {/* 작업 원칙 카드 */}
          {about.principles.map((item, i) => (
            <article
              key={item.title}
              className={`${styles.card} ${styles.principle}`}
              data-reveal
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              <span className={styles.principleNo} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.principleTitle}>{item.title}</h3>
              <p className={styles.principleDesc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
