import gameService from "../services/gameService";
import { Genre } from "../services/genreService";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) =>
  useData(
    gameService,
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id]
  );

export default useGames;
