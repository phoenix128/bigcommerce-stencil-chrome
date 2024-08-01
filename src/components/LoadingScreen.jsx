import React from "react";
import { Card, CardBody, Spinner } from "@nextui-org/react";
import PropTypes from "prop-types";

const LoadingScreen = ({ loading }) => {
    if (!loading) {
        return null;
    }

    return (
        <div
            className={
                "fixed t-0 l-0 flex flex-col items-center justify-center h-screen w-screen backdrop-blur-sm z-50"
            }
        >
            <Card className={"h-36 w-48"}>
                <CardBody className={"overflow-hidden"}>
                    <Spinner size={"lg"} className={"scale-150 mt-6"} />
                    <div className={"mt-6 text-center"}>Loading...</div>
                </CardBody>
            </Card>
        </div>
    );
};

LoadingScreen.propTypes = {
    loading: PropTypes.bool,
};

export default LoadingScreen;
