import {CHANGE_ROUTE, IS_SENT} from "./constants";

export const setRoute = (route) => ({
  type: CHANGE_ROUTE,
  payload: route
});

export const setSendEmail = (isSent) => ({
    type: IS_SENT,
    payload: isSent
});
