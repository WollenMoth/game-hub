import create from "./httpService";

export interface Genre {
  id: number;
  name: string;
}

export default create<Genre>("/genres");
