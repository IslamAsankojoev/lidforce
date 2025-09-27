import { Typography } from '@/src/shared'
import CircularText from '@/src/shared/ui/CircularText'
import { FAQs, Feedback } from '@/src/widgets'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
  const data = {
    id: 'nextprotein',
    title: 'Кейс спортивное питание NeхtProtein',
    description: [
      'Оригинальное спортивное питание от лучших брендов США и Европы.',
      'Прямые поставки, сертифицированная продукция и широкий ассортимент.',
      'Для тех, кто ценит качество, результат и здоровье.',
    ],
    logo: '/fd0b7a7100e3242956b334204c8dc92633c48ced.png',
    manager: {
      name: 'Эльдияр Азизбеков',
      role: 'Менеджер кейса',
    },
    links: {
      youtube: 'https://nextprotein1.ps.m...',
      instagram: 'https://www.instagram.com/...',
    },
    tags: {
      services: ['Таргет', 'Продакшн', 'Брендинг', 'СММ', 'Дизайн'],
      niches: ['Спортивное питание NeхtProtein'],
    },
    projectImages: {
      main: '/4750604c542ab686bd7bc3798676c3cc5b6112fe.png',
      before: '/bbf53f2acb4d39328547d333835f5084c1356e38.png',
      after: '/7c1c0fcc46a390026ad52ada5b04c6971a02cb3c.png',
      branding: [],
    },
    results: {
      pointA: {
        label: 'Точка А',
        value: 'Доход 400 000 сом в месяц',
      },
      pointB: {
        label: 'Точка B',
        value: 'Доход 1 000 000 сом в месяц',
      },
    },
    contentCount: 'САМОЕ ПОПУЛЯРНОЕ ВИДЕО НАБРАЛО 6,2 МЛН ПРОСМОТРОВ',
  }

  return (
    <section>
      <div className="bg-black">
        <div className="min-h-screen flex items-center justify-center py-20 container">
          <div className="flex flex-col gap-20 items-center justify-center py-20 relative w-full">
            <div className="flex flex-col gap-20 items-start relative shrink-0 w-full">
              {/* Заголовок и информация */}
              <div className="relative shrink-0 w-full">
                <div className="md:px-0">
                  {/* Заголовок */}
                  <div className="left-0 top-0">
                    <Typography variant="headingXL" className="text-white-pure">
                      {data.title}
                    </Typography>
                  </div>
                  {/* Информация о менеджере и ссылки */}
                  <div className="flex flex-wrap items-end justify-start md:justify-end md:-mt-6 mt-10">
                    {/* Менеджер кейса */}
                    <div className="bg-white-pure flex gap-[10px] items-center justify-center px-6 py-2 relative rounded-[60px] shrink-0 ">
                      <Typography
                        variant="bodyS"
                        className="text-black text-center whitespace-nowrap"
                      >
                        {data.manager.role}
                      </Typography>
                      <div className="w-1 h-full bg-white-pure" />
                      <Typography
                        variant="bodyS"
                        className="text-black text-center whitespace-nowrap uppercase"
                      >
                        {data.manager.name}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex mt-8 justify-between flex-col md:flex-row gap-4">
                    {/* Теги */}
                    <div className="flex flex-col gap-[25px] items-start">
                      {/* Услуги */}
                      <div className="flex flex-wrap gap-4 items-center md:items-start relative shrink-0">
                        <div className="bg-white-pure flex gap-[10px] h-[40px] items-center justify-center relative rounded-full shrink-0 px-8 py-4">
                          <Typography variant="bodyS" className="text-black whitespace-nowrap">
                            Услуга
                          </Typography>
                        </div>
                        {data.tags.services.map((service, index) => (
                          <div
                            key={index}
                            className="flex gap-[10px] h-[40px] items-center justify-center relative rounded-full border border-white-pure shrink-0 px-6 py-4"
                          >
                            <Typography
                              variant="bodyS"
                              className="text-white-pure whitespace-nowrap"
                            >
                              {service}
                            </Typography>
                          </div>
                        ))}
                      </div>

                      {/* Ниши */}
                      <div className="flex flex-wrap gap-4 items-center md:items-start relative shrink-0">
                        <div className="bg-white-pure flex gap-[10px] h-[40px] items-center justify-center relative rounded-full shrink-0 px-8 py-4">
                          <Typography variant="bodyS" className="text-black whitespace-nowrap">
                            Ниша
                          </Typography>
                        </div>
                        {data.tags.niches.map((niche, index) => (
                          <div
                            key={index}
                            className="flex gap-[10px] h-[40px] items-center justify-center relative rounded-full border border-white-pure shrink-0 px-6 py-4"
                          >
                            <Typography
                              variant="bodyS"
                              className="text-white-pure whitespace-nowrap"
                            >
                              {niche}
                            </Typography>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start md:items-end">
                      {data.links.youtube && (
                        <Link
                          href={data.links.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-grey-soft/15 flex gap-[10px] h-[40px] items-center justify-center px-4 py-3 relative rounded-[60px] shrink-0 w-[300px]"
                        >
                          <Image
                            alt=""
                            width={29.961}
                            height={21.062}
                            src="/83616c66e40105380ddba23cdd43744d71a52a86.svg"
                            objectFit="contain"
                            className='grayscale-100'
                          />
                          <Typography
                            variant="bodyS"
                            className="text-white-pure text-[15px] text-center whitespace-nowrap"
                          >
                            {data.links.youtube}
                          </Typography>
                        </Link>
                      )}
                      {data.links.instagram && (
                        <Link
                          href={data.links.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-grey-soft/15 flex gap-[10px] h-[40px] items-center justify-center px-4 py-3 relative rounded-[60px] shrink-0"
                        >
                          <Image
                            alt=""
                            src="/fb0df7e3249c74c6621736f317d9c4157ae5a32a.svg"
                            width={24}
                            height={24}
                            className='grayscale-100'
                          />
                          <a
                            className="block text-white-pure text-[15px] text-center whitespace-nowrap cursor-pointer"
                            href={data.links.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {data.links.instagram}
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Видео секция */}
              <div
                className="relative w-full min-h-[250px] pt-20 md:pt-0 container flex flex-col justify-end gap-8 items-center border-3 border-grey-soft/15 rounded-[60px]"
                style={{
                  backgroundImage: `url(./6da60e37aab2b73dac7cbca53b03665bf3217b4c.svg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Основное изображение видео */}
                <div className="relative bottom-0 h-[110px] container overflow-hidden w-full">
                  <Image
                    alt="Основное изображение видео"
                    src={data.logo}
                    fill
                    objectFit="cover"
                    objectPosition="80% 78%"
                    className="rounded-[60px] hidden md:block"
                  />
                  <Image
                    alt="Основное изображение видео"
                    src={data.logo}
                    fill
                    objectFit="contain"
                    className="rounded-[60px] block md:hidden"
                  />
                </div>

                {/* Информация о просмотрах */}
                <div className="mb-4 bg-accent-primary flex gap-[10px] w-full py-4 items-center justify-center rounded-[60px]">
                  <Typography
                    variant="headingS"
                    className="text-white-pure text-center uppercase w-full"
                  >
                    Самое популярное видео набрало 6,2 миллионов просмотров
                  </Typography>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/3 w-[200px] h-[200px]">
                  <div className="relative">
                    <CircularText
                      text=" Смотреть видео  Смотреть видео Смотреть видео"
                      onHover="slowDown"
                      spinDuration={20}
                    />
                    {/* Кнопка воспроизведения */}
                    <div className="aspect-square backdrop-blur-sm backdrop-filter bg-grey-soft/15 flex gap-[8px] items-center justify-center overflow-hidden rounded-[600px] w-[80px] h-[80px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 transition-all duration-300">
                      <div className="overflow-hidden relative shrink-0 size-[30px]">
                        {/* Смотреть видео Смотреть видео Смотреть видео */}

                        <div className="absolute bottom-[0.17%] flex items-center justify-center left-[6.67%] right-[0.58%] top-0">
                          <div className="flex-none h-[29.949px] scale-y-[-100%] w-[27.826px]">
                            <div className="relative w-full h-full">
                              <Image
                                alt="Кнопка воспроизведения"
                                src="/90c7777ab9e4b6e2f5ef26217e2d11f673e6d386.svg"
                                fill
                                objectFit="contain"
                                className="w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white-pure">
        <div className="bg-white-pure container py-20">
          {/* Секция О проекте */}
          <div className="relative my-20">
            {/* Фоновое изображение */}
            <div className="absolute inset-0 w-full h-[348px] md:h-[348px] left-1/2 -translate-x-1/2 top-0">
              <Image
                alt=""
                src="/0ae9b4766f83b3f3cb3c3d1c33cc7c6ec135820f.svg"
                fill
                className="object-cover hidden md:block"
              />
            </div>

            {/* Контент */}
            <div className="relative z-10 container">
              <div className="flex flex-col md:p-4 gap-10 md:gap-0">
                {/* Левая колонка - О проекте */}
                <div className="flex flex-col items-start gap-4">
                  <Typography variant="headingXL" className="text-bg-surface">
                    О проекте
                  </Typography>
                  <div className="space-y-2">
                    <ul className="space-y-2 text-text-muted">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-text-muted rounded-full mt-2 flex-shrink-0" />
                        <Typography variant="bodyS" className="text-text-muted">
                          Оригинальное спортивное питание от лучших брендов США и Европы.
                        </Typography>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-text-muted rounded-full mt-2 flex-shrink-0" />
                        <Typography variant="bodyS" className="text-text-muted">
                          Прямые поставки, сертифицированная продукция и широкий ассортимент.
                        </Typography>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-text-muted rounded-full mt-2 flex-shrink-0" />
                        <Typography variant="bodyS" className="text-text-muted">
                          Для тех, кто ценит качество, результат и здоровье.
                        </Typography>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Правая колонка - Цель проекта */}
                <div className="flex flex-col gap-4 md:items-end items-start">
                  <Typography variant="headingXL" className="text-bg-surface">
                    Цель проекта
                  </Typography>
                  <div className="space-y-2">
                    <Typography variant="bodyS" className="text-text-muted md:text-right">
                      Оригинальное спортивное питание от лучших брендов США и Европы.
                    </Typography>
                    <Typography variant="bodyS" className="text-text-muted md:text-right">
                      Прямые поставки, сертифицированная продукция и широкий ассортимент.
                    </Typography>
                    <Typography variant="bodyS" className="text-text-muted md:text-right">
                      Для тех, кто ценит качество, результат и здоровье.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Секция Проблема/Задача */}
          <div className="flex flex-col md:flex-row gap-5 my-20">
            {/* Блок Проблема */}
            <div className="bg-accent-primary flex flex-col gap-6 p-3 rounded-[40px] flex-1">
              {/* Заголовок */}
              <div className="bg-white-pure flex items-center justify-center h-[70px] rounded-[60px] px-4">
                <Typography variant="headingXL" className="text-bg-surface text-center">
                  Проблема
                </Typography>
              </div>

              {/* Список проблем */}
              <div className="px-2">
                <ul className="space-y-3 text-white-pure">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Клиент тратил 400$ на рекламу, но получал всего 500 заявок в месяц.
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Уходили в убыток
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Незнание как работать с командой и какие задачи им давать
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      В месяц выкладывали мало контента
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Испорченный визуал
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Низкий охват
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>

            {/* Блок Задача */}
            <div className="bg-accent-primary flex flex-col gap-6 p-3 rounded-[40px] flex-1">
              {/* Заголовок */}
              <div className="bg-white-pure flex items-center justify-center h-[70px] rounded-[60px] px-4">
                <Typography variant="headingXL" className="text-bg-surface text-center">
                  Задача
                </Typography>
              </div>

              {/* Список задач */}
              <div className="px-2">
                <ul className="space-y-3 text-white-pure">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Создание контента с полезными и экспертными мнениями
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Каждый день выкладывать контент
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Улучшить визуал аккаунта
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Добавить еще одного амбасадора на КР аудиторию
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Снизить стоимость заявки
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Инструменты (Reels, Таргет ИНС/ФЕЙС)
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white-pure rounded-full mt-2 flex-shrink-0" />
                    <Typography variant="bodyS" className="text-white-pure font-semibold">
                      Создание логотипа
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Секция Результат */}
          <div className="flex flex-col gap-6 items-center my-20">
            {/* Заголовок */}
            <div className="flex items-center justify-center">
              <Typography variant="headingXL" className="text-bg-surface text-center">
                Результат:
              </Typography>
            </div>

            {/* Слайдер с результатами */}
            <div className="bg-grey-soft/15 h-[300px] md:h-[202px] relative rounded-[60px] w-full max-w-[1180px] flex items-center justify-center overflow-hidden">
              {/* Градиентная полоса */}
              <div className="absolute h-[15px] w-[90%] md:w-[1020px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-red-alert via-[#dddc51] via-[52.404%] to-green-success h-full rounded-[60px]" />
                {/* Белый кружок в конце */}
                <div className="absolute bg-white-pure rounded-full w-[40px] h-[40px] -top-[12.5px] right-0" />
              </div>

              {/* Левая часть - "Было" */}
              <div className="absolute left-[20px] md:left-[40px] top-[25px] w-[280px] md:w-[325px] h-[60px]">
                <Image
                  alt=""
                  src="/3b0f845e8e1acc843dbb7bb3373c1ce23af19dd2.svg"
                  fill
                  className="object-contain"
                />
                <div className="absolute left-[15px] md:left-[25px] top-[13px]">
                  <Typography
                    variant="bodyS"
                    className="text-white-pure font-medium text-[14px] md:text-[20px]"
                  >
                    Было: 15 тыс подписчиков
                  </Typography>
                </div>
              </div>

              {/* Правая часть - "Стало" */}
              <div className="absolute right-0 bottom-[25px] w-[280px] md:w-[577px] h-[60px]">
                <div className="w-[280px] md:w-[577px] h-[60px]">
                  <Image alt="" src="/result-success-bg.svg" fill className="object-contain" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-[20px] text-center">
                  <Typography variant="bodyS" className="text-white-pure font-medium leading-4">
                    <span className="text-[14px] md:text-[16px] text-nowrap ">
                      Стало: 42,200 тыс подписчиков <br />
                      <span className="text-[12px] md:text-[16px]">(+27 000 подписчиков)</span>
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Изображения проекта */}
          <div className="flex flex-col gap-6 w-full">
            {/* Основное изображение */}
            <div className="relative md:h-[981px] h-[512px] w-full">
              <Image
                alt="Основное изображение проекта"
                src={data.projectImages.main}
                fill
                objectFit="cover"
                className="absolute rounded-[60px]"
              />
              {data.contentCount && (
                <div className="flex items-center justify-center left-1/2 -translate-x-1/2 md:w-[642.712px] w-[300px] absolute z-2 bottom-10">
                  <div className="flex-none rotate-[2deg]">
                    <div className="bg-accent-primary flex gap-[10px] h-[75px] items-center justify-center py-0 relative rounded-[60px] md:w-[640.496px] w-[500px] px-10">
                      <Typography
                        variant="headingS"
                        className="text-white-pure text-[20px] text-center uppercase"
                      >
                        {data.contentCount}
                      </Typography>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Кнопки До/После */}
            <div className="flex md:gap-6 flex-col md:flex-row gap-10 w-full">
              <div className="relative w-full h-[512px] rounded-[60px]">
                <Image
                  alt="До"
                  src={data.projectImages.before}
                  fill
                  objectFit="cover"
                  className="rounded-[60px]"
                />
                <div className="bg-accent-primary flex gap-[10px] h-[57px] items-center justify-center px-[10px] py-0 rounded-[60px] w-[179px] absolute z-2 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Typography
                    variant="headingS"
                    className="text-white-pure text-[20px] text-center whitespace-nowrap uppercase"
                  >
                    До
                  </Typography>
                </div>
              </div>
              <div className="relative w-full h-[512px] rounded-[60px]">
                <Image
                  alt="После"
                  fill
                  objectFit="cover"
                  className="rounded-[60px]"
                  src={data.projectImages.after}
                />
                <div className="bg-accent-primary flex gap-[10px] h-[57px] items-center justify-center px-[10px] py-0 rounded-[60px] w-[179px] absolute z-2 bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2">
                  <Typography
                    variant="headingS"
                    className="text-white-pure text-[20px] text-center whitespace-nowrap uppercase"
                  >
                    После
                  </Typography>
                </div>
              </div>
            </div>

            {/* Секция Counts */}
            <div className="bg-bg-surface flex flex-wrap gap-6 md:gap-10 p-6 md:p-10 rounded-[60px] w-full">
              {/* Блок Просмотры */}
              <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-[1100px]">
                <div className="bg-white-pure flex items-center justify-center h-[50px] md:h-[57px] rounded-[60px] w-fit px-4">
                  <Typography
                    variant="headingS"
                    className="text-bg-surface uppercase text-[16px] md:text-[20px]"
                  >
                    Просмотры
                  </Typography>
                </div>
                <div className="relative bg-white-pure flex items-center justify-center h-[250px] md:h-[300px] rounded-[47px] w-full overflow-hidden">
                  <Image
                    alt="График просмотров"
                    src="/fcb5a9d74f1b63abd05c9c6de7a86b7d464ed4c2.png"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Блок Заявки */}
              <div className="flex gap-10 flex-col md:flex-row w-full">
                <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-[744px]">
                  <div className="bg-white-pure flex items-center justify-center h-[50px] md:h-[57px] rounded-[60px] w-fit px-4">
                    <Typography
                      variant="headingS"
                      className="text-bg-surface uppercase text-[16px] md:text-[20px]"
                    >
                      Заявки
                    </Typography>
                  </div>
                  <div className="flex gap-4 md:gap-6 items-start w-full">
                    <div className="relative bg-white-pure flex items-center justify-center h-[250px] md:h-[304px] rounded-[30px] w-full flex-1 overflow-hidden">
                      <Image
                        alt="График заявок"
                        src="/390bc69c77c21590521064de86cbd6e6bf098d1b.png"
                        fill
                        objectFit="contain"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative bg-white-pure flex items-center justify-center h-[250px] md:h-[304px] rounded-[16px] md:w-[139px] w-32 overflow-hidden">
                      <Image
                        alt="Мобильный скриншот"
                        src="/c29fa5aa6caa27099fb27b5c4e14cc4060145809.png"
                        fill
                        objectFit="contain"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Блок Брендбук */}
                <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto">
                  <div className="bg-white-pure flex items-center justify-center h-[50px] md:h-[57px] rounded-[60px] w-fit px-4">
                    <Typography
                      variant="headingS"
                      className="text-bg-surface uppercase text-[16px] md:text-[20px]"
                    >
                      Брендбук
                    </Typography>
                  </div>
                  <div className="relative bg-white-pure flex items-center justify-center h-[220px] md:h-[290px] rounded-[23px] md:w-[295px] w-64 overflow-hidden">
                    <Image
                      alt="Брендбук"
                      src="/b9c9c3067cb1e24a192b9576249a0831dd1fe741.png"
                      fill
                      objectFit="contain"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Блок Скрин рекламного кабинета */}
              <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-[1100px]">
                <div className="bg-white-pure flex items-center justify-center h-[50px] md:h-[57px] rounded-[60px] w-fit px-4">
                  <Typography
                    variant="headingS"
                    className="text-bg-surface uppercase text-[14px] md:text-[20px] text-center"
                  >
                    Скрин рекламного кабинета
                  </Typography>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start w-full">
                  <div className="relative bg-white-pure flex items-center justify-center h-[200px] md:h-[248px] rounded-[30px] w-full md:flex-1 overflow-hidden">
                    <Image
                      alt="Скриншот рекламного кабинета 1"
                      src="/65d59ff2dc4b5c5b0806cbbdcfccd56f0e281ec5.png"
                      fill
                      objectFit="contain"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative bg-white-pure flex items-center justify-center h-[200px] md:h-[249px] rounded-[30px] w-full md:flex-1 overflow-hidden">
                    <Image
                      alt="Скриншот рекламного кабинета 2"
                      src="/eb98d4a406005fa20465371d5a0957d09eaea626.png"
                      fill
                      objectFit="contain"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Результат */}
            <div className="flex flex-col gap-[25px] items-start relative shrink-0 w-full">
              <Typography variant="headingXL" className="text-bg-surface text-[48px] leading-[1.2]">
                Заключение
              </Typography>
              <div className="flex gap-5 items-start relative shrink-0 w-full flex-col md:flex-row">
                {/* Точка А */}
                <div className="bg-red-alert relative rounded-full shrink-0 flex p-[5px] items-center flex-grow">
                  <div className="bg-white-pure flex h-[66px] items-center justify-center rounded-[60px] px-4">
                    <Typography variant="headingS" className="text-dark-deep uppercase text-center">
                      {data.results.pointA.label}
                    </Typography>
                  </div>
                  <div className="flex-grow">
                    <Typography variant="bodyL" className="text-white-pure px-4 text-center">
                      {data.results.pointA.value}
                    </Typography>
                  </div>
                </div>

                {/* Точка B */}
                <div className="bg-green-success relative rounded-full shrink-0 flex p-[5px] items-center flex-grow justify-between">
                  <div className="flex-grow">
                    <Typography variant="bodyL" className="text-white-pure text-[20px] text-center">
                      {data.results.pointB.value}
                    </Typography>
                  </div>
                  <div className="bg-white-pure flex h-[66px] items-center justify-center rounded-[60px] px-4">
                    <Typography variant="headingS" className="text-dark-deep uppercase text-center">
                      {data.results.pointB.label}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQs />
      <Feedback />
    </section>
  )
}
