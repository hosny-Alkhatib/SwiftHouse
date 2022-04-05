import React from 'react';
import styles from '../App.css';

const Card = ({ imgUrl, craft }) => {
  return (
    <article className={styles.article}>
      <img src={imgUrl} alt={craft} style={styles.Card} />
      <h2 className={styles.header}>{craft}</h2>
    </article>
  );
};

export default Card;
