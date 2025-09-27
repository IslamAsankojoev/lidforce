'use client'

import { Typography } from '../shared'
import Image from 'next/image'

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  hasImage?: boolean
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Элдияр',
    position: 'Генеральный директор',
    image: '/teamates/2be8d6e82863dea2538b4fd25df9f063ea36b124.png',
    hasImage: true,
  },
  {
    id: 2,
    name: 'Марсель',
    position: 'Продюсер',
    image: '/teamates/2be8d6e82863dea2538b4fd25df9f063ea36b124.png',
    hasImage: true,
  },
  {
    id: 3,
    name: 'Ынтымак',
    position: 'Мобилограф',
    image: '/teamates/2be8d6e82863dea2538b4fd25df9f063ea36b124.png',
    hasImage: true,
  },
  {
    id: 4,
    name: 'Баястан',
    position: 'Таргетолог',
    image: '/teamates/2be8d6e82863dea2538b4fd25df9f063ea36b124.png',
    hasImage: true,
  },
  {
    id: 5,
    name: 'Торогелди',
    position: 'Таргетолог',
    image: '/teamates/2be8d6e82863dea2538b4fd25df9f063ea36b124.png',
    hasImage: true,
  },
  {
    id: 6,
    name: 'Бермет',
    position: 'Проект-менеджер',
    image: '/teamates/2be8d6e82863dea2538b4fd25df9f063ea36b124.png',
    hasImage: true,
  },
  {
    id: 7,
    name: 'Асел',
    position: 'Контент маркетолог',
    image: '/teamates/2be8d6e82863dea2538b4fd25df9f063ea36b124.png',
    hasImage: true,
  },
  {
    id: 8,
    name: 'Алтынай',
    position: 'Проект-менеджер',
    image: '/teamates/2be8d6e82863dea2538b4fd25df9f063ea36b124.png',
    hasImage: true,
  },
]

export const Team = () => {
  return (
    <section className="bg-white-pure py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* Карточки команды */}
          <div className="py-10 md:py-20">
            <div className="flex flex-col lg:flex-row justify-between mb-5 gap-10 h-full items-center">
              <div className="relative w-full max-w-[400px] md:h-[600px] h-[400px]">
                <Image
                  src="/teamates/2be8d6e82863dea2538b4fd25df9f063ea36b124.png"
                  alt="team"
                  fill
                  objectFit="cover"
                  className="rounded-[30px]"
                />
                <div className="flex flex-col gap-2 z-2 absolute bottom-4 left-4 p-2 items-start">
                  <Typography
                    variant="headingS"
                    className="text-bg-surface bg-white-pure/80 rounded-full px-4 py-2"
                  >
                    Элдияр
                  </Typography>
                  <Typography
                    variant="bodyItalic"
                    className="text-white-pure border border-white-pure rounded-full px-4 py-2 italic"
                  >
                    Генеральный директор
                  </Typography>
                </div>
              </div>

              <div className="flex flex-col gap-6 flex-1 h-full justify-center">
                <Typography variant="headingXL" className="text-bg-surface">
                  Пару слов туда сюда о нас
                </Typography>
                <Typography variant="bodyL" className="text-text-muted">
                  Мы — команда креативных и амбициозных специалистов в сфере маркетинга. Помогаем
                  брендам расти, выделяться и выстраивать сильную связь со своей аудиторией.
                  Работаем с бизнесами разного масштаба: от стартапов до крупных компаний, предлагая
                  индивидуальные стратегии, современные решения и измеримый результат.
                </Typography>
              </div>
            </div>
          </div>

          {/* Нижний заголовок */}
          <div className="text-center">
            <Typography variant="headingXL" className="text-bg-surface">
              Одна команда для решения
            </Typography>
            <div className="flex items-center gap-2 justify-center">
              <Image src="/lightning.png" alt="arrow right" width={60} height={60} />
              <Typography variant="headingXL" className="text-bg-surface">
                всех задач
              </Typography>
              <Image
                src="/lightning.png"
                alt="arrow right"
                width={60}
                height={60}
                className="scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
