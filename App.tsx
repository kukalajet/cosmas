import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Theme, DripsyProvider, View } from "dripsy";
import { PortalProvider, PortalHost } from "@gorhom/portal";
import { Ionicons } from "@expo/vector-icons";
import { Input, Modal } from "./src/components";
import theme from "./src/configs/theme";
import { Portal } from "@gorhom/portal";
import { makeStyles } from "./src/utils";

export default function App() {
  const styles = useStyles();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOnModalPress = useCallback(() => {
    setShowModal((state) => !state);
  }, []);

  return (
    <DripsyProvider theme={theme as unknown as Theme}>
      <PortalProvider>
        <SafeAreaView style={styles.container}>
          {/* testing */}
          <TouchableOpacity style={styles.button} onPress={handleOnModalPress}>
            <Text style={styles.text}>{showModal ? "Hide" : "Show"} Modal</Text>
          </TouchableOpacity>
          {showModal && (
            <Portal name="modal">
              <Modal onPress={handleOnModalPress}>
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
                    containerStyle={styles.input}
                  />
                  <Input
                    label="Response"
                    value="test"
                    error="second error"
                    multiline
                    trailingIcon={
                      <Ionicons
                        name="close-outline"
                        size={24}
                        color="#B00020"
                      />
                    }
                    containerStyle={styles.input}
                  />
                </React.Fragment>
              </Modal>
            </Portal>
          )}
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
          <PortalHost name="main_host" />
        </SafeAreaView>
      </PortalProvider>
    </DripsyProvider>
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

  // testing
  button: {
    width: "25%",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: "#333",
  },
  text: {
    color: "white",
  },
  // end testing
}));
