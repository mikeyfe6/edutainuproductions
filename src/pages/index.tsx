import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import { Seo } from "../components/seo";

import Layout from "../components/layout";
import Form from "../components/forms/form";

import * as indexStyles from "../styles/modules/pages/index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <section className={indexStyles.biography} id="biografie">
                <div>
                    <h2>Biografie</h2>

                    <div>
                        <p>
                            Otmar Watson is een veelzijdige cultureel
                            ondernemer, producent en coach, actief op het
                            snijvlak van kunst, erfgoed, empowerment en
                            educatie. Als oprichter van Edutain U Productions
                            voert hij uiteenlopende opdrachten uit voor onder
                            andere de Gemeente Amsterdam en Gemeente Rotterdam.
                            Met een sterke focus op impact en inclusiviteit
                            ontwikkelt en leidt hij projecten die gemeenschappen
                            verbinden en jong talent versterken.
                        </p>
                        <p>
                            Otmar heeft zich acht jaar lang ingezet als
                            programmeur van de Black Achievement Month en
                            vervulde daarnaast twee jaar de rol van
                            projectleider van dit nationale erfgoedprogramma.
                            Hij is directeur van Stichting Untold en zakelijk
                            leider van Stichting Eternity Percussion, waarmee
                            hij de Afro-Nederlandse geschiedenis, spiritualiteit
                            en artistieke expressie op inspirerende wijze tot
                            leven brengt, zowel nationaal als internationaal.
                        </p>
                        <p>
                            Naast zijn werk in de culturele sector is Otmar ook
                            enkele uren per week werkzaam als Coördinator
                            Kwaliteit en Ontwikkeling Jongerenwerk bij Vivell,
                            waar hij bijdraagt aan de professionalisering van
                            het jongerenwerk en het versterken van perspectieven
                            van jongeren.
                        </p>
                        <p>
                            Met zijn verbindende kracht, brede ervaring en
                            inhoudelijke diepgang is Otmar Watson een
                            sleutelfiguur binnen de culturele en
                            maatschappelijke sector.
                        </p>
                    </div>
                </div>
            </section>

            <section className={indexStyles.expertise} id="expertise">
                <div>
                    <h2>Expertiseprofiel</h2>
                    <p>
                        Ik ben gespecialiseerd in het ontwikkelen, begeleiden en
                        realiseren van kunst- en cultuurprojecten met
                        maatschappelijke urgentie. Mijn focus ligt op erfgoed en
                        Black History, cultuureducatie, internationale culturele
                        uitwisselingen en talentontwikkeling. Met ruime ervaring
                        in projectleiding en de productie van festivals, events
                        en manifestaties, zet ik kunst en cultuur in als middel
                        voor verbinding, bewustwording en empowerment. Daarnaast
                        coach ik young professionals en vervul ik
                        bestuursfuncties binnen het culturele veld. Ik ben
                        beschikbaar voor diverse toezichthoudende en
                        bestuurlijke functies waarin ik mijn ervaring, netwerk
                        en visie op inclusieve cultuurontwikkeling kan inzetten.
                    </p>
                </div>
            </section>

            <section className={indexStyles.services} id="consultancy">
                <h2>Waarmee ik je kan helpen:</h2>
                <ul>
                    <li>
                        <span>Fondsenwerving & subsidieaanvragen</span>
                    </li>
                    <li>Projectontwikkeling & projectuitvoering</li>
                    <li>Strategisch advies bij culturele plannen</li>
                    <li>Feedback op projectplannen of begrotingen</li>
                    <li>Positionering en presentatie van je idee</li>
                </ul>
            </section>

            <section className={indexStyles.consultancy}>
                <div>
                    <div className={indexStyles.advice}>
                        <h2>Advies & Consultancy</h2>
                        <p>
                            Heb je een goed idee voor een project, maar weet je
                            niet waar je moet beginnen met fondsenwerving? Of
                            heb je juist al een concept maar zoek je iemand die
                            met je meedenkt over de aanvraag of strategie?
                        </p>
                        <p>
                            Met meer dan 15 jaar ervaring in de kunst- en
                            cultuursector bied ik professioneel advies aan
                            makers, stichtingen en culturele organisaties.
                            Tijdens een adviesgesprek krijg je concrete tips,
                            scherpe feedback en strategisch inzicht waarmee je
                            verder kunt.
                        </p>
                    </div>

                    <div className={indexStyles.pricing}>
                        <h2>Tarieven:</h2>
                        <ul>
                            <li>• 30 minuten: €75</li>
                            <li>• 60 minuten: €135</li>
                            <li>• (*Alle bedragen zijn excl. btw*)</li>
                        </ul>
                        <small>
                            Let op: Mijn diensten zijn gratis voor jongeren en
                            jongeren tot en met 23 jaar. Ik geloof in het
                            ondersteunen van de nieuwe generatie makers en
                            professionals.
                        </small>
                        <a href="#contact">
                            <span>Vraag een offerte aan</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className={indexStyles.trackrecord}>
                <div>
                    <h2>Trackrecord</h2>
                    <ul>
                        <li>
                            <a href="#!">
                                <b>Directeur en artistiek leider</b> Stichting
                                Untold
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Zakelijk leider</b> Stichting Eternity
                                Percussion
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Programmeur & projectleider</b> Black
                                Achievement Month
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Projectleider & programmeur</b> Swazoom
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Coördinator Kwaliteit en Ontwikkeling</b>{" "}
                                Vivell
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>
                                    Lid Stuurgroep Regisseur Kunst & Cultuur
                                    Zuidoost
                                </b>{" "}
                                Gemeente Amsterdam
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Commissielid Adviescommissie Cultuur</b>{" "}
                                Gemeente Rotterdam
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Redactielid</b> Cultuurkrant NL
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Bestuurslid</b> Broos Instituut
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Bestuurslid</b> Theater voor Keti Koti
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Bestuurslid</b> Tolhuistuin
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Projectleider In The Picture Festival</b>{" "}
                                Bijlmer Parktheater
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Projectleider</b> Dag van 1000 Culturen
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Coördinator Educatie en Informatie</b>{" "}
                                Stichting Brotherhood
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Mede-oprichter </b> Stichting Eternity
                                Percussion
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Oprichter</b> Stichting Untold
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <b>Kernlid en mede-oprichter</b>{" "}
                                Studentenvereniging Bun Tranga
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={indexStyles.fraternity} id="bun-tranga">
                <div>
                    <h2>Studentenvereniging Bun Tranga</h2>
                    <p>
                        Studentenvereniging Bun Tranga werd in 1996 opgericht
                        aan de Hogeschool Holland (nu Hogeschool Inholland) in
                        Diemen. De vereniging richtte zich op Afro-Surinaamse
                        studenten en bood hen een platform voor culturele
                        expressie, bewustwording en activisme. Otmar Watson was
                        een van de oprichters van Bun Tranga. Hij speelde een
                        actieve rol in het organiseren van discussieavonden over
                        thema's zoals racisme en de Zwarte Piet-traditie. Deze
                        bijeenkomsten vonden plaats ondanks weerstand van de
                        schoolleiding, die dergelijke discussies als
                        controversieel beschouwde.
                    </p>
                    <p>
                        Bun Tranga was ook betrokken bij bredere
                        maatschappelijke bewegingen. Zo werkte de vereniging
                        samen met organisaties zoals Brotherhood en het
                        actiecomité Zwarte Piet is Zwart Verdriet. Ze
                        organiseerden protesten en culturele evenementen, vaak
                        begeleid door brassbandmuziek, om aandacht te vragen
                        voor racisme en discriminatie. Deze activiteiten vonden
                        plaats in een tijd waarin het aankaarten van dergelijke
                        onderwerpen nog taboe was, en activisten regelmatig te
                        maken kregen met tegenstand en negatieve reacties.
                    </p>
                    <p>
                        De oprichting en activiteiten van Bun Tranga hebben
                        bijgedragen aan de bewustwording en discussie over
                        racisme en culturele identiteit binnen het hoger
                        onderwijs en de bredere samenleving. De vereniging
                        speelde een pioniersrol in het creëren van ruimte voor
                        Afro-Surinaamse studenten om hun stem te laten horen en
                        zich te organiseren rond thema's die hen direct
                        betroffen.
                    </p>
                </div>
            </section>

            <Form />
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
