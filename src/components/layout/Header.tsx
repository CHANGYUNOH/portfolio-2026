'use client';

import { useEffect, useState } from 'react';
import { nav, profile } from '@/data/site';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  /* 스크롤 상태 — 헤더 배경 전환 */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* 현재 보고 있는 섹션을 네비에 반영 (스크롤 스파이) */
  useEffect(() => {
    const sections = nav
      .map(({ href }) => document.querySelector(href))
      .filter((el): el is Element => Boolean(el));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* 모바일 메뉴가 열려 있는 동안 본문 스크롤 잠금 */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <a className={styles.skip} href="#main">
        본문 바로가기
      </a>

      <header className={styles.header} data-scrolled={scrolled}>
        <div className={styles.inner}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoMark} aria-hidden="true" />
            <span className={styles.logoText}>
              {profile.nameEn}
              <em>{profile.role}</em>
            </span>
          </a>

          <nav className={styles.nav} aria-label="주요 섹션">
            <ul className={styles.navList}>
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                    data-active={active === item.href}
                    aria-current={active === item.href ? 'true' : undefined}
                  >
                    <span className={styles.navIndex}>{item.index}</span>
                    <span className={styles.navLabel}>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            {profile.available && (
              <span className={styles.badge}>
                <i aria-hidden="true" />
                Open to work
              </span>
            )}
            <ThemeToggle />
            <button
              type="button"
              className={styles.burger}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 전체화면 메뉴 */}
      <div
        id="mobile-menu"
        className={styles.sheet}
        data-open={open}
        hidden={!open}
      >
        <ul className={styles.sheetList}>
          {nav.map((item, i) => (
            <li key={item.href} style={{ '--i': i } as React.CSSProperties}>
              <a href={item.href} onClick={() => setOpen(false)}>
                <span className={styles.navIndex}>{item.index}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.sheetMail}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>
    </>
  );
}
