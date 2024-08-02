import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "../panel.css";
import Popup from "../Popup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NextUIProvider>
            <main className="dark text-foreground bg-gray-900">
                <Popup />
            </main>
        </NextUIProvider>
    </React.StrictMode>,
);
