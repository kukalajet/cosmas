import React from "react";
import { StyleSheet } from "react-native";
import { Theme, DripsyProvider, View } from "dripsy";
import { Input } from "./src/components";
import theme from "./src/configs/theme";

export default function App() {
  return (
    <DripsyProvider theme={theme as unknown as Theme}>
      <View sx={{ backgroundColor: "background" }} style={styles.container}>
        <Input
          label="Condition"
          value="test"
          error="first error"
          width={"50%"}
          multiline
          containerStyle={styles.input}
        />
        <Input
          label="Response"
          value="test"
          error="second error"
          multiline
          containerStyle={styles.input}
        />
      </View>
    </DripsyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  input: { paddingHorizontal: 16, paddingVertical: 8 },
});
