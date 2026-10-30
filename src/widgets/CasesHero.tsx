'use client'

import { Typography } from '@/src/shared/ui/Typography'
import Image from 'next/image'
import { m } from 'motion/react'

const cases = [
  {
    id: 1,
    title: 'Elit House',
    image: '/cases/elit-house.webp',
  },
  {
    id: 2,
    title: 'Elit Invest',
    image: '/cases/elit-invest.webp',
  },
  {
    id: 3,
    title: 'Ayat',
    image: '/cases/ayat.webp',
  },
  {
    id: 4,
    title: 'Legenda Lux',
    image: '/cases/legenda-lux.webp',
  },
  {
    id: 5,
    title: 'Mobi Market',
    image: '/cases/mobi-market.webp',
  },
  {
    id: 6,
    title: 'Rooz Beauty',
    image: '/cases/rooz-beauty.webp',
  },
  {
    id: 7,
    title: 'Liana Flowers',
    image: '/cases/liana-flowers.webp',
  },
  {
    id: 8,
    title: 'Encar',
    image: '/cases/encar.webp',
  },
  {
    id: 9,
    title: 'Marsel',
    image: '/cases/marsel.webp',
  },
  {
    id: 10,
    title: 'Liana Flowers',
    image: '/cases/liana-flowers.webp',
  },
  {
    id: 11,
    title: 'Doscar trade',
    image: '/cases/doscar-trade.webp',
  },
  {
    id: 12,
    title: 'Next Protein',
    image: '/cases/next-protein.webp',
  },
  {
    id: 13,
    title: 'Obraz KG',
    image: '/cases/obraz-kg.webp',
  },
  {
    id: 14,
    title: 'Ожак кебаб',
    image: '/cases/ojak-kebab.webp',
  },
  {
    id: 15,
    title: 'Sapar umra',
    image: '/cases/sapar-umra.webp',
  },
  {
    id: 16,
    title: 'Sapat Auto',
    image: '/cases/sapat-auto.webp',
  },
]

export const CasesHero = () => {
  return (
    <section className="bg-bg-surface py-40 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="headingXL" className="text-white-pure">
              Кейсы
            </Typography>
          </m.div>
        </div>

        <div className="relative">
          <div className="flex flex-wrap p-4 gap-5 min-h-[600px] md:p-10 overflow-hidden relative rounded-[60px] items-center justify-center">
            <div
              className="absolute flex h-[438.65px] items-center justify-center -translate-x-1/2 -translate-y-1/2 w-[461.248px]"
              style={{ top: 'calc(50% - 201.671px)', left: 'calc(50% - 475.37px)' }}
            >
              <div className="flex-none rotate-[332.736deg]">
                <div className="h-[307.815px] relative w-[360.278px]">
                  <div className="absolute inset-[-97.46%_-83.27%]">
                    <Image
                      alt="Декоративный элемент слева"
                      fill
                      objectFit="cover"
                      className="absolute inset-0"
                      src="/8b90a531507d497903ada0618ee84c6641cfac5e.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute flex h-[438.65px] items-center justify-center -translate-x-1/2 -translate-y-1/2 w-[461.248px]"
              style={{ top: 'calc(50% - 201.671px)', left: 'calc(50% + 486.63px)' }}
            >
              <div className="flex-none rotate-[207.264deg] scale-y-[-100%]">
                <div className="h-[307.815px] relative w-[360.278px]">
                  <div className="absolute inset-[-97.46%_-83.27%]">
                    <Image
                      alt="Декоративный элемент справа"
                      fill
                      objectFit="cover"
                      className="absolute inset-0"
                      src="/a6985cc3aacc16e796b3f298722e5c6b9af8b497.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="relative z-2 md:w-[150px] md:h-[150px] h-[120px] w-[120px]">
                <Image src={caseItem.image} alt={caseItem.title} fill objectFit="contain" />
              </div>
            ))}
          </div>
          <div
            className="absolute h-[308px] -translate-x-1/2 -translate-y-1/2 w-[1091px]"
            style={{ top: 'calc(50% + 66px)', left: 'calc(50% - 0.5px)' }}
          >
            <div className="absolute inset-[-113.64%_-32.08%]">
              <Image
                alt="Декоративный элемент"
                fill
                objectFit="cover"
                className="absolute inset-0"
                src="/da0e6405f56e0506070068eade171d326a961a6a.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
