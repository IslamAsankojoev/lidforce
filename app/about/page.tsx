import type { Metadata } from 'next'
import { colors, Logo, Typography } from '@/src/shared'
import { AboutHero, FAQs, Feedback, NineSteps, Team } from '@/src/widgets'

export const metadata: Metadata = { title: 'О нас' }

export default function About() {
  return (
    <>
      <AboutHero />
      <div className="container pb-10">
        <div className="flex flex-col md:flex-row gap-10 py-10 md:p-10 items-center">
          <div className="flex flex-col items-center">
            <Logo color={colors['accent-primary']} size={98} />
            <Typography variant="bodyL" className="text-accent-primary">
              Lidforce
            </Typography>
          </div>
          <Typography variant="bodyS" className="text-white-pure p-4">
            LidForce — это команда людей, которые искренне любят своё дело и верят в силу хорошего
            маркетинга. Мы не просто продвигаем бренды, а создаём настоящие истории, которые находят
            отклик в сердцах клиентов. Каждый проект для нас — возможность помочь бизнесу расти и
            раскрыть свой потенциал. Вместе мы сделаем ваш бренд по-настоящему живым и
            запоминающимся.
          </Typography>
        </div>
      </div>
      <Team />
      <NineSteps />
      <FAQs />
      <Feedback />
    </>
  )
}
