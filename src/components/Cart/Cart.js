import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const dataItem = useSelector((state) => state.items.items);
  const totalHarga = useSelector((state) => state.items.totalPrice);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {dataItem.map((data) => (
          <CartItem
            key={data.id}
            item={{
              id: data.id,
              nama: data.nama,
              quantity: data.quantity,
              totalHarga: data.totalHarga,
              harga: data.harga,
            }}
          />
        ))}
      </ul>
      {dataItem.length > 0 && (
        <h1>
          Total Harga Semua :Rp.
          {new Intl.NumberFormat("id-ID").format(totalHarga)}
        </h1>
      )}
    </Card>
  );
};

export default Cart;
