import * as React from "react";

import { HeadFC, PageProps, Link } from "gatsby";

import { Seo } from "../components/seo";

import Layout from "../components/layout";

const PrivacyPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <section id="beleid">
                <h2>Privacyverklaring – Edutain U Productions</h2>
                <p>
                    Laatst bijgewerkt: mei 2025 <br />
                    <br />
                    Bij Edutain U Productions respecteren we jouw privacy. We
                    verzamelen alleen de noodzakelijke gegevens via het
                    contactformulier (zoals je naam en e-mailadres) om contact
                    met je op te nemen.
                </p>
                <br />
                <h3>Wat doen we met jouw gegevens?</h3>
                <ul>
                    <li>- Alleen gebruiken om te reageren op jouw bericht.</li>
                    <li>- Nooit delen met derden zonder jouw toestemming.</li>
                    <li>
                        - Je hebt altijd recht op inzage, wijziging of
                        verwijdering van je gegevens.
                    </li>
                </ul>
                <small>
                    Je gegevens worden maximaal 6 maanden bewaard, tenzij je
                    klant wordt — dan volgen we de wettelijke bewaartermijn.
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

export default PrivacyPage;

export const Head: HeadFC = () => (
    <Seo title="Privacybeleid" pathname="/privacybeleid/" noindex />
);
