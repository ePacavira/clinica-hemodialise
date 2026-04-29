import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { teamBySpecialty } from '../data/content'
import { hospitalMedia } from '../data/siteMedia'
import { useI18n } from '../i18n/I18nContext'
import { paths } from '../routes/paths'

type ServiceContent = {
  title: string
  headingTag: string
  headingSubtitle: string
  quickStats: string[]
  intro: string
  body: string[]
  points: string[]
  consultations: string[]
  examsAndTreatments: string[]
  team: string[]
  interventionAreas: string[]
  whereToFind: string[]
  image: string
}

const serviceBySlug: Record<string, ServiceContent> = {
  nefrologia: {
    title: 'Nefrologia',
    headingTag: 'Especialidade',
    headingSubtitle:
      'Consulta e acompanhamento especializado da doença renal com avaliação contínua e plano terapêutico personalizado.',
    quickStats: ['Consulta especializada', 'Seguimento contínuo', 'Plano personalizado'],
    intro:
      'Consulta e seguimento especializado da doença renal, com avaliação clínica contínua e plano terapêutico personalizado.',
    body: [
      'A nefrologia dedica-se ao diagnóstico, prevenção e tratamento das doenças do sistema renal, com foco na estabilidade clínica e na qualidade de vida do doente.',
      'No CHPA, a abordagem é integrada com outras especialidades para definir estratégias terapêuticas adequadas a cada fase da doença.',
    ],
    points: [
      'Avaliação da função renal e estratificação de risco.',
      'Ajuste terapêutico e prevenção de progressão da DRC.',
      'Articulação com equipa multidisciplinar para continuidade de cuidados.',
    ],
    consultations: [
      'Consulta inicial com avaliação clínica e revisão de exames.',
      'Seguimento periódico conforme estádio da doença renal.',
      'Ajuste terapêutico e plano de prevenção de complicações.',
    ],
    examsAndTreatments: [
      'Painel laboratorial renal e metabólico.',
      'Avaliação de risco cardiovascular associada ao perfil renal.',
      'Tratamento farmacológico e orientação multidisciplinar.',
    ],
    team: ['Nefrologista', 'Enfermagem especializada', 'Nutrição clínica'],
    interventionAreas: ['Doença renal crónica', 'Hipertensão renal', 'Proteinúria e insuficiência renal'],
    whereToFind: ['CHPA - Luanda', 'Marcação online em /marcacao', 'Telefone: (+244) 222 380 296'],
    image: '/servicos/nefrologia.jpg',
  },
  hemodialise: {
    title: 'Hemodiálise',
    headingTag: 'Especialidade',
    headingSubtitle:
      'Tratamento de substituição renal com monitorização rigorosa, segurança clínica e foco no conforto do doente.',
    quickStats: ['Monitorização contínua', 'Protocolos seguros', 'Equipa dedicada'],
    intro:
      'Tratamento de substituição renal com monitorização rigorosa, segurança clínica e foco no conforto do doente.',
    body: [
      'A hemodiálise substitui parcialmente a função dos rins através de tecnologia e monitorização contínua por equipa especializada.',
      'O tratamento é ajustado de forma personalizada, respeitando parâmetros clínicos, exames e evolução do doente.',
    ],
    points: [
      'Protocolos clínicos alinhados a boas práticas internacionais.',
      'Vigilância de parâmetros durante toda a sessão.',
      'Integração com nefrologia e acessos vasculares.',
    ],
    consultations: [
      'Avaliação pré-diálise e definição de plano terapêutico.',
      'Acompanhamento regular em articulação com nefrologia.',
      'Revisão de adesão, sintomas e resposta clínica.',
    ],
    examsAndTreatments: [
      'Monitorização durante sessão de hemodiálise.',
      'Avaliação laboratorial de adequação dialítica.',
      'Gestão de complicações associadas ao tratamento.',
    ],
    team: ['Nefrologista', 'Enfermagem de hemodiálise', 'Cirurgia vascular'],
    interventionAreas: ['Hemodiálise crónica', 'Ajuste de sessões', 'Segurança e conforto assistencial'],
    whereToFind: ['CHPA - Unidade de diálise', 'Marcação via contactos', 'Atendimento em horário alargado'],
    image: '/servicos/hemodialise.jpg',
  },
  'acesso-vascular': {
    title: 'Acesso Vascular',
    headingTag: 'Especialidade',
    headingSubtitle:
      'Planeamento e manutenção de acessos vasculares para hemodiálise segura, eficiente e de longa duração.',
    quickStats: ['Fístula AV', 'Doppler', 'Preservação venosa'],
    intro:
      'Planeamento, criação e manutenção de acessos vasculares para hemodiálise segura e eficiente.',
    body: [
      'O acesso vascular é a via essencial para a realização da hemodiálise com eficácia e segurança.',
      'A equipa acompanha desde o planeamento até a vigilância contínua para maior durabilidade do acesso e menos complicações.',
    ],
    points: [
      'Mapeamento vascular e acompanhamento com Doppler.',
      'Fístula arteriovenosa e estratégias de preservação venosa.',
      'Seguimento técnico para maior durabilidade do acesso.',
    ],
    consultations: [
      'Consulta de acesso vascular com avaliação individual.',
      'Planeamento de fístula arteriovenosa e estratégia de longo prazo.',
      'Revisão periódica da funcionalidade do acesso.',
    ],
    examsAndTreatments: [
      'Ecografia Doppler para mapeamento e vigilância.',
      'Criação e manutenção de fístula arteriovenosa.',
      'Intervenção em disfunções do acesso quando indicado.',
    ],
    team: ['Cirurgia vascular', 'Nefrologia', 'Enfermagem especializada'],
    interventionAreas: ['FAV', 'Cateteres', 'Preservação venosa'],
    whereToFind: ['CHPA - Consulta de acessos vasculares', 'Referência interna da unidade', 'Atendimento por marcação'],
    image: hospitalMedia.unit7,
  },
  cardiologia: {
    title: 'Cardiologia',
    headingTag: 'Especialidade',
    headingSubtitle:
      'Avaliação cardiovascular integrada ao percurso do doente renal, com foco em prevenção e redução de risco.',
    quickStats: ['Avaliação de risco', 'Seguimento conjunto', 'Prevenção'],
    intro:
      'Avaliação cardiovascular integrada ao percurso do doente renal, com foco em redução de risco e prevenção.',
    body: [
      'A cardiologia no CHPA atua de forma articulada com a nefrologia para reduzir riscos cardiovasculares associados à doença renal.',
      'As decisões clínicas são alinhadas ao perfil de risco e ao plano terapêutico global do doente.',
    ],
    points: [
      'Estratificação de risco cardiovascular no doente renal.',
      'Monitorização e ajuste terapêutico em articulação com nefrologia.',
      'Acompanhamento preventivo em longo prazo.',
    ],
    consultations: [
      'Avaliação cardiológica inicial e seguimento.',
      'Interpretação de sinais e fatores de risco associados.',
      'Plano conjunto com nefrologia para continuidade clínica.',
    ],
    examsAndTreatments: [
      'Eletrocardiograma e exames de avaliação cardiovascular.',
      'Ajuste de terapêutica com monitorização regular.',
      'Estratégias de prevenção de eventos cardiovasculares.',
    ],
    team: ['Cardiologia', 'Nefrologia'],
    interventionAreas: ['Hipertensão', 'Insuficiência cardíaca', 'Prevenção cardiovascular'],
    whereToFind: ['CHPA - Apoio especializado', 'Consulta com agendamento prévio', 'Via marcação e referência clínica'],
    image: hospitalMedia.wide1,
  },
  nutricao: {
    title: 'Nutrição',
    headingTag: 'Especialidade',
    headingSubtitle:
      'Planos alimentares personalizados para apoiar o tratamento renal e otimizar resultados clínicos.',
    quickStats: ['Plano alimentar', 'Acompanhamento', 'Metas realistas'],
    intro:
      'Planos alimentares personalizados conforme estádio da doença renal, medicação e objetivos clínicos.',
    body: [
      'A nutrição clínica é parte fundamental do cuidado renal e contribui para controlo metabólico e melhor resposta terapêutica.',
      'Os planos alimentares são revistos periodicamente conforme evolução clínica e objetivos do tratamento.',
    ],
    points: [
      'Educação nutricional adaptada à condição clínica.',
      'Ajustes de dieta conforme exames e evolução terapêutica.',
      'Acompanhamento contínuo com metas realistas.',
    ],
    consultations: [
      'Consulta nutricional com avaliação de hábitos e objetivos.',
      'Plano alimentar adaptado ao contexto renal.',
      'Seguimento e revisão de resultados ao longo do tempo.',
    ],
    examsAndTreatments: [
      'Avaliação de parâmetros nutricionais e metabólicos.',
      'Ajustes dietéticos personalizados.',
      'Apoio em adesão alimentar durante o tratamento.',
    ],
    team: ['Nutricionista clínica', 'Nefrologia'],
    interventionAreas: ['DRC', 'Desequilíbrios metabólicos', 'Educação alimentar'],
    whereToFind: ['CHPA - Nutrição clínica', 'Agendamento via equipa assistencial', 'Acompanhamento integrado'],
    image: hospitalMedia.interior14,
  },
  psicologia: {
    title: 'Psicologia',
    headingTag: 'Especialidade',
    headingSubtitle:
      'Suporte emocional e comportamental para adaptação ao tratamento e fortalecimento da adesão terapêutica.',
    quickStats: ['Apoio emocional', 'Adesão terapêutica', 'Bem-estar'],
    intro:
      'Suporte emocional e comportamental para melhor adaptação ao tratamento e à rotina da doença crónica.',
    body: [
      'O apoio psicológico ajuda na gestão emocional da doença crónica e no fortalecimento da adesão terapêutica.',
      'A intervenção é centrada na pessoa, com estratégias práticas para o dia a dia do tratamento.',
    ],
    points: [
      'Apoio no enfrentamento emocional da DRC.',
      'Estratégias para adesão terapêutica e bem-estar.',
      'Intervenção individual e acompanhamento de longo prazo.',
    ],
    consultations: [
      'Consulta psicológica de avaliação e suporte.',
      'Acompanhamento emocional durante o percurso terapêutico.',
      'Intervenção focada em coping e adesão ao tratamento.',
    ],
    examsAndTreatments: [
      'Plano de apoio psicológico individual.',
      'Sessões de acompanhamento contínuo.',
      'Coordenação com equipa clínica quando necessário.',
    ],
    team: ['Psicologia clínica', 'Nefrologia', 'Enfermagem'],
    interventionAreas: ['Ansiedade e adaptação', 'Adesão terapêutica', 'Bem-estar emocional'],
    whereToFind: ['CHPA - Apoio psicológico', 'Marcação por referência interna', 'Atendimento com agendamento'],
    image: hospitalMedia.corridor2,
  },
  'medicina-intensiva': {
    title: 'Medicina Intensiva',
    headingTag: 'Especialidade',
    headingSubtitle:
      'Resposta clínica em cenários agudos com integração multidisciplinar e vigilância contínua.',
    quickStats: ['Resposta rápida', 'Vigilância', 'Coordenação'],
    intro:
      'Cuidados em situações agudas com avaliação rápida, estabilização e integração com as restantes especialidades.',
    body: [
      'A medicina intensiva garante resposta rápida em situações de maior complexidade clínica.',
      'A atuação é coordenada com as equipas assistenciais para continuidade e segurança do cuidado.',
    ],
    points: [
      'Resposta clínica coordenada em cenários críticos.',
      'Intervenção multidisciplinar e vigilância contínua.',
      'Articulação com internamento e follow-up.',
    ],
    consultations: [
      'Avaliação clínica em situações de maior gravidade.',
      'Definição de conduta imediata com equipa multidisciplinar.',
      'Planeamento de transição para seguimento clínico.',
    ],
    examsAndTreatments: [
      'Monitorização intensiva de parâmetros críticos.',
      'Intervenção terapêutica em contexto agudo.',
      'Reavaliação contínua da resposta ao tratamento.',
    ],
    team: ['Medicina intensiva', 'Nefrologia', 'Equipa multidisciplinar'],
    interventionAreas: ['Situações agudas', 'Estabilização clínica', 'Coordenação assistencial'],
    whereToFind: ['CHPA - Referência clínica interna', 'Encaminhamento por equipa médica', 'Atendimento conforme indicação'],
    image: hospitalMedia.hall13,
  },
  'cuidados-domiciliarios': {
    title: 'Cuidados Domiciliários',
    headingTag: 'Especialidade',
    headingSubtitle:
      'Acompanhamento no domicílio quando indicado, reforçando proximidade e continuidade assistencial.',
    quickStats: ['Visitas programadas', 'Coordenação clínica', 'Conforto do doente'],
    intro:
      'Acompanhamento clínico no domicílio quando indicado, reforçando continuidade terapêutica e proximidade.',
    body: [
      'Os cuidados domiciliários permitem seguimento próximo de doentes com indicação médica específica.',
      'A equipa coordena visitas e monitorização para reforçar segurança, conforto e adesão ao plano terapêutico.',
    ],
    points: [
      'Plano de visitas e seguimento de acordo com avaliação médica.',
      'Coordenação com equipa clínica da unidade.',
      'Foco em segurança, adesão e conforto do doente.',
    ],
    consultations: [
      'Avaliação de elegibilidade para seguimento domiciliário.',
      'Definição de plano de visitas e objetivos clínicos.',
      'Revisão periódica com equipa da unidade.',
    ],
    examsAndTreatments: [
      'Monitorização de sinais e estado clínico em casa.',
      'Ajustes terapêuticos com orientação da equipa.',
      'Encaminhamento para unidade quando necessário.',
    ],
    team: ['Equipa domiciliária', 'Nefrologia', 'Enfermagem'],
    interventionAreas: ['Seguimento no domicílio', 'Continuidade assistencial', 'Apoio à família'],
    whereToFind: ['CHPA - Programa domiciliário', 'Ativação por avaliação médica', 'Coordenação central na unidade'],
    image: hospitalMedia.wide0,
  },
}

