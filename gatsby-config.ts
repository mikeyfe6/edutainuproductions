import type { GatsbyConfig } from "gatsby";

const siteMetadata = {
    title: `Edutain U Productions`,
    slogan: ``,
    description: ``,

    siteUrl: `https://edutainuproductions.nl`,
    image: `src/images/logo/eup-logo.jpeg`,

    twitterUsername: ``,
    facebookUrl: ``,
    instagramUrl: ``,
    tiktokUrl: ``,
    youtubeUrl: ``,
    spotifyUrl: ``,
    linkedinUrl: ``,

    telephone: ``,
    phoneRaw: ``,
    mobile: ``,
    email: ``,

    address: ``,
    postalCode: ``,
    city: ``,
    country: ``,

    companyName: `Edutain U Productions`,
    kvk: ``,
    btw: ``,
    bank: ``,

    bgWebColor: ``,
    bgThemeColor: ``,
};

const config: GatsbyConfig = {
    siteMetadata: siteMetadata,

    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        // {
        //     resolve: "gatsby-plugin-google-tagmanager",
        //     options: {
        //         id: "",
        //         includeInDevelopment: false,
        //         defaultDataLayer: { platform: "gatsby" },

        //         // Specify optional GTM environment details.
        //         // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //         // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //     },
        // },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("sass"),
                sassOptions: {
                    silenceDeprecations: ["legacy-js-api"],
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: siteMetadata.image,
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};

export default config;
