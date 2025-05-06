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
                    <h1>Edutain U Productions</h1>
                    <p>
                        Lorem in irure nostrud adipisicing reprehenderit officia
                        reprehenderit commodo laborum. Pariatur do aliqua anim
                        sint reprehenderit commodo sint. Aute sit do velit
                        reprehenderit incididunt. Esse eu ex sunt dolore aliqua
                        aute ullamco laborum. Reprehenderit sint cillum tempor
                        ullamco ullamco ullamco dolore consectetur. Non sint ad
                        consequat magna aute non minim duis voluptate.
                    </p>
                    <br />
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
                    <br />
                    <h2>Trackrecord</h2>
                    <p>
                        programmeur en projectleider Black Achievement Month,
                        Swazoom en Vivell, commisielid Gemeente Amsterdam,
                        commissie Gemeente Rotterdam, redactielid Cultuurkrant,
                        bestuurslid Theater voor Keti Koti, werkzaam geweest bij
                        Brotherhood, bestuurslid Tolhuistuin, projectleider Dag
                        van 1000 Culturen.
                    </p>
                </div>
                <div className={indexStyles.image}>
                    <StaticImage
                        src="../images/otmarwatson.jpg"
                        alt="Otmar Watson"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
