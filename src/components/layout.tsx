import * as React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import {
    faSquareInstagram,
    faFacebookF,
    faLinkedinIn,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faSquareInstagram,
    faFacebookF,
    faLinkedinIn,
    faWhatsapp,
    faPaperPlane
);

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
