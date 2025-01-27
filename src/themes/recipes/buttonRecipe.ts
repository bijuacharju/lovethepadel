import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    padding: "16px 24px",
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    borderRadius: "4xl",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    borderWidth: "1px",
    borderColor: "transparent",
    cursor: "button",
    flexShrink: "0",
    outline: "0",
    isolation: "isolate",
    lineHeight: "1.5",
    fontWeight: "normal",
    transitionProperty: "common",
    transitionDuration: "moderate",
    focusVisibleRing: "outside",
    _disabled: {
      layerStyle: "disabled",
    },
    _icon: {
      flexShrink: "0",
    },
  },
  variants: {
    size: {
      sm: {
        h: "11",
        minW: "10",
        textStyle: "sm",
        px: "4",
        py: "3",
        gap: "2",
        borderRadius: "xl",
        _icon: {
          width: "5",
          height: "5",
        },
      },
      md: {
        minH: "46px",
        minW: "10",
        textStyle: "sm",
        px: "6",
        gap: "2",
        _icon: {
          width: "46px",
          height: "46px",
        },
      },
    },
    variant: {
      solid: {
        borderWidth: "0px",
        bg: "primary.500",
        color: "white",
        _hover: {
          bg: "primary.500",
        },
      },
      secondary: {
        bg: "gray.100",
        color: "black",
        borderColor: "gray.300",
        _hover: {
          bg: "gray.200",
        },
      },
      outline: {
        borderWidth: "1px",
        color: "primary.500",
        borderColor: "primary.500",
        _hover: {
          color: "primary.500",
          borderColor: "primary.500",
        },
      },
      ghost: {
        bg: "transparent",
        color: "gray.700",
        _hover: {
          bg: "transparent",
        },
        _active: {
          bg: "transparent",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});
