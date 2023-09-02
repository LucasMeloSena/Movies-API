import HomeStyle from '../assets/styles/Home/HomeStyle.js'
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const { ConteudoPrincipal, DefaultTitle, Input, Icon } = HomeStyle

function Home() {
    return (
        <>
            <ConteudoPrincipal>
                <DefaultTitle>Seja bem-vindo a API de MoviesLA!</DefaultTitle>
                <div>
                    <Input
                        type="text"
                        placeholder='Pesquise algum filme aqui!' />
                    <Icon icon={faSearch} />
                </div>
            </ConteudoPrincipal>
        </>
    )
}

export default Home