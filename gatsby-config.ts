import type { GatsbyConfig } from "gatsby";

const siteMetadata = {
    title: `Edutain U Productions`,
    slogan: ``,
    description: `Edutain U Productions is het creatieve freelancebedrijf van Otmar Watson, actief op het snijvlak van kunst, cultuur, erfgoed en empowerment. Vanuit jarenlange ervaring binnen de culturele sector realiseert Edutain U Productions projecten die verbinden, verdiepen en versterken.`,

    siteUrl: `https://edutainuproductions.nl`,
    image: `/eup-logo.png`,

    twitterUsername: ``,
    facebookUrl: ``,
    instagramUrl: ``,
    tiktokUrl: ``,
    youtubeUrl: `https://www.youtube.com/@otmarwatson8112`,
    spotifyUrl: ``,
    linkedinUrl: `https://www.linkedin.com/in/otmar-watson-10831081/`,
    blogUrl: `https://koemabala.blogspot.com`,

    telephone: ``,
    phoneRaw: ``,
    mobile: ``,
    email: `otmar.watson@gmail.com`,

    address: ``,
    postalCode: ``,
    city: ``,
    country: ``,

    companyName: `Edutain U Productions`,
    kvk: ``,
    btw: ``,
    bank: ``,

    bgWebColor: `#faa31b`,
    bgThemeColor: `#1d1d1d`,
};

const config: GatsbyConfig = {
    siteMetadata: siteMetadata,

    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-MJ4J8S4Q",
                includeInDevelopment: false,
                defaultDataLayer: { platform: "gatsby" },

                // Specify optional GTM environment details.
                // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
                // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("sass"),
                sassOptions: {
                    silenceDeprecations: ["legacy-js-api"],
                },
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: siteMetadata.bgThemeColor,
            },
        },
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `blurred`,
                },
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
        "gatsby-plugin-catch-links",
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: siteMetadata.siteUrl,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: siteMetadata.title,
                short_name: siteMetadata.title,
                start_url: `/`,
                background_color: siteMetadata.bgWebColor,
                theme_color: siteMetadata.bgThemeColor,
                display: `standalone`,
                crossOrigin: "use-credentials",
                icon: "src/images/favicon/icon.png",
                icon_options: {
                    purpose: `any maskable`,
                },
            },
        },
        "gatsby-plugin-offline",
    ],
};

export default config;
