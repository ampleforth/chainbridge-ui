import { createTheme } from "@chainsafe/common-theme";

export const ampleTheme = createTheme({
  globalStyling: {
    body: {
      background: "#ffffff",
    },
  },
  themeConfig: {
    constants: {
      navItemHeight: 42,
    },
    palette: {
      additional: {
        general: {
          1: "#007AFF", // Accents
        },
        transferUi: {
          1: "#5856d6", // FAQ button
        },
        header: {
          1: "#ffffff",   // Background
          2: "#595959",   // Text color
          3: "#ffffff00", // border
        },
        preflight: {
          1: "#85A5FF", // Button bg color
          2: "#262626", // Button color
        },
        transactionModal: {
          1: "#597EF7", // border //geekblue5
          2: "#85A5FF", // indicator border //geekblue4
          3: "#2F54EB", // indicator text //geekblue6
        },
      },
    },
    overrides: {
      CheckboxInput: {
        root: {
          alignItems: "center",
        },
      },
      Button: {
        variants: {
          primary: {
            root: {
              backgroundColor: "#262626",
              color: "#ffffff",
              border: `1px solid #262626`,
              "& svg": {
                fill: "#ffffff",
              },
            },
            active: {
              backgroundColor: "#ffffff",
              color: "#262626",
              "& svg": {
                fill: "#262626",
              },
            },
            hover: {
              backgroundColor: "#ffffff",
              color: "#262626",
              "& svg": {
                fill: "#262626",
              },
            },
            focus: {
              backgroundColor: "#ffffff",
              color: "#262626",
              "& svg": {
                fill: "#262626",
              },
            },
          },
          outline: {
            root: {
              backgroundColor: "transparent",
              color: "#ffffff",
              border: `1px solid #ffffff`,
              "& svg": {
                fill: "#ffffff",
              },
            },
            active: {
              backgroundColor: "#ffffff",
              color: "#262626",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
            hover: {
              backgroundColor: "#ffffff",
              color: "#262626",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
            focus: {
              backgroundColor: "#ffffff",
              color: "#262626",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
          },
        },
      },
    },
  },
});
