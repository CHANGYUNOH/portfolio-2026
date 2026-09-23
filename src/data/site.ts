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
    title: 'X-OPS(매장 관리 시스템) 사이트', // TODO
    summary:
      'AI를 이용한 XGOLF의 스크린골프 매장을 이용하는 고객을 위한 예약·매장 이용 플랫폼 개발',
    year: '2026.08 ~ 진행중',
    role: 'Frontend',
    tags: ['Claude', 'React', 'Supabase'],
    featured: true,
    href: 'https://ops.thegolf.com/'
  },
  {
    id: 'work-02',
    title: 'X-GOLF 회원 예약 앱',
    summary: 'AI를 이용한 골프장 또는 골프 연습장의 운영과 고객 서비스를 하나의 웹앱에서 통합 관리하는 플랫폼 개발',
    year: '2026.08 ~ 진행중',
    role: 'Frontend',
    tags: ['Claude', 'React', 'Supabase'],
    href: 'https://xgolf-webapp.vercel.app/'
  },
  {
    id: 'work-03',
    title: 'AI 기반 스포츠 분석 시스템(관리자)',
    summary: 'AI 스포츠 모션을 기반한 빅데이터 중심의 데이터 위주를 분석해서 나타내는 UI 개발',
    year: '2024',
    role: 'Publisher',
    tags: ['Nuxt.js', 'FullCalendar', 'Toast-ui', 'ECharts', 'Swiper.js', 'Video.js'],
    href: 'https://aiadmin.thegolf.com'
  },
  {
    id: 'work-04',
    title: 'AI 기반 스포츠 분석 시스템(매장)',
    summary: 'AI 스포츠 모션을 기반한 빅데이터 중심의 데이터 위주를 분석해서 나타내는 UI 개발',
    year: '2025.12 ~ 2026.03',
    role: 'Publisher',
    tags: ['Nuxt.js', 'FullCalendar', 'Toast-ui', 'ECharts', 'Swiper.js', 'Video.js'],
    featured: true,
    href: 'https://aishop.thegolf.com'
  },
  {
    id: 'work-05',
    title: 'AI 기반 스포츠 분석 시스템(코칭)',
    summary: 'AI 스포츠 모션을 기반한 빅데이터 중심의 데이터 위주를 분석해서 나타내는 UI 개발',
    year: '2025.08 ~ 2025.11',
    role: 'Publisher',
    tags: ['Nuxt.js', 'ECharts', 'Video.js'],
    href: 'https://aicoach.thegolf.com'
  },
  {
    id: 'work-06',
    title: 'AI 기반 스포츠 분석 시스템(회원)',
    summary: 'AI 스포츠 모션을 기반한 빅데이터 중심의 데이터 위주를 분석해서 나타내는 UI 개발',
    year: '2025.04 ~ 2025.07',
    role: 'Publisher',
    tags: ['Nuxt.js', 'ECharts', 'Video.js'],
    href: 'https://aimember.thegolf.com/'
  },
  {
    id: 'work-07',
    title: '팝골프 - 대규모 복합 골프 레저 파크 운영 사업',
    summary: '팝골프 시설안내 지도를 활용한 확대/축소 기능 개발',
    year: '2024.12 ~ 2025.03',
    role: 'Publisher',
    tags: ['Vue3'],
    href: 'https://popgolf.kr/'
  },
  {
    id: 'work-08',
    title: '타임교육 C&P 교육서비스의 게이미피케이션 활용에 관한 사전연구 수행사업',
    summary: '기본 프로젝트 세팅 및 가이드 작성으로 개발 작업 진척도 향상 및 사용자 대시보드 페이지 작업, api호출로 데이터 연동',
    year: '2024.06 ~ 2024.08',
    role: 'Publisher',
    tags: ['Nuxt.js', 'Sass', 'Swiper.js', 'Toast-ui', 'Datepicker'],
    href: 'https://game.wbsoft.kr/gate'
  },
  {
    id: 'work-09',
    title: '서비스형 소프트웨어(SaaS) 개발 및 육성 사업',
    summary: '학습패턴 시각화, 실시간 목표 달성 현황 등 개인의 성취를 한눈에 보여주는 맞춤형 대시보드 작성, 강의 영상 시청부터 학습메모, 강의자료, 시험, 과제, 설문까지 학습에 필요한 모든 기능을 아우르는 학습플레이어 작업 및 video.js로 학습 플레이어 커스텀 개발, chart.js로 학습 차트 개발, swiper.js로 카드 리스트 구성, 대시보드 구성',
    year: '2023.07 ~ 2024.08',
    role: 'Publisher',
    tags: ['Nuxt.js', 'Video.js', 'Chart.js', 'Swiper.js'],
    href: 'https://www.saasda.co.kr/'
  },
  {
    id: 'work-10',
    title: '하남교육재단 진로진학통합플랫폼 꿈노트 구축사업',
    summary: '미리보기 팝업이 모달에서 새 창 팝업으로 변경, 차트 커스텀 및 수정 및 학습자 리스트, 상세 페이지 및 관리자 페이지 및 미리보기 팝업 작업',
    year: '2023.10 ~ 2024.08',
    role: 'Publisher',
    tags: ['Nuxt.js', 'Sass', 'Swiper.js', 'Chart.js', 'Toast-ui'],
    href: 'https://www.hdream.or.kr/'
  },
  {
    id: 'work-11',
    title: '하나은행 디지털캠퍼스 평가시스템 구축사업',
    summary: '영문화 작업으로 개발 작업시간 단축 및 내부망 구축 시스템으로 평가 화면(리스트, 상세, 팝업 등) 퍼블리싱 작업, ES6문법으로 마이그레이션, 크로스 브라우징 작업(IE적용)',
    year: '2024.02 ~ 2024.03',
    role: 'Publisher',
    tags: ['HTML', 'CSS', 'JQuery', 'JavaScript', 'JSP'],
    href: 'https://campus.hanabank.com:18443/main.do'
  },
  {
    id: 'work-12',
    title: '공군교육사령부 공군 이러닝 무선기반체계 고도화 방안 연구 수행사업',
    summary: '공군교육사령부 ‘공군학습포털’ 구축, Vue2 → Vue3로 마이그레이션 및 메인/서브 페이지 퍼블리싱 작업',
    year: '2023.07 ~ 2023.12',
    role: 'Publisher',
    tags: ['Vue3', 'Chart.js', 'Swiper.js', 'FullCalendar', 'Video.js'],
    href: 'https://af.wbsoft.kr/'
  },
  {
    id: 'work-13',
    title: '현대모비스 2024년 시스템 운영사업',
    summary: '현대모비스 모비스쿨, 오픈플랫폼 등 구축 및 메뉴 구성 및 프로그레스 동작, 카테고리 모달 작업',
    year: '2023.01 ~ 2023.12',
    role: 'Publisher',
    tags: ['Vue.js', 'Sass', 'Swiper.js', 'Toast-ui'],
  },
  {
    id: 'work-14',
    title: 'OpenPrompt 서비스 사업',
    summary: '프롬프트 라이브러리 사이트 구축 및 리스트, 상세, 쓰기 페이지 작업',
    year: '2022.12 ~ 2023.08',
    role: 'Publisher',
    tags: ['Nuxt.js', 'Sass', 'Toast-ui', 'Swiper.js'],
    href: 'https://www.prpt.ai/'
  },
  {
    id: 'work-15',
    title: 'ACT! ESG 서비스 사업',
    summary: 'ESG 서비스 론칭 및 체크박스, 탭, 라벨, 팝업, 배너 작업',
    year: '2022.12 ~ 2023.08',
    role: 'Publisher',
    tags: ['Nuxt.js', 'Sass', 'Toast-ui', 'Swiper.js'],
    href: 'https://www.actesg.kr/'
  },
  {
    id: 'work-16',
    title: '메트라이프 통합교육플랫폼 TIP 시스템 구축사업',
    summary: 'Vue.js 프레임워크 도입 작업',
    year: '2022.03 ~ 2023.03',
    role: 'Publisher',
    tags: ['Vue.js', 'Chart.js', 'Video.js', 'Fontagon', 'Swiper.js'],
    href: 'https://tip.metlife.co.kr/gate'
  },
  {
    id: 'work-17',
    title: '하나은행 디지털캠퍼스 고도화사업',
    summary: 'ES5 → ES6 마이그레이션 및 크로스 브라우징 작업(IE)',
    year: '2022.01 ~ 2023.04',
    role: 'Publisher',
    tags: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'JSP'],
    href: 'https://campus.hanabank.com:18443/main.do'
  },
  {
    id: 'work-18',
    title: '국립외교원 외교배움e 시스템 구축사업',
    summary: '웹유지보수 및 하자보수 작업, 고도화 작업(화면 디자인 변경으로 인한 웹 리뉴얼), 웹접근성, 웹표전 작업',
    year: '2021.09 ~ 2022.06',
    role: 'Publisher',
    tags: ['HTML', 'CSS', 'JavaScript', 'Gulp.js'],
    href: 'https://edu.mofa.go.kr/gate.do'
  },
  {
    id: 'work-19',
    title: '하나금융티아이 DT UNIV 시스템 구축사업',
    summary: '프로젝트 유지보수 작업(학습자, 관리자)',
    year: '2021.08 ~ 2022.03',
    role: 'Publisher',
    tags: ['HTML', 'CSS', 'JavaScript', 'Gulp.js'],
    href: 'https://dtu.hanafn.com/gate.do'
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
