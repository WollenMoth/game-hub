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
    { label: "Name", value: "name" },
    { label: "Release date", value: "released" },
    { label: "Date added", value: "added" },
    { label: "Date created", value: "created" },
    { label: "Last updated", value: "updated" },
    { label: "Rating", value: "rating" },
    { label: "Metacritic", value: "metacritic" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedOrder ? `Ordered by: ${selectedOrder?.label}` : "Order"}
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
