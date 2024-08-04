import { useCallback, useEffect, useState } from "react";
import isProduction from "../is-production";
import useTab from "./use-tab";

const useDebugInfo = () => {
    const [debugInfo, setDebugInfo] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const sourceTab = useTab();

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

                if (tabId && tabId === sourceTab?.id) {
                    const debugUrl = sourceTab.url.includes("?")
                        ? `${sourceTab.url}&debug=context`
                        : `${sourceTab.url}?debug=context`;
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
        [sourceTab?.url, sourceTab?.id],
    );

    const handleMessage = useCallback(
        (request, tabId) => {
            if (request.action === "updateDebugInfo") {
                fetchDebugInfo(tabId).then();
            }
        },
        [fetchDebugInfo],
    );

    useEffect(() => {
        if (isProduction) {
            chrome.runtime.onMessage.addListener(handleMessage);
        }
        fetchDebugInfo(sourceTab?.id);

        return () => {
            if (isProduction) {
                chrome.runtime.onMessage.removeListener(handleMessage);
            }
        };
    }, [fetchDebugInfo, handleMessage, sourceTab?.id]);

    return {
        debugInfo,
        error,
        loading,
    };
};

export default useDebugInfo;
