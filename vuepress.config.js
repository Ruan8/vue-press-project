import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
    title: "vue-press-project",
    description: "vue-press-project",
    base: "/vue-press-project/", // github仓库名
    sidebar: false,
    theme: defaultTheme({
        sidebar: false,
    }),
});
