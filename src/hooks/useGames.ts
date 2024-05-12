import gameService from "../services/gameService";
import useData from "./useData";

const useGames = () => useData(gameService);

export default useGames;
