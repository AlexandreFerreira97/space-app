import styled from "styled-components"
import Titulo from "../../Titulo"
import fotos from "./fotos-populares.json"

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Populares = () => {
    return <Titulo $alinhamento="center">Populares</Titulo>
}

export default Populares