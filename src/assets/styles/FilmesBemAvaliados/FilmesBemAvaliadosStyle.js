import styled from "styled-components";
import { Link } from "react-router-dom";

const FilmesBemAvaliadosStyle = {

    ConteudoPrincipal : styled.div `
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    `,

    Link: styled(Link) `
    text-decoration: none;
    align-self: flex-start;
    `,
}

export default FilmesBemAvaliadosStyle