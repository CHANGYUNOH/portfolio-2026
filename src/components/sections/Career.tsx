import { career } from '@/data/site';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './Career.module.css';

export default function Career() {
  return (
    <section className="section" id="career">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Career"
          title={'지나온 자리'}
          description="어디서 무엇을 했고, 그 과정에서 무엇이 남았는지."
        />

        <ol className={styles.timeline}>
          {career.map((item, i) => (
            <li
              key={`${item.company}-${item.period}`}
              className={styles.item}
              data-reveal
              style={{ '--reveal-delay': `${i * 110}ms` } as React.CSSProperties}
            >
              <div className={styles.period}>
                <span className={styles.dot} aria-hidden="true" />
                <time>{item.period}</time>
              </div>

              <div className={styles.content}>
                <h3 className={styles.company}>
                  {item.company}
                  <span className={styles.position}>{item.position}</span>
                </h3>
                <p className={styles.desc}>{item.description}</p>
                <ul className={styles.achievements}>
                  {item.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
