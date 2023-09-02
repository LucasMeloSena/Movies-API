import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    font-family: Poppins, 'sans-serif';
    text-shadow: 2px 2px #5F7EB7;
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
    height: 25px;
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
        height: 250px;
        background-color: #323d52;
        border-radius: 5px;
        box-shadow: 0 0 8px rgba(255, 255, 255, 1);
        margin-bottom: 5vh;
        display: flex;
        flex-direction: row;
    `,

    ImgFilme : styled.img `
    height: 250px;
    width: 180px;
    `,

    ContainerMovieInfo : styled.div `
    display: flex;
    flex-direction: column;
    `,

    ContainerTituloEAno : styled.div `
    background-color: #fff;
    width: 38vw;
    height: 35px;
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
    `,

    AnoFilme : styled.h6 `
    font-family: Poppins, 'sans-serif';
    font-size: 15px;
    font-weight: 400;
    text-align: right;
    margin-right: 20px;
    margin-left: auto;
    `
}

export default HomeStyle