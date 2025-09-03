'use client'

import { colors, Typography } from '../shared'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../shadcn/components/ui/carousel'

interface Partner {
  id: number
  name: string
  logo: string
  hasImage?: boolean
}

const partnersData: Partner[] = [
  {
    id: 1,
    name: 'Partner 1',
    logo: '/partners/ayat_umra.png',
    hasImage: true,
  },
  {
    id: 2,
    name: 'Partner 2',
    logo: '/partners/legenda_lux.png',
    hasImage: true,
  },
  {
    id: 3,
    name: 'Partner 3',
    logo: '/partners/mobi_market.png',
    hasImage: true,
  },
  {
    id: 4,
    name: 'Partner 4',
    logo: '/partners/rooz_beauty.png',
    hasImage: true,
  },
  {
    id: 5,
    name: 'Partner 5',
    logo: '/partners/liana_flowers.png',
    hasImage: true,
  },
  {
    id: 6,
    name: 'Partner 6',
    logo: '/partners/encar.png',
    hasImage: true,
  },
  {
    id: 7,
    name: 'Partner 7',
    logo: '/partners/marsel.png',
    hasImage: true,
  },
]

export const Partners = () => {
  return (
    <section
      className="bg-white-pure py-20 overflow-hidden"
      style={{
        borderBottom: `2px solid ${colors['bg-surface']}`,
      }}
    >
      <div className="mx-auto">
        <div className="flex flex-col gap-10">
          {/* Заголовок */}
          <div className="text-center">
            <Typography variant="headingXL" className="text-bg-surface">
              Клиенты
            </Typography>
          </div>

          {/* Логотипы партнеров */}
          <div className="px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {partnersData.map((partner) => (
                  <CarouselItem 
                    key={partner.id} 
                    className="pl-2 md:pl-4 basis-full sm:basis-1/3 lg:basis-1/6"
                  >
                    <div className="bg-white flex items-center justify-center p-4">
                      {partner.hasImage ? (
                        <div className="relative w-full h-24 sm:h-32 lg:h-36">
                          <Image 
                            src={partner.logo} 
                            alt={partner.name} 
                            fill 
                            className="object-contain" 
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-4">
                          <div className="w-full h-full bg-grey-neutral rounded-[30px] flex items-center justify-center">
                            <Typography variant="bodyS" className="text-text-muted">
                              {partner.name}
                            </Typography>
                          </div>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
