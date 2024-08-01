import { useCallback, useEffect, useState } from "react";
import isProduction from "../is-production";

const useDebugInfo = () => {
    const [debugInfo, setDebugInfo] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchDebugInfo = useCallback(() => {
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

            const [tab] = await chrome.tabs.query({
                active: true,
                currentWindow: true,
            });

            if (tab) {
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
            } else {
                setDebugInfo({});
            }
        })();
    }, []);

    const handleMessage = useCallback(
        (request) => {
            if (request.action === "updateDebugInfo") {
                fetchDebugInfo().then();
            }
        },
        [fetchDebugInfo],
    );

    useEffect(() => {
        if (isProduction) {
            chrome.runtime.onMessage.addListener(handleMessage);
        }
        fetchDebugInfo();

        return () => {
            if (isProduction) {
                chrome.runtime.onMessage.removeListener(handleMessage);
            }
        };
    }, [fetchDebugInfo, handleMessage]);

    return {
        debugInfo,
        error,
        loading,
    };
};

export default useDebugInfo;
