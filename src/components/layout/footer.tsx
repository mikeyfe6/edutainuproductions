import * as React from "react";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

import * as footerStyles from "../../styles/modules/layout/footer.module.scss";

const Footer: React.FC = () => {
    const { title } = useSiteMetadata();

    const currentYear = new Date().getFullYear();

    return (
        <footer className={footerStyles.footer}>
            <div>
                <p>
                    © {currentYear} - {title}
                </p>
                <p>
                    Webcrafted by{" "}
                    <a
                        href="https://menefex.nl"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={footerStyles.menefex}
                    >
                        Menefex
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
