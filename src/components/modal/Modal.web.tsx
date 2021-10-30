import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Portal } from "@gorhom/portal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { makeStyles } from "../../utils";
import { theme } from "../../configs";

type ModalSize = "medium" | "large";

type Props = {
  children: React.ReactElement;
  child: React.ReactElement;
  label?: string;
  description?: string;
  size?: ModalSize;
  withCloseButton?: boolean;
  onDismiss?: () => void;
  onRemove?: () => void;
  onConfirm?: () => void;
};

const Modal = ({
  children,
  child,
  label,
  description,
  withCloseButton = false,
  size = "large",
  onDismiss,
  onRemove,
  onConfirm,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const styles = useStyles({ size });

  const handleOnPress = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const handleDismiss = useCallback(() => {
    setOpen(false);
    if (onDismiss) onDismiss();
  }, []);

  const handleOnRemove = useCallback(() => {
    setOpen(false);
    if (onRemove) onRemove();
  }, []);

  return (
    <React.Fragment>
      <Pressable onPress={handleOnPress}>{child}</Pressable>
      {open && (
        <Portal name="modal">
          <Pressable onPress={handleDismiss} style={styles.backdrop}>
            <Pressable onPress={null} style={styles.modal}>
              {(withCloseButton || !!label) && (
                <View style={styles.labelContainer}>
                  <Text style={styles.title}>{label}</Text>
                  {withCloseButton && (
                    <MaterialCommunityIcons
                      onPress={handleOnRemove}
                      name="window-close"
                      size={24}
                    />
                  )}
                </View>
              )}
              {!!description && (
                <View style={styles.descriptionContainer}>
                  <Text style={styles.description}>{description}</Text>
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

const getWidth = (size: ModalSize): string => {
  switch (size) {
    case "medium":
      return "50%";
    case "large":
      return "65%";
    default:
      return "65%";
  }
};

const getHeight = (size: ModalSize): string => {
  switch (size) {
    case "medium":
      return "75%";
    case "large":
      return "90%";
    default:
      return "90%";
  }
};

type StylesProps = {
  size: ModalSize;
};

const useStyles = makeStyles(({ size }: StylesProps) => ({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: `${theme.colors.onBackground}50`,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    minWidth: 384,
    minHeight: 576,
    width: getWidth(size),
    height: getHeight(size),
    borderRadius: 16,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  description: {
    fontSize: 14,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  descriptionContainer: {
    paddingVertical: 2,
    paddingHorizontal: 18,
  },
}));

export default Modal;
