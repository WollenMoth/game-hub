import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface Order {
  label: string;
  value: string;
}

type Props = {
  selectedOrder: Order | null;
  onOrderSelect: (order: Order) => void;
};

const SortSelector = ({ selectedOrder, onOrderSelect }: Props) => {
  const fields: Order[] = [
    { label: "Relevance", value: "" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Date added", value: "-added" },
    { label: "Rating", value: "-rating" },
    { label: "Popularity", value: "-metacritic" },
  ];

  if (!selectedOrder) selectedOrder = fields[0];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ordered by: {selectedOrder?.label}
      </MenuButton>
      <MenuList>
        {fields.map((field) => (
          <MenuItem key={field.value} onClick={() => onOrderSelect(field)}>
            {field.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
