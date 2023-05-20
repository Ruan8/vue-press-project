import { defineUserConfig, defaultTheme } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { sidebar } from "./theme.js";

export default defineUserConfig({
    title: "慢！",
    description: "慢慢来，慢慢学！",
    base: "/vue-press-project/", // github仓库名
    theme: defaultTheme({
        sidebar: sidebar,
        repo: "Ruan8/vue-press-project",
        docsDir: "docs",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        tip: "提示",
        warning: "注意",
        danger: "警告",
        backToHome: "回到首页",
        notFound: [
            "这里什么都没有",
            "我们怎么到这来了？",
            "这是一个 404 页面",
            "看起来我们进入了错误的链接",
        ],
    }),
    plugins: [
        googleAnalyticsPlugin({
            id: "G-7M1XFXG9LR",
            debug: true,
        }),
        nprogressPlugin(),
    ],
});
