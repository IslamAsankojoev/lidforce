import { Feedback, FAQs, Services, Team, Partners } from '@/src/widgets'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Services />
      <Partners />
      <Team />
      <FAQs />
      <Feedback />
    </div>
  )
}
