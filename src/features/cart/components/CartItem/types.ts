export interface ICartItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface IQuantityButtonProps extends React.PropsWithChildren {
  onClick: () => void;
}
