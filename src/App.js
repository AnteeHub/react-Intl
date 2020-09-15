import React from "react";
import intl from "react-intl-universal";
import { useEffect, useState } from "react";
import enUS from "./locale/en_US.js";
import zhCn from "./locale/zh_CN.js";
import "./styles.css";

const locales = {
  "en-US": enUS,
  "zh-CN": zhCn
};

export default function App() {
  const getLang = function () {
    switch (navigator.language || navigator.userLanguage) {
      case "zh-CN":
        return "zh-CN";
      case "en-US":
        return "en-US";
      case "zh-TW":
        return "zh-TW";
      default:
        return "zh-CN";
    }
  };
  const [initDone, setInitDone] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(getLang());
  useEffect(() => {
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
  });

  return (
    <div className="App">
      <h1>Hello {intl.get("hello")}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
