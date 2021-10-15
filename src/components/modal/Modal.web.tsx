import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { makeStyles } from "../../utils";
import { theme } from "../../configs";

type Props = {
  children: React.ReactElement;
  onPress: (event: GestureResponderEvent) => void;
};

const Modal = ({ children, onPress }: Props) => {
  const styles = useStyles();

  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.backdropContainer}>
        <Pressable onPress={null} style={styles.modalContainer}>
          {children}
        </Pressable>
      </View>
    </Pressable>
  );
};

type StylesProps = {};

const useStyles = makeStyles(({}: StylesProps) => ({
  backdropContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: `${theme.colors.onBackground}50`,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    minWidth: 384,
    minHeight: 576,
    width: "50%",
    height: "75%",
    borderRadius: 16,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default Modal;
