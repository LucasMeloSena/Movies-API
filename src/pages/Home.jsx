import HomeStyle from '../assets/styles/Home/HomeStyle.js'

const {ConteudoPrincipal, DefaultTitle, Input} = HomeStyle

function Home() {
    return (
        <>
            <ConteudoPrincipal>
                <DefaultTitle>Seja bem-vindo a API de MoviesLA!</DefaultTitle>
                <Input type="text"/>
            </ConteudoPrincipal>
        </>
    )
}

export default Home