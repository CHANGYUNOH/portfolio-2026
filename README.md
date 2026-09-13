# Portfolio — Web Publisher & Frontend

웹 퍼블리셔 / 프론트엔드 포트폴리오. Next.js App Router 기반 SSR(정적 프리렌더) 사이트입니다.

```bash
nvm use          # .nvmrc → Node 22
npm install
npm run dev      # http://localhost:3000
```

| 스크립트 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 (타입 체크 포함) |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint |

---

## 1. 내용 수정은 여기서만

**모든 텍스트·링크·프로젝트는 [`src/data/site.ts`](src/data/site.ts) 한 파일에 있습니다.**
컴포넌트를 열 필요 없이 이 파일만 고치면 화면이 바뀝니다. `// TODO` 주석이 붙은 곳이 교체 대상입니다.

| 상수 | 내용 |
| --- | --- |
| `SITE_URL` | 배포 도메인. 메타데이터·사이트맵·OG 이미지가 함께 참조 |
| `profile` | 이름, 직무, 히어로 대문 카피, 한 줄 소개, 이메일, 이력서 경로 |
| `socials` | 헤더·히어로·컨택트에 공통으로 쓰이는 외부 링크 |
| `nav` | 상단 네비게이션 (섹션 id 와 1:1) |
| `about` | 소개 문단, 지표 3개, 작업 원칙 카드 4개 |
| `skills` | 카테고리별 기술 + 숙련도(0~100) |
| `works` | 프로젝트 카드 |
| `career` | 경력 타임라인 |
| `contact` / `marqueeWords` | 마무리 섹션, 흐르는 키워드 |

### 프로젝트 추가하기

`works` 배열에 객체를 하나 더 넣으면 카드가 생깁니다.

```ts
{
  id: 'work-07',
  title: '프로젝트 이름',
  summary: '한두 문장 요약',
  year: '2026',
  role: 'Publisher',
  tags: ['Next.js', 'A11y'],
  thumbnail: '/works/work-07.png', // public/ 기준 경로. 없으면 번호 플레이스홀더
  href: 'https://...',             // 있으면 카드 전체가 링크가 됩니다
  featured: true,                  // 데스크톱에서 2칸을 차지
}
```

썸네일 이미지는 `public/` 에 넣고 `/파일명` 으로 참조합니다. 권장 비율은 일반 카드 16:10, `featured` 카드 16:8.

### 이력서 버튼

`profile.resumeUrl` 이 `'#'` 이면 버튼이 숨겨집니다. `public/resume.pdf` 를 넣고 `'/resume.pdf'` 로 바꾸면 노출됩니다.

---

## 2. 디자인 시스템

색·간격·타이포·모션 값은 전부 [`src/styles/tokens.css`](src/styles/tokens.css) 의 CSS 변수입니다.
컴포넌트 CSS 는 `var(--*)` 로만 접근하므로, **토큰 값 하나만 바꾸면 사이트 전체가 따라옵니다.**

```css
--accent: #d4f74e;   /* 포인트 컬러 — 여기만 바꾸면 전체 톤이 바뀝니다 */
--section-y: ...;    /* 섹션 상하 여백 */
--container: 1280px; /* 최대 폭 */
```

다크가 기본이고, 라이트 테마는 `[data-theme='light']` 블록에서 **토큰 값만** 재정의합니다.
구조 CSS 는 테마를 알지 못하므로 테마를 추가해도 컴포넌트 수정이 필요 없습니다.

- 테마 우선순위: `localStorage` → OS 설정(`prefers-color-scheme`) → 다크
- 깜빡임(FOUC)은 `<head>` 인라인 스크립트가 페인트 전에 `data-theme` 을 확정해 막습니다

---

## 3. 구조

