import styled from "styled-components"
import CampoTexto from "../../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
       max-width: 15rem;
    }
`


const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo2.png" alt="Logo do space app"/>
            <CampoTexto/>
        </HeaderEstilizado>
    )
}

export default Cabecalho