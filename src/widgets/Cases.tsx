'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typography } from '../shared'
import { useState } from 'react'

interface Case {
  id: number
  title: string
  image: string
  categories: number[]
}

const categoriesData = [
  {
    id: 1,
    title: 'Все кейсы',
  },
  {
    id: 2,
    title: 'SMM',
  },
  {
    id: 3,
    title: 'Таргет',
  },

  {
    id: 5,
    title: 'Дизайн',
  },

  {
    id: 6,
    title: 'Продакшн',
  },
  {
    id: 7,
    title: 'Сайты',
  },
  {
    id: 8,
    title: 'Брендинг',
  },
  {
    id: 0,
    title: 'и другие',
  },
]

const cases: Case[] = [
  {
    id: 1,
    title: 'Elit House',
    image: '/cases/elit-house.png',
    categories: [1, 5, 6],
  },
  {
    id: 2,
    title: 'Elit Invest',
    image: '/cases/elit-invest.png',
    categories: [1, 3, 8],
  },
  {
    id: 3,
    title: 'Ayat',
    image: '/cases/ayat.png',
    categories: [1, 2, 3],
  },
  {
    id: 4,
    title: 'Legenda Lux',
    image: '/cases/legenda-lux.png',
    categories: [1, 3, 8],
  },
  {
    id: 5,
    title: 'Mobi Market',
    image: '/cases/mobi-market.png',
    categories: [1, 2, 8],
  },
  {
    id: 6,
    title: 'Rooz Beauty',
    image: '/cases/rooz-beauty.png',
    categories: [1, 5, 3],
  },
  {
    id: 7,
    title: 'Liana Flowers',
    image: '/cases/liana-flowers.png',
    categories: [1, 7, 8],
  },
  {
    id: 8,
    title: 'Encar',
    image: '/cases/encar.png',
    categories: [1, 3, 8],
  },
  {
    id: 9,
    title: 'Marsel',
    image: '/cases/marsel.png',
    categories: [1, 2, 8],
  },
  {
    id: 10,
    title: 'Liana Flowers',
    image: '/cases/liana-flowers.png',
    categories: [1, 2, 3],
  },
  {
    id: 11,
    title: 'Doscar trade',
    image: '/cases/doscar-trade.png',
    categories: [1, 2, 3],
  },
  {
    id: 12,
    title: 'Next Protein',
    image: '/cases/next-protein.png',
    categories: [1, 2, 3],
  },
  {
    id: 13,
    title: 'Obraz KG',
    image: '/cases/obraz-kg.png',
    categories: [1, 2, 3],
  },
  {
    id: 14,
    title: 'Ожак кебаб',
    image: '/cases/ojak-kebab.png',
    categories: [1, 2, 3],
  },
  {
    id: 15,
    title: 'Sapar umra',
    image: '/cases/sapar-umra.png',
    categories: [1, 2, 3],
  },
  {
    id: 16,
    title: 'Sapat Auto',
    image: '/cases/sapat-auto.png',
    categories: [1, 2, 3, 0],
  },
]

export const Cases = () => {
  const [activeCategory, setActiveCategory] = useState(categoriesData[0].id)

  const filteredCases = cases.filter((caseItem) => caseItem.categories.includes(activeCategory))

  return (
    <section className="bg-bg-surface py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="headingXL" className="text-white-pure mb-6">
              Кейсы
            </Typography>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {categoriesData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`md:px-6 md:py-2 px-4 py-1 rounded-full transition-all duration-300 border border-dark-deep cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-white-pure text-dark-deep'
                  : 'text-grey-soft hover:bg-grey-soft/10 hover:text-white-pure'
              }`}
            >
              <Typography variant="button" className="text-inherit">
                {category.title}
              </Typography>
            </button>
          ))}
        </motion.div>

        {/* Cases */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[600px] p-10 overflow-hidden relative rounded-[60px]">
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
            {filteredCases.map((caseItem) => (
              <div key={caseItem.id} className="relative z-2 w-auto h-[120px]">
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
