import { CalendarPlus, ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navItemsByLanguage } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { navPaths, paths, servicePath, serviceSlugs } from '../routes/paths'

type MegaKey =
  | 'chpa'
  | 'about'
  | 'services'
  | 'research'
  | 'partners'
  | 'events'
  | 'social'
  | 'contacts'

type MegaColumn = {
  title: string
  links: { label: string; to: string }[]
  showAllLabel?: string
  subtitle?: string
}

const megaChpa: MegaColumn[] = [
  {
    title: 'Institucional',
    links: [
      { label: 'Quem somos', to: paths.quemSomos },
      { label: 'Missão e valores', to: paths.quemSomos },
    ],
  },
  {
    title: 'Equipa e unidades',
    links: [
      { label: 'Equipa clínica', to: paths.equipa },
      { label: 'Unidades', to: paths.unidades },
    ],
  },
  {
    title: 'Tratamento',
    links: [
      { label: 'Hemodiálise', to: servicePath(serviceSlugs.hemodialise) },
      { label: 'Acessos vasculares', to: paths.acessosVasculares },
    ],
  },
  {
    title: 'Contacto',
    links: [{ label: 'Marcação de consulta', to: paths.marcacao }],
  },
]

const megaAbout: MegaColumn[] = [
  {
    title: 'Sobre Nós',
    links: [
      { label: 'História', to: paths.historia },
      { label: 'Direção', to: paths.direcao },
    ],
  },
  {
    title: 'Qualidade',
    links: [
      { label: 'Qualidade e segurança', to: paths.qualidadeSeguranca },
      { label: 'Política de privacidade', to: paths.politicaPrivacidade },
    ],
  },
  {
    title: 'Educação',
    links: [{ label: 'Educação em saúde', to: paths.sobreEducacao }],
  },
]

const megaServices: MegaColumn[] = [
  {
    title: 'Áreas principais',
    links: [
      { label: 'Nefrologia', to: servicePath(serviceSlugs.nefrologia) },
      { label: 'Hemodiálise', to: servicePath(serviceSlugs.hemodialise) },
      { label: 'Acesso vascular', to: servicePath(serviceSlugs.acessoVascular) },
    ],
  },
  {
    title: 'Apoio especializado',
    links: [
      { label: 'Cardiologia', to: servicePath(serviceSlugs.cardiologia) },
      { label: 'Nutrição', to: servicePath(serviceSlugs.nutricao) },
      { label: 'Psicologia', to: servicePath(serviceSlugs.psicologia) },
      { label: 'Medicina intensiva', to: servicePath(serviceSlugs.medicinaIntensiva) },
    ],
  },
]

const megaResearch: MegaColumn[] = [
  {
    title: 'Investigação',
    links: [
      { label: 'Estudos em curso', to: paths.investigacao },
      { label: 'Publicações', to: paths.investigacao },
      { label: 'Ensaios clínicos', to: paths.investigacao },
      { label: 'Formação', to: paths.investigacao },
    ],
  },
]

const megaPartners: MegaColumn[] = [
  {
    title: 'Parcerias',
    links: [
      { label: 'Instituições parceiras', to: paths.parceiros },
      { label: 'Convénios', to: paths.parceiros },
      { label: 'Programas de cooperação', to: paths.parceiros },
    ],
  },
]

const megaEvents: MegaColumn[] = [
  {
    title: 'Eventos',
    links: [
      { label: 'Agenda CHPA', to: paths.eventos },
      { label: 'Formações e encontros', to: paths.eventos },
    ],
  },
]

const megaSocial: MegaColumn[] = [
  {
    title: 'Assistência Social',
    links: [
      { label: 'Apoio social ao utente', to: paths.assistenciaSocial },
      { label: 'Encaminhamento e orientação', to: paths.assistenciaSocial },
    ],
  },
]

const megaContacts: MegaColumn[] = [
  {
    title: 'Contactos',
    links: [
      { label: 'Contactos gerais', to: paths.contactos },
      { label: 'Marcação de consulta', to: paths.marcacao },
      { label: 'Localização', to: paths.unidades },
      { label: 'Apoio ao doente', to: paths.digital },
    ],
  },
]

