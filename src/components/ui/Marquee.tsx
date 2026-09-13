import styles from './Marquee.module.css';

type Props = {
  items: readonly string[];
  /** 초 단위 — 클수록 느립니다 */
  duration?: number;
  reverse?: boolean;
};

/**
 * CSS 만으로 동작하는 무한 마퀴.
 * 목록을 2벌 렌더링하고 -50% 만큼 이동시켜 이음매 없이 반복합니다.
 */
export default function Marquee({
  items,
  duration = 38,
  reverse = false,
}: Props) {
  return (
    <div
      className={styles.marquee}
      data-reverse={reverse}
      style={{ '--duration': `${duration}s` } as React.CSSProperties}
    >
      <div className={styles.track}>
        {[0, 1].map((copy) => (
          <ul key={copy} className={styles.list} aria-hidden={copy === 1}>
            {items.map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.star} aria-hidden="true">
                  ✳
                </span>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
