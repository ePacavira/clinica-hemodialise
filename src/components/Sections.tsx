import {
  Activity,
  Apple,
  Brain,
  ExternalLink,
  Heart,
  HeartPulse,
  Home,
  MapPin,
  MonitorSmartphone,
  Phone,
  Siren,
  Stethoscope,
  Video,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  bookingSpecialties,
  news,
  services,
  teamBySpecialty,
  units,
} from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { paths, servicePath, serviceSlugs } from '../routes/paths'

const iconMap = {
  Stethoscope,
  Siren,
  Activity,
  MonitorSmartphone,
  HeartPulse,
  Heart,
  Apple,
  Brain,
  Home,
} as const

export function HeroSection() {
  return (
    <section className="bg-linear-to-br from-white via-[#f5f9ff] to-[#eef4ff] py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-4 md:grid-cols-12 md:px-6">
        <div className="md:col-span-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">
            CHPA — Centro de Hemodiálise Pluribus Africa
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Cuidado integral para a saúde renal e acesso vascular
          </h1>
          <p className="mt-5 max-w-[560px] text-base text-slate-500">
            Hemodiálise de referência, nefrologia, cirurgia vascular e
            acompanhamento multidisciplinar — com equipa dedicada e infraestrutura
            moderna em Luanda.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={paths.marcacao}
              className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 font-semibold text-white transition duration-300 hover:bg-brand-dark"
            >
              Marcar Consulta
            </Link>
            <Link
              to={paths.servicos}
              className="inline-flex items-center justify-center rounded-lg border border-brand px-6 py-3 font-semibold text-brand transition duration-300 hover:bg-blue-50"
            >
              Conhecer Serviços
            </Link>
          </div>
        </div>

        <div className="md:col-span-6">
          <img
            src="https://images.unsplash.com/photo-1666214280780-f8b87ef77f6f?auto=format&fit=crop&w=1200&q=80"
            alt="Equipa e ambiente de cuidados de saúde no CHPA"
            className="h-[420px] w-full rounded-2xl object-cover shadow-lg"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="border-t border-slate-100 bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Quem somos
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-slate-600">
              O CHPA oferece tratamento humanizado e excelência em hemodiálise e
              nefrologia, com protocolos alinhados às melhores práticas
              internacionais. A nossa visão é ser referência em cuidados renais
              em Angola, pautados por ética, inovação e respeito pelo utente.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Integramos uma equipa multidisciplinar: nefrologistas,
              cardiologistas, nutricionista, psicologia e cirurgiã de acessos
              vasculares — para uma abordagem completa à doença renal e aos
              desafios do tratamento.
            </p>
            <Link
              to={paths.equipa}
              className="mt-6 inline-block text-sm font-semibold text-brand hover:underline"
            >
              Conhecer a equipa clínica →
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-[#F7F9FC] p-6 lg:col-span-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand">
              Missão
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Proporcionar cuidados renais seguros, centrados na pessoa e
              sustentados em evidência clínica.
            </p>
            <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-brand">
              Visão
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Ser o centro de referência em nefrologia e hemodiálise em Angola.
            </p>
            <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-brand">
              Valores
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Ética, inovação, respeito, segurança do doente e trabalho em equipa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  const serviceLinkByTitle: Record<string, string> = {
    Nefrologia: servicePath(serviceSlugs.nefrologia),
    Hemodiálise: servicePath(serviceSlugs.hemodialise),
    'Acesso Vascular': servicePath(serviceSlugs.acessoVascular),
    Cardiologia: servicePath(serviceSlugs.cardiologia),
    Nutrição: servicePath(serviceSlugs.nutricao),
    Psicologia: servicePath(serviceSlugs.psicologia),
    'Medicina Intensiva': servicePath(serviceSlugs.medicinaIntensiva),
    'Cuidados Domiciliários': servicePath(serviceSlugs.cuidadosDomiciliarios),
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Os nossos serviços
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Oferta clínica integrada para o doente renal e o seu acesso vascular,
          do diagnóstico ao acompanhamento contínuo.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-500 md:text-base">
          No CHPA, cada plano assistencial é construído por equipa multidisciplinar
          e ajustado à evolução clínica do doente. Integramos consulta médica,
          exames, terapêutica e seguimento contínuo para garantir segurança,
          proximidade e melhores resultados em todas as fases do cuidado renal.
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
            Abordagem multidisciplinar
          </span>
          <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
            Monitorização contínua
          </span>
          <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
            Percurso clínico personalizado
          </span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <Link
                key={service.title}
                to={serviceLinkByTitle[service.title] ?? paths.servicos}
                className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="text-brand" size={28} strokeWidth={1.75} />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{service.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function HemodialysisSection() {
  return (
    <section className="border-t border-slate-100 bg-[#F7F9FC] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Hemodiálise
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 text-slate-600">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">O que é</h3>
              <p className="mt-2 text-sm leading-relaxed">
                A hemodiálise é um tratamento de substituição renal que filtra o
                sangue através de um dialisador (filtro), com auxílio de uma
                máquina e monitorização contínua, quando os rins deixam de
                desempenhar adequadamente a sua função.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Como funciona
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                O sangue circula de forma controlada pelo circuito extracorpóreo,
                é purificado e devolvido ao organismo. A frequência e duração das
                sessões são definidas pela equipa médica, em função da sua
                condição clínica e dos parâmetros de laboratório.
              </p>
            </div>
          </div>
          <div className="space-y-6 text-slate-600">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Ambiente e conforto
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                A unidade dispõe de espaços preparados para sessões prolongadas,
                com foco no conforto e na segurança, em ambiente assistencial
                moderno.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Equipa envolvida
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                Nefrologistas definem o plano terapêutico; a enfermagem
                especializada acompanha cada sessão, com protocolos de
                vigilância e humanização do cuidado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function VascularAccessSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Destaque clínico
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          O seu acesso vascular: a linha de vida na hemodiálise
        </h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          Os acessos vasculares são o ponto de ligação entre o seu corpo e a
          máquina de hemodiálise — o seu correto planeamento e manutenção
          influenciam diretamente a qualidade e a longevidade do tratamento.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-[#F7F9FC] p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-slate-900">
              O que são acessos vasculares
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              São vias (permanentes ou temporárias) que permitem alcançar o fluxo
              sanguíneo necessário para a diálise. A fístula arteriovenosa (FAV)
              é considerada o padrão ouro quando clinicamente viável: oferece
              melhor desempenho e menor risco infeccioso do que soluções
              temporárias prolongadas.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Consulta de acessos vasculares
            </h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600">
              <li>Mapeamento pré-operatório com ecografia Doppler</li>
              <li>Vigilância e manutenção com Doppler ao longo do tempo</li>
              <li>
                <strong className="text-slate-800">Life-Plan</strong>: estratégia
                de preservação do capital venoso e planeamento a longo prazo
              </li>
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
              88% dos nossos doentes dialisam com fístula arteriovenosa
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
              alt="Dra. Vanessa Pinto — cirurgia vascular"
              className="h-44 w-full object-cover"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                Cirurgia vascular
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                Dra. Vanessa Pinto
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                Mais de 10 anos de experiência em acessos para hemodiálise,
                com abordagem humanizada e foco em resultados duradouros para o
                doente.
              </p>
              <Link
                to={paths.marcacao}
                className="mt-4 inline-block text-center text-sm font-semibold text-brand hover:underline"
              >
                Agendar avaliação de acesso vascular →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-brand/30 bg-blue-50/50 p-6 text-center">
          <p className="text-sm text-slate-700">
            Dúvidas sobre FAV, cateteres ou preservação venosa? A nossa equipa
            apoia-o em cada fase do percurso.
          </p>
        </div>
      </div>
    </section>
  )
}

export function TeamSection() {
  return (
    <section className="bg-[#F7F9FC] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Equipa clínica
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Profissionais de referência por área — o corpo clínico encontra-se em
          expansão para responder à procura.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamBySpecialty.map((block) => (
            <div
              key={block.specialty}
              className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand">
                {block.specialty}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {block.members.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BookingSection() {
  const [form, setForm] = useState({
    fullName: '',
    documentId: '',
    email: '',
    phone: '',
    specialty: bookingSpecialties[0] ?? 'Nefrologia',
    specialist: teamBySpecialty[0]?.members[0] ?? '',
    appointmentDate: '',
    reason: '',
    comments: '',
    privacyAccepted: false,
    marketingAccepted: false,
  })

  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.privacyAccepted) return
    if (!form.appointmentDate) return
    setSubmitted(true)
  }

  const specialtyOptions = useMemo(() => [...bookingSpecialties], [])
  const specialistsBySpecialty = useMemo(
    () => {
      const base = Object.fromEntries(
        teamBySpecialty.map((entry) => [entry.specialty, [...entry.members]]),
      ) as Record<string, string[]>

      return {
        ...base,
        'Acesso Vascular': base['Cirurgia Vascular'] ?? [],
        Hemodiálise: base.Nefrologia ?? [],
      } as Record<string, string[]>
    },
    [],
  )
  const specialistOptions = useMemo(
    () => specialistsBySpecialty[form.specialty] ?? [],
    [form.specialty, specialistsBySpecialty],
  )
  const specialistProfileByName: Record<
    string,
    {
      area: string
      focus: string
      availability: string
      days: string
      availableWeekdays: number[]
      photo: string
    }
  > = {
    'Dr. Matadi Daniel': {
      area: 'Nefrologia',
      focus: 'Avaliação da função renal, progressão da DRC e plano terapêutico personalizado.',
      availability: 'Atendimento por marcação',
      days: 'Segunda, Quarta e Sexta',
      availableWeekdays: [1, 3, 5],
      photo:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80',
    },
    'Dra. Honorata Tito': {
      area: 'Nefrologia',
      focus: 'Seguimento clínico de doentes renais e articulação multidisciplinar.',
      availability: 'Atendimento por marcação',
      days: 'Terça e Quinta',
      availableWeekdays: [2, 4],
      photo:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
    },
    'Dra. Henriqueta Nanduva': {
      area: 'Nefrologia',
      focus: 'Monitorização clínica contínua e prevenção de complicações renais.',
      availability: 'Atendimento por marcação',
      days: 'Segunda a Quinta',
      availableWeekdays: [1, 2, 3, 4],
      photo:
        'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80',
    },
    'Dra. Maria Isabel Casimiro': {
      area: 'Nefrologia',
      focus: 'Consulta especializada em doença renal crónica e ajuste terapêutico.',
      availability: 'Atendimento por marcação',
      days: 'Terça, Quinta e Sexta',
      availableWeekdays: [2, 4, 5],
      photo:
        'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=80',
    },
    'Dra. Leonor Fortes': {
      area: 'Nefrologia',
      focus: 'Acompanhamento longitudinal e orientação clínica individualizada.',
      availability: 'Atendimento por marcação',
      days: 'Segunda e Quarta',
      availableWeekdays: [1, 3],
      photo:
        'https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&w=900&q=80',
    },
    'Dra. Zilla Cerqueira': {
      area: 'Nefrologia',
      focus: 'Estratificação de risco renal e coordenação assistencial.',
      availability: 'Atendimento por marcação',
      days: 'Quarta e Sexta',
      availableWeekdays: [3, 5],
      photo:
        'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80',
    },
    'Dra. Maria Gonçalves': {
      area: 'Cardiologia',
      focus: 'Avaliação cardiovascular no doente renal e prevenção de risco.',
      availability: 'Atendimento por marcação',
      days: 'Terça e Sexta',
      availableWeekdays: [2, 5],
      photo:
        'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=900&q=80',
    },
    'Dra. Eliza Nogueira': {
      area: 'Medicina Intensiva',
      focus: 'Resposta clínica em contextos agudos e suporte multidisciplinar.',
      availability: 'Atendimento por marcação',
      days: 'Segunda a Sexta',
      availableWeekdays: [1, 2, 3, 4, 5],
      photo:
        'https://images.unsplash.com/photo-1659353884710-8b200ea0fced?auto=format&fit=crop&w=900&q=80',
    },
    'Dra. Mária João': {
      area: 'Nutrição',
      focus: 'Plano alimentar adaptado à doença renal e metas terapêuticas.',
      availability: 'Atendimento por marcação',
      days: 'Quarta e Quinta',
      availableWeekdays: [3, 4],
      photo:
        'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&w=900&q=80',
    },
    'Dra. Vanessa Pinto': {
      area: 'Cirurgia Vascular',
      focus: 'Planeamento e manutenção de acessos vasculares para hemodiálise.',
      availability: 'Atendimento por marcação',
      days: 'Terça e Quinta',
      availableWeekdays: [2, 4],
      photo:
        'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=900&q=80',
    },
  }
  const selectedSpecialistProfile =
    specialistProfileByName[form.specialist] ?? {
      area: form.specialty,
      focus: 'A equipa clínica irá validar o especialista mais adequado ao seu caso.',
      availability: 'Definido após triagem clínica',
      days: 'A confirmar após triagem',
      availableWeekdays: [1, 2, 3, 4, 5],
      photo:
        'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80',
    }
  const weekdayLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  const availableWeekdays = selectedSpecialistProfile.availableWeekdays
  const availableDates = useMemo(() => {
    const days: { value: string; day: number; enabled: boolean }[] = []
    const start = new Date()
    for (let i = 0; i < 42; i += 1) {
      const d = new Date(start)
      d.setDate(start.getDate() + i)
      const y = d.getFullYear()
      const m = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      const value = `${y}-${m}-${day}`
      const weekday = d.getDay()
      days.push({
        value,
        day: d.getDate(),
        enabled: availableWeekdays.includes(weekday),
      })
    }
    return days
  }, [availableWeekdays])

  useEffect(() => {
    if (specialistOptions.length === 0) {
      if (form.specialist !== '') update('specialist', '')
      return
    }
    if (!specialistOptions.includes(form.specialist)) {
      update('specialist', specialistOptions[0])
    }
  }, [form.specialist, specialistOptions])

  useEffect(() => {
    if (!form.appointmentDate) return
    const selected = new Date(`${form.appointmentDate}T00:00:00`)
    if (!availableWeekdays.includes(selected.getDay())) {
      update('appointmentDate', '')
    }
  }, [availableWeekdays, form.appointmentDate])

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="rounded-3xl border border-slate-100 bg-[#F7F9FC] p-6 shadow-md md:p-10">
          <form onSubmit={onSubmit} className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="md:w-[36%]">
              <h2 className="text-3xl font-bold text-slate-900">
                Marcação de consulta
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Preencha os campos obrigatórios. Entraremos em contacto para
                confirmar a sua marcação.
              </p>
              <div className="mt-8 rounded-xl bg-brand p-5 text-white">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="opacity-90" />
                  <p className="text-sm font-semibold">Atendimento</p>
                </div>
                <p className="mt-2 text-sm text-blue-100">
                  (+244) 222 380 296 · Seg–Sex 7h–19h
                </p>
              </div>

              <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Dias disponíveis do especialista
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {selectedSpecialistProfile.days}
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
                <img
                  src={selectedSpecialistProfile.photo}
                  alt={form.specialist || 'Especialista da equipa clínica CHPA'}
                  className="h-44 w-full rounded-lg bg-slate-100 object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget
                    if (!target.src.endsWith('/doctor-placeholder.svg')) {
                      target.src = '/doctor-placeholder.svg'
                    }
                  }}
                />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Especialista selecionado
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {form.specialist || 'A definir com a equipa clínica'}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand">
                  {selectedSpecialistProfile.area}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {selectedSpecialistProfile.focus}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Disponibilidade
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {selectedSpecialistProfile.availability}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Motivo de contacto*
                  </label>
                  <textarea
                    required
                    value={form.reason}
                    onChange={(e) => update('reason', e.target.value)}
                    className="mt-2 min-h-[120px] w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
                    placeholder="Descreva brevemente o motivo do pedido"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Comentários adicionais
                  </label>
                  <textarea
                    value={form.comments}
                    onChange={(e) => update('comments', e.target.value)}
                    className="mt-2 min-h-[120px] w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
                    placeholder="Opcional"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-[64%]">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Nome completo*
                  </label>
                  <input
                    required
                    value={form.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
                    placeholder="Nome e apelidos"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    N.º BI / Passaporte*
                  </label>
                  <input
                    required
                    value={form.documentId}
                    onChange={(e) => update('documentId', e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
                    placeholder="Documento de identificação"
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Email*
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
                    placeholder="nome@exemplo.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Telefone*
                  </label>
                  <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 transition focus-within:border-brand">
                    <span className="text-sm font-semibold text-slate-500">
                      +244
                    </span>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full bg-transparent text-sm outline-none"
                      placeholder="Número de contacto"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Especialidade pretendida*
                  </label>
                  <select
                    required
                    value={form.specialty}
                    onChange={(e) => update('specialty', e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand"
                  >
                    {specialtyOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Especialista da área*
                  </label>
                  <select
                    required={specialistOptions.length > 0}
                    value={form.specialist}
                    onChange={(e) => update('specialist', e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand"
                  >
                    {specialistOptions.length > 0 ? (
                      specialistOptions.map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))
                    ) : (
                      <option value="">
                        A definir com a equipa clínica
                      </option>
                    )}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium text-slate-700">
                  Dia pretendido da consulta*
                </label>
                <p className="mt-2 text-xs text-slate-500">
                  Dias disponíveis no calendário rápido: {selectedSpecialistProfile.days}.
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {form.appointmentDate
                    ? `Data selecionada: ${form.appointmentDate}`
                    : 'Selecione um dia disponível abaixo.'}
                </p>
                <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    {weekdayLabels.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                  <div className="mt-2 grid grid-cols-7 gap-1">
                    {availableDates.map((date) => (
                      <button
                        key={date.value}
                        type="button"
                        disabled={!date.enabled}
                        onClick={() => {
                          update('appointmentDate', date.value)
                        }}
                        className={`h-9 rounded text-xs font-semibold transition ${
                          form.appointmentDate === date.value
                            ? 'bg-brand text-white'
                            : date.enabled
                              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                              : 'cursor-not-allowed bg-slate-100/60 text-slate-300'
                        }`}
                        title={date.enabled ? 'Disponível' : 'Indisponível'}
                      >
                        {date.day}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.privacyAccepted}
                    onChange={(e) => update('privacyAccepted', e.target.checked)}
                    className="mt-1 h-4 w-4 accent-brand"
                    required
                  />
                  <span>Concordo com a política de privacidade*</span>
                </label>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.marketingAccepted}
                    onChange={(e) =>
                      update('marketingAccepted', e.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-brand"
                  />
                  <span>
                    Aceito receber contactos de marketing relacionados com o meu
                    pedido (opcional).
                  </span>
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  Submeter
                </button>
                {submitted ? (
                  <p className="text-sm font-semibold text-brand">
                    Obrigado! O seu pedido foi registado. Entraremos em contacto
                    em breve.
                  </p>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export function UnitsSection() {
  const mapEmbedSrc =
    'https://www.openstreetmap.org/export/embed.html?bbox=13.2140%2C-8.8625%2C13.2540%2C-8.8325&layer=mapnik&marker=-8.8475%2C13.2340'
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Hospital%20Am%C3%A9rico%20Boavida%2C%20Avenida%20Hoji%20Ya%20Henda%2C%20Luanda'
  const openStreetMapUrl =
    'https://www.openstreetmap.org/?mlat=-8.8475&mlon=13.2340#map=15/-8.8475/13.2340'

  return (
    <section className="bg-[#F7F9FC] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Unidades
        </h2>
        <p className="mt-3 text-slate-600">
          Presença em Luanda — contacte-nos para morada exacta e acesso.
        </p>
        <div className="mt-8 space-y-6">
          {units.map((unit) => (
            <article
              key={unit.name}
              className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm lg:p-7"
            >
              <h3 className="text-lg font-semibold text-slate-900">{unit.name}</h3>
              <div className="mt-3 grid grid-cols-1 gap-4 text-sm md:grid-cols-2 md:gap-8">
                <div>
                  <p className="flex items-center gap-2 text-slate-600">
                    <MapPin size={15} className="shrink-0 text-brand" />
                    {unit.location}
                  </p>
                  <p className="mt-2 text-slate-500">{unit.address}</p>
                </div>
                <div className="space-y-1 md:text-right">
                  <p className="font-medium text-slate-700">{unit.phone}</p>
                  <p className="text-slate-500">{unit.hours}</p>
                </div>
              </div>
            </article>
          ))}
          <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
            <div className="relative h-[380px] w-full md:h-[460px]">
              <iframe
                title="Mapa — Luanda"
                src={mapEmbedSrc}
                className="h-full w-full border-0"
                loading="lazy"
              />
              <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white shadow-md">
                <MapPin size={12} />
                CHPA
              </div>
            </div>
            <div className="space-y-3 p-4">
              <p className="text-sm text-slate-600">
                Av. Hoji Ya Henda, Hospital Américo Boavida, Luanda - Angola.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-2 text-xs font-semibold text-white transition hover:bg-brand-dark"
                >
                  Abrir no Google Maps
                  <ExternalLink size={14} />
                </a>
                <a
                  href={openStreetMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Abrir no OpenStreetMap
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function DigitalSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-4 md:grid-cols-12 md:px-6">
        <div className="md:col-span-6">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Canal digital e acompanhamento
          </h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <MonitorSmartphone className="mt-1 shrink-0 text-brand" size={20} />
              <span>
                Área do doente para consulta de resultados e gestão de
                pedidos de informação.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Activity className="mt-1 shrink-0 text-brand" size={20} />
              <span>
                Marcação e confirmação de contactos com o centro de forma
                organizada.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Video className="mt-1 shrink-0 text-brand" size={20} />
              <span>
                Telemedicina e videoconsultas quando clinicamente indicado e
                agendado.
              </span>
            </li>
          </ul>
          <Link
            to={paths.marcacao}
            className="mt-7 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
          >
            Marcar consulta
          </Link>
        </div>
        <div className="md:col-span-6">
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80"
            alt="Aplicação e serviços digitais no telemóvel"
            className="mx-auto h-[420px] rounded-3xl object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export function TrustSection() {
  const { language } = useI18n()
  const values =
    language === 'en'
      ? [
          { number: '88%', text: 'of patients dialyze with arteriovenous fistula' },
          { number: '+10', text: 'years of vascular surgery team experience' },
          { number: '9+', text: 'clinical specialists on staff (growing)' },
          { number: 'Mon–Sat', text: 'continuous unit operation (confirm schedule)' },
        ]
      : [
          { number: '88%', text: 'dos doentes dializam com fístula arteriovenosa' },
          { number: '+10', text: 'anos de experiência da equipa de cirurgia vascular' },
          { number: '9+', text: 'especialistas no corpo clínico (em expansão)' },
          { number: 'Seg–Sáb', text: 'funcionamento contínuo da unidade (confirmar horários)' },
        ]
  return (
    <section className="bg-brand py-9 text-white md:py-10">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-5 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-6">
        {values.map((value) => (
          <div key={value.number}>
            <p className="text-3xl font-bold md:text-4xl">{value.number}</p>
            <p className="mt-2 text-sm text-blue-100">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function NewsSection() {
  return (
    <section className="bg-[#F7F9FC] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Notícias e educação em saúde
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <article key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                {item.date}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const mosaicItemsByLanguage: Record<
  'pt' | 'en',
  {
    title: string
    subtitle: string
    cta: string
    image: string
  }[]
> = {
  pt: [
    {
      title: 'Quem somos',
      subtitle: 'Conheça a missão, visão e valores do CHPA e a nossa abordagem humanizada.',
      cta: 'Ver detalhes',
      image:
        'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Serviços',
      subtitle: 'Oferta clínica integrada da nefrologia ao acompanhamento continuado.',
      cta: 'Ver serviços',
      image:
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Hemodiálise',
      subtitle: 'Saiba como funciona o tratamento, a equipa envolvida e o acompanhamento.',
      cta: 'Saber mais',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Acessos vasculares',
      subtitle: 'Fístula, Doppler e plano de preservação venosa para hemodiálise segura.',
      cta: 'Conhecer área',
      image:
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Equipa clínica',
      subtitle: 'Especialistas de referência em nefrologia, cirurgia vascular e apoio multidisciplinar.',
      cta: 'Ver equipa',
      image:
        'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Marcação',
      subtitle: 'Pedido de consulta online com resposta rápida da nossa equipa.',
      cta: 'Marcar consulta',
      image:
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Unidades',
      subtitle: 'Localização e contactos da unidade CHPA em Luanda.',
      cta: 'Ver localização',
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Canal digital',
      subtitle: 'Área do doente, telemedicina e apoio digital para maior proximidade.',
      cta: 'Explorar',
      image:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  en: [
    {
      title: 'About us',
      subtitle: 'Learn about CHPA mission, vision and values and our humanized approach.',
      cta: 'See details',
      image:
        'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Services',
      subtitle: 'Integrated clinical offer from nephrology to ongoing follow-up.',
      cta: 'See services',
      image:
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Hemodialysis',
      subtitle: 'Understand treatment flow, clinical team and patient monitoring.',
      cta: 'Learn more',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Vascular access',
      subtitle: 'Fistula, Doppler and long-term venous preservation strategy.',
      cta: 'Explore area',
      image:
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Clinical team',
      subtitle: 'Reference specialists in nephrology, vascular surgery and multidisciplinary support.',
      cta: 'See team',
      image:
        'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Booking',
      subtitle: 'Online appointment request with a quick response from our team.',
      cta: 'Book now',
      image:
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Units',
      subtitle: 'Location and contact details for CHPA unit in Luanda.',
      cta: 'See location',
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Digital channel',
      subtitle: 'Patient area, telemedicine and digital support for closer care.',
      cta: 'Explore',
      image:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    },
  ],
}

export function MosaicHighlightsSection() {
  const { language } = useI18n()
  const mosaicItems = mosaicItemsByLanguage[language]
  return (
    <section className="bg-white pb-14 pt-0 md:pb-20 md:pt-0">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-1">
          <div>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {mosaicItems.slice(0, 4).map((item) => (
                <article
                  key={item.title}
                  className="group relative min-h-[300px] overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
                    <div>
                      <p className="text-2xl leading-none text-brand-light">+</p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight drop-shadow-sm">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-white/90">
                        {item.subtitle}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="mt-4 w-fit rounded-full border border-white/80 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      {item.cta}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-1 gap-1 sm:grid-cols-4">
              {mosaicItems.slice(4).map((item) => (
                <article
                  key={item.title}
                  className="group relative min-h-[260px] overflow-hidden sm:col-span-2 lg:col-span-1"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
                    <div>
                      <p className="text-xl leading-none text-brand-light">+</p>
                      <h3 className="mt-2 text-3xl font-bold leading-tight drop-shadow-sm sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-white/90">
                        {item.subtitle}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="w-fit rounded-full border border-white/80 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10"
                    >
                      {item.cta}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export function HealthWellbeingSection() {
  const { language } = useI18n()
  const items =
    language === 'en'
      ? [
          {
            title: 'Constantly blocked nose...',
            author: 'André de Sousa Machado',
            date: 'March 23, 2026',
            to: paths.educacao,
            image:
              'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
          },
          {
            title: 'Obesity and new treatments',
            author: 'Barbara Filipa Araújo',
            date: 'March 16, 2026',
            to: paths.educacao,
            image:
              'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
          },
          {
            title: 'Healthy recipes to welcome spring',
            author: '',
            date: 'March 9, 2026',
            to: paths.educacao,
            image:
              'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80',
          },
        ]
      : [
          {
            title: 'O nariz constantemente entupido…',
            author: 'André de Sousa Machado',
            date: '23 de março de 2026',
            to: paths.educacao,
            image:
              'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
          },
          {
            title: 'Obesidade e novos tratamentos',
            author: 'Barbara Filipa Araújo',
            date: '16 de março de 2026',
            to: paths.educacao,
            image:
              'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
          },
          {
            title: 'Receitas saudáveis para dar as boas-vindas à primavera',
            author: '',
            date: '9 de março de 2026',
            to: paths.educacao,
            image:
              'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80',
          },
        ]
  const sectionTitle =
    language === 'en' ? 'Health and wellbeing' : 'Saúde e bem-estar'
  const allArticles =
    language === 'en' ? 'View all articles' : 'Ver todos os artigos'

  return (
    <section className="bg-[#e9edf2] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="flex items-center justify-center gap-3 text-[#10b8c5]">
          <h2 className="text-3xl font-semibold text-slate-800 md:text-4xl">
            {sectionTitle}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group block overflow-hidden border border-transparent bg-white transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b8c5] focus-visible:ring-offset-2"
            >
              <img
                src={item.image}
                alt=""
                className="h-[96px] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5 md:p-6">
                <h3 className="text-2xl leading-snug text-slate-800 transition group-hover:text-brand-dark md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-8 text-sm font-semibold text-slate-800">
                  {item.author || ''}
                </p>
                <p className="mt-2 text-xs text-slate-500">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to={paths.educacao}
            className="rounded-full border border-[#10b8c5] bg-white px-7 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b8c5] focus-visible:ring-offset-2"
          >
            {allArticles}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function FinalCtaSection() {
  const { language } = useI18n()
  const copy =
    language === 'en'
      ? {
          title: 'Ready to take care of your kidney health?',
          subtitle:
            'Book nephrology, vascular access or other specialty appointments - we are by your side.',
          button: 'Book appointment',
        }
      : {
          title: 'Pronto para cuidar da sua saúde renal?',
          subtitle:
            'Marque consulta de nefrologia, acesso vascular ou outras especialidades — estamos ao seu lado.',
          button: 'Marcar consulta',
        }
  return (
    <section className="bg-linear-to-r from-brand to-brand-light py-16 text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div>
          <h2 className="text-3xl font-bold">
            {copy.title}
          </h2>
          <p className="mt-2 text-blue-100">
            {copy.subtitle}
          </p>
        </div>
        <Link
          to={paths.marcacao}
          className="inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-brand transition hover:bg-slate-100 md:w-auto"
        >
          {copy.button}
        </Link>
      </div>
    </section>
  )
}
