import { JSX } from "react";
import Product from "../Interfaces/Products";
import ShopItem from "./ShopItem";

const ListView = (props: { products: Array<Product> }): JSX.Element => {
  return (
    <>
      <div className="list-container">
        {props.products.map((el, index) =>
          <ShopItem item={el} key={index}/>
        )}
      </div>
    </>
  )
}

export default ListView;