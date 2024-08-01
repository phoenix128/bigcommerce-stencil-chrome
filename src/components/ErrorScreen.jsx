import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import PropTypes from "prop-types";
import { CgDanger } from "react-icons/cg";

const ErrorScreen = ({ error }) => {
    if (!error) {
        return null;
    }

    return (
        <div
            className={
                "fixed t-0 l-0 flex flex-col items-center justify-center h-screen w-screen backdrop-blur-sm z-50"
            }
        >
            <Card className={"h-56 w-64"}>
                <CardBody className={"overflow-hidden text-center"}>
                    <CgDanger
                        className={"h-24 w-24 text-red-500 mx-auto mb-3"}
                    />
                    <div className={"text-red-200"}>
                        No debug info found This extension works only on
                        BigCommerce Stencil themes in local development mode.
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

ErrorScreen.propTypes = {
    error: PropTypes.bool,
};

export default ErrorScreen;
