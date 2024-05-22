import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import { HttpService } from "../services/httpService";

const useData = <T>(
  service: HttpService<T>,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      setIsLoading(true);

      const { request, cancel } = service.read(requestConfig);

      request
        .then((res) => setData(res.data.results))
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        })
        .finally(() => setIsLoading(false));

      return () => cancel();
    },
    deps ? [...deps] : []
  );

  return { data, setResults: setData, error, setError, isLoading };
};

export default useData;
