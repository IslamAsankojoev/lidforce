import { Feedback, FAQs, Services, Team } from '@/src/widgets'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Services />
      <Team />
      <FAQs />
      <Feedback />
    </div>
  )
}
