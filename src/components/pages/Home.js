import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import hunt from "../assets/huntrender.png";
import explosionado from "../assets/explosionadohunt.png";
import perfilAuditivo from "../assets/perfilAuditivo.png";
import simulacion from "../assets/simulacion.png";
import nemesonHunt from "../assets/nemesonHunt.png";

import "./Pages.scss";

const Home = () => {
  const [carouselPos, setCarouselPos] = useState(1);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="banner">
        <img src={nemesonHunt} alt="logo" />
        <div className="banner__info">
          <p>399€</p>
          <button>Comprar</button>
        </div>
      </section>
      <section className="hero">
        <h1>Nemeson Hunt</h1>
        <img src={hunt} alt="nemesonHunt" />
        <h2>Descubre la audiología inteligente.</h2>
      </section>
      <section id="nosotros" className="second__section">
        <div className="text__wrapper">
          <h2>Nemeson Hunt</h2>
          <p>Nemeson es una empresa tecnológica especializada en el desarrollo de dispositivos auditivos inteligentes.</p>
          <p>
            Con más de 20 años de eperiencia en el sector y más de 3 000 000 perfiles auditivos analizados ponemos el foco en la protección y la recuperación audtiva garantizando los mejores
            resultados.
          </p>
        </div>
      </section>
      <section id="hunt" className="inteligent__section">
        <div className="text__wrapper">
          <h2>
            El más inteligente <br></br>
            <span>Nemeson Hunt.</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="bottom_wrapper">
          <p>Descubre el Nemeson Hunt</p>
          <button className="buy__button">Comprar</button>
        </div>
        <img src={hunt} alt="nemesonHunt" />
      </section>
      <section id="colores" className="color__section">
        <h2>Colors. </h2>
        {/* <div className="colors__div"> */}
        {/* <article>
            <img src={hunt} alt="nemesonHunt" />
          </article>
          <article>
            <img src={hunt} alt="nemesonHunt" />
          </article>
          <article>
            <img src={hunt} alt="nemesonHunt" />
          </article>
          <article>
            <img src={hunt} alt="nemesonHunt" />
          </article> */}
        <div className="product__imgs">
          <article>
            <img className="nemeson__bigImg" src={carouselPos === 1 ? hunt : carouselPos === 2 ? hunt : carouselPos === 3 ? hunt : hunt} alt="cepillos" />
          </article>

          <div className="productImg__small">
            <img className={carouselPos != 1 && "img__inActive"} onClick={() => setCarouselPos(1)} src={hunt} alt="nemeson" />
            <img className={carouselPos != 2 && "img__inActive"} onClick={() => setCarouselPos(2)} src={hunt} alt="nemeson" />
            <img className={carouselPos != 3 && "img__inActive"} onClick={() => setCarouselPos(3)} src={hunt} alt="nemeson" />
            <img className={carouselPos != 4 && "img__inActive"} onClick={() => setCarouselPos(4)} src={hunt} alt="nemeson" />
          </div>
        </div>
        {/* </div> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>Elige tu color preferido.</p>
        <button className="buy__button">Comprar</button>
      </section>
      <section className="dispositivos__section">
        <h2>Dispositivos auditivos de última generación.</h2>
        <p>
          Nemeson es una empresa tecnológica especializada en el desarrollo de <br></br> dispositivos auditivos inteligentes.
        </p>
        <p>
          Con más de 20 años de eperiencia en el sector y más de 3 000 000 perfiles auditivos <br></br> analizados ponemos el foco en la protección y la recuperación audtiva garantizando los <br></br>{" "}
          mejores resultados.
        </p>
      </section>
      <section className="personalizable__section">
        <h2>Personalizable.</h2>
        <img src={explosionado} alt="explosionado" />
        <p>
          Hemos analizado más de tres millones de perfiles auditivos para <br></br> asegurarnos de que Nemeson One sirva para todo el mundo.
        </p>
        <p>
          Puedes seleccionar el perfil que mejor se ajuste para ti <br></br> desde el audífono o desde la app de Nemeson One.
        </p>
      </section>
      <section className="medida__section">
        <h2>A medida para ti.</h2>
        <img src={perfilAuditivo} alt="perfilAuditivo" />
        <p>
          Perfil auditivo analizado<br></br> <span>Carlos, 45 años</span>
        </p>
      </section>
      <section className="experience__section">
        <h2>Vive la experiencia.</h2>
        <img src={simulacion} alt="perfilAuditivo" />
        <p>Simulación sin protección auditiva</p>
        <img src={simulacion} alt="perfilAuditivo" />
        <p>Simulación del Nemeson Hunt</p>
      </section>
      <section id="contact" class="contact__section">
        <h2>Contacto.</h2>
        <p>Cuéntanos tus dudas y te las resolveremos</p>
        <div className="form__wrapper">
          <form action="#" method="post">
            <input className="short__input" type="text" placeholder="Nombre" required />
            <input className="short__input" type="text" placeholder="Apellido" required />
            <input className="long__input" type="email" placeholder="Correo" required />
            <input className="long__input" type="text" placeholder="Teléfono" required />
            <input className="long__input" type="text" placeholder="Movil" required />
            <textarea rows="7" type="text" placeholder="Consulta" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
