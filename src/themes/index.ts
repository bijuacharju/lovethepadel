import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { textStyles } from "./textStyles";
import { buttonRecipe } from "./recipes/buttonRecipe";
import { inputRecipe } from "./recipes/inputRecipe";

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
    body: {
      boxSizing: "border-box",
      margin: "0",
      padding: "0",
      minHeight: "100vh",
      //   minWidth: "100vw",
      fontFamily: `"HelveticaNeue", serif`,
      fontStyle: "normal",
      color: "gray.darkest",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    "#root": {
      fontSynthesis: "none",
      textRendering: "optimizeLegibility",
      minHeight: "100vh",
      //   minWidth: "100vw",
    },
    "input:autofill": {
      boxShadow: "0 0 0px 1000px white inset !important",
    },
  },
  theme: {
    tokens: {
      colors: colors,
    },
    recipes: {
      button: buttonRecipe,
      input: inputRecipe,
    },
    textStyles: textStyles,
  },
});

const themes = createSystem(defaultConfig, config);

export default themes;
