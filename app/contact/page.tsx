import { colors, Instagram, Mail, Telegram, Typography, WhatsApp } from '@/src/shared'
import { Feedback } from '@/src/widgets'
import { MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <div className="mb-20 rounded-b-[60px] bg-white-pure pt-20">
        <div className="container flex justify-center">
          <div className="flex flex-col md:flex-row justify-center gap-6 md:rounded-full md:bg-bg-surface p-4">
            <a
              href="#"
              className="rounded-full bg-white-pure p-2 flex items-center gap-2 px-6 text-dark-deep hover:bg-white-pure/80 transition-colors duration-200 cursor-pointer font-medium"
            >
              <WhatsApp className="size-7" color={colors['dark-deep']} />| +996 509 170 201
            </a>
            <a
              href="#"
              className="rounded-full bg-white-pure p-2 flex items-center gap-2 px-4 text-dark-deep hover:bg-white-pure/80 transition-colors duration-200 cursor-pointer font-medium"
            >
              <Telegram className="size-5" color={colors['dark-deep']} />| Azizbekov_E
            </a>
            <a
              href="#"
              className="rounded-full bg-white-pure p-2 flex items-center gap-2 px-4 text-dark-deep hover:bg-white-pure/80 transition-colors duration-200 cursor-pointer font-medium"
            >
              <Instagram className="size-5" color={colors['dark-deep']} />| lid.force
            </a>
            <a
              href="#"
              className="rounded-full bg-white-pure p-2 flex items-center gap-2 px-4 text-dark-deep hover:bg-white-pure/80 transition-colors duration-200 cursor-pointer font-medium"
            >
              <Mail className="size-5" color={colors['dark-deep']} />| aeldiar34@gmail.com
            </a>
          </div>
        </div>
        <div className="container py-10">
          <div className="flex justify-start mb-4">
            <Typography
              variant="bodyS"
              className="bg-grey-soft/25 p-4 rounded-full flex items-center gap-2"
            >
              <MapPin strokeWidth={1.75} /> Г.Бишкек рандомный адрес если он будет
            </Typography>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '60px' }}>
            <a
              href="https://yandex.com/maps/org/ala_too/157275752761/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
            >
              Ала-тоо
            </a>
            <a
              href="https://yandex.com/maps/10309/bishkek/category/water_park/184106350/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
            >
              Аквапарк в Бишкеке
            </a>
            <iframe
              src="https://yandex.com/map-widget/v1/?from=api-maps&ll=74.605907%2C42.810483&mode=poi&origin=jsapi_2_1_79&poi%5Bpoint%5D=74.600092%2C42.827010&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D157275752761&z=13.7"
              width="100%"
              height="600px"
              frameBorder="1"
              allowFullScreen={true}
              style={{ position: 'relative' }}
            ></iframe>
          </div>
        </div>
      </div>
      <Feedback title="Лучшее что вы можете сделать для своего бизнеса - это позвонить нам!" />
    </>
  )
}
