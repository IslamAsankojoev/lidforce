'use client'
import clsx from 'clsx'
import { colors, Typography } from '@/src/shared'
import { FAQs, Feedback, NineSteps } from '@/src/widgets'
import Image from 'next/image'
import { motion } from 'framer-motion'
interface ServiceItem {
  id: number
  title?: string
  description?: string
  image?: string
  isEmpty?: boolean
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
    isEmpty: true,
  },
  {
    id: 8,
    title: 'Ведём маркетплейсы и Авито',
    description: 'Управляем продажами на популярных торговых площадках',
    image: '/services/wb&avito.png',
  },
  {
    id: 9,
    title: 'Организовываем фото и видео съемки',
    description: 'Проводим профессиональные фото и видеосъемки для контента',
    image: '/services/record.png',
  },
  {
    id: 10,
    title: 'Разрабатываем ботов в Telegram и ВКонтакте',
    description: 'Создаем автоматизированных помощников для мессенджеров',
    image: '/services/vk&telegram.png',
  },
  {
    id: 11,
    title: 'ReelsBot — личный завод по Reels, которые продают',
    description: 'Автоматизируем создание продающего контента для Reels',
    image: '/services/reels.png',
  },
  {
    id: 12,
    isEmpty: true,
  },
]

export default function Service() {
  return (
    <>
      {/* Hero секция с анимированными диаграммами */}
      <div className="bg-bg-surface relative overflow-hidden min-h-screen">
        {/* Фоновый элемент */}
        <div
          className="absolute flex h-[926px] items-center justify-center translate-x-[-50%] translate-y-[-50%] opacity-80"
          style={{
            top: 'calc(50% + 293px)',
            left: 'calc(50% + 270px)',
            width: '1120px',
          }}
        >
          <div className="flex-none rotate-[332deg]">
            <div className="h-[1635px] relative w-[1984px]">
              <div className="absolute inset-0">
                <div
                  className="w-full h-full blur-3xl rounded-full"
                  style={{
                    background: `radial-gradient(circle at 40% 70%, ${colors['accent-primary']} 0%,  transparent 50%)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-40 relative z-10 min-h-screen">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
            {/* Текстовый блок */}
            <div className="flex flex-col gap-10 w-full lg:w-1/2">
              <div className="flex flex-col gap-[25px]">
                <Typography
                  variant="headingXL"
                  className="text-white-pure text-nowrap leading-none"
                >
                  Услуги
                  <br />
                  которые приносят результат
                </Typography>
                <Typography variant="bodyL" className="text-white-pure leading-[1.3]">
                  Комплексные маркетинговые решения для роста вашего бизнеса: от стратегии до
                  запуска рекламы.
                  <br />
                  Настраиваем, продвигаем, анализируем — и делаем это с умом.
                </Typography>
              </div>

              <button className="bg-accent-primary hover:bg-accent-primary/90 text-white-pure rounded-[600px] px-6 py-4 w-fit transition-colors duration-200">
                <Typography variant="button" className="text-white-pure">
                  Получить консультацию
                </Typography>
              </button>
            </div>

            {/* Анимированные блоки */}
            <div className="absolute right-0 bottom-0 w-full lg:w-1/2 flex items-end justify-end">
              <motion.div
                initial={{ y: 400 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="-mr-14 z-1"
              >
                <Image
                  src="/services/left-line.png"
                  alt="hero"
                  className="object-contain"
                  width={262}
                  height={462}
                />
              </motion.div>
              <motion.div
                initial={{ y: 700 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                className="z-0"
              >
                <Image
                  src="/services/middle-line.png"
                  alt="hero"
                  className="object-contain"
                  width={262}
                  height={574}
                />
              </motion.div>
              <motion.div
                initial={{ y: 400 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="-ml-28 z-1"
              >
                <Image
                  src="/services/right-line.png"
                  alt="hero"
                  className="object-contain"
                  width={262}
                  height={462}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white-pure py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-[25px]">
              <Typography variant="headingXL" className="text-bg-surface text-nowrap leading-none">
                Наш подход
              </Typography>
            </div>

            {/* Десктопная версия - сетка 2x3 */}
            <div className="grid lg:grid-cols-3 gap-5 max-w-[1180px] mx-auto">
              {/* Первый ряд */}
              <div className="bg-dark-deep h-[310px] rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="flex flex-col gap-4">
                  <div className="bg-white-pure w-[60px] h-[60px] rounded-[60px] flex items-center justify-center">
                    <Typography variant="headingS" className="text-bg-surface">
                      1
                    </Typography>
                  </div>
                  <Typography variant="bodyL" className="text-white-pure leading-[1.3]">
                    Определяем цели и выявляем потребности
                  </Typography>
                </div>
                <div className="absolute bottom-4 right-4 w-[120px] h-[120px]">
                  <Image src="/approaches/pen.png" alt="step1" fill />
                </div>
              </div>

              <div className="bg-dark-deep h-[310px] rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="flex flex-col gap-4">
                  <div className="bg-white-pure w-[60px] h-[60px] rounded-[60px] flex items-center justify-center">
                    <Typography variant="headingS" className="text-bg-surface">
                      2
                    </Typography>
                  </div>
                  <Typography variant="bodyL" className="text-white-pure leading-[1.3]">
                    Предлагаем эффективные механики решения
                  </Typography>
                </div>
                <div className="absolute bottom-4 right-4 w-[120px] h-[120px]">
                  <Image src="/approaches/up.png" alt="step2" fill />
                </div>
              </div>

              <div className="bg-dark-deep h-[310px] rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="flex flex-col gap-4">
                  <div className="bg-white-pure w-[60px] h-[60px] rounded-[60px] flex items-center justify-center">
                    <Typography variant="headingS" className="text-bg-surface">
                      3
                    </Typography>
                  </div>
                  <Typography variant="bodyL" className="text-white-pure leading-[1.3]">
                    Создаем стратегию и ставим задачи
                  </Typography>
                </div>
                <div className="absolute bottom-4 right-4 w-[120px] h-[120px]">
                  <Image src="/approaches/mark.png" alt="step3" fill />
                </div>
              </div>

              {/* Второй ряд */}
              <div className="bg-dark-deep h-[310px] rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="flex flex-col gap-4">
                  <div className="bg-white-pure w-[60px] h-[60px] rounded-[60px] flex items-center justify-center">
                    <Typography variant="headingS" className="text-bg-surface">
                      4
                    </Typography>
                  </div>
                  <Typography variant="bodyL" className="text-white-pure leading-[1.3]">
                    Добиваемся результатов
                  </Typography>
                </div>
                <div className="absolute bottom-4 right-4 w-[120px] h-[120px]">
                  <Image src="/approaches/circle.png" alt="step4" fill />
                </div>
              </div>

              <div className="bg-dark-deep h-[310px] rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="flex flex-col gap-4">
                  <div className="bg-white-pure w-[60px] h-[60px] rounded-[60px] flex items-center justify-center">
                    <Typography variant="headingS" className="text-bg-surface">
                      5
                    </Typography>
                  </div>
                  <Typography variant="bodyL" className="text-white-pure leading-[1.3]">
                    Ставим новые цели и задачи, предлагаем новые решения
                  </Typography>
                </div>
                <div className="absolute bottom-4 right-4 w-[120px] h-[120px]">
                  <Image src="/approaches/doc.png" alt="step5" fill />
                </div>
              </div>

              <div className="bg-dark-deep h-[310px] rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="flex flex-col gap-4">
                  <div className="bg-white-pure w-[60px] h-[60px] rounded-[60px] flex items-center justify-center">
                    <Typography variant="headingS" className="text-bg-surface">
                      6
                    </Typography>
                  </div>
                  <Typography variant="bodyL" className="text-white-pure leading-[1.3]">
                    Фиксируем показатели
                  </Typography>
                </div>
                <div className="absolute bottom-4 right-4 w-[120px] h-[120px]">
                  <Image src="/approaches/diogram.png" alt="step6" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-18">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className={clsx(
                  'bg-dark-deep rounded-[30px] p-5 h-[242px] flex flex-col justify-between transition-colors duration-200   shadow-accent-primary border',
                  service.isEmpty
                    ? 'bg-transparent border-dark-deep'
                    : 'border-transparent hover:shadow-[0px_0px_10px_0px_rgba(53,182,211,0.5)] hover:border-accent-primary',
                )}
              >
                <div className="flex-1">
                  <Typography variant="bodyS" className="text-white-pure leading-relaxed">
                    {service?.title?.split(' ').map((word, index) => {
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
                {service?.image && service?.title && (
                  <div className="relative flex justify-center items-center w-full h-full max-h-[130px]">
                    <Image src={service?.image} alt={service.title} objectFit="contain" fill />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <NineSteps />
      <FAQs />
      <Feedback />
    </>
  )
}
