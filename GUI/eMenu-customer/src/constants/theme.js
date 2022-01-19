import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    h6: {
      fontSize: 14,
    },
    h5: {
      fontSize: 15,
    },
    h4: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 12,
    },
  },
  //We can define App themes in here
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#1769aa",
      lighter: "##6573C3",
    },
    lighter: {
      main: "#757ce8",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    primaryColor: "#4a148c",
    secondaryColor: "#ff6f00",
    sedatmava: "#C9C9C9",
    carhartt: "#006f33",
    primaryPurple: "#6200EE",
    primaryBlue: "#246EE9",
    lightGray: "#EAEAEA",
    cornFlower: "#7B8CDE",
    charCoal: {
      main: "#2D4654",
    },
    mantis: "#7DD181",
    // black: {
    //   main: "#000",
    // },
    black: "#000000",
    onyx: {
      main: "#D0CFCF",
      font: "#000",
      // zaujimava modra main: "#6699CC",
      //main: "#DFE0DC",
      //main: "#F4F4F8",
      //main: "#C9CAD9",
    },
    secondary: {
      main: "#6425A7",
    },
    secondaryLighter: {
      main: "#F4EDFB",
    },
    onyxDarker: {
      main: "#484747",
    },
    darkGray: "#ccc",
  },
  components: {
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          // apply theme's border-radius instead of component's default
          minWidth: 20,
        },
        grouped: {
          minWidth: 20,
        },
      },
    },
  },
});
