import { useState } from "react";
import styles from "./Card.module.scss";
console.log(styles);

function Card({ title, imageUrl, price, onClickFavorite, onPlus }) {
  var [isAdded, setIsAdded] = useState(false);
  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src="/images/heart-unliked.svg" alt="Unliked" />
      </div>
      <img src={imageUrl} alt="Sneakers" width={133} height={112} />
      <h5>{title}</h5>
      <div className="d-flex justify-between pt-20 align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} грн.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/images/btn-checked.svg" : "/images/plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
