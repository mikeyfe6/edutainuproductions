import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface SrcImagesQuery {
    example: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
}

export const useSrcImages = () => {
    const data = useStaticQuery<SrcImagesQuery>(graphql`
        query {
            example: file(relativePath: { eq: "example.jpg" }) {
                childImageSharp {
                    gatsbyImageData(width: 1000)
                }
            }
        }
    `);

    return {
        example: data.example.childImageSharp.gatsbyImageData,
    };
};
