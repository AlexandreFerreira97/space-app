import styled from "styled-components"
import EstiloGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/TituloEstilizado"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

function App() {

  return (
    <FundoGradiente>
      <EstiloGlobais />
      <AppContainer>
        <Cabecalho/>
        <MainContainer>
          <BarraLateral/>
          <Banner texto={'A galeria mais completa de fotos do espaço'}/>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
