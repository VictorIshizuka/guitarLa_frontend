import { GuitarProps } from "../types";
import Button from "./Button";

type MainProps = {
  addCart: (value: GuitarProps) => void;
  isGuitars: GuitarProps[];
};

export default function Main({ isGuitars, addCart }: MainProps) {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nossa Coleção</h2>

      <div className="row mt-5">
        {[...isGuitars]?.map((guitar, index) => {
          return (
            <div
              className="col-md-6 col-lg-4 my-4 row align-items-center"
              key={index}
            >
              <div className="col-4">
                <img
                  className="img-fluid"
                  src={`./img/${guitar.image}.jpg`}
                  alt={`image guitar ${guitar.title}`}
                />
              </div>
              <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">
                  {guitar.title}
                </h3>
                <p>{guitar.description}</p>
                <p className="fw-black text-primary fs-3">${guitar.price}</p>
                <Button onClick={() => addCart(guitar)} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
