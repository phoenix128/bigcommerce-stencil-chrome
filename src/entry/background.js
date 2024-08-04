import isProduction from "../is-production";

if (isProduction) {
    chrome.tabs.onActivated.addListener((activeInfo) => {
        chrome.runtime.sendMessage({
            action: "updateDebugInfo",
            tabId: activeInfo.tabId,
        });
    });

    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status === "complete" && tab.url) {
            chrome.runtime.sendMessage({
                action: "updateDebugInfo",
                tabId: tabId,
            });
        }
    });
}
