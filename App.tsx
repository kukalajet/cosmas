import React from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "./src/components";

export default function App() {
  return (
    <View style={styles.container}>
      <Input value="test" width={"90%"} multiline />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffeee",
    alignItems: "center",
    justifyContent: "center",
  },
});
