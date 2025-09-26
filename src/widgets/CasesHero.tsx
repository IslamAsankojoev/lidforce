import { Typography } from '@/src/shared/ui/Typography'
import Image from 'next/image'

const cases = [
  {
    id: 1,
    title: 'Elit House',
    image: '/cases/elit-house.png',
  },
  {
    id: 2,
    title: 'Elit Invest',
    image: '/cases/elit-invest.png',
  },
  {
    id: 3,
    title: 'Ayat',
    image: '/cases/ayat.png',
  },
  {
    id: 4,
    title: 'Legenda Lux',
    image: '/cases/legenda-lux.png',
  },
  {
    id: 5,
    title: 'Mobi Market',
    image: '/cases/mobi-market.png',
  },
  {
    id: 6,
    title: 'Rooz Beauty',
    image: '/cases/rooz-beauty.png',
  },
  {
    id: 7,
    title: 'Liana Flowers',
    image: '/cases/liana-flowers.png',
  },
  {
    id: 8,
    title: 'Encar',
    image: '/cases/encar.png',
  },
  {
    id: 9,
    title: 'Marsel',
    image: '/cases/marsel.png',
  },
  {
    id: 10,
    title: 'Liana Flowers',
    image: '/cases/liana-flowers.png',
  },
  {
    id: 11,
    title: 'Doscar trade',
    image: '/cases/doscar-trade.png',
  },
  {
    id: 12,
    title: 'Next Protein',
    image: '/cases/next-protein.png',
  },
  {
    id: 13,
    title: 'Obraz KG',
    image: '/cases/obraz-kg.png',
  },
  {
    id: 14,
    title: 'Ожак кебаб',
    image: '/cases/ojak-kebab.png',
  },
  {
    id: 15,
    title: 'Sapar umra',
    image: '/cases/sapar-umra.png',
  },
  {
    id: 16,
    title: 'Sapat Auto',
    image: '/cases/sapat-auto.png',
  },
]

export const CasesHero = () => {
  return (
    <div className="bg-white-pure relative w-full h-[968px] overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute h-[968px] left-1/2 overflow-hidden -top-[78px] -translate-x-1/2 w-[1980px] max-w-none">
        {/* Основной фон */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            alt="Фоновый градиент"
            src="/248565ced2a490b936cd1ae721d0659475ed9dab.svg"
            fill
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>

        {/* Декоративные эллипсы */}
        <div
          className="absolute h-[308px] -translate-x-1/2 -translate-y-1/2 w-[1091px]"
          style={{ top: 'calc(50% + 66px)', left: 'calc(50% - 0.5px)' }}
        >
          <div className="absolute inset-[-113.64%_-32.08%]">
            <Image
              alt="Декоративный элемент"
              fill
              objectFit="cover"
              className="absolute inset-0"
              src="/da0e6405f56e0506070068eade171d326a961a6a.svg"
            />
          </div>
        </div>

        {/* Основной контент */}
        <div className="flex flex-col gap-10 h-[690px] items-start container pt-56">
          {/* Заголовок */}
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <div className="font-bold leading-none relative shrink-0 text-white-pure text-[48px] whitespace-nowrap tracking-[0.48px]">
              <Typography
                variant="headingXL"
                className="text-white-pure text-[48px] leading-[1.2] whitespace-pre"
              >
                Кейсы
              </Typography>
            </div>
          </div>

          {/* Галерея кейсов */}
          <div className="h-[512px] relative overflow-hidden rounded-[60px] shrink-0 w-full">
            <div className="overflow-hidden rounded-[60px] h-full">
              <div className="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 gap-4 h-full justify-center p-10">
                {cases.map((caseItem) => (
                  <div key={caseItem.id} className="relative z-2 w-auto h-[130px]">
                    <Image src={caseItem.image} alt={caseItem.title} fill objectFit="contain" />
                  </div>
                ))}
              </div>
              {/* Декоративные элементы по бокам */}
              <div
                className="absolute flex h-[438.65px] items-center justify-center -translate-x-1/2 -translate-y-1/2 w-[461.248px]"
                style={{ top: 'calc(50% - 201.671px)', left: 'calc(50% - 475.37px)' }}
              >
                <div className="flex-none rotate-[332.736deg]">
                  <div className="h-[307.815px] relative w-[360.278px]">
                    <div className="absolute inset-[-97.46%_-83.27%]">
                      <Image
                        alt="Декоративный элемент слева"
                        fill
                        objectFit="cover"
                        className="absolute inset-0"
                        src="/8b90a531507d497903ada0618ee84c6641cfac5e.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute flex h-[438.65px] items-center justify-center -translate-x-1/2 -translate-y-1/2 w-[461.248px]"
                style={{ top: 'calc(50% - 201.671px)', left: 'calc(50% + 486.63px)' }}
              >
                <div className="flex-none rotate-[207.264deg] scale-y-[-100%]">
                  <div className="h-[307.815px] relative w-[360.278px]">
                    <div className="absolute inset-[-97.46%_-83.27%]">
                      <Image
                        alt="Декоративный элемент справа"
                        fill
                        objectFit="cover"
                        className="absolute inset-0"
                        src="/a6985cc3aacc16e796b3f298722e5c6b9af8b497.svg"
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
  )
}
