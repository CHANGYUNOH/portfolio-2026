import { ImageResponse } from 'next/og';
import { profile } from '@/data/site';

/* 카카오톡·슬랙·트위터 공유 시 노출되는 썸네일을 빌드 타임에 생성합니다. */
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${profile.name} · ${profile.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0b0b0c',
          color: '#ededec',
          padding: 72,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 24,
              height: 24,
              background: '#d4f74e',
              transform: 'rotate(45deg)',
              borderRadius: 5,
            }}
          />
          <div style={{ fontSize: 26, letterSpacing: 4, color: '#8e8e88' }}>
            {`${profile.location.toUpperCase()} · PORTFOLIO`}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {profile.headline.map((line, i) => (
            <div
              key={line}
              style={{
                fontSize: 128,
                fontWeight: 800,
                letterSpacing: -6,
                lineHeight: 1,
                color: i === 1 ? '#8e8e88' : '#ededec',
              }}
            >
              {line}
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid rgba(255,255,255,0.14)',
            paddingTop: 28,
            fontSize: 30,
          }}
        >
          <div style={{ color: '#ededec' }}>{profile.name}</div>
          <div style={{ color: '#d4f74e' }}>{profile.role}</div>
        </div>
      </div>
    ),
    size,
  );
}
