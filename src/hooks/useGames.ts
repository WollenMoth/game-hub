import gameService from "../services/gameService";
import useFetch from "./useFetch";

const useGames = () => useFetch(gameService);

export default useGames;
