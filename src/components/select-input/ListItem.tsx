import React from "react";
import { View, Text } from "react-native";
import { makeStyles } from "../../utils";

type Props = { item: ItemSelectInput };

const ListItem = ({ item }: Props) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>{item.value}</Text>
    </View>
  );
};

const useStyles = makeStyles(() => {
  const color =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  return {
    container: {
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  };
});

export default ListItem;
