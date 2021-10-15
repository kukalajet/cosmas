import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { PortalProvider, PortalHost } from "@gorhom/portal";
import { Ionicons } from "@expo/vector-icons";
import { Input, Modal } from "./src/components";
import theme from "./src/configs/theme";
import { makeStyles } from "./src/utils";

export default function App() {
  const styles = useStyles();

  return (
    <PortalProvider>
      <SafeAreaView style={styles.container}>
        {/* testing */}
        <Modal
          child={
            <Input
              label="Condition"
              placeholder="test"
              containerStyle={styles.input}
            />
          }
          withCloseButton={true}
        >
          <React.Fragment>
            <Text>Test</Text>
            <Input
              label="Condition"
              value="testas"
              placeholder="test"
              error="first error"
              width={"60%"}
              multiline
              disabled
              trailingIcon={<Ionicons name="logo-react" size={24} />}
              containerStyle={[styles.input, { paddingHorizontal: 8 }]}
            />
            <Input
              label="Response"
              value="test"
              error="second error"
              multiline
              trailingIcon={
                <Ionicons name="close-outline" size={24} color="#B00020" />
              }
              containerStyle={[styles.input, { paddingHorizontal: 8 }]}
            />
          </React.Fragment>
        </Modal>
        {/* end testing */}
        <Input
          label="Condition"
          value="testas"
          placeholder="test"
          error="first error"
          width={"60%"}
          multiline
          disabled
          trailingIcon={<Ionicons name="logo-react" size={24} />}
          containerStyle={styles.input}
        />
        <Input
          label="Response"
          value="test"
          error="second error"
          multiline
          trailingIcon={
            <Ionicons name="close-outline" size={24} color="#B00020" />
          }
          containerStyle={styles.input}
        />
        <PortalHost name="main" />
      </SafeAreaView>
    </PortalProvider>
  );
}

type StylesProps = {};

const useStyles = makeStyles(({}: StylesProps) => ({
  container: {
    backgroundColor: "#FFFFFE",
    flex: 1,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
}));
