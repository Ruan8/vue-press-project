# 无感刷新token



[https://github.com/Ruan8/refresh-token-demo](https://github.com/Ruan8/refresh-token-demo)

根据后端返回状态码判断token是否已过期，然后通过`refreshToken`请求刷新`token`做到无感刷新

```javascript
const service = axios.create({
    baseURL: "/",
});

let isRefreshing = false; // 刷新token状态
let refreshRequest = [];

// 添加请求拦截器
service.interceptors.request.use(
    function (config) {
        config.headers.token = localStorage.getItem("token") || "";
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        // 处理当返回的状态码是401
        const refreshToken = localStorage.getItem("refreshToken");
        const config = error.config;
        if (error.response.status === 401 && refreshToken) {
            if (!isRefreshing) {
                // 防止多次请求刷新token
                isRefreshing = true;
                return service({
                    method: "get",
                    url: "refreshToken",
                    params: {
                        refreshToken,
                    },
                })
                    .then((res) => {
                        localStorage.setItem("token", res.token);
                        localStorage.setItem("refreshToken", res.refreshToken);
                        config.headers.token = res.token;
                        refreshRequest.forEach((item) => {
                            item(res.token);
                        });
                        refreshRequest = [];
                        return service(config);
                    })
                    .catch(() => {
                        // 跳转登陆页
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            } else {
                return new Promise((resolve) => {
                    // 保存到一个队列里面，等刷新完token再执行
                    refreshRequest.push((token) => {
                        config.headers.token = token;
                        resolve(service(config));
                    });
                });
            }
        }
        return Promise.reject(error);
    }
);
```

