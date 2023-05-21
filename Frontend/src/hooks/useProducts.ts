import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Product {
    id: number;
    name: string;
    background_image: string;
}
  
interface FetchProductResponse {
    count: number;
    results: Product[];
}
  
const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    
    apiClient
      .get<FetchProductResponse>("/games", {signal: controller.signal})
      .then((res) => setProducts(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
      });

      return () => controller.abort();
  }, []);

  return { products, error }
}

export default useProducts;