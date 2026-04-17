import { paths } from './paths'

/** Nome mostrado na aba do browser (marca + local). */
export const siteTitle = 'Pluribus Africa CHPA · Luanda'

const byPath: Record<string, string> = {
  [paths.home]: `Home · ${siteTitle}`,
  [paths.quemSomos]: `Quem somos | ${siteTitle}`,
  [paths.historia]: `História | ${siteTitle}`,
  [paths.direcao]: `Direção | ${siteTitle}`,
  [paths.qualidadeSeguranca]: `Qualidade e segurança | ${siteTitle}`,
  [paths.politicaPrivacidade]: `Política de privacidade | ${siteTitle}`,
  [paths.sobreEducacao]: `Educação em saúde | ${siteTitle}`,
  [paths.servicos]: `Serviços | ${siteTitle}`,
  [paths.hemodialise]: `Hemodiálise | ${siteTitle}`,
  [paths.acessosVasculares]: `Acessos vasculares | ${siteTitle}`,
  [paths.equipa]: `Equipa clínica | ${siteTitle}`,
  [paths.marcacao]: `Marcação de consulta | ${siteTitle}`,
  [paths.unidades]: `Unidades | ${siteTitle}`,
  [paths.digital]: `Canal digital | ${siteTitle}`,
  [paths.educacao]: `Educação em saúde | ${siteTitle}`,
  [paths.investigacao]: `Investigação científica | ${siteTitle}`,
  [paths.parceiros]: `Parceiros | ${siteTitle}`,
  [paths.eventos]: `Eventos | ${siteTitle}`,
  [paths.assistenciaSocial]: `Assistência social | ${siteTitle}`,
  [paths.contactos]: `Contactos | ${siteTitle}`,
}

export function titleForPathname(pathname: string): string {
  if (pathname.startsWith(`${paths.servicos}/`)) {
    return `Serviço | ${siteTitle}`
  }
  return byPath[pathname] ?? siteTitle
}
