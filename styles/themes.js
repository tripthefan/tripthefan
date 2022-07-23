import { extendTheme } from "native-base";

const themes = extendTheme({
  colors: {
    // 🎨 Portage
    primary: {
      50: "#d0bbf7",
      100: "#8A71F0", // MAIN COLOR
      300: "#6957be",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    // 🎨 Carnation
    secondary: {
      800: "#39050c", // 800
      600: "#821f27", // 600
      300: "#be393d", // 300
      100: "#F15050", // 100
      80: "#f47775", // 80
      60: "#f69a92", // 60
      50: "#f8b8ac", // 50
      30: "#fad2c7", // 30
      20: "#fdeee9", // 20
    },
    // 🎨 Kournikova
    tertiary: {
      700: "#372009", // 700
      600: "#402a0d", // 600
      500: "#584019", // 500
      300: "#7b602a", // 300
      90: "#a3853e", // 90
      60: "#c9aa50", // 60
      40: "#e9ca60", // 40
      30: "#FFDF6B", // 30
      20: "#fbf2a1", // 20
      10: "#fbfdd7", // 10
    },

    // 🎨 Cod Gray
    black: {
      900: "#0C0C0C", // 900
      800: "#1A1A1A", // DARK MODE BG
      600: "#323232", // 600
      400: "#4d4d4d", // 400
      200: "#696969", // 200
      100: "#858585", // 90
      70: "#a1a1a1", // 70
      50: "#bcbcbc", // 50
      30: "#d6d6d6", // 30
      20: "#ededed", // 20
    },
    // 🎨 Scotch Mist
    white: {
      600: "#49351c", // 600
      500: "#4b3a1e", // 500
      400: "#58492c", // 400
      300: "#6d6143", // 300
      100: "#887e60", // 100
      70: "#a59d7f", // 70
      50: "#c2bc9f", // 50
      30: "#ddd7bb", // 30
      20: "#f2ecd2", // 20
      10: "#FFFBE0", // 10
    },

    text: {
      900: "#1A1A1A", // LIGHT MODE
      800: "#1A1A1A", // 800
      600: "#323232", // 600
      400: "#4d4d4d", // 400
      200: "#696969", // 200
      100: "#858585", // 90
      70: "#a1a1a1", // 70
      50: "#FFFBE0", // DARKMODE
      30: "#FFFBE0", // 30
      10: "#FFFBE0", // 20
    },

    // 🎨 Portage
    info: {
      50: "#d0bbf7",
      100: "#8A71F0",
      300: "#6957be",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },

    // 🎨 Portage
    purple: {
      50: "#d0bbf7",
      100: "#8A71F0",
      300: "#6957be",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    // 🎨 Carnation
    red: {
      800: "#39050c", // 800
      600: "#821f27", // 600
      300: "#be393d", // 300
      100: "#F15050", // 100
      80: "#f47775", // 80
      60: "#f69a92", // 60
      50: "#f8b8ac", // 50
      30: "#fad2c7", // 30
      20: "#fdeee9", // 20
    },
    // 🎨 Kournikova
    yellow: {
      700: "#372009", // 700
      600: "#402a0d", // 600
      500: "#584019", // 500
      300: "#7b602a", // 300
      90: "#a3853e", // 90
      60: "#c9aa50", // 60
      40: "#e9ca60", // 40
      30: "#FFDF6B", // 30
      20: "#fbf2a1", // 20
      10: "#fbfdd7", // 10
    },
  },

  // fontConfig: {
  //   Paralucent: {
  //     100: {
  //       normal: "Paralucent-Light",
  //       italic: "Paralucent-LightItalic",
  //     },
  //     200: {
  //       normal: "Paralucent-Light",
  //       italic: "Paralucent-LightItalic",
  //     },
  //     300: {
  //       normal: "Paralucent-Light",
  //       italic: "Paralucent-LightItalic",
  //     },
  //     400: {
  //       normal: "Paralucent-Regular",
  //       italic: "Paralucent-Italic",
  //     },
  //     500: {
  //       normal: "Paralucent-Medium",
  //     },
  //     600: {
  //       normal: "Paralucent-Medium",
  //       italic: "Paralucent-MediumItalic",
  //     },
  //   },
  // },
  // fonts: {
  //   heading: "Paralucent",
  //   body: "Paralucent",
  //   mono: "Paralucent",
  // },

  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});

export { themes };
