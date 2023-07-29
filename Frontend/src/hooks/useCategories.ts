import useData from "./useData";

export interface Category {
    id: number;
    name: string;
    image_background: string;
}

const useCategories = () => useData<Category>("/genres");

export default useCategories;