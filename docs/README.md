---
lang: zh-CN
title: VuePress2.0 + Github Actions部署到Github Pages教程
---

[VuePress官方文档](https://v2.vuepress.vuejs.org/zh/)
[vue-press-project github地址](https://github.com/Ruan8/vue-press-project)

1. 首先创建一个`github`远程仓库`vue-press-project`
2. 把仓库克隆下来
3. 初始化项目

```sh
npm init -y
npm i vuepress@next -D
```

4. 在`package.json`文件添加一些`scripts`

```json
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
```

5. 将默认的临时目录和缓存目录添加到 `.gitignore` 文件中

```sh
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

6. 创建你的第一篇文档

```sh
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

7. 在本地启动服务器来开发你的文档网站

```sh
npm run docs:dev
```

8. 创建 `.github/workflows/docs.yml` 文件来配置工作流

```yaml
name: Deploy

on:
    push:
        branches:
            - main

jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v2
            - uses: actions/setup-node@v3
              with:
                  node-version: 16
                  cache: npm
            - run: npm install

            - name: Build
              run: npm run docs:build

            - name: Deploy to GitHub Pages
              uses: crazy-max/ghaction-github-pages@v2
              with:
                  target_branch: gh-pages
                  build_dir: docs/.vuepress/dist
              env:
                  GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}

```

9. 根目录创建`vuepress.config.js`文件，定义部署站点的基础路径

```javascript
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
    base: "/vue-press-project/", // github仓库名
});

```

10. 配置`GITHUB_TOKEN`

![](https://img-blog.csdnimg.cn/f15b7d6cf5994206944e7756c8ba3fb7.png)
![](https://img-blog.csdnimg.cn/f237be21e8394d20ae0383f795fa4edc.png)
![](https://img-blog.csdnimg.cn/ed9b016d468445d7867864c820edc38b.png)
![](https://img-blog.csdnimg.cn/7ff72330ae87454e8e0628338d3bfe9c.png)
![](https://img-blog.csdnimg.cn/3b6725123caa44fd8725bc9ec0f6fbfd.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/14bf3f891aa3473ca94eb77706d4cd94.png)

选择权限，看不懂不懂全勾Read and write
![在这里插入图片描述](https://img-blog.csdnimg.cn/74516e4c6dfa48d3b9eb9954dfbe607a.png)

复制
![](https://img-blog.csdnimg.cn/36effa13486942568e3bb1270ad15458.png)

找到仓库的设置
![](https://img-blog.csdnimg.cn/21eb55751a004fb183ca4c058ccaa268.png)

添加密钥
![](https://img-blog.csdnimg.cn/770625d6e19940bdb53e693f238db248.png)

11. 提交代码到`github`

```sh
# 创建main分支
git checkout -b main

git add .
git commit -m 'first'
git push -u origin main
```

能看到
![](https://img-blog.csdnimg.cn/e3523d618a2543e1b705c9050baac571.png)

这代表成功，看到红色的 <font color="red" size="5">x</font> 就代表构建失败，可点进去查看原因
![](https://img-blog.csdnimg.cn/a931ca9ddf86482e9801f78ad24dd9a9.png)

构建成功会发现多了个分支
![](https://img-blog.csdnimg.cn/2bc0cc292b5745ed8b6be0695f88922f.png)

然后我们进入`Settings/Pages`
![](https://img-blog.csdnimg.cn/d1f023c005244c54b95533ffd52dc338.png)

选择`gh-pages`分支的`/`目录作为根目录

访问[https://ruan8.github.io/vue-press-project/](https://ruan8.github.io/vue-press-project/)
![](https://img-blog.csdnimg.cn/b14588e04180475f99030983a1ba627a.png)

