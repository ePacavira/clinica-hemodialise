import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { paths } from '../routes/paths'

export function AssistenciaSocialPage() {
  const { language } = useI18n()
  const supportAreas = [
    {
      title: 'Apoio ao utente e família',
      description:
        'Orientação para organização do plano de tratamento, rotina de consultas e suporte ao cuidador principal.',
    },
    {
      title: 'Encaminhamento social',
      description:
        'Articulação com serviços e entidades parceiras para facilitar acesso a apoio social quando necessário.',
    },
    {
      title: 'Mediação administrativa',
      description:
        'Acompanhamento no esclarecimento de processos, documentação e canais de contacto institucionais.',
    },
  ]
  const copy =
    language === 'en'
      ? {
          breadcrumb: 'Social assistance',
          title: 'Social assistance',
          subtitle:
            'Social support and practical guidance for kidney patients and families, with focus on continuity of care and support network integration.',
          sectionTitle: 'Support areas',
          stepsTitle: 'How to request support',
          step1: 'Submit your request through the booking page or contact reception.',
          step2: 'Describe your social or administrative need in the notes field.',
          step3: 'Our team will coordinate the most appropriate support pathway.',
          ctaPrimary: 'Request support in booking',
          ctaSecondary: 'Contact social assistance',
          sideTitle: 'Related links',
          sideBooking: 'Booking',
          sideContacts: 'Contacts',
          sideEvents: 'Events and community actions',
        }
      : {
          breadcrumb: 'Assistência social',
          title: 'Assistência Social',
          subtitle:
            'Apoio social e orientação prática para doentes renais e familiares, com foco em continuidade assistencial, direitos do utente e integração com a rede de suporte.',
          sectionTitle: 'Áreas de apoio',
          stepsTitle: 'Como pedir apoio',
          step1: 'Preencha o pedido na página de marcação ou contacte a recepção.',
          step2: 'Indique a necessidade social/administrativa no campo de observações.',
          step3: 'A equipa fará o encaminhamento para o apoio mais adequado ao seu caso.',
          ctaPrimary: 'Pedir apoio na marcação',
          ctaSecondary: 'Contactar assistência social',
          sideTitle: 'Links relacionados',
          sideBooking: 'Marcação',
          sideContacts: 'Contactos',
          sideEvents: 'Eventos e ações comunitárias',
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
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
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
              {supportAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{area.description}</p>
                </article>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900">{copy.stepsTitle}</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                <li>{copy.step1}</li>
                <li>{copy.step2}</li>
                <li>{copy.step3}</li>
              </ol>
            </div>
          </div>

          <aside className="space-y-5 lg:col-span-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex flex-col gap-3">
                <Link
                  to={paths.marcacao}
                  className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  {copy.ctaPrimary}
                </Link>
                <Link
                  to={paths.contactos}
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
                  <Link to={paths.marcacao} className="text-brand hover:underline">
                    {copy.sideBooking}
                  </Link>
                </li>
                <li>
                  <Link to={paths.contactos} className="text-brand hover:underline">
                    {copy.sideContacts}
                  </Link>
                </li>
                <li>
                  <Link to={paths.eventos} className="text-brand hover:underline">
                    {copy.sideEvents}
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
