import Image from 'next/image';
import { works } from '@/data/site';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './Works.module.css';

export default function Works() {
  return (
    <section className="section" id="works">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Selected Works"
          title={'만든 것들'}
          description="기획 의도부터 마크업 구조, 성능 개선까지. 각 프로젝트에서 무엇을 맡았고 무엇을 바꿨는지 정리했습니다."
        />

        <ul className={styles.grid}>
          {works.map((work, i) => {
            const Wrapper = work.href ? 'a' : 'div';

            return (
              <li
                key={work.id}
                className={styles.cell}
                data-featured={work.featured}
                data-reveal
                style={{ '--reveal-delay': `${(i % 3) * 90}ms` } as React.CSSProperties}
              >
                <Wrapper
                  className={styles.card}
                  {...(work.href
                    ? {
                        href: work.href,
                        target: '_blank',
                        rel: 'noreferrer noopener',
                      }
                    : {})}
                >
                  <div className={styles.thumb}>
                    {work.thumbnail ? (
                      <Image
                        src={work.thumbnail}
                        alt=""
                        fill
                        sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        className={styles.thumbImg}
                      />
                    ) : (
                      /* 이미지가 없을 때의 타이포 플레이스홀더 */
                      <span className={styles.placeholder} aria-hidden="true">
                        {work.id.replace('work-', '')}
                      </span>
                    )}
                    <span className={styles.year}>{work.year}</span>
                  </div>

                  <div className={styles.body}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.title}>{work.title}</h3>
                      <span className={styles.arrow} aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p className={styles.role}>{work.role}</p>
                    <p className={styles.summary}>{work.summary}</p>
                    <ul className={styles.tags}>
                      {work.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </Wrapper>
              </li>
            );
          })}
        </ul>

        <p className={styles.note} data-reveal>
          * 작업물 이미지와 상세 케이스 스터디는 순차적으로 업데이트하고 있습니다.
        </p>
      </div>
    </section>
  );
}
