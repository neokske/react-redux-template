import { ActionWithPayload } from "../../types";
import { CHANGE_WELCOME } from "./actionTypes";

export const Actions = {
  changeWelcome: (payload: string): ActionWithPayload => ({
    type: CHANGE_WELCOME,
    payload
  })
};
