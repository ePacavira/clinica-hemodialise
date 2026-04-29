import { Link } from 'react-router-dom'
import { eventosMedia } from '../data/siteMedia'
import { useI18n } from '../i18n/I18nContext'
import { paths } from '../routes/paths'

export function ParceirosPage() {
  const { language } = useI18n()
  const partners =
    language === 'en'
      ? [
          {
            name: 'Hospital institutions',
            type: 'Clinical partnership',
            description:
              'Collaboration for referral pathways, continuity of care and integrated follow-up for kidney patients.',
          },
          {
            name: 'Technical and educational entities',
            type: 'Scientific collaboration',
            description:
              'Joint educational initiatives for professionals, patients and caregivers in kidney health.',
          },
          {
            name: 'Community support network',
            type: 'Social support',
            description:
              'Coordination with social assistance and support entities for patient and family guidance.',
          },
        ]
      : [
          {
            name: 'Instituições hospitalares',
            type: 'Parceria clínica',
            description:
              'Colaboração para referenciação, continuidade assistencial e seguimento integrado do doente renal.',
          },
          {
            name: 'Entidades técnicas e educativas',
            type: 'Colaboração científica',
            description:
              'Iniciativas conjuntas de educação para profissionais, doentes e cuidadores em saúde renal.',
          },
          {
            name: 'Rede de apoio comunitário',
            type: 'Apoio social',
            description:
              'Articulação com estruturas de assistência e apoio para orientação do utente e família.',
          },
        ]
  const copy =
    language === 'en'
      ? {
          breadcrumb: 'Partners',
          title: 'Partners',
          subtitle:
            'CHPA works with institutional partners to strengthen quality care, clinical continuity and social support for kidney patients.',
          sectionTitle: 'Strategic collaboration areas',
          ctaTitle: 'Would you like to partner with CHPA?',
          ctaText:
            'Contact our team to discuss institutional agreements, technical projects and joint healthcare initiatives.',
          ctaPrimary: 'Contact partnerships',
          ctaSecondary: 'See events',
          sideTitle: 'Quick links',
          sideResearch: 'Scientific research',
          sideEvents: 'Events and technical meetings',
          sideContacts: 'General contacts',
        }
      : {
          breadcrumb: 'Parceiros',
          title: 'Parceiros',
          subtitle:
            'O CHPA trabalha com parceiros institucionais para reforçar cuidados de qualidade, continuidade clínica e apoio social ao doente renal.',
          sectionTitle: 'Áreas de colaboração estratégica',
          ctaTitle: 'Pretende estabelecer parceria com o CHPA?',
          ctaText:
            'Entre em contacto com a equipa para discutir convénios institucionais, projetos técnicos e iniciativas conjuntas em saúde.',
          ctaPrimary: 'Contactar parcerias',
          ctaSecondary: 'Ver eventos',
          sideTitle: 'Acesso rápido',
          sideResearch: 'Investigação científica',
          sideEvents: 'Eventos e encontros técnicos',
          sideContacts: 'Contactos gerais',
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
            src={eventosMedia.gathering}
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
              {partners.map((partner) => (
                <article
                  key={partner.name}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {partner.type}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{partner.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {partner.description}
                  </p>
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
                  to={paths.eventos}
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
                  <Link to={paths.investigacao} className="text-brand hover:underline">
                    {copy.sideResearch}
                  </Link>
                </li>
                <li>
                  <Link to={paths.eventos} className="text-brand hover:underline">
                    {copy.sideEvents}
                  </Link>
                </li>
                <li>
                  <Link to={paths.contactos} className="text-brand hover:underline">
                    {copy.sideContacts}
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
