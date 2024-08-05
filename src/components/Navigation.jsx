import React from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

const Navigation = () => {
    return (
        <Navbar maxWidth={"full"} isBordered={true} className={"w-full"}>
            <NavbarBrand className={"text-left text-foreground"}>
                <div className={"text-lg font-semibold"}>
                    BigCommerce Stencil Context
                    <div className={"text-xs text-gray-500"}>
                        (c) 2024 Riccardo Tempesta
                    </div>
                </div>
            </NavbarBrand>
            <NavbarContent></NavbarContent>
        </Navbar>
    );
};

export default Navigation;
