import React from "react";
import "react18-json-view/src/style.css";
import "react18-json-view/src/dark.css";
import { Kbd } from "@nextui-org/react";

const Popup = () => {
    return (
        <div className={"p-4 w-80 flex flex-col gap-3"}>
            <div className={"text-lg font-bold mx-auto"}>
                Thanks for using this extension!
            </div>
            <img
                src={"icon.png"}
                alt={"BigCommerce Stencil Context"}
                className={"w-16 h-16 mx-auto"}
            />
            <div
                className={
                    "text-sm text-gray-500 flex flex-col gap-2 text-left"
                }
            >
                <div>
                    Open the chrome devtools and search for "
                    <span className={"font-semibold text-white"}>
                        BigCommerce Stencil
                    </span>
                    " tab using:
                </div>
                <div>
                    <div className="flex flex-col gap-2 mt-2">
                        <div>
                            On Windows: <Kbd>F12</Kbd> or <Kbd>Ctrl</Kbd> +{" "}
                            <Kbd>Shift</Kbd> + <Kbd>I</Kbd>
                        </div>
                        <div>
                            On Mac: <Kbd>Cmd</Kbd> + <Kbd>Shift</Kbd> +{" "}
                            <Kbd>I</Kbd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
