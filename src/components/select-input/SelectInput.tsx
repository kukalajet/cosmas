import React from "react";
import { FlatList, View, ListRenderItem } from "react-native";
import { makeStyles } from "../../utils";
import { Modal } from "../modal";
import { TextInput } from "../text-input";

type Props = {
  title?: string;
  items: Array<string>;
  renderItem: ListRenderItem<string>;
};

const SelectInput = ({ title, items, renderItem }: Props) => {
  const styles = useStyles();

  return (
    <Modal
      label={title}
      withCloseButton={true}
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
        <FlatList data={items} renderItem={renderItem} />
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
