import cart from "./assets/carrito.svg";
import styles from ".//CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.img}>
      <img src={cart} alt="Carrito" width={30} />0
    </div>
  );
};

export default CartWidget;
