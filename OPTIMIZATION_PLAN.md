# План оптимизации Lidforce

Инструкция для исполнителя (в том числе быстрой и недорогой модели ИИ). Задачи идут по порядку: сначала самые выгодные и безопасные. Каждая задача независима, после неё сборка должна проходить.

Задачи 1–6 и 8 (скрипты, команды проверки, сборка) прогнаны на копии проекта 30.10.2026, цифры в плане взяты оттуда.

## Правила для исполнителя

1. Делай **одну задачу за раз**, по порядку. После выполнения отметь её `[x]` в этом файле.
2. После каждой задачи:
   - `npm run build` должна пройти **без errors и warnings**;
   - сделай отдельный коммит с сообщением из задачи;
   - **не пушь**: push в `main` сразу выкатывает прод на Vercel, пушит владелец.
3. **Не меняй** дизайн, тексты, отступы и анимации, если задача прямо этого не требует. Не обновляй мажорные версии (Next 16, React 20).
4. Задачи с меткой **[решение владельца]** не выполняй, пока владелец не ответит.
5. Если сборка падает и за 2 попытки не чинится, выполни `git stash -u`, запиши проблему в раздел «Журнал» в конце файла и переходи к следующей задаче.
6. **Не читай целиком** (дорого и бесполезно): `package-lock.json`, `docs/`, `openapi-specs/`, бинарные файлы в `public/` и `src/shared/icons/`, `out/`, `.next/`, `node_modules/`.
7. Стиль кода: Tailwind, компоненты `Typography` из `src/shared`, структура FSD (подробно в `.cursor/rules/lidforce.mdc`). Без точек с запятой, одинарные кавычки, как в остальном коде.

Метки сложности: **[простая]** справится любая модель; **[средняя]** лучше Sonnet или проверка человеком; **[решение владельца]** нужно согласие владельца.

## Карта проекта

- Next.js 15.5 (App Router), React 19, Tailwind 4, `motion`, shadcn/ui (Radix + embla).
- `next.config.ts`: `output: 'export'`. Сайт полностью статический, собирается в `out/`. Оптимизации картинок от Next **нет** (`images.unoptimized: true`), поэтому картинки отдаются ровно в том размере, в каком лежат в `public/`.
- Деплой: Vercel, проект подключён к GitHub, push в `main` выкатывает прод.
- `app/`: страницы `/`, `/about`, `/service`, `/case`, `/case/nextprotein`, `/contact`.
- `src/widgets/`: секции страниц. `src/shared/`: `ui/Typography`, `ui/CircularText`, `constants` (шрифты, цвета, роуты), `hooks`, `icons`. `src/shadcn/`: компоненты shadcn.
- Команды: `npm run dev` (порт 3003), `npm run build`, `npm run lint`.

## Замер (до и после)

Скрипт `scripts/measure-pages.mjs` создаётся в задаче 0. Исходные цифры:

| Метрика | Было | Цель после задач 1–5 |
|---|---|---|
| `public/` | 43 МБ | ~4 МБ |
| `src/shared/icons/` | 16 МБ | < 50 КБ |
| Картинки на главной | 8 976 КБ | ~1 200 КБ |
| Картинки на `/case` | 16 023 КБ | ~1 300 КБ |
| Картинки на `/case/nextprotein` | 13 654 КБ | ~950 КБ |
| Картинки на `/about` | 6 437 КБ | ~600 КБ |
| Шрифты в preload на каждой странице | 382 КБ (8 файлов) | ~143 КБ (4 файла) |
| First Load JS главной | 209 КБ | ~201 КБ после задачи 8, меньше после задачи 14 |

---

## Задача 0. Подготовка и скрипт замера [простая]

- [x] Выполни `npm ci` и `npm run build`, убедись, что сборка проходит.
- [x] Создай `scripts/measure-pages.mjs`:

```js
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
```

- [x] Выполни `node scripts/measure-pages.mjs`. Цифры должны примерно совпасть с колонкой «Было».
- Коммит: `chore: add page weight measurement script`

