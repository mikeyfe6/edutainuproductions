import * as React from "react";

import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import * as headerStyles from "../../styles/modules/layout/header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={headerStyles.header}>
            <Link to="/">
                <StaticImage
                    src="../../images/logo/eup-logo-trans.png"
                    alt="Edutain U Productions Logo"
                />
                {/* <span>Edutain U Productions</span> */}
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Untold & Eternity</Link>
                    </li>
                    <li>
                        <Link to="/">Reisverhalen</Link>
                    </li>
                    <li>
                        <Link to="/">Bun Tranga</Link>
                    </li>
                    <li>
                        <Link to="/">Media</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
