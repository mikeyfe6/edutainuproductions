import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import { Seo } from "../components/seo";

import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
    return <Layout>[Main - Index]</Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
