import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  StyleSheet,
  StyleProp,
  ViewStyle,
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
  containerStyle?: StyleProp<ViewStyle>;
};

const Input = ({
  value,
  height,
  width = "100%",
  multiline,
  onChangeText,
  containerStyle,
}: Props) => {
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
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <Text style={styles.label}>LABEL</Text>
      <View style={styles.inputContainer}>
        <TextInput
          selectionColor="#2F4F4F"
          value={_value}
          multiline={multiline}
          onChangeText={_onChangeText}
          onContentSizeChange={onContainerSizeChange}
          scrollEnabled={false}
          style={styles.input}
        />
      </View>
      <Text style={styles.error}>ERROR ERROR ERROR</Text>
    </View>
  );
};

type StylesProps = {
  height?: number | string;
  width?: number | string;
};

const useStyles = makeStyles(({ height, width }: StylesProps) => ({
  container: {
    width: width,
    justifyContent: "center",
  },
  inputContainer: {
    backgroundColor: "#DCDCDC",
    borderBottomColor: "tomato",
    borderBottomWidth: 4,
    borderRadius: 6,
  },
  label: {
    paddingBottom: 2,
    paddingHorizontal: 4,
  },
  input: {
    alignItems: "center",
    paddingHorizontal: 8,
    ...Platform.select({
      web: {
        height: height,
        paddingVertical: 16,
        outlineWidth: 0,
      },
      default: {
        paddingTop: 12,
        paddingBottom: 8,
      },
    }),
  },
  error: {
    paddingHorizontal: 4,
  },
}));

export default Input;
