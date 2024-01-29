import { Route } from 'react-router-dom';

import { ProductContext } from './contexts/ProductContext';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartContext } from './contexts/CartContext';
function App() {
  return (
    <div className="App">
      <CartContext.Provider>
        <ProductContextProvider>
          <Navigation />
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </ProductContextProvider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
