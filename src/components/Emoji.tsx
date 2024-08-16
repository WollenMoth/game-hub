import { Text } from "@chakra-ui/react";

type Props = {
  rating: number;
};

const Emoji = ({ rating }: Props) => {
  return (
    <Text mt={1}>
      {{
        3: "😐",
        4: "👏🏻",
        5: "🔥",
      }[rating] ?? null}
    </Text>
  );
};

export default Emoji;
