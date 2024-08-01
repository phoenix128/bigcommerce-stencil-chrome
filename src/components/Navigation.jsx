import React from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

const Navigation = () => {
    return (
        <Navbar maxWidth={"full"} isBordered={true} className={"w-full"}>
            <NavbarBrand className={"text-left text-foreground"}>
                <div className={"text-xl font-semibold"}>
                    BigCommerce Stencil Context
                    <div className={"text-sm text-gray-500"}>
                        by Riccardo Tempesta
                    </div>
                </div>
            </NavbarBrand>
            <NavbarContent></NavbarContent>
        </Navbar>
    );
};

export default Navigation;
