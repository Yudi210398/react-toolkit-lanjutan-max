import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const data = [
  {
    id: `p1`,
    harga: 50000,
    nama: "Mouse",
    deskripsi: "Mouse Keren Sekali",
  },
  {
    id: `p2`,
    harga: 100000,
    nama: "Kipas",
    deskripsi: "Kipas Keren Dingin",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {data.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            nama={item.nama}
            harga={item.harga}
            deskripsi={item.deskripsi}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
