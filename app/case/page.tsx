import { CasesHero, CaseItem, FAQs, Feedback } from '@/src/widgets'

// Пример данных для кейса
const caseData = {
  title: "Кейс подбор авто из Кореи DosCar Trade",
  description: [
    "Автомобили из Кореи с гарантией качества",
    "Подбор и доставка в КР"
  ],
  logo: "/3ca4f1a81bb89d0ff0d8da17f84536fad1c59033.png",
  manager: {
    name: "Эльдияр Азизбеков",
    role: "Менеджер кейса"
  },
  links: {
    youtube: "https://nextprotein1.ps.m...",
    instagram: "https://www.instagram.com/..."
  },
  tags: {
    services: ["Таргет", "Продакшн", "Брендинг", "СММ", "Дизайн"],
    niches: ["Авто"]
  },
  projectImages: {
    main: "/026f1038e03572b4cfec5c21df436ceb0720fc06.png",
    before: "/bbf53f2acb4d39328547d333835f5084c1356e38.png",
    after: "/7c1c0fcc46a390026ad52ada5b04c6971a02cb3c.png",
    branding: [
      "/488617365345b8766b89c3a22de75ee1e28c8707.png",
      "/db3a4f384aad1a9c18c4574c5b293629c85ecb26.png",
      "/ccba37b833c86fa9e359c2359f7fe380d325fa0a.png",
      "/6b63b86623d175ba8c8faafd624ecee3c61b6e2b.png",
      "/af8c0e2d4fbc64aee39e907d0c0d7178fd805213.png",
      "/60a6f29a8078304cec9235aa82bfa576f6cc4e9e.png",
      "/cc7251bee57ac35cb19c1a173696f1e17b9567fc.png",
      "/ebcf0fa8201bc0eb00c94e62f95f6c28d544cbfc.png",
      "/bcab8034eeb45a196222d527970c761b6cba7a2f.png"
    ]
  },
  results: {
    pointA: {
      label: "Точка А",
      value: "Доход 400 000 сом в месяц"
    },
    pointB: {
      label: "Точка B", 
      value: "Доход 1 000 000 сом в месяц"
    }
  },
  contentCount: "Выложено более 77 контента"
}

export default function Case() {
  return (
    <div>
      <CasesHero />
      <CaseItem {...caseData} />
      <FAQs />
      <Feedback />
    </div>
  )
}
