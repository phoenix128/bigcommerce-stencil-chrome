import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React from "react";
import PropTypes from "prop-types";

const PageInfo = ({ debugInfo }) => {
    if (!debugInfo.settings) {
        return null;
    }

    return (
        <>
            <div className={"py-2 px-6 bg-slate-600 font-semibold"}>Page Information</div>
            <div className={"grid grid-cols-[120px_1fr] p-4 items-center"}>
                <div className="text-xs w-16">Store Hash</div>
                <div><span className="font-semibold text-xs">{ debugInfo.settings?.store_hash }</span></div>
                
                <div className="text-xs">Store URL</div>
                <div><span className="font-semibold text-xs">{ debugInfo.settings?.base_url }</span></div>

                <div className="text-xs">Page Title</div>
                <div><span className="font-semibold text-xs">{ debugInfo.head?.title }</span></div>
                
                <div className="text-xs">Page Type</div>
                <div><span className="font-semibold text-xs">{ debugInfo.page_type }</span></div>
                
                <div className="text-xs">Template File</div>
                <div><span className="font-semibold text-xs">{ debugInfo.template_file ? `${debugInfo.template_file}.html` : '' }</span></div>
            </div>
        </>
    );
}

PageInfo.propTypes = {
    debugInfo: PropTypes.object,
};

export default PageInfo;
