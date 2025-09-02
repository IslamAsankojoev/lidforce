'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typography } from '../shared'
import { useState } from 'react'

interface Case {
  id: number
  title: string
  description: string
  image: string
  category: string
  results: string[]
}

const cases: Case[] = [
  {
    id: 1,
    title: 'Интернет-магазин электроники',
    description:
      'Увеличили продажи на 340% за 6 месяцев через комплексную настройку рекламы в Google Ads и Яндекс.Директ',
    image: '/cases/electronics-store.jpg',
    category: 'E-commerce',
    results: ['+340% продаж', '+250% трафика', 'ROI 4.2x'],
  },
  {
    id: 2,
    title: 'Стоматологическая клиника',
    description:
      'Привлекли 150+ новых пациентов в месяц через таргетированную рекламу в социальных сетях',
    image: '/cases/dental-clinic.jpg',
    category: 'Медицина',
    results: ['150+ пациентов/мес', 'CPL -60%', 'ROI 3.8x'],
  },
  {
    id: 3,
    title: 'Строительная компания',
    description:
      'Заполнили портфель заказов на 8 месяцев вперед через SEO-продвижение и контекстную рекламу',
    image: '/cases/construction.jpg',
    category: 'Строительство',
    results: ['+280% заявок', '8 мес заказов', 'ROI 5.1x'],
  },
  {
    id: 4,
    title: 'Образовательный центр',
    description:
      'Увеличили набор студентов в 4 раза через комплексную digital-стратегию и автоматизацию продаж',
    image: '/cases/education.jpg',
    category: 'Образование',
    results: ['+400% студентов', '+180% конверсия', 'ROI 4.7x'],
  },
  {
    id: 5,
    title: 'Ресторан доставки',
    description:
      'Вышли в топ-3 по доставке в городе через оптимизацию рекламы и улучшение пользовательского опыта',
    image: '/cases/restaurant.jpg',
    category: 'HoReCa',
    results: ['Топ-3 города', '+220% заказов', 'ROI 3.9x'],
  },
  {
    id: 6,
    title: 'IT-компания',
    description:
      'Увеличили количество B2B-клиентов на 200% через LinkedIn-рекламу и email-маркетинг',
    image: '/cases/it-company.jpg',
    category: 'IT',
    results: ['+200% B2B клиентов', '+150% лидов', 'ROI 4.5x'],
  },
]

const categories = ['Все кейсы', 'SMM', 'Таргет', 'Дизайн', 'Продакшн', 'Сайты', 'Брендинг', 'и другие']

export const Cases = () => {
  const [activeCategory, setActiveCategory] = useState('Все')

  const filteredCases =
    activeCategory === 'Все'
      ? cases
      : cases.filter((caseItem) => caseItem.category === activeCategory)

  return (
    <section className="bg-bg-surface py-20">
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
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 border border-dark-deep cursor-pointer ${
                activeCategory === category
                  ? 'bg-white-pure text-dark-deep'
                  : 'text-grey-soft hover:bg-grey-soft/10 hover:text-white-pure'
              }`}
            >
              <Typography variant="button" className="text-inherit">
                {category}
              </Typography>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
