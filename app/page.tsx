import { Feedback, FAQs, Services, Team, Partners, Adventages } from '@/src/widgets'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Services />
      <Adventages />
      <Partners />
      <Team />
      <FAQs />
      <Feedback />
    </div>
  )
}
