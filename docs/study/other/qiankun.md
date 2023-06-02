# 微前端之qiankun

主应用`vue2`

微应用使用 `vue2` `vue3` `react`

完成`暗黑模式` `数据传递`



[完整项目地址](https://github.com/Ruan8/qiankun-demo.git)



### 判断是否被主应用嵌套

```javascript
if(window.__POWERED_BY_QIANKUN__) {}
```



## 建立主应用与微应用中的数据传递

主应用（简单模拟登陆状态和主题色的状态）

```javascript
import { initGlobalState } from "qiankun";

let globalState = {
    token: null,
    theme: null,
};
let actions = null;

// 修改数据
const setState = (callback) => {
    let newState = typeof callback === "function" && callback(globalState);
    globalState = newState || {};
    actions.setGlobalState(newState);
};

// 初始化数据
const initState = () => {
    actions = initGlobalState(globalState);
    actions.setGlobalState(globalState);
};

export { setState, initState };
```





增加系统主题色判断

```javascript
const match = window.matchMedia("(prefers-color-scheme: dark)");
const changeTheme = (macthes) =>
    store.commit("SET_THEME", macthes ? "dark" : "light");
match.addEventListener("change", (e) => {
    changeTheme(e.matches);
});
```



微应用中通过`onGlobalStateChange`保存到应用`store`中

```javascript
export async function mount(props) {
    render(props);
    props.onGlobalStateChange((state) => {
        store.commit("SET_TOKEN", state.token);
        store.commit("SET_THEME", state.theme);
    }, true);
}
```



通过`setState`来通知微应用

```javascript
SET_TOKEN(state, token) {
    state.token = token;
    setState((s) => {
      s.token = token;
      return s;
    });
}
```



通过路由前置守卫，当用户状态为未登陆时，跳转到登陆页

```javascript
router.beforeEach((to, from, next) => {
    if (to.path === "/login") {
        next();
    } else if (!store.state.token) {
        next({
            path: "/login",
            query: {
                p: to.path,
            },
        });
    } else {
        next();
    }
});
```



![image-20230602203056005](https://p.ipic.vip/yxz1fp.png)