import { createTheme } from '@mui/material/styles';

import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    status: {
      danger: string;
    };
    primaryColor: string;
    secondaryColor: string;
    sedatmava: string;
    carhartt: string;
    primaryPurple: string;
    primaryBlue: string;
    lightGray: string;
    cornFlower: string;
    charCoal: {
      main: string;
    };
    mantis: string;
    // black: {
    //   main: "#000",
    // },
    complementary: {
      main: string;
    };
    fontActive: {
      main: string;
      contrastText: string;
    };
    fontInactive: {
      main: string;
    };
    grayInactive: {
      main: string;
    };
    black: string;
    onyx: {
      main: string;
      fontActive: string;
      fontInactive: string;
      complementary: string;
      font: string;
      // orange crayola - F97639
      // skor uz yellow orange - FEB548 -- dost dobre
      // najs oranzova - FE9D0B
      // dalsia melon -DBC0A9
      // peach puff - F5D6BA
      // dost v pohode - D6D5C9
      // asi pouzit tuto - 00A5E0
      // zaujimava modra main: "#6699CC",
      // 449DD1
      //eggshel; -F2E8CF
      //main: "#DFE0DC",
      //main: "#F4F4F8",
      //main: "#C9CAD9",
    };
    secondaryLighter: {
      main: string;
    };
    onyxDarker: {
      main: string;
    };
    darkGray: string;
  }
}

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
  palette: {
    primary: {
      main: '#1769aa',
      light: '#6573C3',
    },
    common: {
      // lighter: {
      //   main: '#757ce8',
      // },
      // neutral: {
      //   main: '#64748B',
      //   contrastText: '#fff',
      // },
      status: {
        danger: '#e53e3e',
      },
      primaryColor: '#4a148c',
      secondaryColor: '#ff6f00',
      sedatmava: '#C9C9C9',
      carhartt: '#006f33',
      primaryPurple: '#6200EE',
      primaryBlue: '#246EE9',
      lightGray: '#EAEAEA',
      cornFlower: '#7B8CDE',
      charCoal: {
        main: '#2D4654',
      },
      mantis: '#7DD181',
      // black: {
      //   main: "#000",
      // },
      complementary: {
        main: '#4891FE',
      },
      fontActive: {
        main: '#000',
        contrastText: '#fff',
      },
      fontInactive: {
        main: '#EAEFD3',
      },
      grayInactive: {
        main: '#CCC',
      },
      black: '#000000',
      onyx: {
        main: '#FE9D0B',
        fontActive: '#000',
        fontInactive: '#EAEFD3',
        complementary: '#0B6CFE',
        font: '#EAEFD3',
        // orange crayola - F97639
        // skor uz yellow orange - FEB548 -- dost dobre
        // najs oranzova - FE9D0B
        // dalsia melon -DBC0A9
        // peach puff - F5D6BA
        // dost v pohode - D6D5C9
        // asi pouzit tuto - 00A5E0
        // zaujimava modra main: "#6699CC",
        // 449DD1
        //eggshel; -F2E8CF
        //main: "#DFE0DC",
        //main: "#F4F4F8",
        //main: "#C9CAD9",
      },
      secondaryLighter: {
        main: '#F4EDFB',
      },
      onyxDarker: {
        main: '#484747',
      },
      darkGray: '#ccc',
    },
    secondary: {
      main: '#6425A7',
    },
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
