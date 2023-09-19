import { useState } from "react";
import styles from "./Card.module.scss";
console.log(styles);

function Card(props) {
  var [isAdded, setIsAdded] = useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onClickFavorite}>
        <img src="/images/heart-unliked.svg" alt="Unliked" />
      </div>
      <img src={props.imageUrl} alt="Sneakers" width={133} height={112} />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between pt-20 align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} грн.</b>
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
