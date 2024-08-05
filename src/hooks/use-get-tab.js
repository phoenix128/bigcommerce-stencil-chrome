import { useMemo } from "react";

const useGetTab = () => {
    return useMemo(
        () => (tabId) => {
            return new Promise((resolve) => {
                chrome.tabs.get(tabId, (tab) => {
                    resolve(tab);
                });
            });
        },
        [],
    );
};

export default useGetTab;
