import { useCallback, useEffect, useState } from "react";
import isProduction from "../is-production";
import useTabId from "./use-tab-id";
import useGetTab from "./use-get-tab";

const useDebugInfo = () => {
    const [debugInfo, setDebugInfo] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const sourceTabId = useTabId();
    const getTab = useGetTab();

    const fetchDebugInfo = useCallback(
        (tabId) => {
            (async () => {
                if (!isProduction) {
                    try {
                        setLoading(true);
                        setError(false);
                        const response = await fetch(
                            "http://localhost:3000/?debug=context",
                        );
                        const data = await response.json();
                        setDebugInfo(data);
                    } catch (error) {
                        setError(true);
                    } finally {
                        setLoading(false);
                    }

                    return;
                }

                if (tabId && tabId === sourceTabId) {
                    const tab = await getTab(tabId);
                    const debugUrl = tab.url.includes("?")
                        ? `${tab.url}&debug=context`
                        : `${tab.url}?debug=context`;

                    try {
                        setLoading(true);
                        setError(false);
                        const response = await fetch(debugUrl);
                        const data = await response.json();
                        setDebugInfo(data);
                    } catch (error) {
                        setError(true);
                    } finally {
                        setLoading(false);
                    }
                }
            })();
        },
        [getTab, sourceTabId],
    );

    const handleMessage = useCallback(
        (request) => {
            if (request.action === "updateDebugInfo") {
                fetchDebugInfo(request.tabId).then();
            }
        },
        [fetchDebugInfo],
    );

    useEffect(() => {
        if (isProduction) {
            chrome.runtime.onMessage.addListener(handleMessage);
        }
        fetchDebugInfo(sourceTabId);

        return () => {
            if (isProduction) {
                chrome.runtime.onMessage.removeListener(handleMessage);
            }
        };
    }, [fetchDebugInfo, handleMessage, sourceTabId]);

    return {
        debugInfo,
        error,
        loading,
    };
};

export default useDebugInfo;
