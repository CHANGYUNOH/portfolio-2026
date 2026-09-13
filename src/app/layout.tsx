import type { Metadata, Viewport } from 'next';
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Cursor from '@/components/layout/Cursor';
import ScrollReveal from '@/components/layout/ScrollReveal';
import { themeInitScript } from '@/components/layout/ThemeToggle';
import { profile, SITE_URL } from '@/data/site';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display-latin',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-latin',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s | ${profile.nameEn}`,
  },
  description: profile.tagline,
  keywords: [
    '웹퍼블리셔',
    '프론트엔드',
    '포트폴리오',
    'Web Publisher',
    'Frontend',
    'React',
    'Next.js',
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: `${profile.nameEn} Portfolio`,
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0c' },
    { media: '(prefers-color-scheme: light)', color: '#f2f1ec' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      data-theme="dark"
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* 페인트 전에 테마를 확정해 깜빡임을 막습니다 */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Cursor />
        <ScrollReveal />
      </body>
    </html>
  );
}
