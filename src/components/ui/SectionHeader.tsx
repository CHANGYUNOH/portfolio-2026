import styles from './SectionHeader.module.css';

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'start' | 'between';
};

/** 모든 섹션의 머리말을 동일한 리듬으로 맞춰주는 컴포넌트 */
export default function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = 'between',
}: Props) {
  return (
    <header className={styles.head} data-align={align}>
      <div className={styles.meta} data-reveal>
        <span className={styles.index}>{index}</span>
        <span className={styles.eyebrow}>{eyebrow}</span>
      </div>

      <div className={styles.body}>
        <h2 className={styles.title} data-reveal>
          {title}
        </h2>
        {description && (
          <p className={styles.desc} data-reveal style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
