import { useState, useEffect } from "react";
import axios from "axios";
import FilmesBemAvaliadosStyle from "../../assets/styles/FilmesBemAvaliados/FilmesBemAvaliadosStyle";
import Filmes from "../Props/Filmes";
import BackButton from '../Props/BackButton'
const { ConteudoPrincipal, Link } = FilmesBemAvaliadosStyle

function FilmesBemAvaliados() {
    const apiKey = '3b60eddacb7025e1b48c11803ffc00a6';
    const baseUrl = 'https://api.themoviedb.org/3/movie/top_rated';
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

    return (
        <>
            <ConteudoPrincipal>
                <Link to={'/'}>
                    <BackButton/>
                </Link>

                <Filmes
                urlBaseImg={imageUrlBase}
                paramApi={data}
                />
            </ConteudoPrincipal>
        </>
    )
}

export default FilmesBemAvaliados