import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import gameService, { Game } from "../services/gameService";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = gameService.read();

    request
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => cancel();
  }, []);

  return { games, setGames, error, setError, isLoading };
};

export default useGames;
