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
                <div key={faq.id} className="w-full">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    className="bg-white-pure transition-all cursor-pointer overflow-hidden rounded-4xl"
                  >
                    <div
                      className="flex items-center justify-between p-4 cursor-pointer"
                      onClick={() => toggleItem(faq.id)}
                    >
                      <h3 className="font-medium text-[#2e2e30] text-xl leading-relaxed pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <Plus
                          className={clsx(
                            'w-8 h-8 transition-transform',
                            isOpen ? 'rotate-45' : 'rotate-0',
                          )}
                        />
                      </div>
                    </div>

                    {/* Ответ */}
                    <div
                      className={clsx(
                        'px-6 transition-all overflow-hidden',
                        isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0',
                      )}
                    >
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
                            <Typography className="text-balance">{faq.answer}</Typography>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
