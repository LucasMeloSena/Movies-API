import HomeStyle from '../assets/styles/Home/HomeStyle.js'
import FilmesPopulares from '../components/FilmesPopulares/FilmesPopulares.jsx'
import Header from '../components/Header/Header.jsx'

const { ConteudoPrincipal, DefaultTitle, DefaultText} = HomeStyle

function Home() {

    return (
        <>
            <Header/>

            <ConteudoPrincipal>
                <DefaultTitle>Seja bem-vindo a Movies API!</DefaultTitle>
                <DefaultText>Confira os filmes mais populares do momento!</DefaultText>
                <FilmesPopulares />
            </ConteudoPrincipal>
        </>
    )
}

export default Home