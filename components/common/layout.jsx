import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <div className="container mx-auto p-5 md:py-5 md:px-0">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
