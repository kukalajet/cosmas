interface Theme {
  colors: {
    text: string;
    background: string;
    surface: string;
    surfaceDark: string;
    surfaceLight: string;
    primary: string;
    primaryDark: string;
    primaryLight: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    error: string;
    onPrimary: string;
    onSecondary: string;
    onBackground: string;
    onSurface: string;
    onError: string;
  };
  space: number[];
  fontSizes: number[];
  text: {
    h1: any;
    h2: any;
    h3: any;
    h4: any;
    h5: any;
    h6: any;
    p: any;
  };
}

const theme: Theme = {
  colors: {
    text: "#000000",
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
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 16, 20, 24, 28, 32],
  text: {
    h1: { fontSize: 5, marginVertical: 0 },
    h2: { fontSize: 4, marginVertical: 0 },
    h3: { fontSize: 3, marginVertical: 0 },
    h4: { fontSize: 2, marginVertical: 0 },
    h5: { fontSize: 1, marginVertical: 0 },
    h6: { fontSize: 0, marginVertical: 0 },
    p: { fontSize: 1, marginVertical: 0 },
  },
};

export default theme;
