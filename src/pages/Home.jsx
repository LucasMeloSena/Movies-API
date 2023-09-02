import HomeStyle from '../assets/styles/Home/HomeStyle.js'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios';
import { useEffect, useState } from 'react';

const { ConteudoPrincipal, DefaultTitle, Input, Icon, ContainerResponse, ImgFilme, ContainerMovieInfo, ContainerTituloEAno,
    TituloFilme, AnoFilme, ResumoFilme, ContainerAboutMovie, ContainerLanguage, Language, Link } = HomeStyle

function Home() {
    const apiKey = '3b60eddacb7025e1b48c11803ffc00a6';
    const baseUrl = 'https://api.themoviedb.org/3/movie/popular';
    const imageUrlBase = 'https://image.tmdb.org/t/p/w500';
    const language = 'pt-BR'
    let [data, setData] = useState({})

    useEffect(() => {
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
                <DefaultTitle>Seja bem-vindo a Movies API!</DefaultTitle>
                <div>
                    <Input
                        type="text"
                        placeholder='Pesquise algum filme aqui!' />
                    <Icon icon={faSearch} />
                </div>

                {data.results && data.results.map(movie => (
                    <Link to={`/movie/${movie.id}`}>
                        <ContainerResponse>
                            <ImgFilme key={movie.id} src={`${imageUrlBase}/${movie.poster_path}`} />
                            <ContainerMovieInfo>
                                <ContainerTituloEAno>
                                    <TituloFilme>{movie.original_title}</TituloFilme>
                                    <AnoFilme>{takeYear(movie.release_date)}</AnoFilme>
                                </ContainerTituloEAno>
                                <ContainerAboutMovie>
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

export default Home