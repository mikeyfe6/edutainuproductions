import * as React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
    faGem,
    faFileLines,
    faComments,
    faLightbulb,
    faHandshake,
} from "@fortawesome/free-regular-svg-icons";
import {
    faLinkedinIn,
    faWhatsapp,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faLinkedinIn,
    faWhatsapp,
    faPaperPlane,
    faYoutube,
    faGem,
    faFileLines,
    faComments,
    faLightbulb,
    faHandshake
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
