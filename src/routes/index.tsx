import { BrowserRouter, Route, Routes } from "react-router-dom";

const RoutesManager = () => {
    return (<BrowserRouter>
        <Routes>
            <Route
                path={"/"}
                element={
                    <></>
                }
            ></Route>
            <Route
                path={"/login"}
                element={
                    <></>
                }
            ></Route>
        </Routes>
    </BrowserRouter>)
}

export default RoutesManager