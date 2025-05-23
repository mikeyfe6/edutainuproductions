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
                    Laatst bijgewerkt: mei 2025 <br />
                    Edutain U Productions levert creatieve diensten zoals
                    videoproducties, educatieve content en media-advies op maat.
                    Alle afspraken, offertes en samenwerkingen zijn onder
                    voorbehoud van wederzijdse goedkeuring.
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
                        - Gemaakte content blijft eigendom van Edutain U
                        Productions totdat volledige betaling is ontvangen.
                    </li>
                    <li>
                        - Annuleren kan kosteloos tot 48 uur voor aanvang van
                        een opdracht. Daarna kunnen kosten in rekening worden
                        gebracht.
                    </li>
                    <li>
                        - Bij vragen of klachten zoeken we altijd samen naar een
                        oplossing.
                    </li>
                </ul>
                <small>
                    Bij vragen of klachten zoeken we altijd samen naar een
                    oplossing.
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
