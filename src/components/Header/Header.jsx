import HeaderStyle from "../../assets/styles/Header/HeaderStyle"
import Logo from '../../assets/img/logo.png'

const { HeaderContainer, BtnPage, ImgLogo, Link } = HeaderStyle

function Header() {
    return (
        <>
            <HeaderContainer>
                <ImgLogo src={Logo} alt="logo" />
                <Link to='/bem_avaliados'>
                    <BtnPage>Filmes bem avaliados</BtnPage>
                </Link>
                <Link to={'/em_cartaz'}>
                    <BtnPage>Filmes em cartaz</BtnPage>
                </Link>
            </HeaderContainer>
        </>
    )
}

export default Header