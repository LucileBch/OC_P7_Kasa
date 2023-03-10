/***     ROUTING LOGIC     ***/

/* Importing React routes and the different pages */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Logement from '../pages/Logement';
import About from '../pages/About';
import Error from '../pages/Error';

/* Routing function */
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

/* Exporting routing function */
export default App;
