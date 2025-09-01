'use client'

import { Typography } from '../shared'
import Image, { StaticImageData } from 'next/image'
import eldiyar from '../../public/teamates/2be8d6e82863dea2538b4fd25df9f063ea36b124.png'
import defaultAvatar from '../../public/teamates/21c5c170c9b40b07a73ea887a150eb15e8a1fd73.svg'
import Lightning from '../../public/Lightning.png'

interface TeamMember {
  id: number
  name: string
  position: string
  image?: StaticImageData | string
  hasImage?: boolean
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Элдияр',
    position: 'Генеральный директор',
    image: eldiyar,
    hasImage: true,
  },
  {
    id: 2,
    name: 'Марсель',
    position: 'Продюсер',
    image: eldiyar,
    hasImage: true,
  },
  {
    id: 3,
    name: 'Ынтымак',
    position: 'Мобилограф',
    image: eldiyar,
    hasImage: true,
  },
  {
    id: 4,
    name: 'Баястан',
    position: 'Таргетолог',
    image: eldiyar,
    hasImage: true,
  },
  {
    id: 5,
    name: 'Торогелди',
    position: 'Таргетолог',
    image: eldiyar,
    hasImage: true,
  },
  {
    id: 6,
    name: 'Бермет',
    position: 'Проект-менеджер',
    image: eldiyar,
    hasImage: true,
  },
  {
    id: 7,
    name: 'Аруужан',
    position: 'Контент маркетолог',
    image: eldiyar,
    hasImage: true,
  },
  {
    id: 8,
    name: 'Алтынай',
    position: 'Проект-менеджер',
    image: eldiyar,
    hasImage: true,
  },
]

export const Team = () => {
  return (
    <section className="bg-white-pure py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Заголовок */}
          <div className="flex flex-col gap-6">
            <Typography variant="headingXL" className="text-bg-surface">
              Пару слов туда сюда о нас
            </Typography>
            <Typography variant="bodyL" className="text-text-muted max-w-4xl">
              Мы — команда креативных и амбициозных специалистов в сфере маркетинга. Помогаем
              брендам расти, выделяться и выстраивать сильную связь со своей аудиторией. Работаем с
              бизнесами разного масштаба: от стартапов до крупных компаний, предлагая индивидуальные
              стратегии, современные решения и измеримый результат.
            </Typography>
          </div>

          {/* Карточки команды */}
          <div className="relative">
            {/* Первый ряд карточек */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {teamData.slice(0, 1).map((member) => (
                <div
                  key={member.id}
                  className="bg-grey-neutral rounded-[30px] h-[432px] relative overflow-hidden border-6 border-white-pure"
                >
                  {member.hasImage ? (
                    <div className="absolute inset-0">
                      <Image
                        src={member.image as StaticImageData}
                        alt={member.name}
                        fill
                        className="object-cover rounded-[30px]"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[150px] h-[146px] relative">
                        <Image
                          src={defaultAvatar}
                          alt="Default avatar"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Информация о члене команды */}
                  <div className="absolute bottom-5 left-2.5 right-2.5">
                    <div className="flex flex-col gap-1 items-start">
                      <div className="bg-white-pure rounded-[600px] px-5 py-2 flex items-center justify-center">
                        <Typography variant="bodyS" className="text-bg-surface">
                          {member.name}
                        </Typography>
                      </div>
                      <div className="bg-[rgba(202,202,202,0.15)] backdrop-blur-[5px] rounded-[600px] px-5 py-2 flex items-center justify-center border border-white-pure">
                        <Typography variant="bodyS" className="text-white-pure italic">
                          {member.position}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Второй ряд карточек */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
              {teamData.slice(1, 4).map((member) => (
                <div
                  key={member.id}
                  className="bg-grey-neutral rounded-[30px] h-[432px] relative overflow-hidden border-6 border-white-pure"
                >
                  {member.hasImage ? (
                    <div className="absolute inset-0">
                      <Image
                        src={member.image as StaticImageData}
                        alt={member.name}
                        fill
                        className="object-cover rounded-[30px]"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[150px] h-[146px] relative">
                        <Image
                          src={defaultAvatar}
                          alt="Default avatar"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Информация о члене команды */}
                  <div className="absolute bottom-5 left-2.5 right-2.5">
                    <div className="flex flex-col gap-1 items-end">
                      <div className="bg-white-pure rounded-[600px] px-5 py-2 flex items-center justify-center">
                        <Typography variant="bodyS" className="text-bg-surface">
                          {member.name}
                        </Typography>
                      </div>
                      <div className="bg-[rgba(202,202,202,0.15)] backdrop-blur-[5px] rounded-[600px] px-5 py-2 flex items-center justify-center border border-white-pure">
                        <Typography variant="bodyS" className="text-white-pure italic">
                          {member.position}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Третий ряд карточек */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center
          "
          >
            {teamData.slice(4, 8).map((member) => (
              <div
                key={member.id}
                className="bg-grey-neutral rounded-[30px] h-[432px] relative overflow-hidden border-6 border-white-pure"
              >
                {member.hasImage ? (
                  <div className="absolute inset-0">
                    <Image
                      src={member.image as StaticImageData}
                      alt={member.name}
                      fill
                      className="object-cover rounded-[30px]"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[150px] h-[146px] relative">
                      <Image
                        src={defaultAvatar}
                        alt="Default avatar"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Информация о члене команды */}
                <div className="absolute bottom-5 left-2.5 right-2.5">
                  <div className="flex flex-col gap-1 items-end">
                    <div className="bg-white-pure rounded-[600px] px-5 py-2 flex items-center justify-center">
                      <Typography variant="bodyS" className="text-bg-surface">
                        {member.name}
                      </Typography>
                    </div>
                    <div className="bg-[rgba(202,202,202,0.15)] backdrop-blur-[5px] rounded-[600px] px-5 py-2 flex items-center justify-center border border-white-pure">
                      <Typography variant="bodyS" className="text-white-pure italic">
                        {member.position}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Нижний заголовок */}
          <div className="text-center">
            <Typography variant="headingXL" className="text-bg-surface">
              Одна команда для решения
            </Typography>
            <div className="flex items-center gap-2 justify-center">
              <Image src={Lightning} alt="arrow right" width={60} height={60} />
              <Typography variant="headingXL" className="text-bg-surface">
                всех задач
              </Typography>
              <Image
                src={Lightning}
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
