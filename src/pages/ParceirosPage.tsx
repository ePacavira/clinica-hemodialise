import { Link } from 'react-router-dom'
import { paths } from '../routes/paths'

export function ParceirosPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[720px] px-4 md:px-6">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Parceiros
        </h1>
        <p className="mt-4 text-slate-600">
          Informações sobre instituições parceiras, convénios e programas de
          cooperação serão publicadas em breve.
        </p>
        <Link
          to={paths.contactos}
          className="mt-8 inline-block font-semibold text-brand hover:underline"
        >
          ← Contactos
        </Link>
      </div>
    </section>
  )
}
