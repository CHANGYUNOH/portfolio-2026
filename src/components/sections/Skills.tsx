import { skills, marqueeWords } from '@/data/site';
import SectionHeader from '@/components/ui/SectionHeader';
import Marquee from '@/components/ui/Marquee';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className={`section ${styles.section}`} id="skills">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Skills"
          title={'쓸 수 있는 도구,\n그리고 쓰는 방법'}
          description="도구 목록보다 중요한 건 상황에 맞게 고르는 판단입니다. 아래는 실무에서 직접 사용해 본 기술들입니다."
        />

        <div className={styles.groups}>
          {skills.map((group, gi) => (
            <article
              key={group.category}
              className={styles.group}
              data-reveal
              style={{ '--reveal-delay': `${gi * 100}ms` } as React.CSSProperties}
            >
              <header className={styles.groupHead}>
                <h3 className={styles.groupTitle}>{group.category}</h3>
                <span className={styles.groupCaption}>{group.caption}</span>
              </header>

              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <div className={styles.itemHead}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemLevel}>{item.level}</span>
                    </div>
                    <div
                      className={styles.bar}
                      role="meter"
                      aria-valuenow={item.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${item.name} 숙련도`}
                    >
                      <span
                        className={styles.barFill}
                        style={
                          { '--level': `${item.level}%` } as React.CSSProperties
                        }
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.band}>
        <Marquee items={marqueeWords} duration={42} />
      </div>
    </section>
  );
}
