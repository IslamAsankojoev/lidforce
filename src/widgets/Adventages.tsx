'use client'

import { Typography } from '../shared'

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
  return (
    <section className="bg-bg-surface py-20 relative border-b border-dark-deep">
      <div className="container mx-auto">
        <div className="relative h-[240px]">
          {advantagesData.map((advantage) => (
            <div
              key={advantage.id}
              className="absolute backdrop-blur-[15px] bg-[rgba(202,202,202,0.15)] flex items-center justify-center rounded-full px-8 py-4"
              style={{
                top: advantage.position.top,
                left: advantage.position.left,
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
