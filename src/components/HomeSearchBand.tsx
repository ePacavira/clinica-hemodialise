import {
  CalendarDays,
  ClipboardList,
  Search,
  Stethoscope,
  UserRound,
} from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { paths } from '../routes/paths'

export function HomeSearchBand() {
  const { language } = useI18n()
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const categories: {
    label: string
    to: string
    icon: typeof Stethoscope
  }[] =
    language === 'en'
      ? [
          { label: 'Specialties', to: paths.servicos, icon: Stethoscope },
          { label: 'Appointments', to: paths.marcacao, icon: CalendarDays },
          { label: 'Exams', to: paths.digital, icon: ClipboardList },
          { label: 'Doctors', to: paths.equipa, icon: UserRound },
        ]
      : [
          { label: 'Especialidades', to: paths.servicos, icon: Stethoscope },
          { label: 'Consultas', to: paths.marcacao, icon: CalendarDays },
          { label: 'Exames', to: paths.digital, icon: ClipboardList },
          { label: 'Médicos', to: paths.equipa, icon: UserRound },
        ]
  const copy =
    language === 'en'
      ? {
          searchLabel: 'Search the site',
          placeholder: 'What are you looking for?',
          action: 'Search ›',
        }
      : {
          searchLabel: 'Pesquisa no site',
          placeholder: 'O que procura?',
          action: 'Procurar ›',
        }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const term = q.trim().toLowerCase()
    if (!term) {
      navigate(paths.servicos)
      return
    }
    if (
      term.includes('marc') ||
      term.includes('consulta') ||
      term.includes('appoint')
    ) {
      navigate(paths.marcacao)
      return
    }
    if (
      term.includes('médic') ||
      term.includes('equipa') ||
      term.includes('doctor') ||
      term.includes('team')
    ) {
      navigate(paths.equipa)
      return
    }
    navigate(paths.servicos)
  }

  return (
    <div className="relative z-10 border-t border-slate-200/80 bg-sky-50/90">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-8 md:px-6 md:py-10">
        <form onSubmit={onSubmit} className="relative max-w-184 md:ml-auto md:mr-0 md:translate-x-2">
          <label htmlFor="home-search" className="sr-only">
            {copy.searchLabel}
          </label>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-brand"
            size={26}
            aria-hidden
          />
          <input
            id="home-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={copy.placeholder}
            className="w-full rounded-full border border-slate-200/90 bg-white py-4 pl-14 pr-6 text-base text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20 md:text-lg"
          />
        </form>

        <div className="mt-7 grid max-w-3xl grid-cols-2 divide-x divide-white/25 bg-brand text-white shadow-lg md:ml-auto md:mr-0 md:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.label}
                to={cat.to}
                className="flex w-full flex-col items-center px-1 py-7 text-center transition hover:bg-brand-dark md:py-9"
              >
                <Icon className="text-white/95" size={42} strokeWidth={1.25} aria-hidden />
                <span className="mt-3 text-xs font-bold uppercase tracking-wider md:text-sm">
                  {cat.label}
                </span>
                <span className="mt-2 text-sm font-semibold text-white/90 underline-offset-2 hover:underline md:text-base">
                  {copy.action}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