export function ServiceDetailPage() {
  const { language } = useI18n()
  const [searchParams, setSearchParams] = useSearchParams()
  const { serviceId } = useParams<{ serviceId: string }>()
  const service = serviceId ? serviceBySlug[serviceId] : undefined
  const relatedServices = Object.entries(serviceBySlug)
    .filter(([slug]) => slug !== serviceId)
    .slice(0, 6)
  const sectionTabs =
    language === 'en'
      ? [
          { id: 'o-que-e', label: 'What it is' },
          { id: 'consultas', label: 'Appointments' },
          { id: 'exames', label: 'Tests and treatment' },
          { id: 'equipa', label: 'Clinical team' },
          { id: 'areas', label: 'Intervention areas' },
          { id: 'onde', label: 'Where to find' },
        ]
      : [
          { id: 'o-que-e', label: 'O que é' },
          { id: 'consultas', label: 'Consultas' },
          { id: 'exames', label: 'Exames e tratamentos' },
          { id: 'equipa', label: 'Equipa clínica' },
          { id: 'areas', label: 'Áreas de intervenção' },
          { id: 'onde', label: 'Onde encontrar' },
        ]
  const tabIds = new Set(sectionTabs.map((tab) => tab.id))
  const activeTabParam = searchParams.get('sec') ?? 'o-que-e'
  const activeTab = tabIds.has(activeTabParam) ? activeTabParam : 'o-que-e'
  const tabCopy =
    language === 'en'
      ? {
          appointmentsLead:
            'Appointments are organized by clinical priority and patient profile, ensuring clear follow-up and coordinated decisions.',
          appointmentsNote:
            'At each visit, the team reviews symptoms, lab trends and treatment response to keep care safe and effective.',
          examsLead:
            'Tests and treatments are selected according to current condition, previous results and therapeutic goals defined with the patient.',
          examsNote:
            'Whenever needed, the plan is adjusted with multidisciplinary input to improve outcomes and long-term stability.',
          teamLead:
            'Care is delivered by a multidisciplinary team with aligned protocols and shared clinical communication.',
          teamNote:
            'This integrated model reduces gaps between specialties and strengthens continuity in all treatment stages.',
          areasLead:
            'Intervention areas define the most frequent clinical scenarios managed by this specialty in the CHPA pathway.',
          areasNote:
            'These areas are reviewed over time based on patient evolution and risk profile.',
          whereLead:
            'This service is available through CHPA channels, with guidance for scheduling and care flow navigation.',
          whereNote:
            'Our team can help you choose the best access route according to urgency and follow-up needs.',
          processTitle: 'How the pathway works',
          processSteps: [
            'Initial assessment and clinical prioritization',
            'Definition of treatment and monitoring plan',
            'Follow-up with periodic reassessment',
          ],
        }
      : {
          appointmentsLead:
            'As consultas são organizadas por prioridade clínica e perfil do doente, garantindo seguimento estruturado e decisões coordenadas.',
          appointmentsNote:
            'Em cada visita, a equipa revê sintomas, tendência dos exames e resposta terapêutica para manter segurança e eficácia.',
          examsLead:
            'Os exames e tratamentos são definidos conforme condição atual, histórico clínico e objetivos terapêuticos acordados com o doente.',
          examsNote:
            'Sempre que necessário, o plano é ajustado com suporte multidisciplinar para melhores resultados e maior estabilidade.',
          teamLead:
            'O atendimento é realizado por equipa multidisciplinar, com protocolos alinhados e comunicação clínica contínua.',
          teamNote:
            'Este modelo integrado reduz falhas entre especialidades e reforça a continuidade em todas as fases do cuidado.',
          areasLead:
            'As áreas de intervenção representam os cenários clínicos mais frequentes acompanhados por esta especialidade no CHPA.',
          areasNote:
            'Estas áreas são reavaliadas ao longo do tempo conforme evolução e perfil de risco de cada doente.',
          whereLead:
            'Este serviço está disponível pelos canais do CHPA, com orientação sobre marcação e percurso assistencial adequado.',
          whereNote:
            'A equipa ajuda a identificar a melhor via de acesso conforme urgência e necessidade de seguimento.',
          processTitle: 'Como funciona o percurso',
          processSteps: [
            'Avaliação inicial e priorização clínica',
            'Definição do plano terapêutico e de vigilância',
            'Acompanhamento com reavaliação periódica',
          ],
        }

  if (!service) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <h1 className="text-3xl font-bold text-slate-900">
            {language === 'en' ? 'Service not found' : 'Serviço não encontrado'}
          </h1>
          <Link to={paths.servicos} className="mt-4 inline-block text-brand hover:underline">
            {language === 'en' ? 'Back to services' : 'Voltar para serviços'}
          </Link>
        </div>
      </section>
    )
  }

  const specialtyByServiceSlug: Record<string, string> = {
    nefrologia: 'Nefrologia',
    hemodialise: 'Nefrologia',
    psicologia: 'Psicologia',
    cardiologia: 'Cardiologia',
    nutricao: 'Nutrição',
    'medicina-intensiva': 'Medicina Intensiva',
    'acesso-vascular': 'Cirurgia Vascular',
    'cuidados-domiciliarios': 'Nefrologia',
  }
  const mappedSpecialty = serviceId ? specialtyByServiceSlug[serviceId] : undefined
  const specialtyName = mappedSpecialty ?? service.title
  const specialists =
    teamBySpecialty.find((entry) => entry.specialty === specialtyName)?.members ?? []
  const [selectedSpecialist, setSelectedSpecialist] = useState(specialists[0] ?? '')

  useEffect(() => {
    setSelectedSpecialist(specialists[0] ?? '')
  }, [specialists, serviceId])

  const bookingParams = new URLSearchParams()
  bookingParams.set('especialidade', specialtyName)
  if (selectedSpecialist) {
    bookingParams.set('especialista', selectedSpecialist)
  }
  const bookingLink = `${paths.marcacao}?${bookingParams.toString()}`

  return (
    <section className="bg-[#f4f7fb] pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-8 md:px-6">
        <div className="mb-3 text-xs text-slate-500">
          <Link to={paths.servicos} className="hover:underline">
            {language === 'en' ? 'Services' : 'Serviços'}
          </Link>{' '}
          / <span className="font-medium text-slate-700">{service.title}</span>
        </div>

        <div className="relative overflow-hidden border border-slate-200 bg-white">
          <img src={service.image} alt="" className="h-[220px] w-full object-cover md:h-[320px]" />
          <div className="absolute inset-0 bg-slate-900/30" />
          <div className="absolute inset-0 flex items-center p-6 md:p-10">
            <div>
              <p className="text-sm font-semibold text-brand-light">
                {language === 'en' ? 'Specialty' : service.headingTag}
              </p>
              <h1 className="mt-1 text-3xl font-normal text-white md:text-5xl">{service.title}</h1>
              <p className="mt-3 max-w-2xl text-sm text-white/95 md:text-base">
                {service.headingSubtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.quickStats.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/35 bg-black/20 px-3 py-1 text-xs font-semibold text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-slate-300 bg-white">
          <div className="flex w-full overflow-x-auto">
            {sectionTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSearchParams({ sec: tab.id })}
                className={`min-w-[170px] shrink-0 px-3 py-3 text-center text-xs md:text-sm ${
                  activeTab === tab.id
                    ? 'border-b-2 border-brand font-semibold text-slate-800'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <section className="rounded-xl border border-slate-200 bg-white p-6 md:p-8">
              {activeTab === 'o-que-e' ? (
                <>
                  <p className="text-justify text-base leading-relaxed text-slate-700">
                    {service.intro}
                  </p>
                  {service.body.map((paragraph) => (
                    <p key={paragraph} className="mt-6 text-justify text-base leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                  <ul className="mt-6 list-disc space-y-1.5 pl-5 text-base text-slate-600">
                    {service.points.map((point) => (
                      <li key={point} className="text-justify leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {activeTab === 'consultas' ? (
                <>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {language === 'en' ? 'Appointments' : 'Consultas'}
                  </h2>
                  <p className="mt-4 text-justify text-base leading-relaxed text-slate-600">
                    {tabCopy.appointmentsLead}
                  </p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-base text-slate-600">
                    {service.consultations.map((item) => (
                      <li key={item} className="text-justify leading-relaxed">{item}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-justify text-base leading-relaxed text-slate-600">
                    {tabCopy.appointmentsNote}
                  </p>
                </>
              ) : null}

              {activeTab === 'exames' ? (
                <>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {language === 'en' ? 'Tests and treatment' : 'Exames e tratamentos'}
                  </h2>
                  <p className="mt-4 text-justify text-base leading-relaxed text-slate-600">
                    {tabCopy.examsLead}
                  </p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-base text-slate-600">
                    {service.examsAndTreatments.map((item) => (
                      <li key={item} className="text-justify leading-relaxed">{item}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-justify text-base leading-relaxed text-slate-600">
                    {tabCopy.examsNote}
                  </p>
                </>
              ) : null}

              {activeTab === 'equipa' ? (
                <>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {language === 'en' ? 'Clinical team' : 'Equipa clínica'}
                  </h2>
                  <p className="mt-4 text-justify text-base leading-relaxed text-slate-600">
                    {tabCopy.teamLead}
                  </p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-base text-slate-600">
                    {service.team.map((item) => (
                      <li key={item} className="text-justify leading-relaxed">{item}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-justify text-base leading-relaxed text-slate-600">
                    {tabCopy.teamNote}
                  </p>
                </>
              ) : null}

              {activeTab === 'areas' ? (
                <>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {language === 'en' ? 'Intervention areas' : 'Áreas de intervenção'}
                  </h2>
                  <p className="mt-4 text-justify text-base leading-relaxed text-slate-600">
                    {tabCopy.areasLead}
                  </p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-base text-slate-600">
                    {service.interventionAreas.map((item) => (
                      <li key={item} className="text-justify leading-relaxed">{item}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-justify text-base leading-relaxed text-slate-600">
                    {tabCopy.areasNote}
                  </p>
                </>
              ) : null}

              {activeTab === 'onde' ? (
                <>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {language === 'en' ? 'Where to find' : 'Onde encontrar'}
                  </h2>
                  <p className="mt-4 text-justify text-base leading-relaxed text-slate-600">
                    {tabCopy.whereLead}
                  </p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-base text-slate-600">
                    {service.whereToFind.map((item) => (
                      <li key={item} className="text-justify leading-relaxed">{item}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-justify text-base leading-relaxed text-slate-600">
                    {tabCopy.whereNote}
                  </p>
                </>
              ) : null}
            </section>

            {activeTab !== 'o-que-e' ? (
              <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-semibold text-slate-900">
                  {tabCopy.processTitle}
                </h3>
                <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-base text-slate-600">
                  {tabCopy.processSteps.map((step) => (
                    <li key={step} className="text-justify leading-relaxed">{step}</li>
                  ))}
                </ol>
              </section>
            ) : null}
          </article>

          <aside className="space-y-5 lg:col-span-4">
            <div className="border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">
                {language === 'en'
                  ? `Specialists in ${specialtyName}`
                  : `Especialistas de ${specialtyName}`}
              </h3>
              {specialists.length > 0 ? (
                <div className="mt-4 space-y-3">
                  <label className="block text-sm font-semibold text-slate-700">
                    {language === 'en' ? 'Book with:' : 'Marcar com:'}
                  </label>
                  <select
                    value={selectedSpecialist}
                    onChange={(e) => setSelectedSpecialist(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand"
                  >
                    {specialists.map((specialist) => (
                      <option key={specialist} value={specialist}>
                        {specialist}
                      </option>
                    ))}
                  </select>
                  <Link
                    to={bookingLink}
                    className="inline-flex w-full items-center justify-center rounded-full border border-[#d8c063] px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-[#fff9e5]"
                  >
                    {language === 'en' ? 'Continue booking' : 'Continuar marcação'}
                  </Link>
                </div>
              ) : (
                <Link
                  to={bookingLink}
                  className="mt-4 inline-flex rounded-full border border-[#d8c063] px-6 py-2 text-sm font-semibold text-slate-700 hover:bg-[#fff9e5]"
                >
                  {language === 'en'
                    ? `Book with ${service.title} specialist`
                    : `Marcar com especialista de ${service.title}`}
                </Link>
              )}
            </div>

            <div className="border-t border-slate-300 pt-4">
              <h4 className="text-2xl font-light text-slate-800">
                {language === 'en' ? 'See also' : 'Conheça também'}
              </h4>
              <ul className="mt-4 space-y-1.5 text-sm">
                {relatedServices.map(([slug, related]) => (
                  <li key={slug}>
                    <Link to={`${paths.servicos}/${slug}`} className="text-brand hover:underline">
                      {related.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

