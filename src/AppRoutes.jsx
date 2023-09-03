import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import InfoPage from "./pages/InfoPage.jsx"
import FilmesEmCartaz from "./components/FilmesEmCartaz/FilmesEmCartaz.jsx"
import FilmesBemAvaliados from "./components/FilmesBemAvaliados/FilmesBemAvaliados.jsx"

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/movie/:id" element={<InfoPage/>}></Route>
                    <Route path="/em_cartaz" element={<FilmesEmCartaz/>}></Route>
                    <Route path="/bem_avaliados" element={<FilmesBemAvaliados/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes