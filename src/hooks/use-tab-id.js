import isProduction from "../is-production";

const useTabId = () => {
    if (!isProduction) {
        return "dev";
    }

    return chrome.devtools.inspectedWindow.tabId;
};

export default useTabId;
