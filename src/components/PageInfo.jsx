import {Accordion, AccordionItem} from "@nextui-org/accordion";
import React from "react";
import PropTypes from "prop-types";

const PageInfo = ({ debugInfo }) => {
    if (!debugInfo?.settings) {
        return null;
    }

    return (
        <Accordion isCompact variant="shadow" className="rounded-none" defaultExpandedKeys={["page-info", "user-info"]} selectionMode="multiple">
            <AccordionItem key="page-info" aria-label="Page Information" title="Page Information" classNames={{title: "text-sm font-semibold"}}>
                <div className={"grid grid-cols-[120px_1fr] pb-2 pl-4 items-center"}>
                    <div className="text-xs w-16">Store Hash</div>
                    <div><span className="font-semibold text-xs">{ debugInfo.settings.store_hash }</span></div>
                    
                    <div className="text-xs">Store URL</div>
                    <div><span className="font-semibold text-xs">{ debugInfo.settings.base_url }</span></div>

                    <div className="text-xs">Page Title</div>
                    <div><span className="font-semibold text-xs">{ debugInfo.head.title }</span></div>
                    
                    <div className="text-xs">Page Type</div>
                    <div><span className="font-semibold text-xs">{ debugInfo.page_type }</span></div>
                    
                    <div className="text-xs">Template File</div>
                    <div><span className="font-semibold text-xs">{ debugInfo.template_file ? `${debugInfo.template_file}.html` : '' }</span></div>
                </div>
            </AccordionItem>

            {debugInfo?.customer && (
                    <AccordionItem key="user-info" aria-label="User Information" title="User Information" classNames={{title: "text-sm font-semibold"}}>
                        <div className={"grid grid-cols-[120px_1fr] pb-2 pl-4 items-center"}>
                            <div className="text-xs">Customer ID</div>
                            <div><span className="font-semibold text-xs">{ debugInfo.customer.id }</span> [<a target="_blank" className="text-green-500" href={`https://store-${debugInfo.settings.store_hash}.mybigcommerce.com/manage/customers/${debugInfo.customer.id}/edit`}>open in admin</a>]</div>

                            <div className="text-xs">Customer Name</div>
                            <div><span className="font-semibold text-xs">{ debugInfo.customer.name }</span></div>

                            <div className="text-xs">Customer Email</div>
                            <div><span className="font-semibold text-xs">{ debugInfo.customer.email }</span></div>

                            <div className="text-xs">Group Name</div>
                            <div><span className="font-semibold text-xs">{ debugInfo.customer.customer_group_name }</span></div>
                        </div>
                    </AccordionItem>
                )}
        </Accordion>
    );
}

PageInfo.propTypes = {
    debugInfo: PropTypes.object,
};

export default PageInfo;
