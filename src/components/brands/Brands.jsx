import hm from '../../img/brands/HM.png';
import obey from '../../img/brands/Obey.png';
import shopIfy from '../../img/brands/Shopify.png';
import lacoste from '../../img/brands/Lacoste.png';
import levis from '../../img/brands/Levis.png';
import amazon from '../../img/brands/Amazon.png';
import './brands.css';

export default function Brend() {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li>
            <a href="#!">
              <img src={hm} alt="HM" />
            </a>
            <a href="#!">
              <img src={obey} alt="Obey" />
            </a>
            <a href="#!">
              <img src={shopIfy} alt="Shopify" />
            </a>
            <a href="#!">
              <img src={lacoste} alt="Lacoste" />
            </a>
            <a href="#!">
              <img src={levis} alt="Levis" />
            </a>
            <a href="#!">
              <img src={amazon} alt="Amazon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
