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

export default async function TwitterImage({ params }: Props) {
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
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          gap: 28,
          alignItems: 'center',
          padding: 72,
          width: '100%',
        }}
      >
        <div
          style={{
            width: 180,
            height: 180,
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
              width: 132,
              height: 132,
              backgroundImage: `url('${logoSrc}')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -1.5 }}>
            {title}
          </div>
          <div style={{ fontSize: 34, opacity: 0.9 }}>{subtitle}</div>
          <div style={{ marginTop: 10, fontSize: 26, opacity: 0.9 }}>
            jorgeolarte.com
          </div>
        </div>
      </div>
    </div>,
    { ...size }
  )
}
