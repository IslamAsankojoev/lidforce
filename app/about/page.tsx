'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { colors, Logo, Typography } from '@/src/shared'
import { FAQs, Feedback, NineSteps, Team } from '@/src/widgets'

export default function About() {
  return (
    <>
      <div className="mb-20 rounded-[60px] relative w-full min-h-screen">
        <Image src="/teamates/team.jpg" alt="About" fill objectFit="cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 container flex flex-col justify-end pb-20"
        >
          <Typography variant="headingXL" className="text-white-pure leading-12 mb-6">
            Одна команда <br /> для решения всех задач
          </Typography>
          <Typography variant="bodyL" className="text-white-pure">
            Наша миссия - мы стремимся быть надежной опорой для бизнеса нового поколения на пути к
            успеху
          </Typography>
        </motion.div>
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 p-10 items-center">
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
