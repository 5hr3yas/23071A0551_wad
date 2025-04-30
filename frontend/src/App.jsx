import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('You have been logged out.');
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <nav className="bg-blue-600 text-white p-4 w-full">
          <ul className="flex justify-center space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:underline ${isActive ? 'font-bold underline' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `hover:underline ${isActive ? 'font-bold underline' : ''}`
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `hover:underline ${isActive ? 'font-bold underline' : ''}`
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  `hover:underline ${isActive ? 'font-bold underline' : ''}`
                }
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `hover:underline ${isActive ? 'font-bold underline' : ''}`
                }
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:underline ${isActive ? 'font-bold underline' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:underline ${isActive ? 'font-bold underline' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
        <div className="p-4 flex-grow flex justify-center items-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
