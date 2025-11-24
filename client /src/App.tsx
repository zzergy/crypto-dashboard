import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard, Homepage } from './pages';
import Register from './pages/Register';
import { ROUTES } from './routes';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Homepage />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path={ROUTES.REGISTER} element={<Register />} />
                    <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
