import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Meta />
            <Navbar />
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
