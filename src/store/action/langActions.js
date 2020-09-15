import { ZHCN, ZHHK, ENUS } from "../constant.js";

const setChineseSimplified = () => ({
  type: ZHCN
});

const setChineseTraditional = () => ({
  type: ZHHK
});

const setEnglishUS = () => ({
  type: ENUS
});

export { setChineseSimplified, setChineseTraditional, setEnglishUS };
