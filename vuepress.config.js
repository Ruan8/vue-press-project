import { defineUserConfig, defaultTheme } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";

export default defineUserConfig({
    title: "vue-press",
    description: "使用VuePress用来学习和记录",
    base: "/vue-press-project/", // github仓库名
    theme: defaultTheme({
        sidebar: [
            // {
            //     text: "html + js + css",
            //     link: "",
            //     children: [],
            // },
            {
                text: "node",
                children: [
                    {
                        text: "node + cheerio 爬虫上手体验",
                        link: "/node/cheerio",
                    },
                ],
            },
            {
                text: "其他",
                children: [
                    {
                        text: "VuePress2.0 + Github Actions部署到Github Pages教程",
                        link: "/other/vue-press",
                    },
                ],
            },
        ],
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
