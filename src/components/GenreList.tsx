import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

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
