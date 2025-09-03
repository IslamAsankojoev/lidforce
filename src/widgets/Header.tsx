'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/src/shadcn/components/ui/sheet'
import { colors, Logo, routes } from '@/src/shared'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname().split('/')[1]
  const isActive = (href: string) => pathname === href.split('/')[1]
  const isContact = pathname === 'contact'
  return (
    <header className="w-full fixed top-0 z-50">
      <div className="container mx-auto px-0 md:px-4">
        <div className="bg-grey-soft/15 backdrop-blur-md md:rounded-full h-16 md:h-20 flex items-center justify-between px-6 sm:px-8 lg:px-10">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-11 rounded-full flex items-center justify-center relative">
                  <Logo color={isContact ? colors['grey-soft'] : colors['white-pure']} />
                </div>
              </div>
            </div>
          </div>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center gap-8">
            {routes.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium text-lg px-3 py-3 transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-accent-primary border-b border-accent-primary'
                    : `${
                        isContact ? 'text-grey-soft' : 'text-white-pure'
                      } hover:text-accent-primary`
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Планшетная навигация */}
          <nav className="hidden md:flex lg:hidden items-center gap-6">
            {routes.slice(0, 3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium text-base px-2 py-2 transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-accent-primary border-b border-accent-primary'
                    : 'text-white-pure hover:text-accent-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Мобильное меню */}
          <div className="lg:hidden flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-white-pure hover:text-accent-primary transition-colors duration-200 cursor-pointer">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-bg-surface border-l border-[rgba(202,202,202,0.15)] w-[280px] px-4"
              >
                <div className="flex flex-col h-full">
                  {/* Заголовок мобильного меню */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-5 h-11 rounded-full flex items-center justify-center relative mt-4">
                      <Logo />
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white-pure hover:text-accent-primary transition-colors duration-200"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Мобильная навигация */}
                  <nav className="flex flex-col space-y-4">
                    {routes.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`font-medium text-lg px-4 py-3 rounded-lg transition-colors duration-200 ${
                          isActive(item.href)
                            ? 'text-accent-primary bg-[rgba(53,182,211,0.1)]'
                            : 'text-white-pure hover:text-accent-primary hover:bg-[rgba(202,202,202,0.1)]'
                        }`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>

                  {/* Дополнительная информация для мобильного меню */}
                  <div className="mt-auto py-8 border-t border-[rgba(202,202,202,0.15)]">
                    <div className="text-white-pure text-sm opacity-70 px-4">
                      <p>Lid Force</p>
                      <p className="mt-1">Ваш надежный партнер</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
