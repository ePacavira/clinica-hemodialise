import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AcessosVascularesPage } from './pages/AcessosVascularesPage'
import { AssistenciaSocialPage } from './pages/AssistenciaSocialPage'
import { ContactosPage } from './pages/ContactosPage'
import { DirecaoPage } from './pages/DirecaoPage'
import { DigitalPage } from './pages/DigitalPage'
import { EducacaoPage } from './pages/EducacaoPage'
import { EquipaPage } from './pages/EquipaPage'
import { EventosPage } from './pages/EventosPage'
import { HemodialisePage } from './pages/HemodialisePage'
import { HomePage } from './pages/HomePage'
import { HistoriaPage } from './pages/HistoriaPage'
import { InvestigacaoPage } from './pages/InvestigacaoPage'
import { MarcacaoPage } from './pages/MarcacaoPage'
import { ParceirosPage } from './pages/ParceirosPage'
import { PoliticaPrivacidadePage } from './pages/PoliticaPrivacidadePage'
import { QualidadeSegurancaPage } from './pages/QualidadeSegurancaPage'
import { QuemSomosPage } from './pages/QuemSomosPage'
import { ServicosPage } from './pages/ServicosPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { SobreEducacaoPage } from './pages/SobreEducacaoPage'
import { UnidadesPage } from './pages/UnidadesPage'
import { paths } from './routes/paths'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="quem-somos" element={<QuemSomosPage />} />
          <Route path="quem-somos/historia" element={<HistoriaPage />} />
          <Route path="quem-somos/direcao" element={<DirecaoPage />} />
          <Route
            path="quem-somos/qualidade-seguranca"
            element={<QualidadeSegurancaPage />}
          />
          <Route
            path="quem-somos/politica-privacidade"
            element={<PoliticaPrivacidadePage />}
          />
          <Route path="quem-somos/educacao" element={<SobreEducacaoPage />} />
          <Route path="servicos" element={<ServicosPage />} />
          <Route path="servicos/:serviceId" element={<ServiceDetailPage />} />
          <Route path="hemodialise" element={<HemodialisePage />} />
          <Route path="acessos-vasculares" element={<AcessosVascularesPage />} />
          <Route path="equipa" element={<EquipaPage />} />
          <Route path="marcacao" element={<MarcacaoPage />} />
          <Route path="unidades" element={<UnidadesPage />} />
          <Route path="digital" element={<DigitalPage />} />
          <Route path="educacao" element={<EducacaoPage />} />
          <Route path="investigacao" element={<InvestigacaoPage />} />
          <Route path="parceiros" element={<ParceirosPage />} />
          <Route path="eventos" element={<EventosPage />} />
          <Route path="assistencia-social" element={<AssistenciaSocialPage />} />
          <Route path="contactos" element={<ContactosPage />} />
          <Route path="*" element={<Navigate to={paths.home} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
