import * as React from "react";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Footer: React.FC = () => {
    const { title } = useSiteMetadata();

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            [Footer] © {currentYear} - {title}
        </footer>
    );
};

export default Footer;
