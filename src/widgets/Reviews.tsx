'use client'

import { colors, Typography } from '../shared'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../shadcn/components/ui/tabs'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../shadcn/components/ui/carousel'
import Image, { StaticImageData } from 'next/image'

interface Review {
  id: number
  name: string
  position?: string
  text?: string
  avatar?: StaticImageData | string
  company?: string
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: 'Анна Романова',
    position: 'Маркетолог, интернет-магазин одеж...',
    text: 'Обратились в агентство за продвижением нового бренда — и остались в восторге! Команда погрузилась в наш продукт с головой, предложила крутые решения и буквально с первых недель мы увидели рост вовлечённости и продаж. Очень внимательный и профессиональный подход.',
    avatar: '/reviews/1.png',
  },
  {
    id: 2,
    name: 'Игорь Ткаченко',
    position: 'Сооснователь IT-стартапа',
    text: 'Нам нужно было запустить продукт быстро и без ошибок — ребята из этой команды сделали невозможное. От позиционирования до настройки рекламы — всё чётко, прозрачно и по делу. Чувствуется, что работают с душой и знанием дела.',
    avatar: '/reviews/2.png',
  },
  {
    id: 3,
    name: 'Дарья Абдуллаева',
    position: 'Владелица салона красоты «Lime»',
    text: 'Благодаря сотрудничеству с этой компанией мы полностью обновили визуал, настроили Instagram и таргет. Клиенты стали активнее записываться, а узнаваемость выросла. Очень понравилась лёгкость в общении и скорость работы.',
    avatar: '/reviews/3.png',
  },
  {
    id: 4,
    name: 'Анна Романова',
    position: 'Маркетолог, интернет-магазин одеж...',
    text: 'Обратились в агентство за продвижением нового бренда — и остались в восторге! Команда погрузилась в наш продукт с головой, предложила крутые решения и буквально с первых недель мы увидели рост вовлечённости и продаж. Очень внимательный и профессиональный подход.',
    avatar: '/reviews/1.png',
  },
  {
    id: 5,
    name: 'Игорь Ткаченко',
    position: 'Сооснователь IT-стартапа',
    text: 'Нам нужно было запустить продукт быстро и без ошибок — ребята из этой команды сделали невозможное. От позиционирования до настройки рекламы — всё чётко, прозрачно и по делу. Чувствуется, что работают с душой и знанием дела.',
    avatar: '/reviews/2.png',
  },
  {
    id: 6,
    name: 'Дарья Абдуллаева',
    position: 'Владелица салона красоты «Lime»',
    text: 'Благодаря сотрудничеству с этой компанией мы полностью обновили визуал, настроили Instagram и таргет. Клиенты стали активнее записываться, а узнаваемость выросла. Очень понравилась лёгкость в общении и скорость работы.',
    avatar: '/reviews/3.png',
  },
]

const videoReviewsData: Review[] = [
  {
    id: 1,
    name: 'Арсен',
    company: 'EliteHouse',
    avatar: '/reviews/preview1.png',
  },
  {
    id: 2,
    name: 'Нурислам',
    company: 'NeхtProtein',
    avatar: '/reviews/preview2.png',
  },
  {
    id: 3,
    name: 'Тынара',
    company: 'SamFlowers',
    avatar: '/reviews/preview3.png',
  },
  {
    id: 4,
    name: 'Адинай',
    company: 'EliteHouse',
    avatar: '/reviews/preview4.png',
  },
  {
    id: 5,
    name: 'Ксения',
    company: 'ArtHouse',
    avatar: '/reviews/preview5.png',
  },
]

