import './header.css';
import logoImg from '../../img/icons/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoImg} alt="FASHION" className="logo__img" />
            <span className="logo">FASHION</span>
          </div>

          <nav className="navigation">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#!">CATALOGUE</a>
              </li>
              <li className="nav__item">
                <a href="#!">FASHION</a>
              </li>
              <li className="nav__item">
                <a href="#!">FAVOURITE</a>
              </li>
              <li className="nav__item">
                <a href="#!">LIFESTYLE</a>
              </li>
              <li className="nav__item">
                <a href="#!" className="header__nav-btn">
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
