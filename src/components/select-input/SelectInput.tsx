import React from "react";
import { View, ListRenderItem, FlatList, Platform } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { makeStyles } from "../../utils";
import { Modal } from "../modal";
import { TextInput } from "../text-input";

// `BottomSheetFlatList` seems to not be working on `web` platforms.
const List = Platform.OS === "web" ? FlatList : BottomSheetFlatList;

type ListItemProps = { item: ItemSelectInput };

type Props = {
  title?: string;
  subtitle?: string;
  items: Array<ItemSelectInput>;
  ListItem: React.FC<ListItemProps>;
  modalSize?: ModalSize;
};

const SelectInput = ({
  title,
  subtitle,
  items,
  ListItem,
  modalSize,
}: Props) => {
  const styles = useStyles();

  const renderItem: ListRenderItem<ItemSelectInput> = ({ item }) => (
    <ListItem item={item} />
  );

  return (
    <Modal
      label={title}
      description={subtitle}
      withCloseButton={true}
      size={modalSize}
      child={
        <TextInput
          label="Condition"
          placeholder="test"
          pressable={false}
          containerStyle={styles.input}
        />
      }
    >
      <View style={{ flex: 1 }}>
        <List
          data={items}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </Modal>
  );
};

type StylesProps = {};

const useStyles = makeStyles(() => ({
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
}));

export default SelectInput;
