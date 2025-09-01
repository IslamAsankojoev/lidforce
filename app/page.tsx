import { Feedback, FAQs, Services, Team, Partners, Adventages, Reviews } from '@/src/widgets'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Services />
      <Adventages />
      <Partners />
      <Team />
      <Reviews />
      <FAQs />
      <Feedback />
    </div>
  )
}
