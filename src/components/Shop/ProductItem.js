import { useDispatch } from "react-redux";
import { itemBarang } from "../../data/cartItem";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
const ProductItem = (props) => {
  const { nama, harga, deskripsi, id } = props;

  const dispatch = useDispatch();

  const hasil = () => dispatch(itemBarang.tambahitem({ id, nama, harga }));

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{nama}</h3>
          <div className={classes.price}>Rp. {harga.toFixed(2)}</div>
        </header>
        <p>{deskripsi}</p>
        <div className={classes.actions}>
          <button onClick={hasil}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
