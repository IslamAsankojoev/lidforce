'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Typography } from '../shared'
import clsx from 'clsx'

const schema = z.object({
  fullName: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  goal: z.array(z.string()),
})

const services = [
  { id: 1, name: 'СЕО', active: true },
  { id: 2, name: 'Сайт', active: false },
  { id: 3, name: 'Брендинг', active: false },
  { id: 4, name: 'Лого', active: false },
  { id: 5, name: 'Соц.сети', active: false },
  { id: 6, name: 'Боты', active: false },
  { id: 7, name: 'Съемки', active: false },
  { id: 8, name: 'Трафик', active: false },
]

interface FeedbackProps {
  title?: string
}

export const Feedback = ({ title }: FeedbackProps) => {
  const { register, handleSubmit, setValue, trigger, watch } = useForm<z.infer<typeof schema>>({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      goal: [],
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log('Form submitted:', data)
  })

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Текстовый блок */}
          <div className="flex flex-col gap-6">
            <Typography variant="headingXL" className="text-white-pure">
              {title || 'Напоминаем что у нас ты можешь заказать:'}
            </Typography>

            <p className="font-medium text-white-pure text-lg leading-relaxed">
              Оставьте заявку — мы свяжемся с вами, обсудим цели и предложим эффективное решение для
              вашего бизнеса.
            </p>

            {/* Чипы услуг */}
            <div className="flex flex-wrap gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={clsx(
                    'md:h-10 h-8 px-6 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border-white-pure border',
                    watch('goal').includes(service.name)
                      ? 'bg-[#fdfeff] text-[#606672]'
                      : 'bg-[rgba(202,202,202,0.15)]   text-white-pure hover:bg-[rgba(202,202,202,0.25)]',
                  )}
                  onClick={() => {
                    if (watch('goal').includes(service.name)) {
                      setValue(
                        'goal',
                        watch('goal').filter((goal) => goal !== service.name),
                      )
                    } else {
                      setValue('goal', [...watch('goal'), service.name])
                    }
                  }}
                  onBlur={() => trigger('goal')}
                >
                  <span className="text-base font-normal whitespace-nowrap">{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Форма заявки */}
          <div className="flex flex-col gap-6 items-end">
            <form onSubmit={onSubmit} className="w-full">
              <div className="flex flex-col lg:flex-row gap-6 mb-6">
                {/* ФИО */}
                <div className="flex-grow-1">
                  <div className="relative h-[55px] px-6 rounded-full border border-[#fdfeff] flex items-center">
                    <input
                      type="text"
                      placeholder="Ф.И.О"
                      className="w-full bg-transparent text-[#fdfeff] placeholder-[#d0d4df] text-base outline-none"
                      {...register('fullName')}
                    />
                  </div>
                </div>

                {/* Телефон */}
                <div className="flex-grow-1">
                  <div className="relative h-[55px] px-6 rounded-full border border-[#fdfeff] flex items-center">
                    <span className="text-[#fdfeff] text-base mr-2">+996</span>
                    <input
                      type="tel"
                      placeholder="Номер телефона"
                      className="flex-1 bg-transparent text-[#fdfeff] placeholder-[#d0d4df] text-base outline-none"
                      {...register('phone')}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex-grow-1">
                  <div className="relative h-[55px] px-6 rounded-full border border-[#fdfeff] flex items-center">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-transparent text-[#fdfeff] placeholder-[#d0d4df] text-base outline-none"
                      {...register('email')}
                    />
                  </div>
                </div>
              </div>

              {/* Кнопка отправки */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-accent-primary h-[63px] py-5 rounded-full flex items-center justify-center hover:bg-accent-primary/80 transition-colors duration-200 w-full md:w-auto border border-white-pure px-20 cursor-pointer"
                >
                  <span className="font-medium text-[#fdfeff] text-lg">Отправить заявку</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
