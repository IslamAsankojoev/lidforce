'use client'

import { Typography } from '../shared'
import Tilda from '../../public/services/Tilda&Wordpress.png'
import SEO from '../../public/services/seo.png'
import Birfing from '../../public/services/brifing.png'
import Yandex from '../../public/services/yandex.png'
import Ads from '../../public/services/ads.png'
import SocialMedia from '../../public/services/social-media.png'
import Avito from '../../public/services/wb&avito.png'
import Record from '../../public/services/record.png'
import Bots from '../../public/services/vk&telegram.png'
import ReelsBot from '../../public/services/reels.png'
import Image, { StaticImageData } from 'next/image'

interface ServiceItem {
  id: number
  title: string
  description: string
  image?: StaticImageData | string
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Делаем продающие сайты на Tilda и Wordpress',
    description: 'Создаем современные, быстрые и конверсионные сайты на популярных платформах',
    image: Tilda,
  },
  {
    id: 2,
    title: 'Настраиваем СEO, чтобы вы были первые в поиске',
    description: 'Оптимизируем сайты для поисковых систем и выводим в топ выдачи',
    image: SEO,
  },
  {
    id: 3,
    title: 'Создаем брендинг, нейминг, логотипы, упаковку и инфографику',
    description: 'Разрабатываем уникальный визуальный стиль и фирменную айдентику',
    image: Birfing,
  },
  {
    id: 4,
    title: 'Увеличиваем продажи на сайте с помощью трафика из Яндекса',
    description: 'Настраиваем эффективную контекстную рекламу для привлечения клиентов',
    image: Yandex,
  },
  {
    id: 5,
    title: 'Делаем рекламные кампании с блогерами и СМИ',
    description: 'Организуем сотрудничество с инфлюенсерами и медиа для продвижения',
    image: Ads,
  },
  {
    id: 6,
    title: 'Упаковываем и ведём соц.сети',
    description: 'Создаем контент и ведем аккаунты в социальных сетях',
    image: SocialMedia,
  },
  {
    id: 7,
    title: 'Ведём маркетплейсы и Авито',
    description: 'Управляем продажами на популярных торговых площадках',
    image: Avito,
  },
  {
    id: 8,
    title: 'Организовываем фото и видео съемки',
    description: 'Проводим профессиональные фото и видеосъемки для контента',
    image: Record,
  },
  {
    id: 9,
    title: 'Разрабатываем ботов в Telegram и ВКонтакте',
    description: 'Создаем автоматизированных помощников для мессенджеров',
    image: Bots,
  },
  {
    id: 10,
    title: 'ReelsBot — личный завод по Reels, которые продают',
    description: 'Автоматизируем создание продающего контента для Reels',
    image: ReelsBot,
  },
]

export const Services = () => {
  return (
    <section className="bg-bg-surface py-18">
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
                    src={service.image as StaticImageData}
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
