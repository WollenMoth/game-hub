import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import RatingBadge from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <RatingBadge score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
