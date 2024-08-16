import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genre } from "../services/genreService";
import { Platform } from "../services/platformService";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

type Props = {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
};

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);
  const skeletons = Array.from({ length: 6 }, (_, index) => index);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
        justifyContent="center"
      >
        {isLoading
          ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
