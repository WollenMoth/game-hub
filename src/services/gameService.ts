import create from "./httpService";

export interface Game {
  id: number;
  name: string;
}

export default create<Game>("/games");
