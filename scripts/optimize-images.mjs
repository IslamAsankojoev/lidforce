// Конвертирует PNG/JPG из public/ в WebP, ограничивает ширину, переписывает ссылки в app/ и src/
// и удаляет исходники. Без флага --write только печатает, что будет сделано.
//   node scripts/optimize-images.mjs           # пробный прогон
//   node scripts/optimize-images.mjs --write   # применить
import { existsSync, readdirSync, readFileSync, statSync, unlinkSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import sharp from 'sharp'

const WRITE = process.argv.includes('--write')
const QUALITY = 80
const MAX_WIDTH = 1920
// Картинки, которые на сайте показываются заметно меньше MAX_WIDTH.
const WIDTH_OVERRIDES = {
  '/teamates/2be8d6e82863dea2538b4fd25df9f063ea36b124.png': 1000,
}

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  )
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const kb = (n) => `${Math.round(n / 1024)} KB`

const codeFiles = ['app', 'src'].flatMap(walk).filter((f) => /\.(tsx?|css)$/.test(f))
let before = 0
let after = 0

for (const file of walk('public').filter((f) => /\.(png|jpe?g)$/i.test(f))) {
  const url = '/' + relative('public', file).split(sep).join('/')
  const newUrl = url.replace(/\.(png|jpe?g)$/i, '.webp')
  const target = join('public', newUrl)
  if (existsSync(target)) {
    console.error(`ПРОПУСК ${url}: ${newUrl} уже существует`)
    continue
  }

  const width = WIDTH_OVERRIDES[url] ?? MAX_WIDTH
  const output = await sharp(file)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer()
  const size = statSync(file).size
  if (output.length >= size) {
    console.log(`оставляю ${url}: WebP не меньше оригинала`)
    continue
  }
  before += size
  after += output.length
  console.log(`${url} ${kb(size)} -> ${kb(output.length)}`)
  if (!WRITE) continue

  writeFileSync(target, output)
  unlinkSync(file)
  // Меняем путь только внутри кавычек, чтобы '/a/1.png' не задел '/b/a/1.png'.
  const pattern = new RegExp(`(['"\`])${escape(url)}(?=['"\`])`, 'g')
  for (const codeFile of codeFiles) {
    const source = readFileSync(codeFile, 'utf8')
    const updated = source.replace(pattern, `$1${newUrl}`)
    if (updated !== source) writeFileSync(codeFile, updated)
  }
}

console.log(`\nИТОГО ${kb(before)} -> ${kb(after)}${WRITE ? '' : ' (пробный прогон, ничего не изменено)'}`)