```
src/
├── app/
│   ├── layout.tsx           # 폰트, 메타데이터, 헤더/푸터/전역 스크립트
│   ├── page.tsx             # 섹션 조립
│   ├── opengraph-image.tsx  # 공유 썸네일 (빌드 타임 생성)
│   ├── icon.svg             # 파비콘
│   ├── robots.ts / sitemap.ts
│   └── not-found.tsx
├── components/
│   ├── layout/              # Header, Footer, ThemeToggle, Cursor, ScrollReveal
│   ├── sections/            # Hero, About, Skills, Works, Career, Contact
│   └── ui/                  # SectionHeader, Marquee
├── data/site.ts             # ← 콘텐츠
└── styles/                  # tokens · reset · globals
```

### 서버 컴포넌트 유지

섹션은 전부 **서버 컴포넌트**입니다. 클라이언트 컴포넌트는 상호작용이 꼭 필요한 4개뿐입니다.

| 컴포넌트 | 이유 |
| --- | --- |
| `Header` | 스크롤 상태, 스크롤 스파이, 모바일 메뉴 |
| `ThemeToggle` | 테마 전환 |
| `Cursor` | 커스텀 커서 (포인터가 정밀한 환경만) |
| `ScrollReveal` | 등장 애니메이션 |

### 스크롤 등장 애니메이션

`ScrollReveal` 하나가 문서 전체의 `[data-reveal]` 을 관찰합니다. 섹션은 클라이언트 컴포넌트가 될 필요 없이 속성만 붙이면 됩니다.

```tsx
<p data-reveal>아래에서 떠오릅니다</p>
<p data-reveal style={{ '--reveal-delay': '120ms' }}>순차 등장</p>

{/* 큰 타이포용 — 자식이 마스크 아래에서 밀려 올라옵니다 */}
<span data-reveal="mask"><span>MARKUP</span></span>
```

IntersectionObserver 를 기본으로 쓰되, 앵커 점프처럼 한 프레임에 여러 화면을 건너뛸 때 콜백이 누락될 수 있어 스크롤 스윕을 백업으로 함께 돌립니다.

---

## 4. 접근성 / 품질 기준

작업하면서 유지해야 할 선들입니다.

- **axe-core 위반 0건** (다크·라이트 양쪽, 1280px 기준)
- 본문 색 대비 4.5:1 이상 — `--fg-subtle` 이 하한선입니다. 더 흐리게 잡지 마세요
- 랜드마크: `header` / `main` / `footer`, 본문 바로가기 링크 제공
- 키보드: 모든 인터랙션에 `:focus-visible` 링, 모바일 메뉴는 `Esc` 로 닫힘
- `prefers-reduced-motion: reduce` 에서는 모든 등장 애니메이션·마퀴·커서가 비활성화
- 390px 에서 가로 스크롤 0 — 콘텐츠를 추가한 뒤 꼭 다시 확인하세요
- 한글 줄바꿈은 `word-break: keep-all` 로 어절 단위

> `-webkit-text-stroke` 는 사용하지 마세요. 본문 서체(Bricolage Grotesque)의 글리프가 겹친 컨투어로 구성돼 있어 획마다 윤곽이 따로 그려집니다.

---

## 5. 기술 선택

| 항목 | 선택 | 이유 |
| --- | --- | --- |
| 프레임워크 | Next.js 16 (App Router) | SSR/정적 프리렌더, 메타데이터·OG 이미지 기본 제공 |
| 스타일 | CSS Modules + CSS 변수 | 클래스 충돌 없음, 빌드 도구에 종속되지 않는 순수 CSS, 토큰 한 곳 관리 |
| 애니메이션 | CSS + IntersectionObserver | 애니메이션 라이브러리 없이 번들 최소화 |
| 폰트 | `next/font` (Inter · Bricolage Grotesque · JetBrains Mono) + Pretendard | 셀프 호스팅으로 레이아웃 시프트 방지, 한글은 동적 서브셋 |

---

## 6. 배포

Vercel 에 저장소를 연결하면 추가 설정 없이 배포됩니다.
배포 후 `src/data/site.ts` 의 `SITE_URL` 을 실제 도메인으로 바꿔야 사이트맵·OG 이미지 주소가 맞습니다.
