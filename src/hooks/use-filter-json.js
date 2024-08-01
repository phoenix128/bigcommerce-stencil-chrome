import { useEffect, useState } from "react";

const recursiveSearch = (obj, searchText) => {
    if (typeof obj === "object" && obj !== null) {
        const result = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
            const value = obj[key];

            if (
                key.includes(searchText) ||
                (typeof value === "string" && value.includes(searchText))
            ) {
                result[key] = value;
            } else if (typeof value === "object" && value !== null) {
                const nestedResult = recursiveSearch(value, searchText);
                if (
                    nestedResult &&
                    (Object.keys(nestedResult).length > 0 ||
                        (Array.isArray(nestedResult) &&
                            nestedResult.length > 0))
                ) {
                    result[key] = nestedResult;
                }
            }
        }
        return Object.keys(result).length > 0 ||
            (Array.isArray(result) && result.length > 0)
            ? result
            : null;
    }

    return null;
};

const useFilterJson = (json, searchText) => {
    const [filteredJson, setFilteredJson] = useState(json);

    useEffect(() => {
        const result = recursiveSearch(json, searchText);
        setFilteredJson(result);
    }, [json, searchText]);

    return filteredJson;
};

export default useFilterJson;
