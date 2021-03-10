const {config} = require("vuepress-theme-hope");

//  base: "/vuepress-theme-hope-template/",
module.exports = config({
    title: "vuepress-theme-hope",
    description: "A vuepress theme with tons of features✨",

    base: "/",


    dest: "./dist",

    themeConfig: {

        logo: "/logo.svg",
        hostname: "https://vuepress-theme-hope-demo.mrhope.site",
        author: "Filip Vanden Eynde",

        repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
        docsRepo: "https://github.com/vuepress-theme-hope/demo",
        docsDir: "docs",

        searchPlaceholder: "Search...",

        nav: [

            {text: "Interviews", link: "/interviews/", icon: "home"},


            {text: "Blog Home", link: "/", icon: "home"},
            {text: "Project Home", link: "/home/", icon: "home"},


            {
                text: "Guide",
                icon: "creative",
                link: "/guide/",
            },
            {
                text: "Docs",
                link: "https://vuepress-theme-hope.github.io/",
                icon: "note",
            },


            {text: "Config", link: "/config/", icon: "config"},
            {text: "FAQ", link: "/FAQ/", icon: "question"},

            {
                text: "Basic",
                icon: "info",
                items: [
                    {text: "Markdown", link: "/basic/markdown/", icon: "markdown"},
                    {text: "VuePress", link: "/basic/vuepress/", icon: "vue"},
                ],
            },

            {
                text: "Project",
                icon: "info",
                items: [
                    {
                        text: "Changelog",
                        link:
                            "https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/v1/CHANGELOG.md",
                    },
                    {
                        text: "Repo",
                        link: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
                    },
                    {
                        text: "Theme Demo",
                        link: "/demo/",
                    },
                    {
                        text: "Plugins",
                        icon: "plugin",
                        items: [
                            {
                                text: "AddThis Plugin",
                                link: "https://vuepress-theme-hope.github.io/add-this/",
                            },
                            {
                                text: "Comment Plugin",
                                link: "https://vuepress-theme-hope.github.io/comment/",
                            },
                            {
                                text: "Copy Code Plugin",
                                link: "https://vuepress-theme-hope.github.io/copy-code/",
                            },
                            {
                                text: "Feed Plugin",
                                link: "https://vuepress-theme-hope.github.io/feed/",
                            },
                            {
                                text: "Git Info Plugin",
                                link: "https://vuepress-theme-hope.github.io/git/",
                            },
                            {
                                text: "Markdown Enhance Plugin",
                                link: "https://vuepress-theme-hope.github.io/md-enhance/",
                            },
                            {
                                text: "Photo Swipe Plugin",
                                link: "https://vuepress-theme-hope.github.io/photo-swipe/",
                            },
                            {
                                text: "PWA Plugin",
                                link: "https://vuepress-theme-hope.github.io/pwa/",
                            },
                            {
                                text: "Reading Time Plugin",
                                link: "https://vuepress-theme-hope.github.io/reading-time/",
                            },
                            {
                                text: "Seo Plugin",
                                link: "https://vuepress-theme-hope.github.io/seo/",
                            },
                            {
                                text: "Sitemap Plugin",
                                link: "https://vuepress-theme-hope.github.io/sitemap/",
                            },
                        ],
                    },
                ],
            },
        ],

        sidebar: {
            "/": [
                "",
                "home",
                "slides",
                {
                    title: "Guide",
                    icon: "creative",
                    prefix: "guide/",
                    children: ["", "page", "markdown", "disable", "encrypt"],
                },
            ],
        },

        blog: {
            intro: "/intro/",
            sidebarDisplay: "mobile",
            links: {
                Zhihu: "https://zhihu.com",
                Baidu: "https://baidu.com",
                Github: "https://github.com",
            },
        },

        footer: {
            display: true,
            content: "footercontent"
        },

        copyright: true,

        lastUpdate: {
            timezone: "Europe/Brussels",
        },

        mdEnhance: {
            // please only enable the features you need
            enableAll: true,
            presentation: {
                plugins: [
                    "highlight",
                    "math",
                    "search",
                    "notes",
                    "zoom",
                    "anything",
                    "audio",
                    "chalkboard",
                ],
            },
        },

        pwa: {
            favicon: "/favicon.ico",
            cachePic: true,
            apple: {
                icon: "/assets/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Guide",
                        short_name: "Guide",
                        url: "/guide/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                            {
                                src: "/assets/icon/guide-monochrome.png",
                                sizes: "192x192",
                                purpose: "monochrome",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },

        // Assumes GitHub. Can also be a full GitLab url.
        repo: "vuejs/vuepress",
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: "Contribute!",
        // Whether to display repo link, default is `true`
        repoDisplay: true,

        // Optional options for generating "Edit this page" link

        // if your docs are in a different repo from your main project:
        docsRepo: "vuejs/vuepress",
        // if your docs are not at the root of the repo:
        docsDir: "docs",
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: "master",
        // defaults to false, set to true to enable
        editLinks: true,
        // default value is true. Allows to hide next page links on all pages
        nextLinks: false,
        // default value is true. Allows to hide prev page links on all pages
        prevLinks: false,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: "Help us improve this page!",
    }
})
;