## Задача 1. Удалить неиспользуемые файлы из `public/` [простая]

В `public/` лежат 118 файлов (7,8 МБ), на которые нигде нет ссылок, в том числе PNG на 6 МБ и стандартные SVG от create-next-app.

- [x] Создай `scripts/find-unused-assets.mjs`:

```js
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
```

- [x] Выполни `node scripts/find-unused-assets.mjs`. Ожидается 118 файлов и `TOTAL 7.8 MB`. Если цифры сильно отличаются, остановись и запиши в «Журнал».
- [x] Удали эти файлы:

```bash
node scripts/find-unused-assets.mjs | grep "KB  public" | awk '{print $3}' | xargs rm
```

- [x] `npm run build`, затем `node scripts/measure-pages.mjs`. В выводе не должно быть строк «нет файла».
- Коммит: `chore: remove unused assets from public`

## Задача 2. Удалить мусор из `src/shared/icons/` [простая]

Там 72 файла с именами-хешами (`*.svg`, `*.png`, всего 16 МБ). Их никто не импортирует, используются только `*.tsx` и `index.ts`.

- [x] Проверь, что импортов нет. Команда должна ничего не вывести:

```bash
grep -rnE "icons/[0-9a-f]{40}" app src --include='*.ts' --include='*.tsx' --include='*.css'
```

- [x] Удали файлы:

```bash
find src/shared/icons -type f -regex '.*/[0-9a-f]\{40\}\.\(svg\|png\)' -delete
```

- [x] В `src/shared/icons/` должны остаться только `*.tsx` и `index.ts`. Выполни `npm run build`.
- Коммит: `chore: remove unused icon exports from src/shared/icons`

## Задача 3. Удалить мёртвый код и зависимости [простая]

Всё, что ниже, нигде не используется (проверено):

- `tailwind.config.ts`: Tailwind 4 читает его только через директиву `@config`, а её нет. Проверено, что CSS после удаления совпадает байт в байт.
- `test-colors.tsx`: пустой файл.
- `src/shared/constants/colors.css`: нигде не импортируется. Цвета заданы в `app/globals.css`.
- `src/widgets/CaseItem.tsx`: не используется, есть только экспорт в `src/widgets/index.ts`.
- Шрифт `DurkCyr` в `src/shared/constants/fonts.ts` и папка `public/fonts/DrukCyr/`: шрифт объявлен, но нигде не применяется.
- npm-пакеты `zod` и `@hookform/resolvers`: нигде не импортируются.

Шаги:

- [x] Удали `tailwind.config.ts`, `test-colors.tsx`, `src/shared/constants/colors.css`, `src/widgets/CaseItem.tsx`.
- [x] В `src/widgets/index.ts` удали строку `export * from "./CaseItem";`.
- [x] В `src/shared/constants/fonts.ts` удали весь блок `export const DurkCyr = localFont({...})`. Затем удали папку `public/fonts/DrukCyr/`.
- [x] Выполни `npm uninstall zod @hookform/resolvers`.
- [x] Проверь, что команда ничего не выводит: `grep -rn "DurkCyr\|CaseItem\|from 'zod'\|colors.css" app src`
- [x] `npm run build`
- Коммит: `chore: remove dead code and unused dependencies`

## Задача 4. Перевести картинки в WebP [простая]

Это главный выигрыш. Например, фото команды весит 5,9 МБ (2731×4096), а после задачи будет 64 КБ. Скрипт для каждого PNG/JPG в `public/`:

- конвертирует его в WebP с качеством 80;
- уменьшает ширину до 1920 px (для фото команды до 1000 px);
- меняет пути в `app/` и `src/`;
- удаляет исходник.

- [x] Создай `scripts/optimize-images.mjs`. `sharp` уже установлен вместе с Next. Если его нет, выполни `npm i -D sharp`.

```js
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
```

