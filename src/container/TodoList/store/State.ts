import { proxy } from "valtio";
import type * as Types from "./types";

export const state = proxy<Types.State>({
  todoItems: null,
});
