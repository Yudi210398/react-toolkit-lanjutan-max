import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cardShow } from "../../data/cartSlice";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const dataKeranjang = useSelector((state) => state.items.totalQuantity);
  const items = useSelector((state) => state.items.items);

  const showCard = () => dispatch(cardShow.showNow());
  return (
    <button onClick={showCard} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{dataKeranjang} </span>
    </button>
  );
};

export default CartButton;