export const Reviews = () => {
  return (
    <section className="bg-bg-surface py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Табы */}
          <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="bg-[rgba(202,202,202,0.15)] h-fit rounded-[60px] w-fit relative">
              <TabsTrigger
                value="reviews"
                className="text-white-pure cursor-pointer rounded-[60px] px-10 data-[state=active]:bg-white-pure data-[state=active]:text-bg-surface group"
              >
                <Typography variant="headingXL" className="!text-headingS group-data-[state=active]:!text-headingXL">
                  отзывы
                </Typography>
              </TabsTrigger>
              <TabsTrigger
                value="video-reviews"
                className="text-white-pure cursor-pointer rounded-[60px] px-10 data-[state=active]:bg-white-pure data-[state=active]:text-bg-surface group"
              >
                <Typography variant="headingXL" className="!text-headingS group-data-[state=active]:!text-headingXL">
                  видеоотзывы
                </Typography>
              </TabsTrigger>
              <Image
                src="/reviews/Heart.png"
                alt="heart-right"
                width={122}
                height={100}
                className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2"
              />
            </TabsList>

            {/* Контент табов */}
            <TabsContent value="reviews">
              <div className="relative">
                {/* Карусель отзывов */}
                <Carousel className="w-full">
                  <CarouselContent className="-ml-5 md:-ml-10">
                    {reviewsData.map((review) => (
                      <CarouselItem
                        key={review.id}
                        className="pl-5 md:pl-10 md:basis-1/2 lg:basis-1/3 mt-20"
                      >
                        <div className="relative rounded-[30px] p-6 flex flex-col">
                          {/* Аватар */}
                          <div className="flex justify-center">
                            <div className="relative w-20 h-20 rounded-full -mt-2 ml-1">
                              <Image
                                src={review.avatar as string}
                                alt={review.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                            <svg
                              width="100%"
                              height="373"
                              viewBox="0 0 367 373"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M186 0C203.977 0 219.929 8.98298 229.521 22.7051C238.452 35.4796 250.788 48.3242 266.375 48.3242H337C353.569 48.3242 367 61.7557 367 78.3242V342.999C367 359.568 353.569 372.999 337 372.999H30C13.4315 372.999 0 359.568 0 342.999V78.3242C0 61.7557 13.4315 48.3242 30 48.3242H105.625C121.212 48.3242 133.548 35.4796 142.479 22.7051C152.071 8.98298 168.023 0 186 0Z"
                                fill={colors['grey-neutral']}
                                fillOpacity="0.15"
                              />
                            </svg>
                          </div>
                          <div className="h-4" />
                          {/* Текст отзыва */}
                          <div className="flex-1 mb-6">
                            <Typography
                              variant="bodyS"
                              className="text-white-pure leading-relaxed line-clamp-6"
                            >
                              {review.text}
                            </Typography>
                          </div>

                          {/* Информация об авторе */}
                          <div className="space-y-1">
                            <Typography
                              variant="bodyS"
                              className="text-white-pure font-semibold line-clamp-1"
                            >
                              {review.name}
                            </Typography>
                            <Typography
                              variant="bodyS"
                              className="text-white-pure italic line-clamp-1"
                            >
                              {review.position}
                            </Typography>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Кнопки навигации */}
                  <div className="flex justify-center gap-10 mt-8">
                    <CarouselPrevious className="static translate-y-0 bg-transparent border-text-muted hover:bg-[rgba(202,202,202,0.15)] text-white-pure rounded-full w-16 h-16" />
                    <CarouselNext className="static translate-y-0 bg-transparent border-text-muted hover:bg-[rgba(202,202,202,0.15)] text-white-pure rounded-full w-16 h-16" />
                  </div>
                </Carousel>
              </div>
            </TabsContent>

            <TabsContent value="video-reviews">
              <div className="relative">
                {/* Карусель отзывов */}
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {videoReviewsData.map((review) => (
                      <CarouselItem
                        key={review.id}
                        className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/5 mt-20"
                      >
                        <div className="relative rounded-4xl flex flex-col bg-grey-soft/15 overflow-hidden border border-grey-soft/15 cursor-pointer group">
                          {review.avatar && (
                            <div className="relative w-full h-80">
                              <Image
                                src={review.avatar}
                                alt={review.name}
                                fill
                                className="object-cover rounded-4xl overflow-hidden"
                              />
                              <Image
                                src="/reviews/play.png"
                                alt="play"
                                width={67}
                                height={47}
                                className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:scale-110 transition-all duration-300"
                              />
                            </div>
                          )}
                          <div className="flex flex-col p-4 items-center">
                            <Typography
                              variant="bodyL"
                              className="text-white-pure font-semibold line-clamp-1"
                            >
                              {review.name}
                            </Typography>
                            <Typography
                              variant="bodyItalic"
                              className="text-white-pure italic line-clamp-1"
                            >
                              {review.company}
                            </Typography>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Кнопки навигации */}
                  <div className="flex justify-center gap-10 mt-8">
                    <CarouselPrevious className="static translate-y-0 bg-transparent border-text-muted hover:bg-[rgba(202,202,202,0.15)] text-white-pure rounded-full w-16 h-16" />
                    <CarouselNext className="static translate-y-0 bg-transparent border-text-muted hover:bg-[rgba(202,202,202,0.15)] text-white-pure rounded-full w-16 h-16" />
                  </div>
                </Carousel>
              </div>
            </TabsContent>

            <TabsContent value="video-reviews" className="mt-10">
              <div className="text-center py-20">
                <Typography variant="bodyL" className="text-white-pure">
                  Видеоотзывы будут добавлены позже
                </Typography>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
