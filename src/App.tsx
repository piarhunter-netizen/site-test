// ЗАТЫЧКА: временная главная страница. Заменить настоящими страницами из src/pages/.
import { Link, Route, Routes } from 'react-router-dom'

const RED = '#E23A2E'

const nav = [
  ['Виды спорта', '/sports'],
  ['Каталог', '/catalog'],
  ['Портфолио', '/portfolio'],
  ['Как мы работаем', '/how-we-work'],
  ['Контакты', '/contacts'],
]

const sports = ['Футбол', 'Баскетбол', 'Хоккей', 'Волейбол', 'Единоборства', 'Другие виды']

function Stub({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-white/25 bg-white/5 text-sm text-white/50 ${className}`}
    >
      {label}
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="text-lg font-black tracking-wide">
          DA'NOVA <span style={{ color: RED }}>SPORT</span>
        </Link>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          {nav.map(([t, h]) => (
            <Link key={h} to={h} className="hover:text-white">{t}</Link>
          ))}
        </nav>
        <Link
          to="/request"
          className="rounded-md px-4 py-2 text-sm font-semibold text-white"
          style={{ background: RED }}
        >
          Оставить заявку
        </Link>
      </div>
    </header>
  )
}

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: RED }}>
            Командная спортивная экипировка
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Форма для вашей команды — от дизайна до доставки
          </h1>
          <p className="text-lg text-white/70">
            Игровая и тренировочная форма для клубов, академий и команд. Казахстан, Россия, Беларусь.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/request" className="rounded-md px-6 py-3 font-semibold" style={{ background: RED }}>
              Рассчитать заказ
            </Link>
            <Link to="/catalog" className="rounded-md border border-white/30 px-6 py-3 font-semibold">
              Смотреть каталог
            </Link>
          </div>
        </div>
        <Stub label="Затычка: первый экран (StadiumScrollHero)" className="min-h-72" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold">Виды спорта</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {sports.map((s) => (
            <div key={s} className="flex flex-col gap-3 rounded-lg bg-white/5 p-3">
              <Stub label="фото" className="aspect-[4/3]" />
              <span className="font-semibold">{s}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold">Популярное из каталога</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Stub key={i} label={`Затычка: товар ${i}`} className="aspect-[3/4]" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl p-8 md:p-12" style={{ background: RED }}>
          <h2 className="text-2xl font-black md:text-3xl">Готовы одеть команду?</h2>
          <p className="mt-2 text-white/90">Оставьте заявку — подготовим дизайн и расчёт.</p>
          <Link to="/request" className="mt-6 inline-block rounded-md bg-black px-6 py-3 font-semibold">
            Оставить заявку
          </Link>
        </div>
      </section>
    </>
  )
}

function Placeholder() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <Stub label="Затычка: эта страница появится, когда будет добавлен src/pages/" className="min-h-64" />
      <Link to="/" className="mt-6 inline-block underline">← На главную</Link>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Placeholder />} />
        </Routes>
      </main>
      <footer className="mt-12 border-t border-white/10 py-8 text-center text-sm text-white/50">
        © DA'NOVA SPORT · Затычка футера
      </footer>
    </div>
  )
}
