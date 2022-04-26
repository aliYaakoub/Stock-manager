export type ItemType = {
  id: string
  itemId: string;
  brand: string;
  type: string;
  color: string; 
  description: string;
  quantity: number;
}

export enum ViewType {
  GRID,
  LIST,
}