import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home.jsx'

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes