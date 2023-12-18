import { JSX } from "react";
import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import products from "../db/products";

const Store = (): JSX.Element => {
  const [state, setState] = useState('view_list');

  function onSwitch() {
    setState(state === 'view_module' ? 'view_list' : 'view_module');
  }

  return (
    <>
      <IconSwitch icon={state} onSwitch={onSwitch} />
      {state === "view_list" ? <CardsView products={products} /> : <ListView products={products} />}
    </>
  )
}

export default Store;