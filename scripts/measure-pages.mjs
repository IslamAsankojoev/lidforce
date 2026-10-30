// Вес картинок на каждой странице. Запускать после `npm run build`.
import { readFileSync, statSync } from 'node:fs'

const pages = ['index', 'about/index', 'service/index', 'case/index', 'case/nextprotein/index', 'contact/index']
for (const page of pages) {
  const html = readFileSync(`out/${page}.html`, 'utf8')
  const srcs = new Set(
    [...html.matchAll(/src="(\/[^"]+?\.(?:png|jpe?g|webp|avif|svg))"/g)]
      .map((m) => decodeURIComponent(m[1].replaceAll('&amp;', '&')))
      .filter((s) => !s.startsWith('/_next/')),
  )
  let total = 0
  for (const src of srcs) {
    try { total += statSync(`public${src}`).size } catch { console.warn(`  нет файла: public${src}`) }
  }
  console.log(`${page.padEnd(24)} ${String(Math.round(total / 1024)).padStart(6)} KB  (${srcs.size} картинок)`)
}
