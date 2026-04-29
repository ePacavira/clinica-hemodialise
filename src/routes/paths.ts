/** Rotas públicas do site (multi-página). */
export const paths = {
  home: '/',
  quemSomos: '/quem-somos',
  historia: '/quem-somos/historia',
  direcao: '/quem-somos/direcao',
  qualidadeSeguranca: '/quem-somos/qualidade-seguranca',
  politicaPrivacidade: '/quem-somos/politica-privacidade',
  sobreEducacao: '/quem-somos/educacao',
  servicos: '/servicos',
  servicoDetalheBase: '/servicos',
  hemodialise: '/hemodialise',
  acessosVasculares: '/acessos-vasculares',
  equipa: '/equipa',
  marcacao: '/marcacao',
  unidades: '/unidades',
  digital: '/digital',
  educacao: '/educacao',
  investigacao: '/investigacao',
  parceiros: '/parceiros',
  eventos: '/eventos',
  assistenciaSocial: '/assistencia-social',
  contactos: '/contactos',
} as const

export const serviceSlugs = {
  nefrologia: 'nefrologia',
  hemodialise: 'hemodialise',
  acessoVascular: 'acesso-vascular',
  cardiologia: 'cardiologia',
  nutricao: 'nutricao',
  psicologia: 'psicologia',
  medicinaIntensiva: 'medicina-intensiva',
  cuidadosDomiciliarios: 'cuidados-domiciliarios',
} as const

export function servicePath(slug: string) {
  return `${paths.servicoDetalheBase}/${slug}`
}

/** Ordem alinhada a `navItems` no header (cada item pode agrupar várias rotas no mega menu). */
export const navPaths = [
  paths.home,
  paths.quemSomos,
  paths.servicos,
  paths.investigacao,
  paths.eventos,
  paths.contactos,
] as const
