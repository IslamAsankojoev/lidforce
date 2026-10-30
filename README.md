# Lidforce

Сайт маркетингового агентства LidForce. Next.js 15 (App Router), React 19, Tailwind 4, `motion`, shadcn/ui.

## Разработка

```bash
npm ci
npm run dev    # http://localhost:3003
npm run lint
```

## Сборка и деплой

```bash
npm run build  # статический экспорт в out/
```

Сайт полностью статический (`output: 'export'` в `next.config.ts`). Push в `main` автоматически выкатывает прод на Vercel.

Оптимизации картинок от Next нет (`images.unoptimized`), поэтому новые картинки нужно класть в `public/` уже сжатыми: WebP, ширина не больше 1920 px.

## Структура

- `app/`: страницы (`/`, `/about`, `/service`, `/case`, `/case/nextprotein`, `/contact`).
- `src/widgets/`: секции страниц.
- `src/shared/`: `Typography`, шрифты, цвета, роуты, контакты, иконки, хуки.
- `src/shadcn/`: компоненты shadcn/ui.

## Скрипты

- `node scripts/optimize-images.mjs [--write]`: переводит PNG/JPG из `public/` в WebP и обновляет ссылки в коде. Без флага только показывает, что будет сделано.
- `node scripts/find-unused-assets.mjs`: показывает файлы в `public/`, на которые нет ссылок.
- `node scripts/measure-pages.mjs`: вес картинок на каждой странице. Запускать после `npm run build`.
