'use client'

import clsx from 'clsx'
import { colors, Instagram, Logo, routes, Telegram, WhatsApp } from '../shared'
import { Mail } from 'lucide-react'

export const Footer = () => {
  const windowWidth = window === undefined ? 1024 : window.innerWidth
  return (
    <>
      <footer className={clsx('relative rounded-4xl')}>
        <svg
          width={windowWidth > 1024 ? '1980' : '100%'}
          height={339}
          viewBox="0 0 1980 339"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full bottom-0 left-0"
        >
          <path
            d="M990 0C995.225 0 1000.25 0.852587 1004.95 2.42622C1032.65 11.7139 1057.68 39 1086.9 39H1920C1953.14 39 1980 65.8629 1980 99V279C1980 312.137 1953.14 339 1920 339H59.9999C26.8629 339 0 312.137 0 279V99C0 65.8629 26.8629 39 60 39H893.095C922.319 39 947.346 11.7139 975.055 2.42622C979.75 0.852586 984.775 0 990 0Z"
            fill="#FDFEFF"
          />
        </svg>
        <div className="container absolute bottom-0 left-1/2 -translate-x-1/2 p-20">
          <div className="flex justify-center gap-10">
            <div className="flex flex-col">
              <Logo color={colors['accent-primary']} size={40} />
              <p className="text-accent-primary">Lidforce</p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex justify-center gap-6">
                {routes.map((item) => (
                  <a key={item.name} href={item.href}>
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex justify-center gap-6">
                <a
                  href="#"
                  className="rounded-full bg-accent-primary p-2 flex items-center gap-2 px-4 text-white-pure"
                >
                  <WhatsApp className="size-5" />| +996 509 170 201
                </a>
                <a
                  href="#"
                  className="rounded-full bg-accent-primary p-2 flex items-center gap-2 px-4 text-white-pure"
                >
                  <Telegram className="size-5" />| Azizbekov_E
                </a>
                <a
                  href="#"
                  className="rounded-full bg-accent-primary p-2 flex items-center gap-2 px-4 text-white-pure"
                >
                  <Instagram className="size-5" />| lid.force
                </a>
                <a
                  href="#"
                  className="rounded-full bg-accent-primary p-2 flex items-center gap-2 px-4 text-white-pure"
                >
                  <Mail className="size-5" />| aeldiar34@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
