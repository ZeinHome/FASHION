import styles from './Card.module.css';

import arrow from '../../img/icons/arrow.svg';

export default function Card({ title, img }) {
  return (
    <li className={styles.card}>
      <a href="#!" className={styles.card__link}></a>
      <img className={styles.card__img} src={img} alt="card" />'
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__muted}>Explore Now!</p>
        </div>
        <div className={styles.card__icon}>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </li>
  );
}
