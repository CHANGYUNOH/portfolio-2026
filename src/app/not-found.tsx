import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section container" style={{ minHeight: '70svh', display: 'grid', alignContent: 'center', gap: 'var(--sp-5)' }}>
      <p className="eyebrow">404</p>
      <h1 className="display" style={{ fontSize: 'var(--t-h1)' }}>
        PAGE NOT FOUND
      </h1>
      <p style={{ color: 'var(--fg-muted)' }}>
        찾으시는 페이지가 없습니다. 홈으로 돌아가 주세요.
      </p>
      <Link
        href="/"
        style={{
          justifySelf: 'start',
          padding: 'var(--sp-3) var(--sp-6)',
          borderRadius: 'var(--r-full)',
          background: 'var(--accent)',
          color: 'var(--on-accent)',
          fontWeight: 600,
        }}
      >
        홈으로
      </Link>
    </section>
  );
}
