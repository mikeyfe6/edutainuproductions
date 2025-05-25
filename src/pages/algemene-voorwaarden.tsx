import * as React from "react";

import { HeadFC, PageProps, Link } from "gatsby";

import { Seo } from "../components/seo";

import Layout from "../components/layout";

const TermsPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <section id="voorwaarden">
                <h2>Algemene Voorwaarden – Edutain U Productions</h2>
                <p>
                    Laatst bijgewerkt: mei 2025 <br /><br />
                    Edutain U Productions, onder leiding van Otmar Watson,
                    levert creatieve en educatieve diensten op het snijvlak van
                    kunst, cultuur en empowerment. Denk aan projectontwikkeling,
                    culturele evenementen, coaching, strategisch advies en
                    cultuureducatie. Alle opdrachten worden uitgevoerd op basis
                    van onderling overeengekomen afspraken.
                </p>
                <br />
                <h3>Belangrijke punten:</h3>
                <ul>
                    <li>
                        - Offertes zijn 14 dagen geldig tenzij anders vermeld.
                    </li>
                    <li>
                        - Betalingstermijn: binnen 14 dagen na factuurdatum.
                    </li>
                    <li>
                        - Gemaakte concepten, voorstellen en content blijven
                        eigendom van Edutain U Productions totdat volledige
                        betaling is ontvangen.
                    </li>
                    <li>
                        - Annuleren van een opdracht kan kosteloos tot 48 uur
                        voor aanvang. Daarna kunnen annuleringskosten worden
                        gerekend.
                    </li>
                    <li>
                        - Bij samenwerking staat transparantie en wederzijds
                        respect centraal. Vragen of klachten worden in goed
                        overleg opgelost.
                    </li>
                </ul>
                <small>
                    Voor vragen over deze voorwaarden kun je altijd contact
                    opnemen met Edutain U Productions via het contactformulier.
                </small>
                <br />
                <Link to="/">
                    <b>
                        <u>Ga naar de homepage</u>
                    </b>
                </Link>
            </section>
        </Layout>
    );
};

export default TermsPage;

export const Head: HeadFC = () => (
    <Seo
        title="Algemene voorwaarden"
        pathname="/algemene-voorwaarden/"
        noindex
    />
);
