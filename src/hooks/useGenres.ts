import genreService from "../services/genreService";
import useData from "./useData";

const useGenres = () => useData(genreService);

export default useGenres;
