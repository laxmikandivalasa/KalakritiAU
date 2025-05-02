import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Home from '../pages/Home';
import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';
import CartPage from '../pages/CartPage';
import Dashboard from '../pages/Dashboard';
import ProductView from '../pages/ProductView';
import { Errorpage } from '../pages/Errorpage';

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="product" element={<ProductView />} />
                    <Route path="*" element={<Errorpage/>} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}