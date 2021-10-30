import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { PortalProvider, PortalHost } from "@gorhom/portal";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { SelectInput, TextInput, Modal } from "./src/components";
import ListItem from "./src/components/select-input/ListItem";
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
  // @ts-ignore
  const styles = useStyles({ colors });

  return (
    <SafeAreaView style={styles.container}>
      {/* testing */}
      <SelectInput
        title="Test Select Input"
        subtitle="Test Selected Subtitle"
        ListItem={ListItem}
        items={[
          { key: "selectInputTest", value: "test1" },
          { key: "selectInputTest", value: "test2" },
          { key: "selectInputTest", value: "test3" },
          { key: "selectInputTest", value: "test4" },
          { key: "selectInputTest", value: "test5" },
          { key: "selectInputTest", value: "test6" },
          { key: "selectInputTest", value: "test7" },
          { key: "selectInputTest", value: "test8" },
          { key: "selectInputTest", value: "test9" },
          { key: "selectInputTest", value: "test10" },
          { key: "selectInputTest", value: "test11" },
          { key: "selectInputTest", value: "test12" },
          { key: "selectInputTest", value: "test13" },
          { key: "selectInputTest", value: "test14" },
          { key: "selectInputTest", value: "test15" },
        ]}
      />
      <Modal
        label="Sample Modal"
        withCloseButton={true}
        child={
          <TextInput
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
              <TextInput
                label="Condition"
                placeholder="test"
                containerStyle={styles.input}
              />
            }
          >
            <React.Fragment>
              <TextInput
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
              <TextInput
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

          <TextInput
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
          <TextInput
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
      <TextInput
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
      <TextInput
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
