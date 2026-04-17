import { Camera, Clock3, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { paths, servicePath, serviceSlugs } from '../routes/paths'

export function Footer() {
  const { language } = useI18n()
  const copy =
    language === 'en'
      ? {
          about: 'Institutional',
          clinicalAreas: 'Clinical areas',
          aboutUs: 'About us',
          team: 'Clinical team',
          units: 'Units',
          services: 'Services',
          hemodialysis: 'Hemodialysis',
          vascularAccess: 'Vascular access',
          booking: 'Booking',
          education: 'Health education',
          contacts: 'Contacts',
          contactsPage: 'Contacts page',
          social: 'Social networks',
          rights: 'All rights reserved.',
          callUs: 'Call us',
          writeUs: 'Write to us',
          where: 'Where we are',
          quickContact: 'Quick contact',
          description:
            'Pluribus Africa Hemodialysis Center - specialized care with excellence and humanity.',
          hours: 'Mon-Fri: 7am-7pm',
          tel: 'Tel.',
          mobile: 'Mobile',
          fax: 'Fax',
          linkedin: 'LinkedIn',
          instagram: 'Instagram',
        }
      : {
          about: 'Institucional',
          clinicalAreas: 'Áreas clínicas',
          aboutUs: 'Sobre nós',
          team: 'Equipa clínica',
          units: 'Unidades',
          services: 'Serviços',
          hemodialysis: 'Hemodiálise',
          vascularAccess: 'Acessos vasculares',
          booking: 'Marcação',
          education: 'Educação em saúde',
          contacts: 'Contactos',
          contactsPage: 'Página de contactos',
          social: 'Redes sociais',
          rights: 'Todos os direitos reservados.',
          callUs: 'Ligue para nós',
          writeUs: 'Escreva-nos',
          where: 'Onde estamos',
          quickContact: 'Contacto rápido',
          description:
            'Centro de Hemodiálise Pluribus Africa — cuidados especializados com excelência e humanidade.',
          hours: 'Seg–Sex: 7h–19h',
          tel: 'Tel.',
          mobile: 'Telemóvel',
          fax: 'Fax',
          linkedin: 'LinkedIn',
          instagram: 'Instagram',
        }

  return (
    <footer className="bg-slate-900 py-14 text-slate-300">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-4 md:grid-cols-12 md:px-6">
        <div className="md:col-span-4">
          <Link to={paths.home} className="inline-block">
            <img src="/logo-white.png" alt="CHPA" className="h-10 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {copy.description}
          </p>
          <Link
            to={paths.contactos}
            className="mt-5 inline-flex items-center justify-center rounded-full border border-blue-300/30 px-5 py-2.5 text-sm font-semibold text-blue-200 transition hover:border-blue-200/60 hover:text-white"
          >
            {copy.quickContact}
          </Link>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">{copy.about}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to={paths.quemSomos} className="text-slate-300 hover:text-white">
                {copy.aboutUs}
              </Link>
            </li>
            <li>
              <Link to={paths.equipa} className="text-slate-300 hover:text-white">
                {copy.team}
              </Link>
            </li>
            <li>
              <Link to={paths.unidades} className="text-slate-300 hover:text-white">
                {copy.units}
              </Link>
            </li>
            <li>
              <Link to={paths.educacao} className="text-slate-300 hover:text-white">
                {copy.education}
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">{copy.clinicalAreas}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to={paths.servicos} className="text-slate-300 hover:text-white">
                {copy.services}
              </Link>
            </li>
            <li>
              <Link
                to={servicePath(serviceSlugs.hemodialise)}
                className="text-slate-300 hover:text-white"
              >
                {copy.hemodialysis}
              </Link>
            </li>
            <li>
              <Link to={paths.acessosVasculares} className="text-slate-300 hover:text-white">
                {copy.vascularAccess}
              </Link>
            </li>
            <li>
              <Link to={paths.marcacao} className="text-slate-300 hover:text-white">
                {copy.booking}
              </Link>
            </li>
          </ul>
        </div>
        <div id="rodape-contactos" className="md:col-span-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <div className="pr-2 md:pr-0">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">{copy.contacts}</h4>
              <ul className="mt-5 space-y-4 text-base leading-relaxed md:text-sm">
                <li className="flex items-start gap-3.5">
                  <Phone size={16} className="mt-0.5 shrink-0 text-blue-300" />
                  <div className="space-y-1.5">
                    <a href="tel:+244222380296" className="block hover:text-white">
                      {copy.tel} (+244) 222 380 296
                    </a>
                    <a href="tel:+244222385730" className="block hover:text-white">
                      {copy.mobile} +244 222 385 730
                    </a>
                    <span className="block">
                      {copy.fax} 383558
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <Mail size={16} className="mt-0.5 shrink-0 text-blue-300" />
                  <a href="mailto:recepcao@chpa.co.ao" className="hover:text-white">
                    recepcao@chpa.co.ao
                  </a>
                </li>
                <li className="flex items-start gap-3.5">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-blue-300" />
                  <span>
                    {copy.where}: Av. Hoji Ya Henda, Hospital Américo Boavida, Luanda - Angola
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Clock3 size={16} className="mt-0.5 shrink-0 text-blue-300" />
                  <span>{copy.hours}</span>
                </li>
              </ul>
              <Link
                to={paths.contactos}
                className="mt-4 inline-block text-sm font-semibold text-blue-300 hover:text-white"
              >
                {copy.contactsPage}
              </Link>
            </div>
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-wide text-white">{copy.social}</h5>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                    <Globe size={15} className="text-blue-300" />
                    {copy.linkedin}
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                    <Camera size={15} className="text-blue-300" />
                    {copy.instagram}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-[1200px] border-t border-slate-700 px-4 pt-6 text-sm text-slate-400 md:px-6">
        © {new Date().getFullYear()} CHPA. {copy.rights}
      </div>
    </footer>
  )
}
