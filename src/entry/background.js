import isProduction from "../is-production";

if (isProduction) {
    chrome.tabs.onActivated.addListener((activeInfo) => {
        chrome.tabs.get(activeInfo.tabId, (tab) => {
            if (tab) {
                chrome.runtime.sendMessage({ action: "updateDebugInfo" });
            }
        });
    });

    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status === "complete" && tab.url) {
            chrome.runtime.sendMessage({ action: "updateDebugInfo" });
        }
    });
}
