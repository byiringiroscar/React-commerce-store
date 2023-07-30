import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import './style/home.css';
import Header from './pages/Header';
import menu from './assets/menu.png';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <>
      <main>
        <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        <section className="main-content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
          <button
            type="button"
            className="menu"
            onClick={toggleMenu}
          >
            <img
              src={menu}
              alt="menu-img"
            />
          </button>
        </section>
      </main>
    </>
  );
}
export default App;
