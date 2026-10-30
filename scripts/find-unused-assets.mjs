// Печатает файлы из public/, на которые нет ссылок в app/ и src/.
// public/fonts пропускаем: шрифты подключаются относительным путём в src/shared/constants/fonts.ts.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  )

const code = ['app', 'src']
  .flatMap(walk)
  .filter((f) => /\.(tsx?|css)$/.test(f))
  .map((f) => readFileSync(f, 'utf8'))
  .join('\n')

let total = 0
for (const file of walk('public')) {
  const url = '/' + relative('public', file).split(sep).join('/')
  if (url.startsWith('/fonts/')) continue
  if (code.includes(url)) continue
  const size = statSync(file).size
  total += size
  console.log(`${String(Math.round(size / 1024)).padStart(6)} KB  public${url}`)
}
console.log(`TOTAL ${(total / 1024 / 1024).toFixed(1)} MB`)
