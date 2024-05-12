import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { HttpService } from "../services/httpService";

const useFetch = <T>(service: HttpService<T>) => {
  const [results, setResults] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = service.read();

    request
      .then((res) => setResults(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => cancel();
  }, [service]);

  return { results, setResults, error, setError, isLoading };
};

export default useFetch;
