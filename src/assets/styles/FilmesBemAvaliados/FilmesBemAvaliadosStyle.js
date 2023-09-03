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

    ContainerResponse : styled.div `
    width: 50vw;
    height: auto;
    background-color: #323d52;
    border-radius: 5px;
    box-shadow: 0 0 8px rgba(255, 255, 255, 1);
    margin-bottom: 7vh;
    display: flex;
    flex-direction: row;
    `,

    ImgFilme : styled.img `
    height: 380px;
    width: 200px;
    border-radius: 5px;
    `,

    ContainerMovieInfo : styled.div `
    display: flex;
    flex-direction: column;
    `,

    ContainerTituloEAno : styled.div `
    background-color: #fff;
    width: 100%;
    height: 36px;
    border-radius: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    `,

    TituloFilme : styled.h4 `
    font-family: Poppins, 'sans-serif';
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    margin-left: 20px;
    margin-right: auto;
    color: #1b2029;
    `,

    AnoFilme : styled.h6 `
    font-family: Poppins, 'sans-serif';
    font-size: 15px;
    font-weight: 400;
    text-align: right;
    margin-right: 20px;
    margin-left: auto;
    color: #1b2029;
    `,

    Texto: styled.h4 `
    color: #fff;
    font-family: Poppins, 'sans-serif';
    font-weight: 500;
    align-self: flex-start;
    margin-left: 20px;
    margin-bottom: 20px;
    font-size: 20px; 
    `,

    ResumoFilme : styled.h6 `
    color: #fff;
    font-family: Poppins, 'sans-serif';
    font-size: 15px;
    font-weight: 400;
    margin-left: 20px;
    margin-right: 20px;
    `,

    ContainerAboutMovie: styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `,

    ContainerLanguage: styled.div `
    background-color: #d1d1d149;
    width: 50px;
    height: 22px;
    border-radius: 5px;
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 20px;
    `,

    Language: styled.h6 `
    text-align: center;
    color: #fff;
    `,

    Link: styled(Link) `
    text-decoration: none;
    margin-top: 7vh;
    `,

    Link2: styled(Link) `
    text-decoration: none;
    align-self: flex-start;
    `,
}

export default FilmesBemAvaliadosStyle