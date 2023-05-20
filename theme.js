const sidebar = [
    {
        text: "typescript",
        children: ["/ts/type.md", "/ts/interface.md"],
    },
    {
        text: "node",
        children: ["/node/cheerio"],
    },
    {
        text: "打包工具",
        children: [
            {
                text: "webpack",
                children: ["/webpack/optimization"],
            },
            "/vite",
            "/rollup",
        ],
    },
    {
        text: "其他",
        children: ["/other/vue-press"],
    },
];

if (process.env.NODE_ENV === "production") {
    sidebar.shift();
}

export { sidebar };
