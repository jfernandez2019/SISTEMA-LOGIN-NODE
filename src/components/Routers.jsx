import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./Login"
export const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/Home" element={<Home></Home>}></Route>
            </Routes>
        </>
    )
}
