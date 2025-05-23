import * as React from "react";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

import * as footerStyles from "../../styles/modules/layout/footer.module.scss";

const Footer: React.FC = () => {
    const { title } = useSiteMetadata();

    const currentYear = new Date().getFullYear();

    return (
        <footer className={footerStyles.footer}>
            <div>
                <span>
                    © {currentYear} - {title}
                </span>
                <span>
                    {"</>"} by{" "}
                    <a
                        href="https://menefex.nl"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={footerStyles.menefex}
                    >
                        Menefex
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
