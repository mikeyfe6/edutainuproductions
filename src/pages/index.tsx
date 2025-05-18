import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import { Seo } from "../components/seo";

import Layout from "../components/layout";

import * as indexStyles from "../styles/modules/pages/index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={indexStyles.home}>
                <div>
                    <p>
                        Van theaterproducties tot festivals, van cultuureducatie
                        tot internationale uitwisselingsprogramma’s: Otmar
                        Watson is inzetbaar als projectleider, producent, coach
                        of conceptontwikkelaar. Otmar Watson voert opdrachten
                        uit voor o.a. de Gemeente Amsterdam, Gemeente Rotterdam,
                        culturele instellingen, scholen en grassroots
                        organisaties aan betekenisvolle projecten die
                        geschiedenis zichtbaar maken en nieuw talent een podium
                        geven.
                    </p>

                    <p>
                        Met Edutain U Productions kies je voor een partner die
                        visie koppelt aan daadkracht, en creativiteit aan
                        verantwoordelijkheid.
                    </p>

                    <h2>Biografie</h2>

                    <h3>Over Otmar Watson</h3>

                    <p>
                        Otmar Watson is een veelzijdige cultureel ondernemer,
                        producent en coach, actief op het snijvlak van kunst,
                        erfgoed, empowerment en educatie. Als oprichter van
                        Edutain U Productions voert hij uiteenlopende opdrachten
                        uit voor onder andere de Gemeente Amsterdam en Gemeente
                        Rotterdam. Met een sterke focus op impact en
                        inclusiviteit ontwikkelt en leidt hij projecten die
                        gemeenschappen verbinden en jong talent versterken.
                    </p>
                    <p>
                        Otmar heeft zich acht jaar lang ingezet als programmeur
                        van de Black Achievement Month en vervulde daarnaast
                        twee jaar de rol van projectleider van dit nationale
                        erfgoedprogramma. Hij is directeur van Stichting Untold
                        en zakelijk leider van Stichting Eternity Percussion,
                        waarmee hij de Afro-Nederlandse geschiedenis,
                        spiritualiteit en artistieke expressie op inspirerende
                        wijze tot leven brengt, zowel nationaal als
                        internationaal.
                    </p>
                    <p>
                        Naast zijn werk in de culturele sector is Otmar ook
                        enkele uren per week werkzaam als Coördinator Kwaliteit
                        en Ontwikkeling Jongerenwerk bij Vivell, waar hij
                        bijdraagt aan de professionalisering van het
                        jongerenwerk en het versterken van perspectieven van
                        jongeren.
                    </p>
                    <p>
                        Met zijn verbindende kracht, brede ervaring en
                        inhoudelijke diepgang is Otmar Watson een sleutelfiguur
                        binnen de culturele en maatschappelijke sector.
                    </p>
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

                    <h2>Expertise en opleidingen</h2>
                    <p>
                        Lorem in irure nostrud adipisicing reprehenderit officia
                        reprehenderit commodo laborum. Pariatur do aliqua anim
                        sint reprehenderit commodo sint. Aute sit do velit
                        reprehenderit incididunt. Esse eu ex sunt dolore aliqua
                        aute ullamco laborum. Reprehenderit sint cillum tempor
                        ullamco ullamco ullamco dolore consectetur. Non sint ad
                        consequat magna aute non minim duis voluptate.
                    </p>

                    <h2>Trackrecord</h2>
                    <p>
                        programmeur en projectleider Black Achievement Month,
                        Swazoom en Vivell, commisielid Gemeente Amsterdam,
                        commissie Gemeente Rotterdam, redactielid Cultuurkrant,
                        bestuurslid Theater voor Keti Koti, werkzaam geweest bij
                        Brotherhood, bestuurslid Tolhuistuin, projectleider Dag
                        van 1000 Culturen.
                    </p>

                    <h2>Trackrecord (final versie)</h2>
                    <ul>
                        <li>
                            • Directeur en artistiek leider – Stichting Untold
                        </li>
                        <li>
                            • Zakelijk leider – Stichting Eternity Percussion
                        </li>
                        <li>
                            • Programmeur & projectleider – Black Achievement
                            Month
                        </li>
                        <li>• Projectleider & programmeur – Swazoom</li>
                        <li>
                            • Coördinator Kwaliteit en Ontwikkeling - Vivell
                        </li>
                        <li>
                            • Lid Stuurgroep Regisseur Kunst & Cultuur Zuidoost
                            – Gemeente Amsterdam
                        </li>
                        <li>
                            • Commissielid Adviescommissie Cultuur – Gemeente
                            Rotterdam
                        </li>
                        <li>• Redactielid – Cultuurkrant NL</li>
                        <li>• Bestuurslid – Broos Instituut</li>
                        <li>• Bestuurslid – Theater voor Keti Koti</li>
                        <li>• Bestuurslid – Tolhuistuin</li>
                        <li>
                            • Projectleider In The Picture Festival – Bijlmer
                            Parktheater
                        </li>
                        <li>• Projectleider – Dag van 1000 Culturen</li>
                        <li>
                            • Coördinator Educatie en Informatie – stichting
                            Brotherhood
                        </li>
                        <li>
                            • Mede-oprichter – Stichting Eternity Percussion
                        </li>
                        <li>• Oprichter – Stichting Untold</li>
                        <li>
                            • Kernlid en mede-oprichter – Studentenvereniging
                            Bun Tranga
                        </li>
                    </ul>

                    <h2>Advies & Consultancy</h2>
                    <p>
                        Heb je een goed idee voor een project, maar weet je niet
                        waar je moet beginnen met fondsenwerving? Of heb je
                        juist al een concept maar zoek je iemand die met je
                        meedenkt over de aanvraag of strategie?
                    </p>
                    <p>
                        Met meer dan 15 jaar ervaring in de kunst- en
                        cultuursector bied ik professioneel advies aan makers,
                        stichtingen en culturele organisaties. Tijdens een
                        adviesgesprek krijg je concrete tips, scherpe feedback
                        en strategisch inzicht waarmee je verder kunt.
                    </p>

                    <h3>Waarmee ik je kan helpen:</h3>
                    <ul>
                        <li>• Fondsenwerving & subsidieaanvragen</li>
                        <li>• Projectontwikkeling & projectuitvoering</li>
                        <li>• Strategisch advies bij culturele plannen</li>
                        <li>• Feedback op projectplannen of begrotingen</li>
                        <li>• Positionering en presentatie van je idee</li>
                    </ul>

                    <h3>Tarieven:</h3>
                    <ul>
                        <li>• 30 minuten: €75</li>
                        <li>• 60 minuten: €135</li>
                        <li>• (*Alle bedragen zijn excl. btw*)</li>
                    </ul>
                    <small>
                        Let op: Mijn diensten zijn gratis voor jongeren en
                        jongvolwassenen tot 27 jaar. Ik geloof in het
                        ondersteunen van de nieuwe generatie makers en
                        professionals.
                    </small>

                    <h2> Studentenvereniging Bun Tranga</h2>
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
                {/* <div className={indexStyles.image}>
                    <StaticImage
                        src="../images/otmarwatson.jpg"
                        alt="Otmar Watson"
                    />
                </div> */}
            </div>
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
