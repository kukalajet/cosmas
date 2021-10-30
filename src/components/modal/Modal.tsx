import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Text, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { makeStyles } from "../../utils";

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
  size = "medium",
  onDismiss,
  onRemove,
  onConfirm,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => getSnapPoints(size), []);
  const { bottom } = useSafeAreaInsets();

  const styles = useStyles();

  useEffect(() => {
    if (open) bottomSheetRef.current?.present();
    if (!open) bottomSheetRef.current?.dismiss();
  }, [open]);

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

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <React.Fragment>
      <Pressable onPress={handleOnPress}>{child}</Pressable>
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onDismiss={handleDismiss}
        backdropComponent={renderBackdrop}
        bottomInset={bottom}
        index={snapPoints.length - 1}
        keyboardBehavior="interactive"
      >
        {(withCloseButton || !!label) && (
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{label}</Text>
            {withCloseButton && (
              <MaterialCommunityIcons
                onPress={handleOnRemove}
                name="window-close"
                size={28}
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
      </BottomSheetModal>
    </React.Fragment>
  );
};

const getSnapPoints = (size: ModalSize): string[] => {
  switch (size) {
    case "medium":
      return ["35%", "70%"];
    case "large":
      return ["45%", "90%"];
    default:
      return ["75%"];
  }
};

type StylesProps = {};

const useStyles = makeStyles(({}: StylesProps) => ({
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 16,
  },
  descriptionContainer: {
    paddingVertical: 2,
    paddingHorizontal: 18,
  },
  buttonContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  label: {
    fontWeight: "bold",
    fontSize: 24,
  },
  description: {
    fontSize: 14,
  },
  remove: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
}));

export default Modal;
