import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a0b2e',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#ff006e',
          border: '2px solid #00ffff',
          fontFamily: 'monospace',
        }}
      >
        B
      </div>
    ),
    { ...size }
  )
}
