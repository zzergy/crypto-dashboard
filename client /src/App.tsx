import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard, Homepage } from './pages';
import Register from './pages/Register';
import { ROUTES } from './routes';
import { ToastContainer } from 'react-toastify';

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
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default App;
