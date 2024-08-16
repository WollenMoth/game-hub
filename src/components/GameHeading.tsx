import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const platform = gameQuery.platform?.name ?? "";
  const genre = gameQuery.genre?.name ?? "";
  const heading = `${platform} ${genre} Games`;

  return (
    <Heading as="h1" size="2xl" mb={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
