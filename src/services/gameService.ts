import create from "./httpService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

export default create<Game>("/games");
