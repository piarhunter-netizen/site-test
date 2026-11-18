# DA'NOVA SPORT

Сайт производства командной спортивной экипировки: игровая и тренировочная форма для клубов, академий и команд.
React 18 + TypeScript + Vite + Tailwind CSS 4 + motion + react-router.

## Запуск

```bash
npm i
npm run dev      # http://localhost:5173
npm run build    # сборка в dist/
```

## Структура

- `src/pages/` — страницы (главная, виды спорта, каталог, товар, о бренде, как мы работаем, заявка, оплата, контакты, отзывы, портфолио, политика, условия)
- `src/components/` — Layout (шапка/футер), `StadiumScrollHero` (первый экран), `SportLockers` (виды спорта), карточки и кнопки
- `src/lib/` — `sports.ts` (виды спорта), `data.ts` (каталог), `region.tsx` (переключатель KZ/RU и контакты)
- `src/assets/`, `public/` — изображения, `sitemap.xml`, `robots.txt`
- `api/request.ts` — серверная функция приёма заявок (Vercel)

## Заявки в Telegram

Форма на `/request` отправляет данные на `/api/request`, функция пересылает их в Telegram через бота.
Если сервер или бот недоступны, форма открывает Telegram с готовым текстом.

1. Создайте бота у @BotFather и получите токен.
2. Узнайте `chat_id` чата или группы, куда слать заявки.
3. Задайте переменные окружения (образец — `.env.example`):
   - локально: файл `.env.local`;
   - на Vercel: Settings → Environment Variables.

```
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

Токен не коммитьте и не вставляйте в код. `.env.local` уже в `.gitignore`.

## Деплой

Проект рассчитан на Vercel: `vercel.json` отправляет все пути, кроме `/api/*`, на `index.html` (SPA).
