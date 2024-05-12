import { CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import getCroppedImageUrl from "../services/imageUrl";
import RatingBadge from "./CriticScore";
import GameCardContainer from "./GameCardContainer";
import PlatformIconList from "./PlatformIconList";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <RatingBadge score={game.metacritic} />
        </HStack>
      </CardBody>
    </GameCardContainer>
  );
};

export default GameCard;
