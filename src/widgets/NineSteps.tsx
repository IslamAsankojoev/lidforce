'use client'

import { Typography } from '../shared/ui/Typography'

interface StepCardProps {
  number: number
  title: string
  description?: string
  isHighlighted?: boolean
}

const StepCard = ({ number, title, description, isHighlighted = false }: StepCardProps) => {
  return (
    <div 
      className={`
        flex flex-col h-[200px] items-start justify-between px-5 py-[30px] 
        relative rounded-[30px] shrink-0 w-full sm:w-[300px]
        ${isHighlighted 
          ? 'bg-grey-soft/15' 
          : 'border border-grey-neutral'
        }
      `}
    >
      <div className="min-w-full relative shrink-0" style={{ width: "min-content" }}>
        <Typography variant="captionM" className="text-bg-surface leading-normal">
          {title}
        </Typography>
        {description && (
          <Typography variant="captionM" className="text-bg-surface leading-normal">
            {description}
          </Typography>
        )}
      </div>
      
      <div className="bg-accent-primary flex flex-col gap-2.5 items-center justify-center p-[10px] relative rounded-[60px] shrink-0 size-[60px]">
        <Typography 
          variant="headingS" 
          className="text-white-pure text-center uppercase leading-none"
        >
          {number}
        </Typography>
      </div>
    </div>
  )
}

export const NineSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Вы оставляете заявку",
      isHighlighted: true
    },
    {
      number: 2,
      title: "Мы проводим брифинг",
      description: "и определяем потребности"
    },
    {
      number: 3,
      title: "Готовим план работы",
      description: "и определяем сроки",
      isHighlighted: true
    },
    {
      number: 4,
      title: "Подписываем договор",
      isHighlighted: true
    },
    {
      number: 5,
      title: "Анализируем конкурентов: сайты, дизайн, рекламу",
      isHighlighted: true
    },
    {
      number: 6,
      title: "Согласовываем материалы, необходимые для дальнейшей работы"
    },
    {
      number: 7,
      title: "Запускаем рекламу",
      description: "и соц.сети, сдаем готовые материалы, настраиваем аналитику"
    },
    {
      number: 8,
      title: "Улучшаем результаты",
      description: "и тестируем новые форматы и офферы",
      isHighlighted: true
    },
    {
      number: 9,
      title: "Ведем еженедельную онлайн-отчетность",
      isHighlighted: true
    }
  ]

  return (
    <div className="bg-white-pure flex flex-col gap-2.5 items-center justify-center px-4 md:px-[400px] py-20 relative size-full">
      <div className="flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
        <div className="flex flex-col gap-[25px] items-start justify-start relative shrink-0 w-full">
          <Typography 
            variant="headingXL" 
            className="text-bg-surface text-nowrap leading-none"
          >
            9 шагов работы
          </Typography>
        </div>
        
        <div className="content-center flex flex-wrap gap-5 items-center justify-center relative shrink-0 w-full max-w-[1180px]">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              isHighlighted={step.isHighlighted}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
