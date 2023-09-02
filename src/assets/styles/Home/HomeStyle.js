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
    `
}

export default HomeStyle