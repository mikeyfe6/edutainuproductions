import * as React from "react";

import Header from "./layout/header";
import Footer from "./layout/footer";

import ResponsiveTag from "./helpers/respoTag";

import "../styles/layout.scss";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="edutain-u-productions">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>

            {process.env.NODE_ENV === "development" && <ResponsiveTag />}
        </>
    );
};

export default Layout;
