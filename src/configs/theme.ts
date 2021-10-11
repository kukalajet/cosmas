interface Theme {
  colors: {
    text: string;
    background: string;
    surface: string;
    primary: string;
    secondary: string;
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
    surface: "#E7E9EE",
    primary: "#6200EE",
    secondary: "#03DAC6",
    error: "#B00020",
    onPrimary: "#FFFFFF",
    onSecondary: "#000000",
    onBackground: "#000000",
    onSurface: "#000000",
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
