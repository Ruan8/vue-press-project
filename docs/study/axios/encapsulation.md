# 封装

[axios文档](https://www.axios-http.cn/)

```javascript
import axios from "axios";

const service = axios.create({
    baseURL: "https://api.xxxx.cn/",
    timeout: 1000 * 10,
    headers: {
        "Content-Type": "application/json",
    },
});

// 也可以定义错误状态码对应的message
const errorStatusMap = {
    401: [
        "401", // 提示消息
        () => {
            // 处理方法
            alert("权限不足");
        },
    ],
    404: "404",
};

// 模拟loading状态
let loadingTimer = null;
const showLoading = () => {
    if (loadingTimer) return;
    loadingTimer = setInterval(() => {
        console.log("加载中...");
    }, 100);
};

const closeLoading = () => {
    console.log("加载完成...");
    clearInterval(loadingTimer);
    loadingTimer = null;
};

service.interceptors.request.use(
    (config) => {
        // 把token添加到请求头中
        let token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }

        // 当时get的时候参数要传到params
        if (config.method === "get") {
            config.params = config.data;
            config.data = "";
        }

        showLoading();
        return config;
    },
    (error) => Promise.reject(error)
);

service.interceptors.response.use(
    (res) => {
        const code = res.data.code;

        closeLoading();
        if (code !== 200) {
            // 请求成功
            return res.data;
        } else {
            // 例如这种场景
            if (code in errorStatusMap) {
                const currError = errorStatusMap[code];
                typeof currError[1] === "function" && currError[1]();
                return Promise.reject(currError[0] || "未知错误");
            }
            // 请求失败，可判断失败情况
            return Promise.reject(res.data.message || "未知错误");
        }
    },
    (err) => {
        closeLoading();
        return Promise.reject(err);
    }
);

const request = ({ method, url, data }) => {
    return service({
        method,
        url,
        data,
    });
};

// 也可以暴露出get, set方法
const get = (url, data) => {
    return request({
        method: "GET",
        url,
        data,
    });
};

const post = (url, data) => {
    return request({
        method: "POST",
        url,
        data,
    });
};

export { request, get, post };

```

