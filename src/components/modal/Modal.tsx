import React from "react";
import { Text, GestureResponderEvent } from "react-native";
import { makeStyles } from "../../utils";

type Props = {
  children: React.ReactElement;
  withCloseButton?: boolean;
  button?: {
    onPress: (event: GestureResponderEvent) => void;
  };
};

const Modal = ({ children }: Props) => {
  return <Text></Text>;
};

type StylesProps = {};

const useStyles = makeStyles(({}: StylesProps) => ({}));

export default Modal;
