import { useLayoutEffect, useState } from "react";
import "./Layout.scss";
import logo from "../assets/logoo.png";
import burger from "../assets/burger.png";

const Navigation = () => {
  const [size, setSize] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useLayoutEffect(() => {
    window.innerWidth < 676 && setSize(true);
  }, []);

  const toogleMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };
  return (
    <>
      {size ? (
        <header id="home" class="header">
          <img className="logo__nav" src={logo} alt="logo" />
          <nav class="nav">
            <img onClick={() => toogleMenu()} className="burger__nav" src={burger} alt="burger" />
          </nav>
          {openMenu && (
            <div className="openMenu">
              <button onClick={() => toogleMenu()}>X</button>
              <div className="openMenu_menu">
                <ul class="ul">
                  <li>
                    <a href="#hunt" onClick={() => toogleMenu()}>
                      Nemeson Hunt
                    </a>
                  </li>
                  <li>
                    <a href="#colores" onClick={() => toogleMenu()}>
                      Colores
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={() => toogleMenu()}>
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </header>
      ) : (
        <header id="home" class="header">
          <img className="logo__nav" src={logo} alt="logo" />
          <nav class="nav">
            <ul class="ul">
              <li>
                <a href="#hunt">Nemeson Hunt </a>
              </li>
              <li>
                <a href="#colores">Colores </a>
              </li>
              <li>
                <a href="#contact">Contacto </a>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navigation;