- [x] Сделай пробный прогон: `node scripts/optimize-images.mjs`. Ожидается примерно `ИТОГО 33694 KB -> 2407 KB`. Строк `ПРОПУСК` быть не должно.
- [x] Примени: `node scripts/optimize-images.mjs --write`.
- [x] Проверь, что в коде не осталось ссылок на PNG/JPG из `public/`. Команда должна ничего не вывести:

```bash
grep -rnE "['\"]/[^'\"]+\.(png|jpe?g)['\"]" app src
```

- [x] `npm run build`, затем `node scripts/measure-pages.mjs`: главная около 1 200 КБ, строк «нет файла» нет.
- [x] Визуальная проверка: `npm run dev`, открой все 6 страниц (порт 3003). Картинки должны быть на месте и не размыты. Если какая-то размыта, добавь её в `WIDTH_OVERRIDES` с большей шириной **или** верни оригинал через `git checkout` и опиши в «Журнале».
- Коммит: `perf: convert images to webp and cap their size`

## Задача 5. Шрифты [простая]

Сейчас каждая страница предзагружает 382 КБ шрифтов. Причины:

- Montserrat подключён в 9 начертаниях × 5 наборов символов;
- DrukWideCyr лежит в формате OTF (170 КБ);
- Geist Mono нигде не используется.

После задачи останется около 143 КБ.

- [x] **Montserrat** в `src/shared/ui/Typography.tsx`: убери массив `weight` (без него Next подключит вариативный шрифт, это один файл на все начертания) и оставь два набора символов:

```ts
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})
```

- [x] **DrukWideCyr: OTF → WOFF2.** Используй временное окружение вне репозитория:

```bash
python3 -m venv /tmp/fontenv && /tmp/fontenv/bin/pip -q install fonttools brotli
/tmp/fontenv/bin/python -c "from fontTools.ttLib import TTFont; f = TTFont('public/fonts/DrukWideCyr/drukwidecyr-bold.otf'); f.flavor = 'woff2'; f.save('public/fonts/DrukWideCyr/drukwidecyr-bold.woff2')"
```

  Должен получиться файл около 57 КБ. Удали `.otf`. В `src/shared/constants/fonts.ts` поменяй путь на `.woff2`, исправь `style: 'bold'` на `style: 'normal'` (`bold` — недопустимое значение font-style, браузер его и так игнорирует) и добавь `display: 'swap'`.

- [x] **Geist Mono** в `app/layout.tsx`:
  - убери импорт `Geist_Mono`, константу `geistMono` и `${geistMono.variable}` из `className`;
  - в `app/globals.css` удали строку `--font-mono: var(--font-geist-mono);`.
- [x] `npm run build`. Проверь, что в `out/index.html` 4 ссылки `rel="preload"` на шрифты: `grep -o 'as="font"' out/index.html | wc -l`.
- [x] Визуальная проверка: заголовки (DrukWideCyr) и текст (Montserrat) выглядят как раньше.
- Коммит: `perf: slim down font loading`

## Задача 6. Единый импорт `motion` [простая]

В 7 файлах `motion` импортируется из `framer-motion`, но этого пакета нет в `package.json`: он подтягивается транзитивно через `motion`. Нужно импортировать из `motion/react`, как в `CircularText.tsx`.

- [x] В файлах `app/about/page.tsx`, `app/service/page.tsx`, `src/widgets/Hero.tsx`, `src/widgets/FAQs.tsx`, `src/widgets/CasesHero.tsx`, `src/widgets/Adventages.tsx`, `src/widgets/Cases.tsx` замени `from 'framer-motion'` на `from 'motion/react'`.
- [x] Проверь, что команда ничего не выводит: `grep -rn "framer-motion" app src`
- [x] `npm run build`
- Коммит: `refactor: import motion from motion/react`

## Задача 7. Язык страницы и приоритет главных картинок [простая]

- [x] В `app/layout.tsx`: `<html lang="en">` → `<html lang="ru">`. Сайт на русском, это влияет на SEO, переносы и озвучку скринридерами.
- [x] Добавь проп `priority` к первой видимой картинке на страницах:
  - `src/widgets/Hero.tsx`: `<Image src="/chess/king.webp" ...>` (около строки 91);
  - `app/about/page.tsx`: `<Image src="/teamates/team.webp" ...>`.
