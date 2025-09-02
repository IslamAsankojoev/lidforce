import { Feedback, FAQs, Services, Team, Partners, Adventages, Reviews, Hero } from '@/src/widgets'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Adventages />
      <Services />
      <Partners />
      <Team />
      <Reviews />
      <FAQs />
      <Feedback />
    </div>
  )
}
