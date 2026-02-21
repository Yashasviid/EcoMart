import React,{ cretaeContext } from "react";
import all_product from '../data/all_product'
export const ShopContext = cretaeContext(null);

const ShopContextProvider = (props) => {
  const contextValue = {all_product};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;