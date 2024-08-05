import isProduction from "../is-production";

if (isProduction) {
    chrome.tabs.onActivated.addListener((activeInfo) => {
        chrome.runtime.sendMessage({
            action: "updateDebugInfo",
            tabId: activeInfo.tabId,
        });
    });

    chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
        if (changeInfo.status === "complete") {
            chrome.runtime.sendMessage({
                action: "updateDebugInfo",
                tabId,
            });
        }
    });
}
