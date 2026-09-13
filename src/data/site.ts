/* ============================================================
   사이트 콘텐츠 — 텍스트/링크/프로젝트는 전부 이 파일에서만 수정하세요.
   컴포넌트를 건드릴 필요가 없습니다.
   TODO 표시가 된 부분을 본인 정보로 교체하면 됩니다.
   ============================================================ */

/** 배포 도메인 — 메타데이터/사이트맵/OG 이미지가 함께 참조합니다. */
export const SITE_URL = 'https://example.com'; // TODO: 실제 도메인으로 교체

export const profile = {
  name: '노찬규',
  nameEn: 'Changyu Noh',
  role: 'Web Publisher & Frontend Engineer',
  /* 히어로 대문 카피 — 줄 단위로 끊어서 넣습니다. */
  headline: ['MARKUP', 'THAT', 'MOVES'],
  tagline:
    '접근성과 성능을 놓치지 않는 마크업, 그리고 손에 잡히는 인터랙션. 디자인의 의도를 화면 위에 그대로 옮깁니다.', // TODO
  location: 'Seoul, KR',
  available: true, // 헤더의 "구직 중" 뱃지 노출 여부
  email: 'nohx051@naver.com',
  resumeUrl: '#', // TODO: 이력서 PDF 경로 (예: '/resume.pdf')
} as const;

export const socials = [
  { label: 'GitHub', href: 'https://github.com/' }, // TODO
  { label: 'Velog', href: '#' }, // TODO
  { label: 'LinkedIn', href: '#' }, // TODO
  { label: 'Email', href: `mailto:${profile.email}` },
] as const;

export const nav = [
  { label: 'About', href: '#about', index: '01' },
  { label: 'Skills', href: '#skills', index: '02' },
  { label: 'Works', href: '#works', index: '03' },
  { label: 'Career', href: '#career', index: '04' },
  { label: 'Contact', href: '#contact', index: '05' },
] as const;

/* ---- About ------------------------------------------------ */

export const about = {
  heading: '픽셀과 코드 사이의\n간극을 좁힙니다',
  body: [
    '시안을 그대로 재현하는 것에서 멈추지 않고, 왜 이 간격인지 왜 이 위계인지를 함께 고민합니다. 디자이너와 개발자 사이에서 가장 정확한 번역을 하는 사람이 되는 것이 목표입니다.', // TODO
    '시맨틱 마크업과 웹 접근성(WCAG 2.2 AA)을 기본값으로 두고, 반응형·다크모드·다국어를 처음부터 설계에 포함시킵니다.', // TODO
  ],
  /* 비주얼 지표 — 숫자는 문자열로 넣어도 됩니다 */
  stats: [
    { value: '5+', label: 'Years of experience' }, // TODO
    { value: '40+', label: 'Projects shipped' }, // TODO
    { value: '100', label: 'Lighthouse a11y' }, // TODO
  ],
  /* 작업 방식 — 벤토 그리드 카드 */
  principles: [
    {
      title: 'Semantic First',
      desc: 'div 남발 대신 의미에 맞는 태그로. 스크린리더와 검색엔진이 먼저 읽는 구조를 만듭니다.',
    },
    {
      title: 'Design System',
      desc: '토큰 → 컴포넌트 → 페이지 순서로 쌓습니다. 색 하나 바꾸면 전체가 따라오도록.',
    },
    {
      title: 'Performance',
      desc: 'CLS 0, LCP 2.5s 이하를 목표로. 이미지·폰트·스크립트 로딩 전략까지 마크업의 일부입니다.',
    },
    {
      title: 'Cross Browser',
      desc: 'Chrome, Safari, Firefox, 그리고 아직 남아있는 구형 환경까지 확인하고 넘깁니다.',
    },
  ],
} as const;

/* ---- Skills ----------------------------------------------- */

export type SkillGroup = {
  category: string;
  caption: string;
  items: { name: string; level: number }[]; // level: 0~100
};

export const skills: SkillGroup[] = [
  {
    category: 'Markup & Style',
    caption: '구조와 표현',
    items: [
      { name: 'HTML5 / Semantic', level: 95 },
      { name: 'CSS3 / Sass', level: 92 },
      { name: 'CSS Modules', level: 90 },
      { name: 'Tailwind CSS', level: 78 },
      { name: 'Web Accessibility', level: 85 },
    ],
  },
  {
    category: 'Frontend',
    caption: '동작과 상태',
    items: [
      { name: 'JavaScript (ES2023)', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 78 },
      { name: 'Zustand / TanStack Query', level: 70 },
    ],
  },
  {
    category: 'Tooling',
    caption: '협업과 배포',
    items: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Figma', level: 90 },
      { name: 'Vite / Webpack', level: 72 },
      { name: 'Storybook', level: 68 },
      { name: 'Vercel / CI', level: 70 },
    ],
  },
];

