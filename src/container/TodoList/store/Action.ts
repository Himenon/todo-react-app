import { state } from "./State";

export const initialize = () => {
  state.res = {
    items: ["A", "B", "C", "D"],
  };
};

export const clear = () => {
  state.res = null;
};
