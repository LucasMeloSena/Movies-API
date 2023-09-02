import InfoPageStyle from "../../assets/styles/InfoPage/InfoPageStyle.js"
import { useParams } from "react-router-dom";
import HomeStyle from "../../assets/styles/Home/HomeStyle.js"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const {ConteudoPrincipal, BackButton, Icon, ButtonText} = InfoPageStyle
const {DefaultTitle} = HomeStyle

function InfoPage() {

    const { id } = useParams();

    return (
        <>
            <ConteudoPrincipal>
                <BackButton>
                    <Icon icon={faArrowLeft}/>
                    <ButtonText>Voltar</ButtonText>
                </BackButton>
                <DefaultTitle>Seja bem-vindo a página de detalhes!</DefaultTitle>
            </ConteudoPrincipal>
        </>
    )
}

export default InfoPage