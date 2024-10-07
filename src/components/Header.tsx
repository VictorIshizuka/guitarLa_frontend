import { CartItemProps } from "../types";
import Cart from "./Cart";

type HeaderProps = {
  isCart: CartItemProps[];
  removeFromCart: (id: number) => void;
  incrementQuantityItem: (id: number) => void;
  decrementQuantityItem: (id: number) => void;
  clearCart: () => void;
  isEmpty: boolean;
  totalPrice: number;
};

export default function Header({
  isCart,
  removeFromCart,
  incrementQuantityItem,
  decrementQuantityItem,
  clearCart,
  isEmpty,
  totalPrice,
}: HeaderProps) {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./img/logo.svg"
                alt="imagem logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrinho">
              <img
                className="img-fluid"
                src="./img/carrinho.png"
                alt="imagem carrinho"
              />

              <Cart
                isCart={isCart}
                removeFromCart={removeFromCart}
                incrementQuantityItem={incrementQuantityItem}
                decrementQuantityItem={decrementQuantityItem}
                clearCart={clearCart}
                isEmpty={isEmpty}
                totalPrice={totalPrice}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
