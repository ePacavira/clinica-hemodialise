import { Link } from 'react-router-dom'
import { hospitalMedia } from '../data/siteMedia'
import { useI18n } from '../i18n/I18nContext'
import { paths } from '../routes/paths'

export function InvestigacaoPage() {
  const { language } = useI18n()
  const projects =
    language === 'en'
      ? [
          {
            title: 'Clinical outcomes in chronic hemodialysis',
            status: 'In progress',
            description:
              'Monitoring of key indicators related to treatment safety, adherence and continuity of care.',
          },
          {
            title: 'Vascular access pathway optimization',
            status: 'Recruiting',
            description:
              'Observational analysis focused on prevention of complications and durability of vascular access.',
          },
          {
            title: 'Kidney disease education and adherence',
            status: 'Planning',
            description:
              'Assessment of educational interventions and impact on patient engagement and therapeutic compliance.',
          },
        ]
      : [
          {
            title: 'Resultados clínicos em hemodiálise crónica',
            status: 'Em curso',
            description:
              'Monitorização de indicadores assistenciais ligados à segurança do tratamento, adesão e continuidade clínica.',
          },
          {
            title: 'Otimização do percurso de acesso vascular',
            status: 'Recrutamento',
            description:
              'Análise observacional com foco na prevenção de complicações e durabilidade do acesso vascular.',
          },
          {
            title: 'Educação renal e adesão terapêutica',
            status: 'Planeamento',
            description:
              'Avaliação de intervenções educativas e impacto no envolvimento do doente e cumprimento terapêutico.',
          },
        ]
  const copy =
    language === 'en'
      ? {
          breadcrumb: 'Scientific research',
          title: 'Scientific research',
          subtitle:
            'CHPA develops clinical and educational initiatives focused on quality indicators, patient safety and better outcomes in kidney care.',
          sectionTitle: 'Research lines',
          ctaTitle: 'Collaborate with CHPA research',
          ctaText:
            'Contact our team for partnerships, protocol development and technical collaboration opportunities.',
          ctaPrimary: 'Contact research team',
          ctaSecondary: 'See partners',
          sideTitle: 'Quick links',
          sideEvents: 'Events and technical meetings',
          sideSocial: 'Social support and community',
          sideContacts: 'General contacts',
        }
      : {
          breadcrumb: 'Investigação científica',
          title: 'Investigação científica',
          subtitle:
            'O CHPA desenvolve iniciativas clínicas e educativas orientadas por indicadores de qualidade, segurança do doente e melhoria de resultados em saúde renal.',
          sectionTitle: 'Linhas de investigação',
          ctaTitle: 'Colabore com a investigação do CHPA',
          ctaText:
            'Entre em contacto com a equipa para parcerias, desenvolvimento de protocolos e oportunidades de colaboração técnica.',
          ctaPrimary: 'Contactar equipa de investigação',
          ctaSecondary: 'Ver parceiros',
          sideTitle: 'Acesso rápido',
          sideEvents: 'Eventos e encontros técnicos',
          sideSocial: 'Apoio social e comunidade',
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
            src={hospitalMedia.hall13}
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
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {project.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {project.description}
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
                  to={paths.parceiros}
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
                    {copy.sideEvents}
                  </Link>
                </li>
                <li>
                  <Link to={paths.assistenciaSocial} className="text-brand hover:underline">
                    {copy.sideSocial}
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
