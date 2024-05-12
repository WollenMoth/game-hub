import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { HttpService } from "../services/httpService";

const useData = <T>(service: HttpService<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = service.read();

    request
      .then((res) => setData(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => cancel();
  }, [service]);

  return { data, setResults: setData, error, setError, isLoading };
};

export default useData;
