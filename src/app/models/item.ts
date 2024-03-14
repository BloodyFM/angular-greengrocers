export interface Item {
  id: string;
  name: string;
  type: string;
  price: number;
}

export interface CartItem {
  id: string;
  name: string;
  type: string;
  price: number;
  amount: number;
}
