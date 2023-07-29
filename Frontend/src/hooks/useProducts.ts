import useData from "./useData";

export interface Product {
    id: number;
    name: string;
    background_image: string;
}
  
const useProducts = () => useData<Product>('/games')

export default useProducts;