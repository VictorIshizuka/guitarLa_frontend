import { CartItemProps } from "../types";

type CartProps = {
  isCart: CartItemProps[];
  removeFromCart: (id: number) => void;
  incrementQuantityItem: (id: number) => void;
  decrementQuantityItem: (id: number) => void;
  clearCart: () => void;
  isEmpty: boolean;
  totalPrice: number;
};

export default function Cart({
  isCart,
  removeFromCart,
  incrementQuantityItem,
  decrementQuantityItem,
  clearCart,
  isEmpty,
  totalPrice,
}: CartProps) {
  return (
    <div id="carrinho" className="bg-white p-3">
      {isEmpty ? (
        <p className="text-center">O carrinho esta vazio!</p>
      ) : (
        <>
          <table className="w-100 table">
            <thead>
              <tr>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {isCart?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        className="img-fluid"
                        src={`./img/${item.image}.jpg`}
                        alt={item.title}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td className="fw-bold">${item.price}</td>
                    <td className="flex align-items-start gap-4">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => decrementQuantityItem(item.id)}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => incrementQuantityItem(item.id)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p className="text-end">
            Total pagar: <span className="fw-bold">${totalPrice}</span>
          </p>
        </>
      )}
      <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>
        Esvaziar carrinho
      </button>
    </div>
  );
}
