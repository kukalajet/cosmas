import React, { useCallback, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { Portal } from "@gorhom/portal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { makeStyles } from "../../utils";
import { theme } from "../../configs";

type Props = {
  children: React.ReactElement;
  child: React.ReactElement;
  withCloseButton?: boolean;
};

const Modal = ({ children, withCloseButton = false, child }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const styles = useStyles();

  const handleOnPress = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  return (
    <React.Fragment>
      <Pressable onPress={handleOnPress}>{child}</Pressable>
      {open && (
        <Portal name="modal">
          <Pressable onPress={handleOnPress} style={styles.backdrop}>
            <Pressable onPress={null} style={styles.modal}>
              {withCloseButton && (
                <View style={styles.header}>
                  <MaterialCommunityIcons
                    onPress={handleOnPress}
                    name="window-close"
                    size={24}
                  />
                </View>
              )}
              {children}
            </Pressable>
          </Pressable>
        </Portal>
      )}
    </React.Fragment>
  );
};

type StylesProps = {};

const useStyles = makeStyles(({}: StylesProps) => ({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: `${theme.colors.onBackground}50`,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    minWidth: 384,
    minHeight: 576,
    width: "50%",
    height: "75%",
    padding: 8,
    borderRadius: 16,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
}));

export default Modal;
