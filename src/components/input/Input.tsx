import React, { useState, useEffect } from "react";
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
import { theme } from "../../configs";

type State = "default" | "error" | "disabled";

type Props = {
  label?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  height?: number | string;
  width?: number | string;
  disabled?: boolean;
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
  disabled,
  multiline,
  onChangeText,
  leadingIcon,
  trailingIcon,
  containerStyle,
}: Props) => {
  const [state, setState] = useState<State>("default");
  const [focused, setFocused] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const [_value, setValue] = useState<string | undefined>(value);
  const [_height, setHeight] = useState<number | string | undefined>(height);

  useEffect(() => {
    if (disabled) {
      setState("disabled");
      return;
    }
    if (error) {
      setState("error");
      return;
    }
    setState("default");
  }, [disabled, error]);

  const styles = useStyles({
    height: _height,
    width,
    state,
    focused,
    hovered,
    disabled,
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
    <View
      // @ts-expect-error
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={StyleSheet.flatten([styles.container, containerStyle])}
    >
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {!!leadingIcon && <View style={styles.icon}>{leadingIcon}</View>}
        <TextInput
          value={_value}
          placeholder={placeholder}
          onFocus={_onFocus}
          onBlur={_onBlur}
          onChangeText={_onChangeText}
          onContentSizeChange={_onContainerSizeChange}
          multiline={multiline}
          editable={!disabled}
          scrollEnabled={false}
          style={styles.input}
        />
        {!!trailingIcon && <View style={styles.icon}>{trailingIcon}</View>}
      </View>
      {!!error && !disabled && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

type StylesProps = {
  height?: number | string;
  width?: number | string;
  state?: State;
  focused?: boolean;
  hovered?: boolean;
  disabled?: boolean;
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
    disabled,
    hasLeadingIcon,
    hasTrailingIcon,
  }: StylesProps) => {
    const bottomBorderColor = getActiveColor(state, focused, hovered);

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
        borderRadius: 6,
        backgroundColor: "#ECEFF1",
        ...Platform.select({
          default: {
            borderBottomWidth: 2.5,
          },
          web: {
            outlineWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.125,
            shadowRadius: 2,
            elevation: 2,
            borderBottomWidth: 3,
          },
        }),
      },
      label: {
        color: disabled ? "#9E9E9E" : undefined,
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
        fontSize: 16,
        paddingTop: 2,
        paddingHorizontal: 4,
        color: theme.colors.error,
      },
      icon: { padding: 6 },
    };
  }
);

function getActiveColor(
  state?: State,
  focused?: boolean,
  hovered?: boolean
): string {
  const colors = theme.colors;

  if (state === "error") {
    if (hovered) return colors.error;
    return `${colors.error}95`;
  }

  if (state === "disabled") return colors.surfaceDark;
  if (focused) return colors.secondaryDark;
  if (hovered) return colors.secondaryLight;

  return colors.onSurface;
}

export default Input;
