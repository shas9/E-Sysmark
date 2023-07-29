import { Category } from "./useCategories";
import useData from "./useData";

export interface Product {
    id: number;
    name: string;
    background_image: string;
}
  
const useProducts = (selectedCategory: Category | null) => useData<Product>('/games', {params: {category: selectedCategory?.id}}, [selectedCategory?.id,])

export default useProducts;