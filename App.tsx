import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { PortalProvider, PortalHost } from "@gorhom/portal";
import { Ionicons } from "@expo/vector-icons";
import { Input, Modal } from "./src/components";
import theme from "./src/configs/theme";
import { makeStyles } from "./src/utils";
import { NavigationContainer, useTheme } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <PortalProvider>
        <Content />
      </PortalProvider>
    </NavigationContainer>
  );
};

const Content = () => {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  return (
    <SafeAreaView style={styles.container}>
      {/* testing */}
      <Modal
        withCloseButton={true}
        child={
          <Input
            label="Condition"
            placeholder="test"
            containerStyle={styles.input}
          />
        }
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
  );
};

type StylesProps = {
  colors: Colors;
};

const useStyles = makeStyles(({ colors }: StylesProps) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
}));

export default App;
