import styles from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ id, titulo, precio, imagen, stock }) => {
  return (
    <article className={styles.CardItem}>
      <header className={styles.ProductCard}>
        <h2 className={styles.ProductHeader}>{titulo}</h2>
      </header>
      <br></br>
      <picture>
        <img src={imagen} alt={titulo} className={styles.ProductImage} />
      </picture>
      <br></br>
      <section className={styles.ProductInfo}>
        <p className={styles.ProductInfoTitle}>Precio: ${precio}</p>
        <p className={styles.productInfoDescription}>
          Stock disponible: {stock}
        </p>
      </section>
      <footer className={styles.ProductFooter}>
        <Link to={`/item/${id}`} className={styles.Detail}>
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
