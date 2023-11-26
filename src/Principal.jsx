import { Routes , Route} from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import App from "./App";
import Home from "./pages/Home"
function Principal (){
    return(
        <div>
            <h1>Routes</h1>
            <Routes>
                 <Route path="/"element={<Layout></Layout>}>
                 <Route path="/about"element={<About></About>}/>
                 <Route path="/"element={<App></App>}></Route>
                 <Route path="/dashboard"element={<Dashboard></Dashboard>}></Route>
                 </Route>


            </Routes>
        </div>
    )
};

export default Principal;