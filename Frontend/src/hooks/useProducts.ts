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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    
    apiClient
      .get<FetchProductResponse>("/games", {signal: controller.signal})
      .then((res) => {
        setProducts(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
      });

      return () => controller.abort();
  }, []);

  return { products, error, isLoading }
}

export default useProducts;