- [x] `npm run build`
- Коммит: `perf: set page language and prioritize hero images`

## Задача 8. Убрать лишние `'use client'` [простая]

Эти компоненты не используют хуки, обработчики событий и `motion`. Директива `'use client'` у них лишняя и раздувает клиентский JS:

`src/shared/ui/Typography.tsx`, `src/widgets/Team.tsx`, `src/widgets/NineSteps.tsx`, `src/widgets/Services.tsx`, `src/widgets/Footer.tsx`, `src/widgets/Reviews.tsx`, `src/widgets/Partners.tsx`.

`Reviews` и `Partners` рендерят клиентские `Carousel` и `Tabs`: из серверного компонента так можно, пока в их пропсы не передаются функции.

- [x] Удали первую строку `'use client'` в каждом файле из списка.
- [x] `npm run build`. Если появится ошибка вида «Event handlers cannot be passed to Client Component props» или «useState only works in Client Components», верни `'use client'` в тот файл, на который указывает ошибка, и запиши его в «Журнал».
- [x] Сравни First Load JS в выводе сборки с прежним, он не должен вырасти.
- Коммит: `perf: render static widgets as server components`

## Задача 9. Рабочие контакты и карта [простая]

На `/contact` и в футере 8 ссылок ведут на `href="#"`: клик ничего не делает. Контакты продублированы в двух файлах.

- [x] Создай `src/shared/constants/contacts.ts` и экспортируй его в `src/shared/constants/index.ts`:

```ts
export const contacts = {
  whatsapp: { label: '+996 509 170 201', href: 'https://wa.me/996509170201' },
  telegram: { label: 'Azizbekov_E', href: 'https://t.me/Azizbekov_E' },
  instagram: { label: 'lid.force', href: 'https://www.instagram.com/lid.force/' },
  email: { label: 'aeldiar34@gmail.com', href: 'mailto:aeldiar34@gmail.com' },
}
```

- [x] В `app/contact/page.tsx` и `src/widgets/Footer.tsx` замени `href="#"` и захардкоженный текст на значения из `contacts`. Внешним ссылкам (все, кроме email) добавь `target="_blank" rel="noopener noreferrer"`. Классы и вёрстку не меняй.
- [x] В `<iframe>` Яндекс-карты на `/contact` добавь `loading="lazy"` и `title="Карта: офис Lidforce"`.
- [x] Проверь, что команда ничего не выводит: `grep -rn 'href="#"' app src`
- [x] `npm run build`
- Коммит: `fix: make contact links work and lazy-load the map`
- ⚠️ В отчёте попроси владельца подтвердить, что аккаунты верные. Они взяты из текста на сайте.

## Задача 10. Обязательные поля формы [простая]

Форма в `src/widgets/Feedback.tsx` отправляет в Bitrix24 даже пустую заявку.

- [x] Добавь `required` к полям имени, телефона и email. Добавь `autoComplete`: `"name"`, `"tel"`, `"email"`. Типы полей (`text`, `tel`, `email`) уже правильные, браузер сам проверит формат email.
- [x] Ничего больше в форме не меняй, логику отправки не трогай.
- [x] `npm run build`
- Коммит: `fix: require contact fields in feedback form`

## Задача 11. Убрать скачок вёрстки в «Преимуществах» [средняя]

`src/widgets/Adventages.tsx` решает, ставить ли `position: absolute`, через JS-хук `useScreenSize()`. До загрузки JS на десктопе показывается мобильная раскладка, потом блоки прыгают (CLS). Нужно перенести это в CSS.

- [x] Убери `const { md } = useScreenSize()` и импорт `useScreenSize`.
- [x] Классы элемента: вместо `md ? 'absolute' : 'static'` используй `md:absolute md:top-[var(--top)] md:left-[var(--left)]`.
- [x] `style`: передавай координаты как CSS-переменные:

