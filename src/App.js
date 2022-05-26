import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
function App() {
  const showYourCard = useSelector((state) => state.uiCard.showCard);
  const cart = useSelector((state) => state.items.items);
  useEffect(() => {
    fetch("https://react-app-b6fb8-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);
  return (
    <Layout>
      {showYourCard && <Cart />}

      <Products />
    </Layout>
  );
}

export default App;
