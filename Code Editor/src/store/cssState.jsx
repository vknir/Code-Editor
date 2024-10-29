import { atom } from "recoil";

const css = atom({
  key: "cssState",
  default: {
    value: "/* Write your CSS here */\n  ",
    options: {
      mode: "css",
      theme: "material",
      lineNumbers: true,
    },
    expanded: true,
  },
});

export default css;
