import { useCart } from "./hooks/hook";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const {
    addCart,
    isGuitars,
    isCart,
    removeFromCart,
    incrementQuantityItem,
    decrementQuantityItem,
    clearCart,
    isEmpty,
    totalPrice,
  } = useCart();
  return (
    <>
      <Header
        isCart={isCart}
        removeFromCart={removeFromCart}
        incrementQuantityItem={incrementQuantityItem}
        decrementQuantityItem={decrementQuantityItem}
        clearCart={clearCart}
        isEmpty={isEmpty}
        totalPrice={totalPrice}
      />
      <Main addCart={addCart} isGuitars={isGuitars} />
      <Footer />
    </>
  );
}

export default App;
