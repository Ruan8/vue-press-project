import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import sidebar from "./sidebar.js";
import { resolve } from "path";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    title: "慢！",
    description: "慢慢来，慢慢学！",
    base: "/vue-press-project/", // github仓库名
    lang: "zh-CN",
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    markdown: {
        lineNumbers: true,
    },
    theme: hopeTheme({
        favicon: "/images/logo.jpeg",
        sidebar: sidebar,
        navbar: [
            {
                text: "笔记",
                link: "/study",
            },
        ],
        darkmode: "toggle",
        breadcrumb: false,
        print: false,
        pure: true,
        repo: "Ruan8/vue-press-project",
        docsDir: "docs",
        plugins: {
            activeHeaderLinks: true,
            nprogress: true,
        },
        // toc: false,
    }),
    plugins: [
        googleAnalyticsPlugin({
            id: "G-7M1XFXG9LR",
            debug: true,
        }),
    ],
    bundler: viteBundler({
        viteOptions: {
            resolve: {
                alias: {
                    "@": resolve(__dirname, "docs"),
                },
            },
        },
        vuePluginOptions: {},
    }),
});
