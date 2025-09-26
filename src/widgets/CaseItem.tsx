import { Typography } from '@/src/shared/ui/Typography'
import { Divide } from 'lucide-react'
import { colors } from '../shared'
import Image from 'next/image'

// Интерфейс для данных кейса
export interface CaseItemProps {
  // Основная информация
  title: string
  description: string[]
  logo: string

  // Информация о менеджере
  manager: {
    name: string
    role: string
  }

  // Ссылки
  links: {
    youtube?: string
    instagram?: string
  }

  // Теги/категории
  tags: {
    services: string[]
    niches: string[]
  }

  // Изображения проекта
  projectImages: {
    main: string
    before: string
    after: string
    branding: string[]
  }

  // Результаты
  results: {
    pointA: {
      label: string
      value: string
    }
    pointB: {
      label: string
      value: string
    }
  }

  // Дополнительная информация
  contentCount?: string
}

export const CaseItem = ({
  title,
  description,
  logo,
  manager,
  links,
  tags,
  projectImages,
  results,
  contentCount,
}: CaseItemProps) => {
  return (
    <div className="bg-white-pure flex flex-col gap-20 items-center justify-center py-20 relative w-full">
      <div className="flex flex-col gap-20 items-start relative shrink-0 w-full">
        {/* Заголовок и информация */}
        <div className="relative shrink-0 w-full">
          <div className="container px-4 md:px-0">
            {/* Заголовок */}
            <div className="left-0 top-0">
              <Typography variant="headingXL" className="text-bg-surface">
                {title}
              </Typography>
            </div>
            {/* Информация о менеджере и ссылки */}
            <div className="flex flex-wrap items-end justify-end mt-10">
              {/* Менеджер кейса */}
              <div className="bg-dark-deep flex gap-[10px] items-center justify-center px-4 py-3 relative rounded-[60px] shrink-0 w-[379px]">
                <Typography
                  variant="bodyS"
                  className="text-white-pure text-center whitespace-nowrap"
                >
                  {manager.role}
                </Typography>
                <div className="w-1 h-full bg-white-pure" />
                <Typography
                  variant="bodyS"
                  className="text-white-pure text-center whitespace-nowrap uppercase"
                >
                  {manager.name}
                </Typography>
              </div>
            </div>
            <div className="flex mt-8 justify-between">
              {/* Теги */}
              <div className="flex flex-col gap-[25px] items-start">
                {/* Услуги */}
                <div className="flex flex-wrap gap-4 items-start relative shrink-0">
                  <div className="bg-accent-primary flex gap-[10px] h-[40px] items-center justify-center relative rounded-full shrink-0 px-8 py-4">
                    <Typography variant="bodyS" className="text-white-pure whitespace-nowrap">
                      Услуга
                    </Typography>
                  </div>
                  {tags.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex gap-[10px] h-[40px] items-center justify-center relative rounded-full border border-dark-deep shrink-0 px-6 py-4"
                    >
                      <Typography variant="bodyS" className="text-dark-deep whitespace-nowrap">
                        {service}
                      </Typography>
                    </div>
                  ))}
                </div>

                {/* Ниши */}
                <div className="flex flex-wrap gap-4 items-start relative shrink-0">
                  <div className="bg-accent-primary flex gap-[10px] h-[40px] items-center justify-center relative rounded-full shrink-0 px-8 py-4">
                    <Typography variant="bodyS" className="text-white-pure whitespace-nowrap">
                      Ниша
                    </Typography>
                  </div>
                  {tags.niches.map((niche, index) => (
                    <div
                      key={index}
                      className="flex gap-[10px] h-[40px] items-center justify-center relative rounded-full border border-dark-deep shrink-0 px-6 py-4"
                    >
                      <Typography variant="bodyS" className="text-dark-deep whitespace-nowrap">
                        {niche}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 items-end">
                {links.youtube && (
                  <div className="bg-grey-soft/15 flex gap-[10px] h-[40px] items-center justify-center px-4 py-3 relative rounded-[60px] shrink-0 w-[300px]">
                    <Image
                      alt=""
                      width={29.961}
                      height={21.062}
                      src="/83616c66e40105380ddba23cdd43744d71a52a86.svg"
                      objectFit="contain"
                    />
                    <Typography
                      variant="bodyS"
                      className="text-accent-primary text-[15px] text-center whitespace-nowrap"
                    >
                      {links.youtube}
                    </Typography>
                  </div>
                )}
                {links.instagram && (
                  <div className="bg-grey-soft/15 flex gap-[10px] h-[40px] items-center justify-center px-4 py-3 relative rounded-[60px] shrink-0">
                    <Image
                      alt=""
                      src="/fb0df7e3249c74c6621736f317d9c4157ae5a32a.svg"
                      width={24}
                      height={24}
                    />
                    <a
                      className="block text-accent-primary text-[15px] text-center whitespace-nowrap cursor-pointer"
                      href={links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {links.instagram}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center relative shrink-0 w-full container px-4 md:px-0">
        {/* О проекте */}
        <div className="flex items-center justify-between relative shrink-0 w-full">
          <div className="flex flex-col gap-[25px] h-[151px] items-start relative shrink-0">
            <Typography
              variant="headingXL"
              className="text-bg-surface text-[45px] leading-normal whitespace-pre"
            >
              О проекте
            </Typography>
            <div className="text-text-muted text-[20px]">
              <ul className="list-disc">
                {description.map((item, index) => (
                  <li key={index} className="mb-0 ms-[30px]">
                    <span className="leading-[1.3]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-[161px] relative rounded-[30px] shrink-0 w-[452px]">
            <Image
              alt="Логотип проекта"
              className="inset-0 max-w-none object-cover object-center pointer-events-none rounded-[30px] w-full h-full"
              src={logo}
              fill
            />
          </div>
        </div>

        {/* Изображения проекта */}
        <div className="flex flex-col gap-6">
          {/* Основное изображение */}
          <div className="relative h-[981px] w-full">
            <Image
              alt="Основное изображение проекта"
              src={projectImages.main}
              fill
              objectFit="cover"
              className="absolute rounded-[60px]"
            />
            {contentCount && (
              <div className="flex h-[97.307px] items-center justify-center left-1/2 -translate-x-1/2 w-[642.712px]  absolute z-2 bottom-10">
                <div className="flex-none rotate-[2deg] ">
                  <div className="bg-accent-primary flex gap-[10px] h-[75px] items-center justify-center px-[10px] py-0 relative rounded-[60px] w-[640.496px]">
                    <Typography
                      variant="headingS"
                      className="text-white-pure text-[20px] text-center whitespace-nowrap uppercase"
                    >
                      {contentCount}
                    </Typography>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Кнопки До/После */}
          <div className="flex gap-6">
            <div className="relative w-[580px] h-[512px] rounded-[60px]">
              <Image
                alt="До"
                src={projectImages.before}
                fill
                objectFit="cover"
                className="absolute rounded-[60px]"
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
            <div className="relative w-[580px] h-[512px] rounded-[60px]">
              <Image
                alt="После"
                fill
                objectFit="cover"
                className="absolute rounded-[60px]"
                src={projectImages.after}
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

          {/* Счетчик контента */}
        </div>

        {/* Брендинг */}
        {projectImages.branding.length > 0 && (
          <div className="flex flex-col gap-[25px] h-[1044px] items-start relative shrink-0 w-full">
            <Typography
              variant="headingXL"
              className="text-bg-surface text-[45px] leading-normal w-[1181px]"
            >
              Брендинг
            </Typography>
            <div className="h-[961px] relative shrink-0 w-full">
              <div className="grid grid-cols-3 gap-[25px] h-full">
                {projectImages.branding.map((image, index) => (
                  <div key={index} className="relative rounded-[30px] overflow-hidden">
                    <Image
                      alt={`Брендинг ${index + 1}`}
                      className="inset-0 max-w-none object-cover object-center pointer-events-none rounded-[30px] w-full h-full"
                      src={image}
                      fill
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Результат */}
        <div className="flex flex-col gap-[25px] h-[159px] items-start relative shrink-0 w-full">
          <Typography
            variant="headingXL"
            className="text-bg-surface text-[48px] leading-[1.2] w-[1181px]"
          >
            Результат
          </Typography>
          <div className="flex gap-5 items-start relative shrink-0 w-full">
            {/* Точка А */}
            <div className="bg-red-alert relative rounded-full shrink-0 flex p-[5px] items-center flex-grow">
              <div className="bg-white-pure flex h-[66px] items-center justify-center rounded-[60px] px-4">
                <Typography
                  variant="headingS"
                  className="text-dark-deep whitespace-nowrap uppercase text-center"
                >
                  {results.pointA.label}
                </Typography>
              </div>
              <div className="flex-grow">
                <Typography variant="bodyL" className="text-white-pure px-4 text-center">
                  {results.pointA.value}
                </Typography>
              </div>
            </div>

            {/* Точка B */}
            <div className="bg-green-success relative rounded-full shrink-0 flex p-[5px] items-center flex-grow justify-between">
              <div className="flex-grow">
                <Typography
                  variant="bodyL"
                  className="text-white-pure text-[20px] whitespace-nowrap text-center"
                >
                  {results.pointB.value}
                </Typography>
              </div>
              <div className="bg-white-pure flex h-[66px] items-center justify-center rounded-[60px] px-4">
                <Typography
                  variant="headingS"
                  className="text-dark-deep whitespace-nowrap uppercase text-center"
                >
                  {results.pointB.label}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Кнопка "Читать полностью" */}
        <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] h-[63px] ml-0 mt-0 relative w-[356px]">
            <Image
              alt=""
              src="/a464de964aaf9cbedf147baf28d3927518135acb.svg"
              fill
              objectFit="contain"
            />
          </div>
          <div className="[grid-area:1_/_1] ml-[61px] mt-[19px] relative">
            <Typography variant="bodyS" className="text-white-pure text-[16px] whitespace-nowrap">
              Читать полностью
            </Typography>
          </div>
          <div className="[grid-area:1_/_1] ml-[312px] mt-[19px] relative w-[24px] h-[24px]">
            <Image
              alt=""
              src="/2818856b3cb2db7c9d01a7193c53bf0b723a5213.svg"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
