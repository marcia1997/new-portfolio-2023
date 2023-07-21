import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import { Helmet } from "react-helmet";


const ProductList = () => {
  return (
    <div className="pl">
      <div class="gradient"></div>
      <div className="pl-texts">
        <h2 className="pl-title">
        <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Modak&display=swap"
          rel="stylesheet"
        />
      </Helmet>
          SomeWork</h2>
        <p className="pl-desc">
          In here you can take a look to my proyects made with different programming skills,concepts and styles.
           I hope you like it!
        </p>
      </div>
      
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
