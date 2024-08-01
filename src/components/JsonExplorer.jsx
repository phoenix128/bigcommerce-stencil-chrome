import React from "react";
import { Input, ScrollShadow } from "@nextui-org/react";
import { CgSearch } from "react-icons/cg";
import JsonView from "react18-json-view";
import useFilterJson from "../hooks/use-filter-json";
import { useCallback, useState } from "react";
import PropTypes from "prop-types";

const JsonExplorer = ({ debugInfo }) => {
    const [search, setSearch] = useState("");

    const json = useFilterJson(debugInfo, search);

    const handleSearchChange = useCallback((e) => {
        const value = e.target.value;
        setSearch(value);
    }, []);

    return (
        <>
            <Input
                variant={"flat"}
                radius={"none"}
                startContent={<CgSearch className={"h-6 w-6 text-gray-400"} />}
                placeholder={"Search json"}
                className={"w-full"}
                onChange={handleSearchChange}
            />
            <ScrollShadow className={"p-4 flex-grow"}>
                <JsonView
                    enableClipboard={true}
                    dark={true}
                    displaySize={"expanded"}
                    theme={"atom"}
                    src={json}
                />
            </ScrollShadow>
        </>
    );
};

JsonExplorer.propTypes = {
    debugInfo: PropTypes.object,
};

export default JsonExplorer;
