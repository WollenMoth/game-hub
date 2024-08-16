import { GameQuery } from "../App";
import gameService from "../services/gameService";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) =>
  useData(
    gameService,
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
