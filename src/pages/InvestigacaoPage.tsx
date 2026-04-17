import { Link } from 'react-router-dom'
import { paths } from '../routes/paths'

export function InvestigacaoPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[720px] px-4 md:px-6">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Investigação científica
        </h1>
        <p className="mt-4 text-slate-600">
          Esta área será actualizada com estudos em curso, publicações e
          oportunidades de participação. Para já, contacte o CHPA para mais
          informações.
        </p>
        <Link
          to={paths.contactos}
          className="mt-8 inline-block font-semibold text-brand hover:underline"
        >
          ← Voltar aos contactos
        </Link>
      </div>
    </section>
  )
}
