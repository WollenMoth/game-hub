import gameService from "../services/gameService";
import { Genre } from "../services/genreService";
import { Platform } from "../services/platformService";
import useData from "./useData";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData(
    gameService,
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
