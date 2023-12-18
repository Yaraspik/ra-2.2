import { JSX } from "react";
import Product from "../Interfaces/Products";

const ShopItem = (props: { item: Product, key: number }): JSX.Element => {
  const { item } = props;
  return (
    <>
      <div className="shop_item">
        <img className="item_img" src={item.img} alt={item.name} />
        <div className="name element">{item.name}</div>
        <div className="color element">{item.color}</div>
        <div className="price element">${item.price}</div>
        <button className="add_button">add to cart</button>
      </div>
    </>
  )
}

export default ShopItem;