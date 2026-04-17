import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { paths } from '../routes/paths'

export function ContactosPage() {
  return (
    <section className="bg-[#F7F9FC] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Contactos
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Fale connosco por telefone ou email, ou envie um pedido de marcação
          através do formulário dedicado.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Atendimento
            </h2>
            <ul className="mt-5 space-y-5 text-slate-700">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-brand" />
                <div className="min-w-0 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Contactos telefónicos
                  </p>
                  <div className="grid grid-cols-[88px_1fr] gap-x-2 gap-y-1 text-[15px] leading-6">
                    <span className="font-semibold text-slate-500">Tel.</span>
                    <span>(+244) 222 380 296</span>
                    <span className="font-semibold text-slate-500">Telemóvel</span>
                    <span>+244 222 385 730</span>
                    <span className="font-semibold text-slate-500">Fax</span>
                    <span>383558</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    E-mail
                  </p>
                  <p className="mt-0.5 text-[15px] leading-6">recepcao@chpa.co.ao</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Morada
                  </p>
                  <p className="mt-0.5 text-[15px] leading-6">
                    Av. Hoji Ya Henda, Hospital Américo Boavida, Luanda - Angola
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Horário
              </p>
              <p className="mt-1 text-[15px] leading-6 text-slate-700">Seg–Sex: 7h–19h</p>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-brand/30 bg-white p-8">
            <p className="text-slate-600">
              Prefere marcar consulta online? Utilize o formulário — respondemos
              com a maior brevidade possível.
            </p>
            <Link
              to={paths.marcacao}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
            >
              Marcação de consulta
            </Link>
            <Link
              to={paths.unidades}
              className="mt-4 text-center text-sm font-semibold text-brand hover:underline"
            >
              Ver localização e unidades
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
