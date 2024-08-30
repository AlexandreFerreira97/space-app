import styled from "styled-components";


const ImagemEstilizada = styled.figure`
    background-image: ${props => `url(${props.$banner.png})`};
`