import './App.scss';
import Header from "./components/header/header";
import Registration from "./components/registration/registration";
import {AuthContextProvider} from "./context/authContext";
import {Route, Routes} from "react-router-dom";
import Main from "./components/main/main";
import Protected from "./components/protected";
import Admin from "./components/admin/admin";
import {doc, onSnapshot} from "firebase/firestore";



function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <Header/>
                <Routes>
                    <Route path='/reg' element={<Registration/>}/>
                    <Route path='/main' element={<Protected> <Main/> </Protected>}/>
                    <Route path='/admin' element={<Protected> <Admin/> </Protected>}/>
                </Routes>
            </AuthContextProvider>
        </div>
    );
}

export default App;
