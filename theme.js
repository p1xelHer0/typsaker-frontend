import theme from "mdx-deck/themes";

import coy from "react-syntax-highlighter/styles/prism/coy";

import prismTypescript from "react-syntax-highlighter/languages/prism/typescript";
import prismReason from "react-syntax-highlighter/languages/prism/reason";

export const dark = false;

const bg = "#221811";
const fg = "#b4b8c9";
const font = "Iosevka";

// for dark, use my own theme
const exportTheme = {
  ...theme,
  font,
  monospace: font,
  colors: {
    ...theme.colors,
    background: dark ? bg : "white",
    text: dark ? fg : "black",
  },
  prism: {
    languages: {
      typescript: prismTypescript,
      reason: prismReason,
    },
  },
};

// colors based in my terminal
const alacritty = {
  black: "#221811",
  red: "#915E67",
  green: "#C97949",
  yellow: "#F28F29",
  blue: "#FAA964",
  magenta: "#666D8D",
  cyan: "#93748C",
  white: "#b4b8c9",
  comment: "#7d808c",
};

// colors mapped to the theme parts
const colors = {
  foreground: fg,
  backgrund: bg,
  char: "#C97949",
  comment: "#7d808c",
  keyword: "#F28F29",
  primitive: "#F28F29",
  string: "#C97949",
  variable: "#F28F29",
  boolean: "#666D8D",
  tag: "#fc929e",
  function: "#915E67",
  className: "#915E67",
  method: "#6699CC",
  operator: "#fc929e",
};

export let codeTheme;

if (dark) {
  codeTheme = {
    plain: {
      backgroundColor: colors.background,
      color: colors.foreground,
    },
    styles: [
      {
        types: ["attr-name"],
        style: {
          color: colors.keyword,
        },
      },
      {
        types: ["attr-value"],
        style: {
          color: colors.string,
        },
      },
      {
        types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
        style: {
          color: colors.comment,
        },
      },
      {
        types: [
          "property",
          "number",
          "function-name",
          "constant",
          "symbol",
          "deleted",
        ],
        style: {
          color: colors.primitive,
        },
      },
      {
        types: ["boolean"],
        style: {
          color: colors.boolean,
        },
      },
      {
        types: ["tag"],
        style: {
          color: colors.tag,
        },
      },
      {
        types: ["string"],
        style: {
          color: colors.string,
        },
      },
      {
        types: ["punctuation"],
        style: {
          color: colors.foreground,
        },
      },
      {
        types: ["selector", "char", "builtin", "inserted"],
        style: {
          color: colors.char,
        },
      },
      {
        types: ["function"],
        style: {
          color: colors.function,
        },
      },
      {
        types: ["operator", "entity", "url", "variable"],
        style: {
          color: colors.variable,
        },
      },
      {
        types: ["keyword"],
        style: {
          color: colors.keyword,
        },
      },
      {
        types: ["at-rule", "class-name"],
        style: {
          color: colors.className,
        },
      },
      {
        types: ["important"],
        style: {
          fontWeight: "400",
        },
      },
      {
        types: ["bold"],
        style: {
          fontWeight: "bold",
        },
      },
      {
        types: ["italic"],
        style: {
          fontStyle: "italic",
        },
      },
      {
        types: ["namespace"],
        style: {
          opacity: 0.7,
        },
      },
    ],
  };
}

export default exportTheme;
