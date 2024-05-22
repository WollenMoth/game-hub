import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack marginBottom={1}>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
              objectFit="cover"
            />
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
