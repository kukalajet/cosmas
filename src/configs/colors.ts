// TODO: Create a type fro HEX code.
export interface Colors {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
}

const colors: Colors = {
  primary: "#6200EE",
  primaryVariant: "#3700B3",
  secondary: "#03DAC6",
  secondaryVariant: "#018786",
  background: "#FFFFFF",
  surface: "#FFFFFF",
  error: "#B00020",
  onPrimary: "#FFFFFF",
  onSecondary: "#000000",
  onBackground: "#000000",
  onSurface: "#000000",
  onError: "#FFFFFF",
};

export default colors;
