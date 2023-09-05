import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const BackButtonStyle = {
    BackButton: styled.div`
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

    Icon: styled(FontAwesomeIcon)`
    color: #fff;
    margin-left: 20px;
    `,

    ButtonText: styled.h4`
    color: #fff;
    font-size: 15px;
    margin-left: 10px;
    `
}

function BackButton() {
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate(-1)
    }

    return (
        <>
            <BackButtonStyle.BackButton onClick={handleNavigation}>
                <BackButtonStyle.Icon icon={faArrowLeft} />
                <BackButtonStyle.ButtonText>Voltar</BackButtonStyle.ButtonText>
            </BackButtonStyle.BackButton>
        </>
    )
}

export default BackButton