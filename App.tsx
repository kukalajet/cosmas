import React from "react";
import { Text, SafeAreaView } from "react-native";
import { PortalProvider, PortalHost } from "@gorhom/portal";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Input, Modal } from "./src/components";
import { makeStyles } from "./src/utils";
import theme from "./src/configs/theme";

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <PortalProvider>
            <Content />
          </PortalProvider>
        </SafeAreaProvider>
      </BottomSheetModalProvider>
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
        label="test"
        // withCloseButton={true}
        child={
          <Input
            label="Condition"
            placeholder="test"
            containerStyle={styles.input}
          />
        }
      >
        <React.Fragment>
          <Modal
            label="test2"
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
              <Input
                label="Condition"
                value="testas"
                placeholder="test"
                error="first error"
                width={"60%"}
                multiline
                disabled
                trailingIcon={<Ionicons name="logo-react" size={24} />}
                containerStyle={[styles.input, { paddingHorizontal: 16 }]}
              />
              <Input
                label="Response"
                value="test"
                error="second error"
                multiline
                trailingIcon={
                  <Ionicons name="close-outline" size={24} color="#B00020" />
                }
                containerStyle={[styles.input, { paddingHorizontal: 16 }]}
              />
            </React.Fragment>
          </Modal>

          <Input
            label="Condition"
            value="testas"
            placeholder="test"
            error="first error"
            width={"60%"}
            multiline
            disabled
            trailingIcon={<Ionicons name="logo-react" size={24} />}
            containerStyle={[styles.input, { paddingHorizontal: 16 }]}
          />
          <Input
            label="Response"
            value="test"
            error="second error"
            multiline
            trailingIcon={
              <Ionicons name="close-outline" size={24} color="#B00020" />
            }
            containerStyle={[styles.input, { paddingHorizontal: 16 }]}
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
