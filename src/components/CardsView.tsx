import { JSX } from "react";
import Product from "../Interfaces/Products";
import ShopCard from "./ShopCard";

const CardsView = (props: { products: Array<Product> }): JSX.Element => {
  return (
    <>
      <div className="cards-container">
        {props.products.map((el, index) =>
          <ShopCard item={el} key={index} />
        )}
      </div>
    </>
  )
}

export default CardsView;