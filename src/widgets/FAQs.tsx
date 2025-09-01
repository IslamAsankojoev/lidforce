'use client'

import { useState } from 'react'
import { Plus } from '../shared/icons'
import { Typography } from '../shared'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Сколько стоят ваши услуги?',
    answer:
      'Стоимость наших услуг зависит от конкретного проекта и объема работ. Мы предлагаем индивидуальный подход к каждому клиенту и составляем персональное коммерческое предложение после изучения ваших потребностей.',
  },
  {
    id: 2,
    question: 'Вы работаете с любыми нишами?',
    answer:
      'Да, мы работаем с различными нишами бизнеса. Наш опыт охватывает B2B и B2C сегменты, включая услуги, товары, недвижимость, образование и многие другие направления.',
  },
  {
    id: 3,
    question: 'Сколько времени занимает запуск проекта?',
    answer:
      'Время запуска проекта зависит от его сложности и выбранных услуг. Обычно подготовка и запуск занимают от 2 до 4 недель. Мы всегда соблюдаем оговоренные сроки и держим вас в курсе прогресса.',
  },
  {
    id: 4,
    question: 'Какие услуги вы оказываете?',
    answer:
      'Мы предоставляем полный спектр маркетинговых услуг: SEO-продвижение, создание сайтов, брендинг, разработка логотипов, ведение социальных сетей, создание чат-ботов, видеосъемка и привлечение трафика.',
  },
  {
    id: 5,
    question: 'Есть ли у вас договор и отчётность?',
    answer:
      'Да, мы заключаем официальный договор на оказание услуг с четким описанием всех условий. Также предоставляем регулярную отчетность по результатам работы и достигнутым показателям.',
  },
  {
    id: 6,
    question: 'Как начать работу с вами?',
    answer:
      'Для начала работы оставьте заявку на нашем сайте или свяжитесь с нами любым удобным способом. Мы проведем бесплатную консультацию, обсудим ваши цели и составим план действий.',
  },
]

export const FAQs = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Заголовок */}
          <Typography variant="headingXL" className="text-white-pure">
            Часто задаваемые вопросы
          </Typography>

          {/* FAQ аккордеон */}
          <div className="flex flex-col gap-6 w-full select-none">
            {faqData.map((faq) => {
              const isOpen = openItems.includes(faq.id)
              return (
                <div key={faq.id} className="w-full p-4 px-6 bg-white-pure rounded-4xl">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    className=" transition-all cursor-pointer overflow-hidden "
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleItem(faq.id)}
                    >
                      <Typography
                        variant="bodyL"
                        className="font-medium text-[#2e2e30] text-xl leading-relaxed pr-4"
                      >
                        {faq.question}
                      </Typography>
                      <div className="flex-shrink-0">
                        <Plus
                          className={clsx(
                            'w-8 h-8 transition-all hover:opacity-80',
                            isOpen ? 'rotate-45' : 'rotate-0',
                          )}
                        />
                      </div>
                    </div>

                    {/* Ответ */}
                    <motion.div className={clsx('transition-all overflow-hidden')}>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              height: 0,
                              marginTop: 0,
                            }}
                            animate={{
                              opacity: 1,
                              height: 'auto',
                              marginTop: 10,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              marginTop: 0,
                            }}
                          >
                            <Typography variant="bodyL" className="text-balance">
                              {faq.answer}
                            </Typography>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
