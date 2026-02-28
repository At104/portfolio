import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Atul Rao - Software Engineering Student'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Animated gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '15%',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '80px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: '#f5f5f5',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Hi, I'm{' '}
            <span
              style={{
                marginLeft: '20px',
                background: 'linear-gradient(135deg, #06b6d4, #67e8f9)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Atul
            </span>
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: '40px',
              fontWeight: '600',
              color: '#06b6d4',
              marginBottom: '30px',
            }}
          >
            Software Engineering Student
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: '28px',
              color: '#cbd5e1',
              maxWidth: '900px',
              lineHeight: 1.5,
            }}
          >
            Building innovative solutions through cloud computing, machine learning, and robotics
          </div>
          
          {/* Tags */}
          <div
            style={{
              display: 'flex',
              gap: '15px',
              marginTop: '40px',
            }}
          >
            <div
              style={{
                padding: '12px 24px',
                background: 'rgba(6, 182, 212, 0.15)',
                border: '2px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '12px',
                color: '#06b6d4',
                fontSize: '20px',
                fontWeight: '500',
              }}
            >
              McMaster University
            </div>
            <div
              style={{
                padding: '12px 24px',
                background: 'rgba(6, 182, 212, 0.15)',
                border: '2px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '12px',
                color: '#06b6d4',
                fontSize: '20px',
                fontWeight: '500',
              }}
            >
              Summer 2026 Internships
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
