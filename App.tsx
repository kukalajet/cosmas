import React from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "./src/components";

export default function App() {
  return (
    <View style={styles.container}>
      <Input value="test" multiline containerStyle={{ padding: 16 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffeee",
    alignItems: "center",
    paddingTop: 50,
  },
  input: {},
});
