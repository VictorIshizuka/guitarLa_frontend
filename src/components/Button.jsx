export default function Button({ onClick }) {
  return (
    <button type="button" className="btn btn-dark w-100" onClick={onClick}>
      Adicionar ao carrinho
    </button>
  );
}
