import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaAndroid,
  FaApple,
  FaGlobe,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { Platform } from "../services/gameService";

type Props = {
  platforms: Platform[];
};

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendoswitch,
    pc: FaWindows,
    playstation: FaPlaystation,
    web: FaGlobe,
    xbox: FaXbox,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((p) => (
        <Icon as={iconMap[p.slug]} key={p.id} color="gray.500" fontSize="xl" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
