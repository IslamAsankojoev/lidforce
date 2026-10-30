import localFont from 'next/font/local'

export const DrukWideCyr = localFont({
  src: [
    {
      path: './../../../public/fonts/DrukWideCyr/drukwidecyr-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
})
