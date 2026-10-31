import React from 'react';
import Image from 'next/image';

interface LogoLockupProps {
  size?: number;
  priority?: boolean;
}

export default function LogoLockup({ size = 46, priority = false }: LogoLockupProps) {
  return (
    <span className="inline-flex flex-col items-center text-center">
      <Image src="/images/logo.svg" alt="" width={size} height={size} priority={priority} className="mb-1" />
      <span className="font-serif text-[15.5px] font-medium leading-[1.1] text-foreground whitespace-nowrap">
        Thrive with Therapy
      </span>
    </span>
  );
}
