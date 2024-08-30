import styled from "styled-components"

const ItemDeListaEstilizada = styled.li`
`

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return <ItemDeListaEstilizada>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="icone" />
        {children}
    </ItemDeListaEstilizada>
}

export default ItemNavegacao