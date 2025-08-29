'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/src/shadcn/components/ui/sheet'
import { Logo } from '@/src/shared'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/service/' },
  { name: 'Кейсы', href: '/case/' },
  { name: 'О нас', href: '/about/' },
  { name: 'Контакты', href: '/contact/' },
]

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  console.log(pathname)
  const isActive = (href: string) => pathname === href

  return (
    <header className="bg-[#0a0b11] w-full sticky top-0 z-50">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[rgba(202,202,202,0.15)] rounded-[600px] h-16 md:h-20 flex items-center justify-between px-6 sm:px-8 lg:px-10">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-11 rounded-full flex items-center justify-center relative">
                  <Logo />
                </div>
              </div>
            </div>
          </div>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium text-lg px-3 py-3 transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-[#35b6d3] border-b border-[#35b6d3]'
                    : 'text-[#fdfeff] hover:text-[#35b6d3]'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Планшетная навигация */}
          <nav className="hidden md:flex lg:hidden items-center gap-6">
            {navigationItems.slice(0, 3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium text-base px-2 py-2 transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-[#35b6d3] border-b border-[#35b6d3]'
                    : 'text-[#fdfeff] hover:text-[#35b6d3]'
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
                <button className="text-[#fdfeff] hover:text-[#35b6d3] transition-colors duration-200 cursor-pointer">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#0a0b11] border-l border-[rgba(202,202,202,0.15)] w-[280px] px-4"
              >
                <div className="flex flex-col h-full">
                  {/* Заголовок мобильного меню */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-5 h-11 rounded-full flex items-center justify-center relative mt-4">
                      <Logo />
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[#fdfeff] hover:text-[#35b6d3] transition-colors duration-200"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Мобильная навигация */}
                  <nav className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`font-medium text-lg px-4 py-3 rounded-lg transition-colors duration-200 ${
                          isActive(item.href)
                            ? 'text-[#35b6d3] bg-[rgba(53,182,211,0.1)]'
                            : 'text-[#fdfeff] hover:text-[#35b6d3] hover:bg-[rgba(202,202,202,0.1)]'
                        }`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>

                  {/* Дополнительная информация для мобильного меню */}
                  <div className="mt-auto pt-8 border-t border-[rgba(202,202,202,0.15)]">
                    <div className="text-[#fdfeff] text-sm opacity-70 px-4">
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
