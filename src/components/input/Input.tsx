import React, { useState } from "react";
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
} from "react-native";
import { makeStyles } from "../../utils";

type Props = {
  value: string;
  height?: number | string;
  width?: number | string;
  multiline?: boolean;
  onChangeText?: (value: string) => void;
};

const Input = ({ value, height, width, multiline, onChangeText }: Props) => {
  const [_value, setValue] = useState<string | undefined>(value);
  const [_height, setHeight] = useState<number | string | undefined>(height);

  const styles = useStyles({ height: _height, width });

  const _onChangeText = (value: string) => {
    setValue(value);
    if (onChangeText) {
      onChangeText(value);
    }
  };

  const onContainerSizeChange = (
    event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
  ) => {
    if (multiline) {
      setHeight(event.nativeEvent.contentSize.height);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={_value}
        multiline={multiline}
        onChangeText={_onChangeText}
        onContentSizeChange={onContainerSizeChange}
        style={styles.child}
      />
    </View>
  );
};

type StylesProps = { height?: number | string; width?: number | string };

const useStyles = makeStyles(({ height, width }: StylesProps) => ({
  container: {
    flex: 1,
    width: width,
    justifyContent: "center",
  },
  child: {
    height: height,
  },
}));

export default Input;
