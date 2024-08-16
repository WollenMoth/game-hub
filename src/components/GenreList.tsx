import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../services/genreService";
import getCroppedImageUrl from "../services/imageUrl";

type Props = {
  selectedGenre: Genre | null;
  onGenreSelect: (genre: Genre) => void;
};

const GenreList = ({ selectedGenre, onGenreSelect }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
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
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                variant="link"
                onClick={() => onGenreSelect(g)}
                fontWeight={selectedGenre === g ? "bold" : "normal"}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