/* ---- Works ------------------------------------------------ */

export type Work = {
  id: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  /* 썸네일 — /public 에 이미지를 넣고 경로를 적으면 자동으로 교체됩니다.
     비워두면 타이포 기반 플레이스홀더가 표시됩니다. */
  thumbnail?: string;
  href?: string;
  /* 카드 강조 (벤토 그리드에서 2칸 차지) */
  featured?: boolean;
};

export const works: Work[] = [
  {
    id: 'work-01',
    title: '커머스 플랫폼 리뉴얼', // TODO
    summary:
      '디자인 토큰 기반 컴포넌트 라이브러리를 새로 구축하고, 전 페이지 반응형 퍼블리싱을 담당했습니다.',
    year: '2025',
    role: 'Publishing Lead',
    tags: ['Next.js', 'CSS Modules', 'Design System', 'A11y'],
    featured: true,
  },
  {
    id: 'work-02',
    title: '브랜드 캠페인 사이트',
    summary: '스크롤 기반 인터랙션과 GSAP 모션을 활용한 원페이지 캠페인.',
    year: '2025',
    role: 'Frontend',
    tags: ['React', 'GSAP', 'Interaction'],
  },
  {
    id: 'work-03',
    title: '어드민 대시보드',
    summary: '복잡한 테이블/필터 UI를 접근성 기준에 맞춰 재설계했습니다.',
    year: '2024',
    role: 'Publisher',
    tags: ['TypeScript', 'Table UI', 'WAI-ARIA'],
  },
  {
    id: 'work-04',
    title: '모바일 웹앱',
    summary: 'PWA 대응과 다크모드를 포함한 모바일 퍼스트 퍼블리싱.',
    year: '2024',
    role: 'Publisher',
    tags: ['PWA', 'Dark Mode', 'Mobile First'],
    featured: true,
  },
  {
    id: 'work-05',
    title: '디자인 시스템 문서화',
    summary: 'Storybook 기반 컴포넌트 문서와 사용 가이드를 정리했습니다.',
    year: '2023',
    role: 'Design System',
    tags: ['Storybook', 'Documentation'],
  },
  {
    id: 'work-06',
    title: '반응형 랜딩 템플릿',
    summary: '재사용 가능한 섹션 블록으로 구성한 마케팅 랜딩 템플릿 세트.',
    year: '2023',
    role: 'Publisher',
    tags: ['HTML', 'Sass', 'Template'],
  },
];

/* ---- Career ----------------------------------------------- */

export type CareerItem = {
  period: string;
  company: string;
  position: string;
  description: string;
  achievements: string[];
};

export const career: CareerItem[] = [
  {
    period: '2023 — Present',
    company: '회사명 A', // TODO
    position: 'Web Publisher',
    description: '웹 퍼블리싱 및 프론트엔드 개발 전반을 담당하고 있습니다.',
    achievements: [
      '공통 컴포넌트 라이브러리 구축으로 신규 페이지 작업 시간 40% 단축', // TODO
      '전사 서비스 웹 접근성 인증 마크 획득',
      '레거시 jQuery 마크업을 React 컴포넌트로 점진적 마이그레이션',
    ],
  },
  {
    period: '2021 — 2023',
    company: '회사명 B', // TODO
    position: 'Junior Publisher',
    description: '에이전시에서 다양한 산업군의 웹사이트 퍼블리싱을 경험했습니다.',
    achievements: [
      '연간 15개 이상의 프로젝트 퍼블리싱 참여',
      'IE11 포함 크로스브라우징 대응 가이드 문서 작성',
    ],
  },
];

/* ---- Contact ---------------------------------------------- */

export const contact = {
  heading: "LET'S\nBUILD IT",
  body: '새로운 프로젝트, 채용 제안, 협업 문의 모두 환영합니다.\n메일로 연락 주시면 24시간 안에 회신드립니다.', // TODO
} as const;

/* 마퀴 밴드에 흐르는 키워드 */
export const marqueeWords = [
  'Semantic HTML',
  'Accessibility',
  'Design System',
  'Responsive',
  'Performance',
  'Interaction',
  'TypeScript',
  'Next.js',
] as const;
