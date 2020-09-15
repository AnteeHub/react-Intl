import React from "react";
import intl from "react-intl-universal";
import { useEffect, useState } from "react";
import enUS from "./locale/en_US.js";
import zhCn from "./locale/zh_CN.js";
import zhHK from "./locale/zh_HK.js";
import store from "./store/store";
import "./styles.css";
import {
  setChineseSimplified,
  setChineseTraditional,
  setEnglishUS
} from "./store/action/langActions.js";

const locales = {
  "en-US": enUS,
  "zh-CN": zhCn,
  "zh-HK": zhHK
};

export default function App() {
  const getLang = function () {
    switch (navigator.language || navigator.userLanguage) {
      case "zh-HK":
        store.dispatch(setChineseTraditional());
        break;
      case "en-US":
        store.dispatch(setEnglishUS());
        break;
      case "zh-CN":
      default:
        store.dispatch(setChineseSimplified());
        break;
    }
  };
  const [initDone, setInitDone] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(store.getState());
  const langSelect = ["english", "简体中文", "繁体中文"];
  const [count, setCount] = useState(0);
  const addCount = function () {
    count < langSelect.length - 1 ? setCount(count + 1) : setCount(0);
    switch (count) {
      case 2:
        store.dispatch(setChineseTraditional());
        break;
      case 0:
        store.dispatch(setEnglishUS());
        break;
      case 1:
      default:
        store.dispatch(setChineseSimplified());
        break;
    }
    setCurrentLocale(store.getState());
    console.log("count", count);
    console.log("store", store.getState());
    console.log("current", currentLocale);
  };
  useEffect(() => {
    getLang();
    setCurrentLocale(store.getState());
    intl
      .init(
        {
          currentLocale: currentLocale,
          locales
        },
        []
      )
      .then(() => {
        setInitDone(true);
      });
    if (!initDone) {
      console.log("init react intl error!");
    }
    // console.log(getLang());
  }, [count, currentLocale, initDone]);

  return (
    <div className="App">
      <h1>Hello {intl.get("hello")}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={addCount}>切换语言{langSelect[count]}</button>
    </div>
  );
}
