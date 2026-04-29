import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { hospitalMedia } from '../data/siteMedia'
import { useI18n } from '../i18n/I18nContext'
import { paths } from '../routes/paths'

type AboutSubpageType =
  | 'sobre'
  | 'historia'
  | 'direcao'
  | 'qualidade'
  | 'privacidade'
  | 'educacao'

type Props = {
  type: AboutSubpageType
}

export function AboutSubpage({ type }: Props) {
  const { language } = useI18n()
  const [searchParams, setSearchParams] = useSearchParams()

  const copy =
    language === 'en'
      ? {
          breadcrumb: 'About us',
          tabAbout: 'About us',
          tabHistory: 'History',
          tabBoard: 'Board',
          tabQuality: 'Quality and safety',
          tabPrivacy: 'Privacy policy',
          tabEducation: 'Health education',
          cta: 'Book appointment',
          relatedTitle: 'Related pages',
          relatedTeam: 'Clinical team',
          relatedUnits: 'Units',
          relatedContact: 'Contacts',
          historyTitle: 'History',
          historyIntro:
            'CHPA was created to respond to growing demand for specialized kidney care in Luanda, with a strong focus on safety, access and continuity.',
          historyP1:
            'Since the beginning, our commitment has been to combine technical quality and a humanized model of care, integrating nephrology, hemodialysis and vascular access in the same clinical pathway.',
          historyP2:
            'Over time, the center expanded the multidisciplinary team and consolidated protocols aligned with international practice to improve outcomes and patient quality of life.',
          boardTitle: 'Board',
          boardIntro:
            'CHPA leadership combines clinical and operational experience to ensure sustainable growth, quality governance and patient-centered decisions.',
          boardP1:
            'The board works in close coordination with medical leadership and the care teams to guarantee service excellence and continuous quality improvement.',
          boardP2:
            'Priorities include safe access to treatment, digital process strengthening and ongoing technical training of all professionals involved.',
          boardPeopleTitle: 'Key leadership areas',
          boardPeopleItems: [
            'Clinical direction and care quality',
            'Vascular access and integrated nephrology pathway',
            'Operations, safety and patient experience',
          ],
          aboutTitle: 'About us',
          aboutIntro:
            'CHPA is a specialized center focused on kidney care, combining clinical quality, safety and humanized follow-up in Luanda.',
          aboutP1:
            'We integrate nephrology, hemodialysis and vascular access with multidisciplinary support to deliver continuous care pathways.',
          aboutP2:
            'Our model emphasizes evidence-based decisions, patient proximity and long-term monitoring adapted to each clinical profile.',
          qualityTitle: 'Quality and safety',
          qualityIntro:
            'CHPA follows a structured quality framework focused on patient safety, protocol compliance and measurable clinical outcomes.',
          qualityP1:
            'Processes are monitored continuously through internal indicators, regular reviews and multidisciplinary alignment across all care pathways.',
          qualityP2:
            'Our quality culture values prevention, traceability and transparency to ensure safer and more consistent care delivery.',
          qualityHighlightsTitle: 'Quality pillars',
          qualityHighlights: [
            'Patient safety and risk mitigation',
            'Clinical governance based on indicators',
            'Continuous protocol review and improvement',
            'Training and technical alignment of teams',
          ],
          privacyTitle: 'Privacy policy',
          privacyIntro:
            'CHPA protects personal and clinical data according to confidentiality principles, secure access and responsible information use.',
          privacyP1:
            'Data is processed only for care, operational and legal purposes, with controlled access by authorized professionals.',
          privacyP2:
            'Patients may request information, updates or corrections to their records through official contact channels.',
          privacyHighlightsTitle: 'Privacy commitments',
          privacyHighlights: [
            'Confidential treatment of personal and clinical data',
            'Access control by profile and professional need',
            'Secure storage and traceable data handling',
            'Support for data owner requests through official channels',
          ],
          educationTitle: 'Health education',
          educationIntro:
            'Health education at CHPA promotes informed decisions, prevention and active patient participation throughout the care journey.',
          educationP1:
            'We provide practical guidance on kidney health, treatment adherence, vascular access care and lifestyle support tailored to each clinical context.',
          educationP2:
            'Educational content is developed with clinical teams to ensure technical reliability, clear language and usefulness for patients and families.',
          educationHighlightsTitle: 'Education focus areas',
          educationHighlights: [
            'Kidney disease literacy and treatment understanding',
            'Adherence to medication and clinical follow-up',
            'Vascular access daily care and warning signs',
            'Nutrition, prevention and lifestyle guidance',
          ],
        }
      : {
          breadcrumb: 'Sobre nós',
          tabAbout: 'Sobre nós',
          tabHistory: 'História',
          tabBoard: 'Direção',
          tabQuality: 'Qualidade e segurança',
          tabPrivacy: 'Política de privacidade',
          tabEducation: 'Educação em saúde',
          cta: 'Marcação de consulta',
          relatedTitle: 'Páginas relacionadas',
          relatedTeam: 'Equipa clínica',
          relatedUnits: 'Unidades',
          relatedContact: 'Contactos',
          historyTitle: 'História',
          historyIntro:
            'O CHPA surge para responder à crescente necessidade de cuidados renais especializados em Luanda, com uma visão centrada em segurança clínica, acesso qualificado e continuidade assistencial.',
          historyP1:
            'Desde a sua criação, o centro assume o compromisso de unir excelência técnica e cuidado humanizado, integrando nefrologia, hemodiálise e acessos vasculares num percurso clínico coeso e orientado para o doente.',
          historyP2:
            'Ao longo da sua evolução, o CHPA consolidou equipas multidisciplinares, fortaleceu protocolos alinhados às melhores práticas internacionais e ampliou a capacidade de resposta, com impacto direto nos resultados clínicos e na qualidade de vida dos doentes.',
          boardTitle: 'Direção',
          boardIntro:
            'A direção do CHPA reúne experiência clínica e operacional para garantir crescimento sustentável, governação de qualidade e decisões centradas no doente.',
          boardP1:
            'A liderança atua em articulação próxima com coordenação médica e equipas assistenciais, assegurando excelência no atendimento e melhoria contínua dos processos de qualidade.',
          boardP2:
            'Entre as prioridades estão o acesso seguro ao tratamento, o reforço do canal digital e a formação técnica contínua dos profissionais envolvidos no cuidado renal.',
          boardPeopleTitle: 'Áreas-chave da direção',
          boardPeopleItems: [
            'Direção clínica e qualidade assistencial',
            'Coordenação de acessos vasculares e percurso do doente renal',
            'Gestão operacional, segurança e experiência do utente',
          ],
          aboutTitle: 'Sobre nós',
          aboutIntro:
            'O CHPA é um centro especializado em saúde renal, criado para responder com excelência clínica, segurança assistencial e cuidado humanizado às necessidades da população em Luanda.',
          aboutP1:
            'A nossa atuação integra nefrologia, hemodiálise e acessos vasculares num percurso assistencial contínuo, apoiado por equipa multidisciplinar e protocolos clínicos alinhados às melhores práticas internacionais.',
          aboutP2:
            'Privilegiamos decisões baseadas em evidência, proximidade com o doente e monitorização de longo prazo ajustada a cada perfil clínico, com foco em resultados sustentáveis, qualidade de vida e confiança em todas as fases do tratamento.',
          qualityTitle: 'Qualidade e segurança',
          qualityIntro:
            'O CHPA adota um modelo estruturado de qualidade, com foco em segurança do doente, cumprimento de protocolos e melhoria contínua dos resultados clínicos.',
          qualityP1:
            'Os processos assistenciais são monitorizados com indicadores internos, revisão periódica e articulação multidisciplinar em todo o percurso do utente.',
          qualityP2:
            'A cultura de qualidade privilegia prevenção de riscos, rastreabilidade e transparência para garantir cuidados mais seguros e consistentes.',
          qualityHighlightsTitle: 'Pilares de qualidade',
          qualityHighlights: [
            'Segurança do doente e mitigação de risco',
            'Governação clínica orientada por indicadores',
            'Revisão e melhoria contínua de protocolos',
            'Formação e alinhamento técnico das equipas',
          ],
          privacyTitle: 'Política de privacidade',
          privacyIntro:
            'O CHPA protege os dados pessoais e clínicos dos utentes com base em princípios de confidencialidade, segurança de acesso e uso responsável da informação.',
          privacyP1:
            'Os dados são tratados apenas para fins assistenciais, operacionais e legais, com acesso restrito a profissionais autorizados.',
          privacyP2:
            'O utente pode solicitar informações, atualização ou correção de dados através dos canais oficiais de contacto.',
          privacyHighlightsTitle: 'Compromissos de privacidade',
          privacyHighlights: [
            'Tratamento confidencial de dados pessoais e clínicos',
            'Controlo de acesso por perfil e necessidade profissional',
            'Armazenamento seguro e rastreabilidade da informação',
            'Apoio ao titular para pedidos pelos canais oficiais',
          ],
          educationTitle: 'Educação em saúde',
          educationIntro:
            'A educação em saúde no CHPA reforça decisões informadas, prevenção e participação ativa do doente ao longo de todo o percurso assistencial.',
          educationP1:
            'Disponibilizamos orientações práticas sobre saúde renal, adesão terapêutica, cuidados com o acesso vascular e hábitos de vida ajustados ao contexto clínico de cada pessoa.',
          educationP2:
            'Os conteúdos educativos são construídos em articulação com as equipas clínicas para garantir rigor técnico, linguagem clara e utilidade para doentes e familiares.',
          educationHighlightsTitle: 'Focos da educação em saúde',
          educationHighlights: [
            'Literacia em saúde renal e compreensão do tratamento',
            'Adesão terapêutica e seguimento clínico',
            'Cuidados diários com acesso vascular e sinais de alerta',
            'Orientação nutricional, prevenção e estilo de vida',
          ],
        }

  const defaultTab =
    type === 'direcao'
      ? 'direcao'
      : type === 'historia'
        ? 'historia'
        : type === 'qualidade'
          ? 'qualidade'
          : type === 'privacidade'
            ? 'privacidade'
            : type === 'educacao'
              ? 'educacao'
            : 'sobre'
  const tabParam = searchParams.get('sec')
  const activeTab =
    tabParam === 'sobre' ||
    tabParam === 'historia' ||
    tabParam === 'direcao' ||
    tabParam === 'qualidade' ||
    tabParam === 'privacidade' ||
    tabParam === 'educacao'
      ? tabParam
      : defaultTab
  const title =
    activeTab === 'historia'
      ? copy.historyTitle
      : activeTab === 'direcao'
        ? copy.boardTitle
        : activeTab === 'qualidade'
          ? copy.qualityTitle
          : activeTab === 'privacidade'
            ? copy.privacyTitle
            : activeTab === 'educacao'
              ? copy.educationTitle
        : copy.aboutTitle
  const intro =
    activeTab === 'historia'
      ? copy.historyIntro
      : activeTab === 'direcao'
        ? copy.boardIntro
        : activeTab === 'qualidade'
          ? copy.qualityIntro
          : activeTab === 'privacidade'
            ? copy.privacyIntro
            : activeTab === 'educacao'
              ? copy.educationIntro
        : copy.aboutIntro
  const p1 =
    activeTab === 'historia'
      ? copy.historyP1
      : activeTab === 'direcao'
        ? copy.boardP1
        : activeTab === 'qualidade'
          ? copy.qualityP1
          : activeTab === 'privacidade'
            ? copy.privacyP1
            : activeTab === 'educacao'
              ? copy.educationP1
        : copy.aboutP1
  const p2 =
    activeTab === 'historia'
      ? copy.historyP2
      : activeTab === 'direcao'
        ? copy.boardP2
        : activeTab === 'qualidade'
          ? copy.qualityP2
          : activeTab === 'privacidade'
            ? copy.privacyP2
            : activeTab === 'educacao'
              ? copy.educationP2
        : copy.aboutP2
  const heroImageByTab: Record<
    'sobre' | 'historia' | 'direcao' | 'qualidade' | 'privacidade' | 'educacao',
    { src: string; alt: string }
  > = {
    sobre: {
      src: hospitalMedia.wide0,
      alt:
        language === 'en'
          ? 'Healthcare professionals in a modern clinical environment'
          : 'Profissionais de saúde em ambiente clínico moderno',
    },
    historia: {
      src: hospitalMedia.hall12,
      alt:
        language === 'en'
          ? 'Institutional building representing CHPA history'
          : 'Edifício institucional representando a história do CHPA',
    },
    direcao: {
      src: hospitalMedia.hall13,
      alt:
        language === 'en'
          ? 'Leadership team in a strategic meeting'
          : 'Equipa de direção em reunião estratégica',
    },
    qualidade: {
      src: hospitalMedia.interior14,
      alt:
        language === 'en'
          ? 'Clinical quality and safety process review'
          : 'Revisão de processos de qualidade e segurança clínica',
    },
    privacidade: {
      src: hospitalMedia.corridor2,
      alt:
        language === 'en'
          ? 'Data privacy and security concept'
          : 'Conceito de privacidade e segurança de dados',
    },
    educacao: {
      src: hospitalMedia.unit6,
      alt:
        language === 'en'
          ? 'Health education session between professional and patient'
          : 'Sessão de educação em saúde entre profissional e doente',
    },
  }
  const heroImage = heroImageByTab[activeTab as keyof typeof heroImageByTab]
  const [displayedHeroImage, setDisplayedHeroImage] = useState(heroImage)
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    // Pré-carrega todas as imagens do hero para tornar a troca entre abas imediata.
    Object.values(heroImageByTab).forEach((imageData) => {
      const img = new Image()
      img.src = imageData.src
      img.decoding = 'async'
    })
  }, [language])

  useEffect(() => {
    if (displayedHeroImage.src === heroImage.src) return

    setHeroVisible(false)
    const preload = new Image()
    preload.src = heroImage.src
    preload.decoding = 'async'
    preload.onload = () => {
      setDisplayedHeroImage(heroImage)
      // Aguarda um frame para aplicar transição de opacidade corretamente.
      requestAnimationFrame(() => setHeroVisible(true))
    }
  }, [heroImage, displayedHeroImage.src])

  return (
    <section className="bg-[#f4f7fb] pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-6 md:px-6 md:pt-8">
        <div className="mb-3 text-xs text-slate-500">
          <Link to={paths.quemSomos} className="hover:underline">
            {copy.breadcrumb}
          </Link>{' '}
          / <span className="font-medium text-slate-700">{title}</span>
        </div>

        <div className="relative overflow-hidden border border-slate-200 bg-white">
          <img
            src={displayedHeroImage.src}
            alt={displayedHeroImage.alt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className={`h-[240px] w-full object-cover object-[center_100%] transition-opacity duration-300 ease-out md:h-[320px] ${
              heroVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-slate-900/35" />
          <div className="absolute inset-0 flex items-end p-6 md:p-10">
            <h1 className="text-3xl font-bold text-white drop-shadow-sm md:text-5xl">
              {title}
            </h1>
          </div>
        </div>

        <div className="mt-4 border-b border-slate-300 bg-white">
          <div className="flex w-full overflow-x-auto text-center text-sm">
            <button
              type="button"
              onClick={() => setSearchParams({ sec: 'sobre' })}
              className={`min-w-[170px] shrink-0 px-4 py-3 ${
                activeTab === 'sobre'
                  ? 'border-b-2 border-brand font-semibold text-brand'
                  : 'text-slate-600 hover:text-brand'
              }`}
            >
              {copy.tabAbout}
            </button>
            <button
              type="button"
              onClick={() => setSearchParams({ sec: 'historia' })}
              className={`min-w-[170px] shrink-0 px-4 py-3 ${
                activeTab === 'historia'
                  ? 'border-b-2 border-brand font-semibold text-brand'
                  : 'text-slate-600 hover:text-brand'
              }`}
            >
              {copy.tabHistory}
            </button>
            <button
              type="button"
              onClick={() => setSearchParams({ sec: 'direcao' })}
              className={`min-w-[170px] shrink-0 px-4 py-3 ${
                activeTab === 'direcao'
                  ? 'border-b-2 border-brand font-semibold text-brand'
                  : 'text-slate-600 hover:text-brand'
              }`}
            >
              {copy.tabBoard}
            </button>
            <button
              type="button"
              onClick={() => setSearchParams({ sec: 'qualidade' })}
              className={`min-w-[170px] shrink-0 px-4 py-3 ${
                activeTab === 'qualidade'
                  ? 'border-b-2 border-brand font-semibold text-brand'
                  : 'text-slate-600 hover:text-brand'
              }`}
            >
              {copy.tabQuality}
            </button>
            <button
              type="button"
              onClick={() => setSearchParams({ sec: 'privacidade' })}
              className={`min-w-[170px] shrink-0 px-4 py-3 ${
                activeTab === 'privacidade'
                  ? 'border-b-2 border-brand font-semibold text-brand'
                  : 'text-slate-600 hover:text-brand'
              }`}
            >
              {copy.tabPrivacy}
            </button>
            <button
              type="button"
              onClick={() => setSearchParams({ sec: 'educacao' })}
              className={`min-w-[170px] shrink-0 px-4 py-3 ${
                activeTab === 'educacao'
                  ? 'border-b-2 border-brand font-semibold text-brand'
                  : 'text-slate-600 hover:text-brand'
              }`}
            >
              {copy.tabEducation}
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-slate-700">{intro}</p>
            <p className="mt-6 text-base leading-relaxed text-slate-600">{p1}</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{p2}</p>

            {activeTab === 'direcao' ? (
              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  {copy.boardPeopleTitle}
                </h2>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-700">
                  {copy.boardPeopleItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {activeTab === 'qualidade' ? (
              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  {copy.qualityHighlightsTitle}
                </h2>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-700">
                  {copy.qualityHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {activeTab === 'privacidade' ? (
              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  {copy.privacyHighlightsTitle}
                </h2>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-700">
                  {copy.privacyHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {activeTab === 'educacao' ? (
              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  {copy.educationHighlightsTitle}
                </h2>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-700">
                  {copy.educationHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>

          <aside className="space-y-5 lg:col-span-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <Link
                to={paths.marcacao}
                className="inline-flex w-full items-center justify-center rounded-full border border-brand/30 px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand/5"
              >
                {copy.cta}
              </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                {copy.relatedTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to={paths.equipa} className="text-brand hover:underline">
                    {copy.relatedTeam}
                  </Link>
                </li>
                <li>
                  <Link to={paths.unidades} className="text-brand hover:underline">
                    {copy.relatedUnits}
                  </Link>
                </li>
                <li>
                  <Link to={paths.contactos} className="text-brand hover:underline">
                    {copy.relatedContact}
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

