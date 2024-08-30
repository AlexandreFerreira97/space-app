import styled from "styled-components"

const ItemDeListaEstilizada = styled.li`
line-height: 29px;
font-size: 24px;
margin-bottom: 30px;
cursor: pointer;
color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
display: flex;
align-items: center;
gap: 22px;
`

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return <ItemDeListaEstilizada $ativo={ativo}>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="icone" />
        {children}
    </ItemDeListaEstilizada>
}

export default ItemNavegacao