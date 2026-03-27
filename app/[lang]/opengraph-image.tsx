import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'Jorge Olarte'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = {
  params: Promise<{ lang: string }>
}

function isLocale(lang: string): lang is 'en' | 'es' {
  return lang === 'en' || lang === 'es'
}

function toDataUrlPng(buffer: Uint8Array): string {
  const base64 = Buffer.from(buffer).toString('base64')
  return `data:image/png;base64,${base64}`
}

export default async function OpenGraphImage({ params }: Props) {
  const { lang } = await params
  const locale = isLocale(lang) ? lang : 'en'

  const title = locale === 'es' ? 'Jorge Olarte' : 'Jorge Olarte'
  const subtitle =
    locale === 'es' ? 'Desarrollador de Software' : 'Software Developer'

  const logoBuffer = await readFile(
    join(process.cwd(), 'public', 'logo-color.png')
  )
  const logoSrc = toDataUrlPng(logoBuffer)

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        position: 'relative',
        color: '#fff',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(800px circle at 30% 60%, rgba(198,33,229,.55), transparent 60%), radial-gradient(900px circle at 75% 35%, rgba(114,12,212,.55), transparent 55%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.7) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          padding: 72,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -1.5 }}>
              {title}
            </div>
            <div style={{ fontSize: 34, opacity: 0.9 }}>{subtitle}</div>
          </div>

          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 999,
              background: 'rgba(0,0,0,.55)',
              border: '1px solid rgba(255,255,255,.18)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow:
                '0 24px 60px rgba(0,0,0,.55), 0 24px 80px rgba(198,33,229,.18)',
            }}
          >
            <div
              style={{
                width: 170,
                height: 170,
                backgroundImage: `url('${logoSrc}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 12,
            alignItems: 'center',
            fontSize: 26,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 99,
              background: 'rgba(255,255,255,.9)',
            }}
          />
          <div>jorgeolarte.com</div>
        </div>
      </div>
    </div>,
    { ...size }
  )
}
