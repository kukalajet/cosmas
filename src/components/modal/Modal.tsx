import React from "react";
import { Text, GestureResponderEvent } from "react-native";
import { makeStyles } from "../../utils";

type Props = {
  children: React.ReactElement;
  onPress: (event: GestureResponderEvent) => void;
};

const Modal = ({ children, onPress }: Props) => {
  return <Text></Text>;
};

type StylesProps = {};

const useStyles = makeStyles(({}: StylesProps) => ({}));

export default Modal;
