import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
    },
    secondary: {
      light: "#f73378",
      main: "#f50057",
      dark: "#ab003c",
    },
    panel: {
      main: "rgba(255,255,255, 0.5)",
      dark: "rgba(255,255,255, 0.85)",
    },
  },
});
