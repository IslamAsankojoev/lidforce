'use client'

import Image from 'next/image'
import { colors, Instagram, Logo, routes, Telegram, Typography, WhatsApp } from '../shared'
import { Mail } from 'lucide-react'

export const Footer = () => {
  return (
    <>
      <footer className="relative rounded-4xl bg-white-pure">
        <div className="absolute top-0 left-1/2 -translate-y-full -translate-x-1/2">
          <div className="relative w-40 h-14">
            <Image src="/footer-boob.webp" alt="Footer" fill />
          </div>
        </div>
        <div className="container p-10 md:p-20">
          <div className="flex justify-center gap-10 md:flex-row flex-col items-center">
            <div className="flex flex-col">
              <Logo color={colors['accent-primary']} size={53} />
              <p className="text-accent-primary text-sm">Lidforce</p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap items-center">
                {routes.map((item) => (
                  <a key={item.name} href={item.href}>
                    <Typography variant="button">{item.name}</Typography>
                  </a>
                ))}
              </div>
              <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap items-center">
                <a
                  href="#"
                  className="rounded-full bg-accent-primary p-2 flex items-center gap-2 px-6 text-white-pure hover:bg-accent-primary/80 transition-colors duration-200 cursor-pointer font-medium"
                >
                  <WhatsApp className="size-7" />| +996 509 170 201
                </a>
                <a
                  href="#"
                  className="rounded-full bg-accent-primary p-2 flex items-center gap-2 px-4 text-white-pure hover:bg-accent-primary/80 transition-colors duration-200 cursor-pointer font-medium"
                >
                  <Telegram className="size-5" />| Azizbekov_E
                </a>
                <a
                  href="#"
                  className="rounded-full bg-accent-primary p-2 flex items-center gap-2 px-4 text-white-pure hover:bg-accent-primary/80 transition-colors duration-200 cursor-pointer font-medium"
                >
                  <Instagram className="size-5" />| lid.force
                </a>
                <a
                  href="#"
                  className="rounded-full bg-accent-primary p-2 flex items-center gap-2 px-4 text-white-pure hover:bg-accent-primary/80 transition-colors duration-200 cursor-pointer font-medium"
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
