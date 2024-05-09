import { Badge } from "@chakra-ui/react";

type Props = {
  score: number;
};

const CriticScore = ({ score }: Props) => {
  let color = "red";

  if (score > 75) color = "green";
  else if (score > 60) color = "yellow";

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
