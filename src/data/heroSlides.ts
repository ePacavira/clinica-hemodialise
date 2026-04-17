import { paths } from '../routes/paths'
import type { Language } from '../i18n/I18nContext'

export type HeroSlide = {
  id: string
  title: string
  subtitle?: string
  ctaLabel: string
  ctaTo: string
  image: string
  imageAlt: string
}

export const heroSlidesByLanguage: Record<Language, HeroSlide[]> = {
  pt: [
    {
      id: '1',
      title: 'Cuidado integral para a saúde renal e acesso vascular',
      subtitle:
        'Hemodiálise, nefrologia e cirurgia vascular — equipa multidisciplinar em Luanda.',
      ctaLabel: 'Conhecer serviços',
      ctaTo: paths.servicos,
      image:
        'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1920&q=80',
      imageAlt: 'Estetoscópio e ambiente clínico',
    },
    {
      id: '2',
      title: 'Hemodiálise com monitorização e conforto',
      subtitle:
        'Tratamento de substituição renal com protocolos alinhados às melhores práticas.',
      ctaLabel: 'Saber mais sobre hemodiálise',
      ctaTo: paths.hemodialise,
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
      imageAlt: 'Unidade de hemodiálise',
    },
    {
      id: '3',
      title: 'Acessos vasculares: a sua linha de vida na diálise',
      subtitle:
        'Fístula arteriovenosa, Doppler e plano Life-Plan com equipa dedicada.',
      ctaLabel: 'Acessos vasculares',
      ctaTo: paths.acessosVasculares,
      image:
        'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1920&q=80',
      imageAlt: 'Cuidados especializados',
    },
    {
      id: '4',
      title: 'Marque a sua consulta connosco',
      subtitle:
        'Pedido online com confirmação — nefrologia, acesso vascular e outras especialidades.',
      ctaLabel: 'Marcação de consulta',
      ctaTo: paths.marcacao,
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80',
      imageAlt: 'Receção e atendimento no centro de saúde',
    },
  ],
  en: [
    {
      id: '1',
      title: 'Comprehensive kidney and vascular access care',
      subtitle:
        'Hemodialysis, nephrology and vascular surgery with a multidisciplinary team in Luanda.',
      ctaLabel: 'Explore services',
      ctaTo: paths.servicos,
      image:
        'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1920&q=80',
      imageAlt: 'Stethoscope in a clinical setting',
    },
    {
      id: '2',
      title: 'Hemodialysis with monitoring and comfort',
      subtitle:
        'Renal replacement therapy supported by clinical best-practice protocols.',
      ctaLabel: 'Learn about hemodialysis',
      ctaTo: paths.hemodialise,
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
      imageAlt: 'Hemodialysis unit',
    },
    {
      id: '3',
      title: 'Vascular access: your dialysis lifeline',
      subtitle:
        'Arteriovenous fistula, Doppler and Life-Plan strategy with a dedicated team.',
      ctaLabel: 'Vascular access',
      ctaTo: paths.acessosVasculares,
      image:
        'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1920&q=80',
      imageAlt: 'Specialized healthcare',
    },
    {
      id: '4',
      title: 'Book your appointment with us',
      subtitle:
        'Online request with confirmation for nephrology, vascular access and other specialties.',
      ctaLabel: 'Book appointment',
      ctaTo: paths.marcacao,
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80',
      imageAlt: 'Healthcare reception and service desk',
    },
  ],
}
