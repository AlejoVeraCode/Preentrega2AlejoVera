import styles from "./ItemDetail.module.css";
import Contador from "../Contador/Contador";

const ItemDetail = ({ titulo, categoria, precio, imagen, descripcion, stock, }) => {
  return (
    <div className={styles.Contenedor}>
      <main>
        <article className={styles.CardItem}>
          <header className={styles.ProductCard}>
            <h2 className={styles.ProductHeader}>{titulo}</h2>
            <p>${precio}</p>
          </header>
          <picture className={styles.image}>
            <img src={imagen} alt={titulo} className={styles.ProductImage} />
          </picture>
          <section>
            <p className={styles.ProductInfo}>
              Categoria:{categoria}
              <br></br>
              Descripcion:{descripcion}
            </p>
          </section>
          <footer className={styles.ProductFooter}>
            <Contador
              initial={1}
              stock={stock}
              onAdd={(quantity) => console.log("Cantidad agregada")}
            />
          </footer>
        </article>
      </main>
    </div>
  );
};

export default ItemDetail;
