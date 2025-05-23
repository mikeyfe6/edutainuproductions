import * as React from "react";

import { Link } from "gatsby";

import { useLocation } from "@reach/router";

import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

import * as headerStyles from "../../styles/modules/layout/header.module.scss";

const Header: React.FC = () => {
    const { title, blogUrl, linkedinUrl, youtubeUrl } = useSiteMetadata();

    const { pathname } = useLocation();

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.hero}>
                <div className={headerStyles.menu}>
                    <Link to="/">
                        <StaticImage
                            src="../../images/logo/eup-logo-trans.png"
                            alt={`${title} Logo`}
                        />
                    </Link>
                    <div>
                        <ul>
                            <li className={headerStyles.logo}>
                                <Link to="/">
                                    <StaticImage
                                        src="../../images/logo/eup-logo-trans.png"
                                        alt={`${title} Logo`}
                                    />
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={blogUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={["fas", "blog"]}
                                        size="xl"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "linkedin-in"]}
                                        size="xl"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "youtube"]}
                                        size="xl"
                                    />
                                </a>
                            </li>
                        </ul>

                        <hr />

                        <nav>
                            <ul>
                                {pathname === "/" ? (
                                    <>
                                        <li>
                                            <a href="#biografie">Biografie</a>
                                        </li>
                                        <li>
                                            <a href="#expertise">Expertise</a>
                                        </li>
                                        <li>
                                            <a href="#consultancy">
                                                Consultancy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#bun-tranga">Bun Tranga</a>
                                        </li>
                                    </>
                                ) : (
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className={headerStyles.intro}>
                    <h1>{title}</h1>
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

                    {pathname === "/" && (
                        <p>
                            <b>
                                Van theaterproducties tot festivals, van
                                cultuureducatie tot internationale
                                uitwisselingsprogramma’s:
                            </b>{" "}
                            Otmar Watson is inzetbaar als projectleider,
                            producent, coach of conceptontwikkelaar. Otmar
                            Watson voert opdrachten uit voor o.a. de Gemeente
                            Amsterdam, Gemeente Rotterdam, culturele
                            instellingen, scholen en grassroots organisaties.
                        </p>
                    )}

                    {pathname === "/" && (
                        <p>
                            Met Edutain U Productions kies je voor een partner
                            die visie koppelt aan daadkracht en creativiteit aan
                            verantwoordelijkheid.
                        </p>
                    )}
                </div>

                {pathname === "/" && (
                    <div className={headerStyles.buttons}>
                        <a href="#biografie" className={headerStyles.button}>
                            Meer weten
                        </a>
                        <a href="#contact" className={headerStyles.button}>
                            Contact
                        </a>
                    </div>
                )}
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
