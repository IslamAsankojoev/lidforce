import { Typography } from '@/src/shared'
import { Feedback } from '@/src/widgets'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto">
        <div className="text-center">
          <Typography variant="headingXL" className='text-center mb-8'>
            Добро пожаловать в Lid Force
          </Typography>
          <p className="text-lg text-grey-soft max-w-2xl mx-auto">
            Ваш надежный партнер в сфере лидогенерации и маркетинга
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[rgba(202,202,202,0.05)] p-6 rounded-2xl border border-[rgba(202,202,202,0.1)]">
            <h3 className="text-accent-primary text-xl font-semibold mb-3">Услуги</h3>
            <p className="text-grey-soft">Профессиональные услуги по лидогенерации</p>
          </div>
          <div className="bg-[rgba(202,202,202,0.05)] p-6 rounded-2xl border border-[rgba(202,202,202,0.1)]">
            <h3 className="text-accent-primary text-xl font-semibold mb-3">Кейсы</h3>
            <p className="text-grey-soft">Успешные проекты наших клиентов</p>
          </div>
          <div className="bg-[rgba(202,202,202,0.05)] p-6 rounded-2xl border border-[rgba(202,202,202,0.1)]">
            <h3 className="text-accent-primary text-xl font-semibold mb-3">О нас</h3>
            <p className="text-grey-soft">Команда профессионалов с многолетним опытом</p>
          </div>
        </div>
      </main>
      
      <Feedback />
    </div>
  )
}
