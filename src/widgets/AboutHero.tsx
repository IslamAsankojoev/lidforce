'use client'

import Image from 'next/image'
import { m } from 'motion/react'
import { Typography } from '../shared'

export const AboutHero = () => {
  return (
    <div className="mb-10 rounded-[60px] relative w-full h-screen">
      <Image src="/teamates/team.webp" alt="About" fill objectFit="cover" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
      <m.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 container flex flex-col justify-end pb-20"
      >
        <Typography variant="headingXL" className="text-white-pure leading-none mb-6">
          Одна команда <br /> для решения всех задач
        </Typography>
        <Typography variant="bodyL" className="text-white-pure">
          Наша миссия - мы стремимся быть надежной опорой для бизнеса нового поколения на пути к
          успеху
        </Typography>
      </m.div>
    </div>
  )
}
