import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home.jsx'
import InfoPage from "../components/InfoPage/InfoPage.jsx"

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/movie/:id" element={<InfoPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes