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
  TextInputFocusEventData,
  TextInputContentSizeChangeEventData,
} from "react-native";
import { makeStyles } from "../../utils";

// Testing
import Colors from "../../configs/colors";

type State = "default" | "error" | "disabled";

type Props = {
  label?: string;
  value: string;
  height?: number | string;
  width?: number | string;
  error?: string;
  multiline?: boolean;
  onChangeText?: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const Input = ({
  label,
  value,
  height,
  width = "100%",
  error,
  multiline,
  onChangeText,
  containerStyle,
}: Props) => {
  const [state, setState] = useState<State>("default");
  const [focused, setFocused] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const [_value, setValue] = useState<string | undefined>(value);
  const [_height, setHeight] = useState<number | string | undefined>(height);

  const styles = useStyles({ height: _height, width, state, focused, hovered });

  const _onChangeText = (value: string) => {
    setValue(value);
    if (onChangeText) {
      onChangeText(value);
    }
  };

  const onFocus = (value: NativeSyntheticEvent<TextInputFocusEventData>) => {
    // setFocused(true);
    setHovered(true);
  };

  const onBlur = (value: NativeSyntheticEvent<TextInputFocusEventData>) => {
    // setFocused(false);
    setHovered(false);
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
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          selectionColor="#2F4F4F"
          value={_value}
          multiline={multiline}
          onChangeText={_onChangeText}
          onContentSizeChange={onContainerSizeChange}
          scrollEnabled={false}
          style={styles.input}
          // wip
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
      {!!error && <Text style={styles.error}>ERROR ERROR ERROR</Text>}
    </View>
  );
};

function getBottomBorderColor(
  state?: State,
  focused?: boolean,
  hovered?: boolean
): string {
  if (focused) return Colors.primaryVariant;
  if (state === "disabled") return "#2F4F3F";
  if (state === "error") {
    if (hovered) return Colors.error;
    return Colors.error;
  }

  if (hovered) return "#2F4F9E";
  return "#2F4F4F";
}

type StylesProps = {
  height?: number | string;
  width?: number | string;
  state?: State;
  focused?: boolean;
  hovered?: boolean;
};

const useStyles = makeStyles(
  ({ height, width, state, focused, hovered }: StylesProps) => {
    const bottomBorderColor = getBottomBorderColor(state, focused, hovered);

    return {
      container: {
        width: width,
        justifyContent: "center",
      },
      inputContainer: {
        backgroundColor: "#DCDCDC",
        borderBottomColor: bottomBorderColor,
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
            paddingHorizontal: 16,
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
    };
  }
);

export default Input;
