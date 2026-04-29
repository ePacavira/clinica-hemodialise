import type { Language } from '../i18n/I18nContext'
import { paths } from '../routes/paths'
import { hospitalMedia } from './siteMedia'

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
      image: hospitalMedia.wide0,
      imageAlt: 'Instalações e ambiente clínico do CHPA',
    },
    {
      id: '2',
      title: 'Hemodiálise com monitorização e conforto',
      subtitle:
        'Tratamento de substituição renal com protocolos alinhados às melhores práticas.',
      ctaLabel: 'Saber mais sobre hemodiálise',
      ctaTo: paths.hemodialise,
      image: hospitalMedia.unit6,
      imageAlt: 'Unidade de cuidados do CHPA',
    },
    {
      id: '3',
      title: 'Acessos vasculares: a sua linha de vida na diálise',
      subtitle:
        'Fístula arteriovenosa, Doppler e plano Life-Plan com equipa dedicada.',
      ctaLabel: 'Acessos vasculares',
      ctaTo: paths.acessosVasculares,
      image: hospitalMedia.unit7,
      imageAlt: 'Equipa e cuidados especializados no CHPA',
    },
    {
      id: '4',
      title: 'Marque a sua consulta connosco',
      subtitle:
        'Pedido online com confirmação — nefrologia, acesso vascular e outras especialidades.',
      ctaLabel: 'Marcação de consulta',
      ctaTo: paths.marcacao,
      image: hospitalMedia.wide1,
      imageAlt: 'Receção e atendimento no CHPA',
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
      image: hospitalMedia.wide0,
      imageAlt: 'CHPA clinical facilities',
    },
    {
      id: '2',
      title: 'Hemodialysis with monitoring and comfort',
      subtitle:
        'Renal replacement therapy supported by clinical best-practice protocols.',
      ctaLabel: 'Learn about hemodialysis',
      ctaTo: paths.hemodialise,
      image: hospitalMedia.unit6,
      imageAlt: 'CHPA care unit',
    },
    {
      id: '3',
      title: 'Vascular access: your dialysis lifeline',
      subtitle:
        'Arteriovenous fistula, Doppler and Life-Plan strategy with a dedicated team.',
      ctaLabel: 'Vascular access',
      ctaTo: paths.acessosVasculares,
      image: hospitalMedia.unit7,
      imageAlt: 'Specialized care at CHPA',
    },
    {
      id: '4',
      title: 'Book your appointment with us',
      subtitle:
        'Online request with confirmation for nephrology, vascular access and other specialties.',
      ctaLabel: 'Book appointment',
      ctaTo: paths.marcacao,
      image: hospitalMedia.wide1,
      imageAlt: 'CHPA reception and patient services',
    },
  ],
}
