const sidebar = {
    "/study": [
        {
            text: "axios",
            children: ["/study/axios/encapsulation"],
        },
        {
            text: "typescript",
            children: ["/study/ts/type", "/study/ts/interface"],
        },
        {
            text: "node",
            children: ["/study/node/cheerio"],
        },
        {
            text: "react",
            children: [
                "/study/react/react",
                "/study/react/router",
                "/study/react/redux",
            ],
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
            children: [
                "/study/other/qiankun",
                "/study/other/refresh-token",
                "/study/other/vue-press",
            ],
        },
    ],
};

export default sidebar;
