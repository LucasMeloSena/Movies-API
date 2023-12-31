import InfoPageStyle from "../assets/styles/InfoPage/InfoPageStyle.js";
import { useParams } from "react-router-dom";
import HomeStyle from "../assets/styles/Home/HomeStyle.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Caracteristicas from "../components/Props/Caracteristicas.jsx";
import ReactPlayer from "react-player";
import BackButtonProp from '../components/Props/BackButton.jsx'

const { ConteudoPrincipal, Link, ContainerResponse, ContainerMovieInfo, ContainerTituloEAno,
    TituloFilme, AnoFilme, Texto, ResumoFilme, ContainerAboutMovie, ImgFilme, ContainerGenres, Genres, DefaultContainer,
    TextoInfo, ContainerCaracteristicas, ContainerTrailer } = InfoPageStyle;

const { DefaultTitle } = HomeStyle;

function InfoPage() {
    const { id } = useParams();

    const apiKey = '3b60eddacb7025e1b48c11803ffc00a6';
    const baseUrl = 'https://api.themoviedb.org/3/movie';
    const imageUrlBase = 'https://image.tmdb.org/t/p/w500';
    const language = 'pt-BR';
    let [movie, setMovie] = useState({});
    let [keyVideo, setKeyVideo] = useState([]);

    const keys = String(keyVideo.results && keyVideo.results.filter(nome => nome.name == 'Official Trailer').map(chave => chave.key))
    const urlTrailerYoutube = keys && keys.length > 0 ? `https://www.youtube.com/watch?v=${keys}` : '';

    useEffect(() => {
        axios.get(`${baseUrl}/${id}?language=${language}`, {
            params: {
                api_key: apiKey,
            },
        })
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get(`${baseUrl}/${id}/videos`, {
            params: {
                api_key: apiKey,
            },
        })
            .then(response => {
                setKeyVideo(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        window.scrollTo(0, 0);
    }, []);

    function takeYear(date) {
        return date ? date.substring(0, 4) : '';
    }

    function formatarNumeroDolar(valor) {
        return '$' + valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }

    function NumeroDolar(valor) {
        const numeroFormatado = formatarNumeroDolar(valor);
        return numeroFormatado;
    }

    return (
        <>
            <ConteudoPrincipal>
                <Link to={'/'}>
                    <BackButtonProp/>
                </Link>
                <DefaultTitle>Seja bem-vindo a página de detalhes!</DefaultTitle>

                <ContainerResponse>
                    <ContainerMovieInfo>
                        <ContainerTituloEAno>
                            <TituloFilme>{movie.original_title}</TituloFilme>
                            <AnoFilme>{takeYear(movie.release_date)}</AnoFilme>
                        </ContainerTituloEAno>
                        <ContainerAboutMovie>
                            <Texto>Sinopse:</Texto>
                            <ResumoFilme>{movie.overview}</ResumoFilme>
                            <DefaultContainer>
                                {movie.genres && movie.genres.map(genero => (
                                    <ContainerGenres>
                                        <Genres>{genero.name}</Genres>
                                    </ContainerGenres>
                                ))}
                            </DefaultContainer>
                        </ContainerAboutMovie>
                    </ContainerMovieInfo>
                    <ImgFilme src={`${imageUrlBase}/${movie.poster_path}`} />
                </ContainerResponse>

                <TextoInfo>INFORMAÇÕES:</TextoInfo>
                <ContainerCaracteristicas>
                    <Caracteristicas
                        titulo={"Status"}
                        resposta={movie.status}
                    />
                    {movie.spoken_languages && movie.spoken_languages.map(linguas => (
                        <Caracteristicas
                            titulo={"Idioma"}
                            resposta={linguas.name}
                        />
                    ))}
                    <Caracteristicas
                        titulo={"Duração"}
                        resposta={`${movie.runtime} min`}
                    />
                    <Caracteristicas
                        titulo={"Orçamento"}
                        resposta={`${NumeroDolar((parseInt(movie.budget)))}`}
                    />
                    <Caracteristicas
                        titulo={"Receita"}
                        resposta={`${NumeroDolar(parseInt(movie.revenue))}`}
                    />
                    <Caracteristicas
                        titulo={"Avaliações"}
                        resposta={`${(movie.vote_average * 10).toFixed(0)}%`}
                    />
                </ContainerCaracteristicas>

                <ContainerTrailer>
                    {keys === "" || keys === null || keys === undefined ? (
                        <TextoInfo>Ocorreu um erro ao carregar o trailer 😭</TextoInfo>
                    ) : (
                        <ReactPlayer
                            url={urlTrailerYoutube}
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    )}
                </ContainerTrailer>
            </ConteudoPrincipal>
        </>
    );
}

export default InfoPage;
