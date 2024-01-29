import { createContext, useState } from 'react';

export const ProductContext = createContext();
function ProductContextProvider() {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider value={products}>
      <Main />;
    </ProductContext.Provider>
  );
}
export default ProductContextProvider;
