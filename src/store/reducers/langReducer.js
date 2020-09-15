import { ZHCN, ZHHK, ENUS } from "../constant.js";

const langReducer = (state = ZHCN, action) => {
  switch (action.type) {
    case ZHCN:
      return ZHCN;
    case ZHHK:
      return ZHHK;
    case ENUS:
      return ENUS;
    default:
      return state;
  }
};

export default langReducer;
