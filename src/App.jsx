import React from "react";
import "react18-json-view/src/style.css";
import "react18-json-view/src/dark.css";
import useDebugInfo from "./hooks/use-debug-info";
import LoadingScreen from "./components/LoadingScreen";
import Navigation from "./components/Navigation";
import JsonExplorer from "./components/JsonExplorer";
import ErrorScreen from "./components/ErrorScreen";

const App = () => {
    const { debugInfo, error, loading } = useDebugInfo();

    return (
        <>
            <ErrorScreen error={error} />
            <LoadingScreen loading={loading} />
            <div className={"h-screen w-screen flex flex-col"}>
                <Navigation />
                <JsonExplorer debugInfo={debugInfo} />
            </div>
        </>
    );
};

export default App;
