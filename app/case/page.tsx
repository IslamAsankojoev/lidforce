import type { Metadata } from 'next'
import { CasesHero, FAQs, Feedback, Nextprotein, Doscar } from '@/src/widgets'

export const metadata: Metadata = { title: 'Кейсы' }

export default function Case() {
  return (
    <div>
      <CasesHero />
      <Nextprotein />
      <Doscar />
      <FAQs />
      <Feedback />
    </div>
  )
}
