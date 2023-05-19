import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
    title: "vue-press-project",
    description: "vue-press-project",
    base: "/vue-press-project/", // github仓库名
    sidebar: false,
    theme: defaultTheme({
        sidebar: [
            {
                text: "VuePress2.0 + Github Actions部署到Github Pages教程",
                link: "/",
            },
        ],
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        backToHome: "回到首页",
    }),
});
