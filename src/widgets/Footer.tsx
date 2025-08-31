import clsx from 'clsx'
import { Logo } from '../shared'

const navigationItems = [
  {
    name: 'Главная',
    href: '/',
  },
  {
    name: 'Услуги',
    href: '/services',
  },
  {
    name: 'Кейсы',
    href: '/cases',
  },
  {
    name: 'О нас',
    href: '/about',
  },
  {
    name: 'Контакты',
    href: '/contacts',
  },
]

export const Footer = () => {
  return (
    <footer className={clsx('bg-white-pure relative p-20 rounded-4xl')}>
      <div className="container">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Logo color="red" />
            <p className="text-grey-soft">
              Ваш надежный партнер в сфере лидогенерации и маркетинга
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              {navigationItems.map((item) => (
                <a key={item.name} href={item.href} className="text-grey-soft">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
