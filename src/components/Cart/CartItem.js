import { useDispatch } from "react-redux";
import { itemBarang } from "../../data/cartItem";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const { nama, quantity, totalHarga, harga, id } = props.item;

  const dispatch = useDispatch();
  const dataKurang = () => dispatch(itemBarang.hapusItem(id));

  const dataTambah = () =>
    dispatch(itemBarang.tambahitem({ id, harga, nama, totalHarga, quantity }));

  return (
    <li className={classes.item}>
      <header>
        <h3>{nama}</h3>
        <div className={classes.price}>
          Rp. {totalHarga.toFixed(2)}
          <span className={classes.itemprice}>
            (Rp. {harga.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={dataKurang}>-</button>
          <button onClick={dataTambah}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
