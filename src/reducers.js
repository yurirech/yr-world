import { CHANGE_ROUTE, IS_SENT} from "./constants";

const initialStateRoute = {
  route: 'links'
};

export const changeRoute = (state=initialStateRoute, action={}) => {
  switch(action.type) {
    case CHANGE_ROUTE: {
      return Object.assign({}, state, {route: action.payload})
    }
    default:
      return state;
  }
};

const initialStateSendEmail = {
  isSent: false
};

export const sendEmail = (state=initialStateSendEmail, action={}) => {
  switch(action.type) {
    case IS_SENT: {
      return {...state, isSent: action.payload}
    }
    default:
      return state;
  }
};
