import styled from 'styled-components'

const HomeStyle = {
    ConteudoPrincipal : styled.div `
    height: auto;
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
    margin-top: 4vh;
    `,

    DefaultText : styled.h4 `
    font-family: Poppins, 'sans-serif';
    font-weight: 400;
    color: #fff;
    font-size: 16px;
    margin: 0;
    margin-bottom: 10vh;
    `,
}

export default HomeStyle