import { Feedback, FAQs, Services, Team, Partners, Adventages, Reviews, Hero, Cases } from '@/src/widgets'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Adventages />
      <Services />
      <Cases />
      <Partners />
      <Team />
      <Reviews />
      <FAQs />
      <Feedback />
    </div>
  )
}
