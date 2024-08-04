import isProduction from "../is-production";
import { useState } from "react";

const useTab = () => {
    const [tab, setTab] = useState();

    if (!isProduction) {
        return "dev";
    }

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        setTab(tabs[0]);
    });

    return tab;
};

export default useTab;
