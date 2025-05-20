import * as React from "react";

import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    <div>
                        <ul>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon
                                        icon={["fab", "facebook-f"]}
                                        size="xl"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon
                                        icon={["fab", "square-instagram"]}
                                        size="xl"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon
                                        icon={["fab", "linkedin-in"]}
                                        size="xl"
                                    />
                                </a>
                            </li>
                        </ul>

                        <hr />

                        <nav>
                            <ul>
                                <li>
                                    <a href="#biografie">Biografie</a>
                                </li>
                                <li>
                                    <a href="#expertise">Expertise</a>
                                </li>
                                <li>
                                    <a href="#consultancy">Consultancy</a>
                                </li>
                                <li>
                                    <a href="#bun-tranga">Bun Tranga</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
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

                    <p>
                        <b>
                            Van theaterproducties tot festivals, van
                            cultuureducatie tot internationale
                            uitwisselingsprogramma’s:
                        </b>{" "}
                        Otmar Watson is inzetbaar als projectleider, producent,
                        coach of conceptontwikkelaar. Otmar Watson voert
                        opdrachten uit voor o.a. de Gemeente Amsterdam, Gemeente
                        Rotterdam, culturele instellingen, scholen en grassroots
                        organisaties aan betekenisvolle projecten die
                        geschiedenis zichtbaar maken en nieuw talent een podium
                        geven.
                    </p>

                    <p>
                        Met Edutain U Productions kies je voor een partner die
                        visie koppelt aan daadkracht, en creativiteit aan
                        verantwoordelijkheid.
                    </p>
                </div>

                <div className={headerStyles.buttons}>
                    <a href="#biografie" className={headerStyles.button}>
                        Meer weten
                    </a>
                    <a href="#contact" className={headerStyles.button}>
                        Contact
                    </a>
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