```tsx
style={{
  '--top': advantage.position.top,
  '--left': advantage.position.left,
  zIndex: advantage.zIndex,
} as React.CSSProperties}
```

- [x] `npm run build`. Визуально сравни главную на ширине 375 px и 1280 px с тем, что было до задачи: финальная раскладка должна совпадать.
- Коммит: `perf: position advantages with css instead of js media query`

## Задача 12. SEO: метаданные страниц [средняя]

Сейчас у всех страниц title «Lidforce» и описание «Marketing agency». Страницы `/about` и `/service` целиком клиентские (`'use client'`) из-за `motion`, поэтому `export const metadata` в них не работает.

- [x] В `app/layout.tsx` задай метаданные по умолчанию:

```ts
export const metadata: Metadata = {
  title: { default: 'Lidforce — маркетинговое агентство', template: '%s — Lidforce' },
  description: 'Маркетинговое агентство LidForce: таргет, SMM, продакшн, брендинг и сайты для бизнеса.',
}
```

- [x] `/about`: вынеси первый блок с `motion.div` (фото команды и заголовок) в новый клиентский компонент `src/widgets/AboutHero.tsx` и экспортируй его в `src/widgets/index.ts`. В `app/about/page.tsx` убери `'use client'` и добавь `export const metadata = { title: 'О нас' }`.
- [x] `/service`: так же вынеси все блоки с `motion` в клиентские компоненты в `src/widgets/`, сделай страницу серверной и добавь `export const metadata = { title: 'Услуги' }`.
- [x] Добавь `export const metadata` в `app/case/page.tsx` (`'Кейсы'`), `app/case/nextprotein/page.tsx` (`'Кейс NextProtein'`), `app/contact/page.tsx` (`'Контакты'`).
- [x] `npm run build`. Проверь заголовки: `grep -o '<title>[^<]*' out/*.html out/*/*.html out/*/*/*.html`
- Коммит: `feat: add per-page metadata`

## Задача 13. `robots.txt` и `sitemap.xml` [решение владельца]

Нужен боевой домен: `lidforce.kg` (упоминается в форме) или `lidforce.vercel.app`? **Спроси владельца.**

- [ ] Добавь в `app/layout.tsx` в `metadata` поле `metadataBase: new URL('<домен>')`.
- [ ] Создай `app/robots.ts` и `app/sitemap.ts` (в каждом `export const dynamic = 'force-static'`, это нужно для `output: 'export'`). В sitemap перечисли 6 страниц из «Карты проекта» с завершающим `/` (в конфиге `trailingSlash: true`).
- [ ] `npm run build`. Должны появиться `out/robots.txt` и `out/sitemap.xml`.
- Коммит: `feat: add robots.txt and sitemap.xml`

## Задача 14. Меньше JS от `motion` через `LazyMotion` [средняя, по желанию]

Ожидаемая экономия: около 20–30 КБ (gzip) на страницах с анимациями.

- [x] Создай клиентский компонент `src/shared/ui/MotionProvider.tsx` с `<LazyMotion features={domAnimation} strict>` и оберни им `{children}` в `app/layout.tsx`.
- [x] Во всех файлах из задачи 6 и в `CircularText.tsx` замени `motion.div` / `motion.h1` / `motion.p` на `m.div` / `m.h1` / `m.p` (`import { m } from 'motion/react'`). `AnimatePresence`, `useAnimation`, `useMotionValue` остаются как есть.
- [x] `npm run build`. Режим `strict` упадёт в рантайме, если где-то остался `motion.*`, поэтому открой все страницы в `npm run dev` и проверь консоль браузера.
- Коммит: `perf: load motion features lazily`

## Задача 15. Линтер без устаревшего `next lint` [простая]

`next lint` устарел в Next 15.5 и удалён в 16.

