const sidebar = {
    "/study": [
        {
            text: "typescript",
            children: ["/study/ts/type.md", "/study/ts/interface.md"],
        },
        {
            text: "Axios",
            children: ["/study/axios/encapsulation"],
        },
        {
            text: "node",
            children: ["/study/node/cheerio"],
        },
        {
            text: "Docker",
            link: "/study/docker/",
        },
        {
            text: "打包工具",
            children: [
                {
                    text: "webpack",
                    children: ["/study/webpack/optimization"],
                },
                "/study/vite",
                "/study/rollup",
            ],
        },
        {
            text: "其他",
            children: ["/study/other/vue-press"],
        },
    ],
};

if (process.env.NODE_ENV === "production") {
    sidebar["/study"].shift();
}

export default sidebar;