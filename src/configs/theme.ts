import { DefaultTheme } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "rgb(255, 255, 255)",
    background: "#FFFFFF",
    surface: "#CFD8DC",
    surfaceLight: "#ECEFF1",
    surfaceDark: "#B0BEC5",
    primary: "#880e4f",
    primaryLight: "#bc477b",
    primaryDark: "#560027",
    secondary: "#3f51b5",
    secondaryLight: "#757de8",
    secondaryDark: "#002984",
    error: "#B00020",
    onPrimary: "#FFFFFF",
    onSecondary: "#FFFFFF",
    onBackground: "#000000",
    onSurface: "#9E9E9E",
    onError: "#000000",
  },
};

export default theme;
