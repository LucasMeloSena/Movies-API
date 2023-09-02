import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoPageStyle = {
    ConteudoPrincipal : styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    `,

    BackButton: styled.div `
    align-self: flex-start;
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
    
    `
}

export default InfoPageStyle