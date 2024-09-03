import tags from "./tags.json"
import styled from "styled-components"

const TagContainer = styled.div`
    display: flex;
    gap: 3rem;
    margin-top: 0.4rem;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24xp;
    margin: 0;
`

const TagButton = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    padding: 1rem;
    box-sizing: border-box;
    transition: background-color 0.3s ease;
    border: 2px solid transparent;
    &:hover{
        border-color: #C98CF1;
    }
`

const Tags = () => {
    return<TagContainer>
        <TagTitulo>Busque por tags:</TagTitulo>
        {tags.map(tag => <TagButton key={tag.id}>{tag.titulo}</TagButton>)}
    </TagContainer>
}

export default Tags