import { contact, profile, socials } from '@/data/site';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.wrap}>
          <p className={styles.eyebrow} data-reveal>
            <span className={styles.index}>05</span>
            Contact
          </p>

          <h2 className={styles.headline}>
            {contact.heading.split('\n').map((line, i) => (
              <span
                key={line}
                className={styles.lineMask}
                data-reveal="mask"
                style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
              >
                <span>{line}</span>
              </span>
            ))}
          </h2>

          <p className={styles.body} data-reveal>
            {contact.body}
          </p>

          <div className={styles.actions} data-reveal>
            <a className={styles.mail} href={`mailto:${profile.email}`}>
              <span className={styles.mailLabel}>Email</span>
              <span className={styles.mailValue}>{profile.email}</span>
              <i aria-hidden="true">→</i>
            </a>

            {profile.resumeUrl !== '#' && (
              <a className={styles.resume} href={profile.resumeUrl} download>
                이력서 내려받기
                <i aria-hidden="true">↓</i>
              </a>
            )}
          </div>

          <ul className={styles.socials} data-reveal>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    s.href.startsWith('http')
                      ? 'noreferrer noopener'
                      : undefined
                  }
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
