import styled from "styled-components"

const StyledCaracteristicas = {
    SubContainerCaracteristicas: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e028;
    width: 12vw;
    height: 15vh;
    border-radius: 5px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
    `,

    TituloCaracteristica: styled.h6`
    font-family: Poppins, 'sans-serif';
    font-size: 18px;
    font-weight: 500;
    `,

    ResultCaracteristica: styled.h4`
    font-family: Poppins, 'sans-serif';
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
    `,
}

function Caracteristicas({ titulo, resposta }) {
    return (
        <>
            <StyledCaracteristicas.SubContainerCaracteristicas>
                <StyledCaracteristicas.TituloCaracteristica>{titulo}</StyledCaracteristicas.TituloCaracteristica>
                <StyledCaracteristicas.ResultCaracteristica>{resposta}</StyledCaracteristicas.ResultCaracteristica>
            </StyledCaracteristicas.SubContainerCaracteristicas>
        </>
    )
}

export default Caracteristicas