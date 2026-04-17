import { MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { paths } from '../routes/paths'

/** Cartão estilo «Atendimento Urgente» Luz — sobrepõe hero e pesquisa (tablet+). */
export function UrgentCareCard() {
  const { language } = useI18n()
  const copy =
    language === 'en'
      ? {
          title: 'Priority care',
          locationLabel: 'See location',
          ctaTitle: 'Need quick support from our clinical team?',
          ctaDescription:
            'Send your request now and we will guide you to the best care pathway for your situation.',
          ctaAction: 'Request support now',
          button: 'Contacts and support',
        }
      : {
          title: 'Atendimento prioritário',
          locationLabel: 'Ver localização',
          ctaTitle: 'Precisa de apoio rápido da nossa equipa clínica?',
          ctaDescription:
            'Envie já o seu pedido e ajudamos a encaminhar para o percurso assistencial mais adequado ao seu caso.',
          ctaAction: 'Pedir apoio agora',
          button: 'Contactos e apoio',
        }

  return (
    <div className="pointer-events-none absolute left-3 top-[min(28rem,49vh)] z-35 hidden w-[min(calc(100vw-1.5rem),390px)] md:left-6 md:block lg:left-[max(0.75rem,calc((100vw-1200px)/2))] lg:top-[min(32rem,47vh)] xl:w-[420px]">
      <div className="pointer-events-auto overflow-hidden bg-white shadow-2xl">
        <div className="bg-brand px-6 py-4 text-center text-lg font-bold uppercase tracking-wide text-white md:text-xl">
          {copy.title}
        </div>
        <div className="space-y-7 px-7 py-7 text-lg text-slate-700">
          <p className="flex items-start gap-3 text-lg leading-snug">
            <MapPin className="mt-0.5 shrink-0 text-brand" size={16} />
            <span>
              CHPA — Luanda.{' '}
              <Link
                to={paths.unidades}
                className="font-medium text-brand underline-offset-2 hover:underline"
              >
                {copy.locationLabel}
              </Link>
            </span>
          </p>
          <div className="bg-slate-50 px-6 py-5 text-lg">
            <p className="font-semibold text-slate-800">{copy.ctaTitle}</p>
            <p className="mt-1 text-base leading-relaxed text-slate-600">
              {copy.ctaDescription}
            </p>
            <Link
              to={paths.marcacao}
              className="mt-2 inline-block text-base font-semibold text-brand underline-offset-2 hover:underline"
            >
              {copy.ctaAction}
            </Link>
          </div>
          <div className="flex items-center gap-3 border-t border-slate-100 pt-6 text-lg">
            <Phone className="shrink-0 text-brand" size={16} />
            <a
              href="tel:+244222380296"
              className="font-bold tabular-nums text-slate-900 hover:text-brand"
            >
              (+244) 222 380 296
            </a>
          </div>
          <Link
            to={paths.contactos}
            className="block w-full bg-brand py-3.5 text-center text-lg font-semibold text-white transition hover:bg-brand-dark"
          >
            {copy.button}
          </Link>
        </div>
      </div>
    </div>
  )
}
