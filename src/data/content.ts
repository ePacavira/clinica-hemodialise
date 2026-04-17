import type { Language } from '../i18n/I18nContext'

export const navItemsByLanguage: Record<Language, string[]> = {
  pt: [
    'Início',
    'Sobre Nós',
    'Serviços',
    'Investigação Científica',
    'Parceiros',
    'Eventos',
    'Assistência Social',
    'Contactos',
  ],
  en: [
    'Home',
    'About Us',
    'Services',
    'Scientific Research',
    'Partners',
    'Events',
    'Social Assistance',
    'Contacts',
  ],
}

export const services = [
  {
    title: 'Nefrologia',
    description: 'Consulta e acompanhamento da doença renal crónica e complicações associadas.',
    icon: 'Stethoscope',
  },
  {
    title: 'Hemodiálise',
    description: 'Tratamento de substituição renal com monitorização contínua e equipa especializada.',
    icon: 'MonitorSmartphone',
  },
  {
    title: 'Acesso Vascular',
    description: 'Cirurgia e manutenção de fístulas e cateteres; mapeamento e vigilância com Doppler.',
    icon: 'HeartPulse',
  },
  {
    title: 'Cardiologia',
    description: 'Avaliação cardiovascular adaptada ao doente renal e redução de risco.',
    icon: 'Heart',
  },
  {
    title: 'Nutrição',
    description: 'Plano alimentar personalizado para estádio da DRC e terapêutica em curso.',
    icon: 'Apple',
  },
  {
    title: 'Psicologia',
    description: 'Suporte emocional e adaptação à doença crónica e ao tratamento.',
    icon: 'Brain',
  },
  {
    title: 'Medicina Intensiva',
    description: 'Cuidados em situações agudas com integração multidisciplinar.',
    icon: 'Siren',
  },
  {
    title: 'Cuidados Domiciliários',
    description: 'Acompanhamento clínico quando indicado, em articulação com a unidade.',
    icon: 'Home',
  },
] as const

export const bookingSpecialties = [
  'Nefrologia',
  'Acesso Vascular',
  'Cardiologia',
  'Psicologia',
  'Nutrição',
  'Outro',
] as const

export const teamBySpecialty = [
  {
    specialty: 'Nefrologia',
    members: [
      'Dr. Matadi Daniel',
      'Dra. Honorata Tito',
      'Dra. Henriqueta Nanduva',
      'Dra. Maria Isabel Casimiro',
      'Dra. Leonor Fortes',
      'Dra. Zilla Cerqueira',
    ],
  },
  {
    specialty: 'Cardiologia',
    members: ['Dra. Maria Gonçalves'],
  },
  {
    specialty: 'Medicina Intensiva',
    members: ['Dra. Eliza Nogueira'],
  },
  {
    specialty: 'Nutrição',
    members: ['Dra. Mária João'],
  },
  {
    specialty: 'Cirurgia Vascular',
    members: ['Dra. Vanessa Pinto'],
  },
] as const

export const units = [
  {
    name: 'CHPA - Centro de Hemodiálise Pluribus Africa',
    location: 'Luanda, Angola',
    address: 'Av. Hoji Ya Henda, Hospital Américo Boavida, Luanda - Angola.',
    phone: '(+244) 222 380 296',
    hours: 'Seg–Sex: 7h–19h',
  },
]

export const news = [
  {
    title: 'O que é a Fístula Arteriovenosa e por que é importante',
    date: 'Educação em Saúde',
    summary:
      'Compreenda o acesso vascular de eleição na hemodiálise e as vantagens para o seu tratamento.',
  },
  {
    title: 'Cuidados com o acesso vascular no dia a dia',
    date: 'Educação em Saúde',
    summary:
      'Higiene, sinais de alerta e quando procurar a equipa de acessos vasculares.',
  },
  {
    title: 'Mitigação de riscos cardiovasculares no doente renal',
    date: 'Educação em Saúde',
    summary:
      'Integração entre nefrologia e cardiologia para proteger o coração ao longo da DRC.',
  },
  {
    title: 'Nutrição na doença renal crónica',
    date: 'Educação em Saúde',
    summary:
      'Princípios alimentares alinhados ao seu plano terapêutico e estádio de função renal.',
  },
]
