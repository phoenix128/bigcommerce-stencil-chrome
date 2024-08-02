import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
import { NextUIProvider } from "@nextui-org/react";
import "../panel.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NextUIProvider>
            <main className="dark text-foreground bg-gray-900">
                <App />
            </main>
        </NextUIProvider>
    </React.StrictMode>,
);
