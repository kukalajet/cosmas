import React, { useState } from "react";
import {
  TextInput,
  Platform,
  StyleSheet,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputContentSizeChangeEventData,
} from "react-native";
import { View, H5, P } from "dripsy";
import { makeStyles } from "../../utils";
import { theme } from "../../configs";

type State = "default" | "error" | "disabled";

type Props = {
  label?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  height?: number | string;
  width?: number | string;
  multiline?: boolean;
  onChangeText?: (value: string) => void;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
};

const Input = ({
  label,
  value,
  placeholder,
  error,
  height,
  width = "100%",
  multiline,
  onChangeText,
  leadingIcon,
  trailingIcon,
  containerStyle,
}: Props) => {
  const [state, setState] = useState<State>("error");
  const [focused, setFocused] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const [_value, setValue] = useState<string | undefined>(value);
  const [_height, setHeight] = useState<number | string | undefined>(height);

  const styles = useStyles({
    height: _height,
    width,
    state,
    focused,
    hovered,
    hasLeadingIcon: !!leadingIcon,
    hasTrailingIcon: !!trailingIcon,
  });

  const _onChangeText = (value: string) => {
    setValue(value);
    if (onChangeText) {
      onChangeText(value);
    }
  };

  const _onFocus = (value: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    setHovered(true);
  };

  const _onBlur = (value: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    setHovered(false);
  };

  const _onContainerSizeChange = (
    event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
  ) => {
    if (multiline) {
      setHeight(event.nativeEvent.contentSize.height);
    }
  };

  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      {!!label && <H5 style={styles.label}>{label}</H5>}
      <View sx={{ backgroundColor: "surface" }} style={styles.inputContainer}>
        {!!leadingIcon && <View style={styles.icon}>{leadingIcon}</View>}
        <TextInput
          value={_value}
          placeholder={placeholder}
          onFocus={_onFocus}
          onBlur={_onBlur}
          onChangeText={_onChangeText}
          onContentSizeChange={_onContainerSizeChange}
          multiline={multiline}
          scrollEnabled={false}
          style={styles.input}
        />
        {!!trailingIcon && <View style={styles.icon}>{trailingIcon}</View>}
      </View>
      {!!error && <P style={styles.error}>{error}</P>}
    </View>
  );
};

type StylesProps = {
  height?: number | string;
  width?: number | string;
  state?: State;
  focused?: boolean;
  hovered?: boolean;
  hasLeadingIcon: boolean;
  hasTrailingIcon: boolean;
};

const useStyles = makeStyles(
  ({
    height,
    width,
    state,
    focused,
    hovered,
    hasLeadingIcon,
    hasTrailingIcon,
  }: StylesProps) => {
    const bottomBorderColor = getBottomBorderColor(state, focused, hovered);

    return {
      container: {
        width: width,
        justifyContent: "center",
        ...Platform.select({
          web: null,
          default: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.125,
            shadowRadius: 1,
            elevation: 1,
          },
        }),
      },
      inputContainer: {
        flexDirection: "row",
        borderBottomColor: bottomBorderColor,
        borderBottomWidth: 3,
        borderRadius: 6,
        ...Platform.select({
          web: {
            outlineWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.125,
            shadowRadius: 2,
            elevation: 2,
          },
        }),
      },
      label: {
        paddingBottom: 2,
        paddingHorizontal: 4,
      },
      input: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingStart: hasLeadingIcon ? undefined : 8,
        paddingEnd: hasTrailingIcon ? undefined : 8,
        ...Platform.select({
          web: {
            height: height,
            paddingVertical: 12,
            outlineWidth: 0,
          },
          default: {
            paddingTop: 12,
            paddingBottom: 10,
          },
        }),
      },
      error: {
        paddingTop: 2,
        paddingHorizontal: 4,
        color: theme.colors.error,
      },
      icon: { padding: 6 },
    };
  }
);

function getBottomBorderColor(
  state?: State,
  focused?: boolean,
  hovered?: boolean
): string {
  const colors = theme.colors;

  if (state === "error") {
    if (hovered) return colors.error;
    return `${colors.error}95`;
  }

  if (state === "disabled") return `${colors.primary}95`;
  if (focused) return colors.primary;
  if (hovered) return colors.primary;

  return colors.primary;
}

export default Input;
