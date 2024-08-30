import styled from "styled-components"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`
const LinkEstilizado = styled.a`
    text-decoration: none;
`
const BarraLateral = () => {
    return(
        <aside>
            <nav>
                <ListaEstilizada>
                    <li>
                        <LinkEstilizado href="">Início</LinkEstilizado>
                    </li>

                    <li>
                        <LinkEstilizado href="">Mais visitas</LinkEstilizado>
                    </li>

                    <li>
                        <LinkEstilizado href="">Mais curtidas</LinkEstilizado>
                    </li>

                    <li>
                        <LinkEstilizado href="">Novas</LinkEstilizado>
                    </li>

                    <li>
                        <LinkEstilizado href="">Surpreenda-me</LinkEstilizado>
                    </li>

                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral