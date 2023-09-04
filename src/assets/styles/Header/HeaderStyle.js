import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = {
    HeaderContainer: styled.header `
    height: 7vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    `,

    BtnPage : styled.button `
    border-radius: 5px;
    background-color: #fff;
    border: none;
    margin-left: 15px;
    padding: 4px 20px;
    transition: all 0.5s ease;
    text-align: center;
    color: #1b2029;
    font-size: 16px;
    font-family: Poppins, 'sans-serif';
    font-weight: 400;
    &:hover {
        cursor: pointer;
        transition: all 0.5s;
        background-color: #d1d1d149;
        color: #fff;
    }
    `,

    ImgLogo: styled.img `
    width: 50px;
    height: 50px;
    `,

    Link: styled(Link) `
    text-decoration: none;
    `
}

export default HeaderStyle