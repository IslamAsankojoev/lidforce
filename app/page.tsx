import { Typography } from '@/src/shared'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0b11] text-[#fdfeff]">
      <main className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="text-center">
          <Typography variant="headingXL" className='text-center mb-8'>
            Добро пожаловать в Lid Force
          </Typography>
          <p className="text-lg text-[#cacaca] max-w-2xl mx-auto">
            Ваш надежный партнер в сфере лидогенерации и маркетинга
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[rgba(202,202,202,0.05)] p-6 rounded-2xl border border-[rgba(202,202,202,0.1)]">
            <h3 className="text-[#35b6d3] text-xl font-semibold mb-3">Услуги</h3>
            <p className="text-[#cacaca]">Профессиональные услуги по лидогенерации</p>
          </div>
          <div className="bg-[rgba(202,202,202,0.05)] p-6 rounded-2xl border border-[rgba(202,202,202,0.1)]">
            <h3 className="text-[#35b6d3] text-xl font-semibold mb-3">Кейсы</h3>
            <p className="text-[#cacaca]">Успешные проекты наших клиентов</p>
          </div>
          <div className="bg-[rgba(202,202,202,0.05)] p-6 rounded-2xl border border-[rgba(202,202,202,0.1)]">
            <h3 className="text-[#35b6d3] text-xl font-semibold mb-3">О нас</h3>
            <p className="text-[#cacaca]">Команда профессионалов с многолетним опытом</p>
          </div>
        </div>
      </main>
    </div>
  )
}
