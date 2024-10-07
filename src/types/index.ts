export type GuitarProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};

export type CartItemProps = GuitarProps & {
  quantity: number;
};
