'use client'

import { motion } from 'framer-motion'
import { Typography, useScreenSize } from '../shared'
import clsx from 'clsx'

interface Advantage {
  id: number
  text: string
  highlightedText: string
  position: {
    top: string
    left: string
  }
  zIndex: number
}

const advantagesData: Advantage[] = [
  {
    id: 1,
    text: 'Более 3 лет успешного опыта в маркетинге',
    highlightedText: '3 лет',
    position: {
      top: '0',
      left: '0',
    },
    zIndex: 4,
  },
  {
    id: 2,
    text: 'Работаем в сегментах B2B & B2C',
    highlightedText: 'B2B & B2C',
    position: {
      top: '48px',
      left: '328px',
    },
    zIndex: 3,
  },
  {
    id: 3,
    text: 'Увеличиваем выручку в 2 раза с помощью таргетированной и контекстной рекламы',
    highlightedText: '2 раза',
    position: {
      top: '103px',
      left: '143px',
    },
    zIndex: 2,
  },
  {
    id: 4,
    text: 'Рекламный бюджет 1 млн в месяц',
    highlightedText: '1 млн',
    position: {
      top: '158px',
      left: '723px',
    },
    zIndex: 1,
  },
]

export const Adventages = () => {
  const { md, lg } = useScreenSize()
  return (
    <section className="bg-bg-surface py-20 relative border-b border-dark-deep">
      <div className="container mx-auto">
        <div className={clsx(
          "relative md:h-[240px] flex flex-col gap-4",
        )}>
          {advantagesData.map((advantage, index) => (
            <motion.div
              key={advantage.id}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={clsx(
                "w-full md:w-auto backdrop-blur-[15px] bg-[rgba(202,202,202,0.15)] items-center justify-center rounded-full px-8 py-4",
                md ? 'absolute' : 'static',
              )}
              style={{
                top: md ? advantage.position.top : 'initial',
                left: md ? advantage.position.left : 'initial',
                zIndex: advantage.zIndex,
              }}
            >
              <Typography variant="bodyL" className="text-white-pure text-center">
                {advantage.text.split(advantage.highlightedText).map((part, index) => (
                  <span key={index}>
                    {part}
                    {index < advantage.text.split(advantage.highlightedText).length - 1 && (
                      <span className="text-accent-primary">{advantage.highlightedText}</span>
                    )}
                  </span>
                ))}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
