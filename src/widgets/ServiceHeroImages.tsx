'use client'

import Image from 'next/image'
import { m } from 'motion/react'

export const ServiceHeroImages = () => {
  return (
    <div className="absolute right-0 bottom-0 w-full lg:w-1/2 flex items-end justify-end">
      <m.div
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="-mr-14 z-1"
      >
        <Image
          src="/services/left-line.webp"
          alt="hero"
          className="object-contain"
          width={262}
          height={462}
        />
      </m.div>
      <m.div
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="z-0"
      >
        <Image
          src="/services/middle-line.webp"
          alt="hero"
          className="object-contain"
          width={262}
          height={574}
        />
      </m.div>
      <m.div
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="-ml-28 z-1"
      >
        <Image
          src="/services/right-line.webp"
          alt="hero"
          className="object-contain"
          width={262}
          height={462}
        />
      </m.div>
    </div>
  )
}