- [x] В `package.json`: `"lint": "eslint ."`.
- [x] В `eslint.config.mjs` первым элементом массива добавь `{ ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'] }`.
- [x] `npm run lint` должен пройти. Исправь только то, что он найдёт в `app/` и `src/`.
- Коммит: `chore: run eslint directly instead of next lint`

## Задача 16. Убрать дублирование кейсов [средняя, по желанию]

`src/widgets/case-comps/Doscar.tsx` и `Nextprotein.tsx` (по ~375 строк) отличаются только данными, около 80 строк. `app/case/nextprotein/page.tsx` (706 строк) повторяет ту же вёрстку.

- [ ] Вынеси разметку в один компонент `src/widgets/CaseShowcase.tsx`, который принимает объект данных кейса. Данные двух кейсов положи в `src/widgets/case-comps/data.ts`.
- [ ] Вёрстка должна остаться пиксель в пиксель: сравни скриншоты `/case` и `/case/nextprotein` до и после.
- Коммит: `refactor: render case studies from data`

## Задача 17. README [простая]

- [x] Замени шаблонный README от create-next-app коротким описанием: что это за сайт, `npm run dev` (порт 3003), `npm run build` (статический экспорт в `out/`), деплой (push в `main` → Vercel), скрипты из `scripts/`.
- Коммит: `docs: describe project setup`

---

## Решения владельца (исполнитель их не делает)

1. **Шрифт по умолчанию.** Текст вне `<Typography>` (например, ссылки в шапке) набран шрифтом Geist. В Geist нет кириллицы, поэтому русский текст показывается системным шрифтом. Можно сделать основным Montserrat и убрать Geist: минус один шрифт и единый стиль, но внешний вид части текста изменится.
2. **Webhook Bitrix24 открыт в клиентском коде** (`src/widgets/Feedback.tsx`). Любой может создавать лиды или делать другие вызовы в пределах прав webhook. Минимум: в Bitrix24 оставить этому webhook только право `crm`. Полностью закрыть его можно только через серверную функцию, а для этого нужно отказаться от `output: 'export'`.
3. **Домен** для задачи 13.
4. **Next 16.** `npm audit` ещё показывает уязвимость во вложенном в Next пакете `postcss`. Её закрывает только мажорное обновление. Для статического сайта риск низкий.
5. **`docs/` и `openapi-specs/`** (5 МБ спецификаций Strapi). Если CMS не планируется, их можно удалить.

## Журнал

Исполнитель записывает сюда проблемы и отклонения от плана: номер задачи, что случилось, что сделано.

- 30.10.2026: выполнены задачи 0–12, 14, 15, 17.
- Задача 3: `scripts/optimize-images.mjs` случайно попал в коммит задачи 3, перенесён в коммит задачи 4.
- Задача 10: для телефона поставлен `autoComplete="tel-national"` вместо `"tel"`, потому что префикс `+996` уже показан перед полем.
- Задача 12: на `/service` в клиентский компонент `src/widgets/ServiceHeroImages.tsx` вынесен только блок с тремя анимированными картинками, остальная страница серверная.
- Задача 13 не сделана: ждёт решения владельца (домен).
- Задача 16 не сделана: необязательная, требует сверки вёрстки пиксель в пиксель.
- Вне плана: на `/case` и `/case/nextprotein` внутри `<Link>` был вложен `<a>`. Это ломало гидрацию: React перерисовывал страницу на клиенте. Внутренний `<a>` заменён на `<span>`.
- Найдено, не исправлено: в `app/case/nextprotein/page.tsx` (строки ~184–186) фон задан как `url(./6da60e37….svg)`. Относительный путь всегда давал 404, на проде тоже. Сам файл удалён в задаче 1 как неиспользуемый. Если фон нужен, верни файл командой `git checkout a37047f -- public/6da60e37aab2b73dac7cbca53b03665bf3217b4c.svg` и поменяй путь на `/6da60e37….svg`.
- Осталось: 45 предупреждений Next о legacy-пропе `objectFit` у `<Image>`. Next сам переводит его в `style`, так что работает, но лучше заменить на класс `object-cover` / `object-contain`.
