import genreService from "../services/genreService";
import useFetch from "./useFetch";

const useGenres = () => useFetch(genreService);

export default useGenres;
