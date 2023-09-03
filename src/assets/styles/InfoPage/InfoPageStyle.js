import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoPageStyle = {
    ConteudoPrincipal : styled.div `
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    `,

    BackButton: styled.div `
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    &:hover {
        cursor: pointer;
    }
    `,

    Icon: styled(FontAwesomeIcon) `
    color: #fff;
    margin-left: 20px;
    `,

    ButtonText: styled.h4 `
    color: #fff;
    font-size: 15px;
    margin-left: 10px;
    `,

    Link: styled(Link) `
    text-decoration: none;
    align-self: flex-start;
    `,

    ContainerResponse : styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 10vh;
    `,

    ImgFilme : styled.img `
    height: 380px;
    width: 230px;
    border-radius: 5px;
    margin-left: 30px;    
    `,

    ContainerMovieInfo : styled.div `
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 380px;
    background-color: #323d52;
    border-radius: 5px;
    box-shadow: 0 0 8px rgba(255, 255, 255, 1);
    margin-bottom: 7vh;
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

    ContainerGenres: styled.div `
    background-color: #d1d1d149;
    width: auto;
    height: 22px;
    border-radius: 5px;
    margin-left: 20px;
    margin-top: 20px;
    `,

    Genres: styled.h6 `
    text-align: center;
    color: #fff;
    padding: 1px 15px;
    `,

    DefaultContainer: styled.div `
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    `,

    TextoInfo: styled.h4 `
    
    `,

    ContainerCaracteristicas : styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    `,

    ContainerTrailer : styled.div `
    margin-top: 5vh;
    margin-bottom: 50px;
    height: 400px;
    width: 50vw;
    box-shadow: rgba(95, 126, 183, 0.35) 0px 5px 15px;
    `
}

export default InfoPageStyle