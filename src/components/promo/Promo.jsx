import './promo.css';
import promoImg from '../../img/images/header-img.jpg';

export default function Promo() {
  return (
    <section children="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className="highligth">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className="highligth highligth--yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES
            </div>
            <div className="promo__desc">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <button className="promo__btn">Shop Now</button>
            </div>
          </div>

          <div>
            <img src={promoImg} alt="promo"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
