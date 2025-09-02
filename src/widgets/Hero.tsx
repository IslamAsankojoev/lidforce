'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Typography } from '../shared'

const pieces = [
  {
    src: '/chess/pawn-left.png',
    alt: 'Пешка слева',
    className: 'hidden md:block w-16 lg:w-50',
    order: 0,
  },
  { src: '/chess/knight.png', alt: 'Конь', className: 'w-20 lg:w-72', order: 1 },
  { src: '/chess/rook.png', alt: 'Ладья', className: 'w-20 lg:w-72', order: 3 },
  {
    src: '/chess/pawn-right.png',
    alt: 'Пешка справа',
    className: 'hidden md:block w-16 lg:w-50',
    order: 4,
  },
]

const container = {
  hidden: {},
  show: {},
}

const item = (i: number) => {
  let moveX = 0
  if (i === 0) moveX = -420 // пешка слева
  if (i === 1) moveX = -230 // конь
  if (i === 2) moveX = 230 // ладья
  if (i === 3) moveX = 420 // пешка справа

  return {
    hidden: {
      opacity: 0,
      scale: 0.3,
      x: 0,
      y: 0,
      zIndex: -1,
    },
    show: {
      opacity: 1,
      scale: 1,
      x: moveX,
      y: 0,
      zIndex: 1,
    },
  }
}

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section className="relative isolate min-h-screen border-b border-dark-deep">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28">
        <motion.h1
          initial={{ opacity: 0, scale: 0.96, y: 400 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="pointer-events-none select-none text-center font-extrabold tracking-wide leading-none
                       -mb-8"
        >
          <Typography
            variant="headingXL"
            className="text-white text-[15vw] md:text-[12vw] lg:text-[124px]"
          >
            МАРКЕТИНГ
          </Typography>
        </motion.h1>

        {/* Pieces */}

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 mt-10 flex items-end justify-center h-96 w-full"
        >
          <div className="flex items-center justify-center w-full">
            <Image
              src="/chess/king.png"
              alt="Король"
              width={400}
              height={400}
              className="w-28 lg:w-[500px]"
              style={{
                filter: 'drop-shadow(5px 5px 5px #222)',
              }}
            />
            {pieces
              .sort((a, b) => a.order - b.order)
              .map((p, i) => (
                <motion.div
                  key={p.alt}
                  variants={item(i)}
                  transition={{
                    ease: 'easeOut',
                    duration: 0.5,
                  }}
                  className="absolute bottom-4"
                >
                  <Image src={p.src} alt={p.alt} width={400} height={400} className={p.className} />
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Pill */}
        <motion.div className="mx-auto w-fit rounded-full bg-grey-soft/15 px-6 py-3 backdrop-blur-sm text-white/90 text-sm md:text-base font-semibold z-50 -mt-16 relative">
          <Typography variant="headingS" className="text-white/90">
            КОТОРЫЙ РЕАЛЬНО РАБОТАЕТ
          </Typography>
        </motion.div>

        {/* Sub & CTA */}
        <motion.p className="mx-auto mt-6 max-w-2xl text-center text-neutral-300">
          Делаем эффективную интернет-рекламу и увеличиваем прибыль компаний <br />с помощью
          разработки и реализации комплексных стратегий
        </motion.p>

        <motion.div className="mt-8 flex justify-center">
          <button
            aria-label="Получить консультацию"
            className="rounded-full bg-cyan-500 px-8 py-4 text-white font-medium shadow-lg
                       hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 active:scale-[0.99]
                       transition cursor-pointer"
          >
            Получить консультацию
          </button>
        </motion.div>
      </div>
    </section>
  )
}
