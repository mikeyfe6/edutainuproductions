import * as React from "react";

import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import * as headerStyles from "../../styles/modules/layout/header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.hero}>
                <div className={headerStyles.menu}>
                    <Link to="/">
                        <StaticImage
                            src="../../images/logo/eup-logo-trans.png"
                            alt="Edutain U Productions Logo"
                        />
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
                </div>

                <div className={headerStyles.intro}>
                    <h1>Edutain U Productions</h1>
                    <p>
                        <b>Welkom bij Edutain U Productions</b> waar educatie en
                        entertainment samenkomen voor impactvolle culturele
                        beleving
                    </p>
                    <p>
                        Edutain U Productions is het creatieve freelancebedrijf
                        van Otmar Watson, actief op het snijvlak van kunst,
                        cultuur, erfgoed en empowerment. Vanuit jarenlange
                        ervaring binnen de culturele sector realiseert Edutain U
                        Productions projecten die verbinden, verdiepen en
                        versterken. Altijd met een focus op inclusiviteit,
                        erfgoed en maatschappelijke betrokkenheid.
                    </p>
                </div>

                <div className={headerStyles.buttons}>
                    <Link to="/" className={headerStyles.button}>
                        Meer weten
                    </Link>
                    <Link to="/" className={headerStyles.button}>
                        Contact
                    </Link>
                </div>
            </div>

            <div className={headerStyles.image}>
                <StaticImage
                    src="../../images/otmarwatson.jpg"
                    alt="Otmar Watson"
                />
            </div>
        </header>
    );
};

export default Header;
