import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { eventosMedia } from '../data/siteMedia'
import { paths } from '../routes/paths'

export function EventosPage() {
  const { language } = useI18n()
  const upcomingEvents = [
    {
      title: 'Workshop de Acesso Vascular',
      date: '22 Maio 2026',
      audience: 'Profissionais de saúde',
      description:
        'Sessão prática sobre planeamento, manutenção e vigilância do acesso vascular em doentes renais.',
      image: eventosMedia.sessionA,
    },
    {
      title: 'Encontro de Educação para Doentes Renais',
      date: '05 Junho 2026',
      audience: 'Doentes e familiares',
      description:
        'Orientações sobre adesão terapêutica, alimentação e sinais de alerta no percurso da doença renal.',
      image: eventosMedia.sessionB,
    },
    {
      title: 'Mesa Técnica: Segurança e Qualidade Assistencial',
      date: '19 Junho 2026',
      audience: 'Equipa clínica e parceiros',
      description:
        'Debate de indicadores assistenciais, protocolos internos e melhoria contínua em nefrologia e hemodiálise.',
      image: eventosMedia.sessionC,
    },
  ]
  const copy =
    language === 'en'
      ? {
          breadcrumb: 'Events',
          title: 'Events',
          subtitle:
            'CHPA clinical, educational and technical agenda for professionals, patients and the community.',
          sectionTitle: 'Upcoming highlights',
          audience: 'Audience',
          ctaTitle: 'Would you like to join or propose an event?',
          ctaText:
            'Contact the CHPA team for registrations, institutional partnerships and full calendar details.',
          ctaPrimary: 'Talk to the team',
          ctaSecondary: 'Book appointment',
          sideTitle: 'Quick links',
          sideSchedule: 'Calendar and registrations',
          sideSupport: 'Institutional partnerships',
          sideContact: 'General contacts',
        }
      : {
          breadcrumb: 'Eventos',
          title: 'Eventos',
          subtitle:
            'Agenda de iniciativas clínicas, educativas e técnicas do CHPA para profissionais, doentes e comunidade.',
          sectionTitle: 'Próximos destaques',
          audience: 'Público',
          ctaTitle: 'Quer participar ou propor um evento?',
          ctaText:
            'Entre em contacto com a equipa CHPA para inscrições, parcerias institucionais e informações sobre calendário completo.',
          ctaPrimary: 'Falar com a equipa',
          ctaSecondary: 'Marcação de consulta',
          sideTitle: 'Acesso rápido',
          sideSchedule: 'Calendário e inscrições',
          sideSupport: 'Parcerias institucionais',
          sideContact: 'Contactos gerais',
        }

  return (
    <section className="bg-[#f4f7fb] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="mb-3 text-xs text-slate-500">
          <Link to={paths.home} className="hover:underline">
            Home
          </Link>{' '}
          / <span className="font-medium text-slate-700">{copy.breadcrumb}</span>
        </div>
        <div className="relative overflow-hidden border border-slate-200 bg-white">
          <img
            src={eventosMedia.banner}
            alt={copy.title}
            className="h-[230px] w-full object-cover md:h-[320px]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-end p-6 md:p-10">
            <div>
              <h1 className="text-3xl font-bold text-white md:text-5xl">{copy.title}</h1>
              <p className="mt-3 max-w-2xl text-sm text-white/95 md:text-base">
                {copy.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-8">
            <h2 className="text-2xl font-semibold text-slate-900">{copy.sectionTitle}</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {upcomingEvents.map((event) => (
                <article
                  key={event.title}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <img
                    src={event.image}
                    alt=""
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">{event.date}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{event.title}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {copy.audience}: {event.audience}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{event.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-5 lg:col-span-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{copy.ctaTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{copy.ctaText}</p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to={paths.contactos}
                  className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  {copy.ctaPrimary}
                </Link>
                <Link
                  to={paths.marcacao}
                  className="inline-flex items-center justify-center rounded-lg border border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand/5"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h4 className="text-lg font-semibold text-slate-900">{copy.sideTitle}</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to={paths.eventos} className="text-brand hover:underline">
                    {copy.sideSchedule}
                  </Link>
                </li>
                <li>
                  <Link to={paths.parceiros} className="text-brand hover:underline">
                    {copy.sideSupport}
                  </Link>
                </li>
                <li>
                  <Link to={paths.contactos} className="text-brand hover:underline">
                    {copy.sideContact}
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
