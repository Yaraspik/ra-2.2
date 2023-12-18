import { JSX } from "react";
import Product from "../Interfaces/Products";

const ShopCard = (props: { item: Product, key: number }): JSX.Element => {
  const { item } = props;
  return (
    <>
      <div className="shop-card">
        <img className="shop-card-img" src={item.img} alt={item.name} />
        <div className="header">
          <div className="shop-card-title"><p>{item.name}</p></div>
          <div className="shop-card-color"><p>{item.color}</p></div>
        </div>
        <div className="footer">
          <div className="price">${item.price}</div>
          <button className="add_button">ADD TO CART</button>
        </div>
      </div>
    </>
  )
}

export default ShopCard;