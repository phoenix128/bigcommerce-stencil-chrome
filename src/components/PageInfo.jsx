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
            <Table hideHeader isCompact aria-label="Page Information">
                <TableHeader>
                    <TableColumn>Key</TableColumn>
                    <TableColumn>Value</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Store Hash</TableCell>
                        <TableCell><span className="font-semibold">{ debugInfo.settings?.store_hash }</span></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Store URL</TableCell>
                        <TableCell><span className="font-semibold">{ debugInfo.settings?.base_url }</span></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Page Title</TableCell>
                        <TableCell><span className="font-semibold">{ debugInfo.head?.title }</span></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Page Type</TableCell>
                        <TableCell><span className="font-semibold">{ debugInfo.page_type }</span></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Template File</TableCell>
                        <TableCell><span className="font-semibold">{ debugInfo.template_file ? `${debugInfo.template_file}.html` : '' }</span></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
}

PageInfo.propTypes = {
    debugInfo: PropTypes.object,
};

export default PageInfo;
