import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeStyle = {
    ConteudoPrincipal : styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    `,

    BlueText : styled.span `
    color: #5F7EB7;
    `,

    DefaultTitle : styled.h2 `
    font-family: Raleway, 'sans-serif';
    font-weight: 700;
    color: #fff;
    margin-top: 5vh;
    `,

    Input: styled.input `
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    padding-left: 10px;
    font-family: Poppins, 'sans-serif';
    font-size: 14px;
    height: 28px;
    width: 350px;
    margin-bottom: 100px;
    &:focus {
        outline: none;
    }
    `,

    Icon: styled(FontAwesomeIcon) `
    color: #fff;
    margin-left: 10px;
    &:hover {
        cursor: pointer;
    }
    `,

    ContainerResponse : styled.div `
        width: 50vw;
        height: 300px;
        background-color: #323d52;
        border-radius: 5px;
        box-shadow: 0 0 8px rgba(255, 255, 255, 1);
        margin-bottom: 7vh;
        display: flex;
        flex-direction: row;
    `,

    ImgFilme : styled.img `
    height: 300px;
    width: 180px;
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
    `
}

export default HomeStyle