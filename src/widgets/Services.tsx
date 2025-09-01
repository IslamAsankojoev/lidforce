'use client'

import { Typography } from '../shared'
import Image from 'next/image'

interface ServiceItem {
  id: number
  title: string
  description: string
  image: string
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Делаем продающие сайты на Tilda и Wordpress',
    description: 'Создаем современные, быстрые и конверсионные сайты на популярных платформах',
    image: '/services/Tilda&Wordpress.png',
  },
  {
    id: 2,
    title: 'Настраиваем СEO, чтобы вы были первые в поиске',
    description: 'Оптимизируем сайты для поисковых систем и выводим в топ выдачи',
    image: '/services/seo.png',
  },
  {
    id: 3,
    title: 'Создаем брендинг, нейминг, логотипы, упаковку и инфографику',
    description: 'Разрабатываем уникальный визуальный стиль и фирменную айдентику',
    image: '/services/brifing.png',
  },
  {
    id: 4,
    title: 'Увеличиваем продажи на сайте с помощью трафика из Яндекса',
    description: 'Настраиваем эффективную контекстную рекламу для привлечения клиентов',
    image: '/services/yandex.png',
  },
  {
    id: 5,
    title: 'Делаем рекламные кампании с блогерами и СМИ',
    description: 'Организуем сотрудничество с инфлюенсерами и медиа для продвижения',
    image: '/services/ads.png',
  },
  {
    id: 6,
    title: 'Упаковываем и ведём соц.сети',
    description: 'Создаем контент и ведем аккаунты в социальных сетях',
    image: '/services/social-media.png',
  },
  {
    id: 7,
    title: 'Ведём маркетплейсы и Авито',
    description: 'Управляем продажами на популярных торговых площадках',
    image: '/services/wb&avito.png',
  },
  {
    id: 8,
    title: 'Организовываем фото и видео съемки',
    description: 'Проводим профессиональные фото и видеосъемки для контента',
    image: '/services/record.png',
  },
  {
    id: 9,
    title: 'Разрабатываем ботов в Telegram и ВКонтакте',
    description: 'Создаем автоматизированных помощников для мессенджеров',
    image: '/services/vk&telegram.png',
  },
  {
    id: 10,
    title: 'ReelsBot — личный завод по Reels, которые продают',
    description: 'Автоматизируем создание продающего контента для Reels',
    image: '/services/reels.png',
  },
]

export const Services = () => {
  return (
    <section className="bg-bg-surface py-18 border-b border-dark-deep">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Заголовок */}
          <div className="flex flex-col gap-6">
            <Typography variant="headingXL" className="text-white-pure">
              Услуги
            </Typography>
            <Typography variant="bodyL" className="text-grey-neutral max-w-4xl">
              Делаем эффективную интернет-рекламу и увеличиваем прибыль компаний с помощью
              разработки и реализации комплексных стратегий
            </Typography>
          </div>

          {/* Сетка услуг */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-5">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-dark-deep rounded-[30px] p-5 h-[242px] flex flex-col justify-between hover:bg-dark-deep/80 transition-colors duration-200"
              >
                <div className="flex-1">
                  <Typography variant="bodyS" className="text-white-pure leading-relaxed">
                    {service.title.split(' ').map((word, index) => {
                      if (
                        word.includes('Tilda') ||
                        word.includes('Wordpress') ||
                        word.includes('СEO') ||
                        word.includes('первые') ||
                        word.includes('упаковку') ||
                        word.includes('Яндекса') ||
                        word.includes('блогерами') ||
                        word.includes('СМИ') ||
                        word.includes('соц.сети') ||
                        word.includes('Авито') ||
                        word.includes('фото') ||
                        word.includes('видео') ||
                        word.includes('Telegram') ||
                        word.includes('ВКонтакте') ||
                        word.includes('ReelsBot')
                      ) {
                        return (
                          <span key={index} className="text-accent-primary">
                            {word}{' '}
                          </span>
                        )
                      }
                      return word + ' '
                    })}
                  </Typography>
                </div>

                {/* Иконка или декоративный элемент */}
                <div className="relative flex justify-center items-center w-full h-full">
                                              <Image
                              src={service.image}
                              alt={service.title}
                              objectFit='contain'
                              fill
                            />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
