'use client'

import { colors, Typography } from '../shared'
import Image, { StaticImageData } from 'next/image'
import partner1 from '../../public/partners/ayat_umra.png'
import partner2 from '../../public/partners/legenda_lux.png'
import partner3 from '../../public/partners/mobi_market.png'
import partner4 from '../../public/partners/rooz_beauty.png'
import partner5 from '../../public/partners/liana_flowers.png'
import partner6 from '../../public/partners/encar.png'
import partner7 from '../../public/partners/marsel.png'

interface Partner {
  id: number
  name: string
  logo: StaticImageData | string
  hasImage?: boolean
}

const partnersData: Partner[] = [
  {
    id: 1,
    name: 'Partner 1',
    logo: partner1,
    hasImage: true,
  },
  {
    id: 2,
    name: 'Partner 2',
    logo: partner2,
    hasImage: true,
  },
  {
    id: 3,
    name: 'Partner 3',
    logo: partner3,
    hasImage: true,
  },
  {
    id: 4,
    name: 'Partner 4',
    logo: partner4,
    hasImage: true,
  },
  {
    id: 5,
    name: 'Partner 5',
    logo: partner5,
    hasImage: true,
  },
  {
    id: 6,
    name: 'Partner 6',
    logo: partner6,
    hasImage: true,
  },
  {
    id: 7,
    name: 'Partner 7',
    logo: partner7,
    hasImage: true,
  },
]

export const Partners = () => {
  return (
    <section
      className="bg-white-pure py-20"
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
          <div className="flex gap-10 items-center justify-center">
            {partnersData.map((partner) => (
              <div key={partner.id} className="bg-white flex items-center justify-center">
                {partner.hasImage ? (
                  <div className="relative" style={{ width: '200px', height: '150px' }}>
                    <Image
                      src={partner.logo as StaticImageData}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
