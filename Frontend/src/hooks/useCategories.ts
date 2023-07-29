import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Category {
    id: number;
    name: string;
}

interface FetchCategoriesResponse {
    count: number;
    results: Category[];

}

const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    
    apiClient
      .get<FetchCategoriesResponse>("/genres", {signal: controller.signal})
      .then((res) => {
        setCategories(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
      });

      return () => controller.abort();
  }, []);

  return { categories, error, isLoading }
}

export default useCategories;