function columnsForKey(key: MegaKey): MegaColumn[] {
  switch (key) {
    case 'chpa':
      return megaChpa
    case 'about':
      return megaAbout
    case 'services':
      return megaServices
    case 'research':
      return megaResearch
    case 'partners':
      return megaPartners
    case 'events':
      return megaEvents
    case 'social':
      return megaSocial
    case 'contacts':
      return megaContacts
    default:
      return megaChpa
  }
}

const navIndexToMega: MegaKey[] = [
  'chpa',
  'about',
  'services',
  'research',
  'partners',
  'events',
  'social',
  'contacts',
]

export function Header() {
  const { language, setLanguage } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [activeMegaKey, setActiveMegaKey] = useState<MegaKey>('chpa')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const columnsToRender = columnsForKey(activeMegaKey)
  const navItems = navItemsByLanguage[language]
  const copy =
    language === 'en'
      ? {
          userCare: 'Patient support',
          search: 'Search',
          bookings: 'Bookings',
          openMenu: 'Open menu',
          luanda: 'Luanda, Angola',
          whoWeAre: 'About us',
          services: 'Services',
          hemodialysis: 'Hemodialysis',
          vascularAccess: 'Vascular access',
          events: 'Events',
          socialAssistance: 'Social assistance',
          team: 'Team',
          booking: 'Booking',
          units: 'Units',
        }
      : {
          userCare: 'Atendimento ao utente',
          search: 'Pesquisa',
          bookings: 'Marcações',
          openMenu: 'Abrir menu',
          luanda: 'Luanda, Angola',
          whoWeAre: 'Quem somos',
          services: 'Serviços',
          hemodialysis: 'Hemodiálise',
          vascularAccess: 'Acessos vasculares',
          events: 'Eventos',
          socialAssistance: 'Assistência social',
          team: 'Equipa',
          booking: 'Marcação',
          units: 'Unidades',
        }

  const gridClass =
    columnsToRender.length === 1
      ? 'grid-cols-1'
      : columnsToRender.length === 2
        ? 'grid-cols-2'
        : columnsToRender.length === 3
          ? 'grid-cols-3'
          : 'grid-cols-4'

  const closeMega = () => setMegaOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="border-b border-white/10 bg-brand-darker">
        <div
          className={`mx-auto flex min-h-[40px] w-full max-w-[1320px] items-center justify-between px-4 py-3.5 text-xs text-white/95 md:px-6`}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLanguage('pt')}
                className={`hover:text-white ${language === 'pt' ? 'font-bold text-white' : ''}`}
              >
                PT
              </button>
              <span aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`hover:text-white ${language === 'en' ? 'font-bold text-white' : ''}`}
              >
                EN
              </button>
            </div>
            <Link
              to={paths.unidades}
              className="flex items-center gap-1 hover:text-white"
            >
              {copy.luanda} <ChevronDown className="text-white/90" size={14} />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to={paths.contactos} className="hover:text-white">
              {copy.userCare}
            </Link>
            <a href="#" className="hover:text-white">
              {copy.search}
            </a>
          </div>
        </div>
      </div>

      <div
        className="relative bg-brand"
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="mx-auto flex min-h-[72px] w-full max-w-[1320px] items-center justify-between px-4 py-5 md:min-h-[80px] md:px-6 md:py-6">
          <Link to={paths.home} className="flex items-center gap-3">
            <img
              src="/logo-white.png"
              alt="CHPA"
              className="h-10 w-auto md:h-12"
            />
            <span className="text-lg font-extrabold tracking-wide text-white md:text-xl">
              CHPA
            </span>
          </Link>

          <nav
            className="hidden items-center gap-6 lg:flex xl:gap-9"
            aria-label="Navegacao principal"
          >
            {navItems.map((item, idx) => (
              <Link
                key={item}
                to={navPaths[idx] ?? paths.home}
                onMouseEnter={() => {
                  setActiveMegaKey(navIndexToMega[idx] ?? 'chpa')
                  setMegaOpen(true)
                }}
                onFocus={() => {
                  setActiveMegaKey(navIndexToMega[idx] ?? 'chpa')
                  setMegaOpen(true)
                }}
                className={`text-base font-medium text-white/90 transition-colors duration-200 hover:text-white hover:underline ${
                  idx === 0 ? 'text-white' : ''
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to={paths.marcacao}
              className="inline-flex items-center gap-2 rounded-lg bg-[#FFBF1F] px-5 py-2.5 text-base font-semibold text-[#6b4a00] transition hover:bg-[#ffca4a]"
            >
              <CalendarPlus className="shrink-0" size={20} strokeWidth={2} aria-hidden />
              {copy.bookings}
            </Link>
          </div>

          <button
            className="inline-flex rounded-md p-3 text-white/90 lg:hidden hover:bg-white/10"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={copy.openMenu}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div className="relative hidden lg:block">
          <div
            className={`absolute left-0 right-0 top-full border-b border-slate-200/70 bg-white shadow-md transition-all duration-200 ${
              megaOpen
                ? 'pointer-events-auto translate-y-0 opacity-100'
                : 'pointer-events-none -translate-y-1 opacity-0'
            }`}
          >
            <div className="mx-auto w-full max-w-[1320px] px-4 pb-6 pt-5 md:px-6">
              <div
                className={`grid gap-10 ${gridClass}`}
              >
                {columnsToRender.map((col) => (
                  <div
                    key={`${col.title}-${col.links[0]?.label ?? ''}`}
                    className="min-w-0"
                  >
                    {col.title ? (
                      <h4 className="text-sm font-bold text-slate-900">
                        {col.title}
                      </h4>
                    ) : null}
                    {col.subtitle ? (
                      <p className="mt-2 text-sm font-medium text-slate-400">
                        {col.subtitle}
                      </p>
                    ) : null}
                    {col.links.length > 0 ? (
                      <div className={col.title ? 'mt-4' : ''}>
                        <div className="flex flex-col gap-3">
                          {col.links.map((link) =>
                            link.to.startsWith('#') ? (
                              <a
                                key={link.label}
                                href={link.to}
                                onClick={closeMega}
                                className="text-sm font-medium text-slate-600 hover:text-brand"
                              >
                                {link.label}
                              </a>
                            ) : (
                              <Link
                                key={link.label}
                                to={link.to}
                                onClick={closeMega}
                                className="text-sm font-medium text-slate-600 hover:text-brand"
                              >
                                {link.label}
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    ) : null}
                    {col.showAllLabel ? (
                      <Link
                        to={paths.home}
                        onClick={closeMega}
                        className="mt-5 inline-block text-sm font-bold text-brand hover:underline"
                      >
                        {col.showAllLabel}
                      </Link>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-100 bg-white lg:hidden">
            <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-4 py-4 md:px-6">
              <Link
                to={paths.quemSomos}
                className="text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {copy.whoWeAre}
              </Link>
              <Link
                to={paths.servicos}
                className="text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {copy.services}
              </Link>
              <Link
                to={servicePath(serviceSlugs.hemodialise)}
                className="text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {copy.hemodialysis}
              </Link>
              <Link
                to={paths.acessosVasculares}
                className="text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {copy.vascularAccess}
              </Link>
              <Link
                to={paths.equipa}
                className="text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {copy.team}
              </Link>
              <Link
                to={paths.eventos}
                className="text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {copy.events}
              </Link>
              <Link
                to={paths.assistenciaSocial}
                className="text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {copy.socialAssistance}
              </Link>
              <Link
                to={paths.marcacao}
                className="text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {copy.booking}
              </Link>
              <Link
                to={paths.unidades}
                className="text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {copy.units}
              </Link>
              <Link
                to={paths.marcacao}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFBF1F] px-4 py-2 text-center text-sm font-semibold text-[#6b4a00] transition hover:bg-[#ffca4a]"
                onClick={() => setMobileOpen(false)}
              >
                <CalendarPlus className="shrink-0" size={18} strokeWidth={2} aria-hidden />
                {copy.bookings}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
