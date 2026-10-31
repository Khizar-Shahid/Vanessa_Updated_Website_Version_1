import React from 'react';

interface AtmosphereProps {
  opacity?: 'normal' | 'soft';
}

export default function Atmosphere({ opacity = 'normal' }: AtmosphereProps) {
  const orbOpacity = opacity === 'soft' ? 'opacity-25' : 'opacity-30';

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Drifting Sage Orb */}
      <div
        className={`absolute rounded-full blur-[80px] ${orbOpacity} w-[620px] height-[620px] -top-[220px] -left-[160px] animate-[floatAmbient_48s_infinite_alternate_ease-in-out]`}
        style={{
          background: 'radial-gradient(circle, var(--sage) 0%, rgba(94, 161, 91, 0) 68%)',
        }}
      />
      {/* Drifting Salmon Orb */}
      <div
        className={`absolute rounded-full blur-[80px] ${orbOpacity} w-[640px] height-[640px] top-[80px] -right-[220px] animate-[floatAmbient_56s_infinite_alternate_ease-in-out]`}
        style={{
          background: 'radial-gradient(circle, var(--salmon) 0%, rgba(232, 146, 133, 0) 68%)',
          animationDelay: '-18s',
        }}
      />
      {/* Fine SVG Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
