import { useState, useEffect } from "react";
import axios from "axios";
import FilmesBemAvaliadosStyle from "../../assets/styles/FilmesBemAvaliados/FilmesBemAvaliadosStyle";
import InfoPageStyle from '../../assets/styles/InfoPage/InfoPageStyle'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const { ConteudoPrincipal, ContainerResponse, ImgFilme, ContainerMovieInfo, ContainerTituloEAno,
    TituloFilme, AnoFilme, ResumoFilme, ContainerAboutMovie, ContainerLanguage, Language, Link, Texto, Link2 } = FilmesBemAvaliadosStyle

const {BackButton, Icon, ButtonText} = InfoPageStyle

function FilmesBemAvaliados() {
    const apiKey = '3b60eddacb7025e1b48c11803ffc00a6';
    const baseUrl = 'https://api.themoviedb.org/3/movie/top_rated';
    const imageUrlBase = 'https://image.tmdb.org/t/p/w500';
    const language = 'pt-BR'
    let [data, setData] = useState({})

    useEffect(() => {
        window.scrollTo(0, 0);

        axios.get(`${baseUrl}?api_key=${apiKey}&language=${language}`, {
            params: {
                api_key: apiKey,
            },
        })
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    function takeYear(date) {
        return date ? date.substring(0, 4) : '';
    }

    return (
        <>
            <ConteudoPrincipal>
                <Link2 to={'/'}>
                    <BackButton>
                        <Icon icon={faArrowLeft}/>
                        <ButtonText>Voltar</ButtonText>
                    </BackButton>
                </Link2>

                {data.results && data.results.map(movie => (
                    <Link to={`/movie/${movie.id}`}>
                        <ContainerResponse key={movie.id}>
                            <ImgFilme key={movie.id} src={`${imageUrlBase}/${movie.poster_path}`} />
                            <ContainerMovieInfo>
                                <ContainerTituloEAno>
                                    <TituloFilme>{movie.original_title}</TituloFilme>
                                    <AnoFilme>{takeYear(movie.release_date)}</AnoFilme>
                                </ContainerTituloEAno>
                                <ContainerAboutMovie>
                                    <Texto>Sinopse:</Texto>
                                    <ResumoFilme>{movie.overview}</ResumoFilme>
                                    <ContainerLanguage>
                                        <Language>{movie.original_language}</Language>
                                    </ContainerLanguage>
                                </ContainerAboutMovie>
                            </ContainerMovieInfo>
                        </ContainerResponse>
                    </Link>
                ))}
            </ConteudoPrincipal>
        </>
    )
}

export default FilmesBemAvaliados