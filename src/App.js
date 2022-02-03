import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Treasure from './components/Treasure';
import Social from './components/Social';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/treasure" element={<Treasure />} />
            </Routes>
            <Social />
        </>
    );
}

export default App;
