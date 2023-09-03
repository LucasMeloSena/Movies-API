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
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.3);
        cursor: pointer;
    }
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