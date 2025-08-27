import localFont from 'next/font/local'

export const DurkCyr = localFont({
  src: [
    {
      path: './../../../public/fonts/DrukCyr/DrukCyr-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/DrukCyr/DrukCyr-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: './../../../public/fonts/DrukCyr/DrukCyr-Heavy.woff2',
      weight: '800',
      style: 'extrabold',
    },
  ],
})
