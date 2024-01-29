import { createContext } from 'react';
export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [addItem, setAddItem] = useState();
  const [removeItem, setRemoveItem] = useState();

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}

    </CartContext.Provider>
  );
};

