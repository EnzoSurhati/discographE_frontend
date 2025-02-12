import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav";
import Home from './components/Home'
import SingleAlbum from './components/SingleAlbum'
import Account from './components/Account'
// import Login from './components/Login'
import Register from './components/Registration'
import { store } from './store'
import { Provider } from 'react-redux'
import {loadStripe} from '@stripe/stripe-js';
import ParticleBackground from "./components/Particles";
import Footer from "./components/Footer";
import { CartProvider } from "./components/context/CartContext";
import Loader from './components/Loader';

function App() {
  const [token, setToken] = useState(null)

  const stripe = loadStripe("pk_test_51QqjrgE07wEyDbAku3UoJH8UleVDSceKyI38RQ5R00lh2UXHzHa6UdqnkLBHdbqUjpnG81JRQbZaILqFa6EvoDbA00mMgvx83t", {
    betas: ['custom_checkout_beta_5'],
  });

  return (
    <div className="flex flex-col min-h-screen">
      <ParticleBackground />
      <Provider store={store}>
        <Router>
          <CartProvider>
            <Nav />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/albums/:id" element={<SingleAlbum />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </main>
            <Footer />
          </CartProvider>
        </Router>
      </Provider>
    </div>
  );
}

export default App