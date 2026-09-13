'use client';

import { useCallback, useSyncExternalStore } from 'react';
import styles from './ThemeToggle.module.css';

type Theme = 'dark' | 'light';

export const THEME_STORAGE_KEY = 'portfolio-theme';

/** layout 의 <head> 에 인라인으로 넣어 FOUC(테마 깜빡임)를 막는 스크립트 */
export const themeInitScript = `
(function(){
  try {
    var k = '${THEME_STORAGE_KEY}';
    var s = localStorage.getItem(k);
    var m = window.matchMedia('(prefers-color-scheme: light)').matches;
    document.documentElement.dataset.theme = s || (m ? 'light' : 'dark');
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

/* 테마의 원본(single source of truth)은 <html data-theme> 입니다.
   React state 로 복제하지 않고 DOM 을 그대로 구독합니다. */
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
};

const getSnapshot = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';

/* 서버 렌더링 시점에는 알 수 없으므로 기본값. 수화 직후 실제 값으로 교체됩니다. */
const getServerSnapshot = (): Theme => 'dark';

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next: Theme =
      document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* 프라이빗 모드 등에서 저장 실패 — 무시 */
    }
  }, []);

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
      aria-pressed={theme === 'light'}
    >
      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb} data-theme={theme} />
      </span>
      <span className={styles.label} aria-hidden="true">
        {theme === 'dark' ? 'DARK' : 'LITE'}
      </span>
    </button>
  );
}
