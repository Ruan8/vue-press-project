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

![](https://p.ipic.vip/wix3iz.png)
![](https://p.ipic.vip/zr4nlf.png)
![](https://p.ipic.vip/y5qsvr.png)
![](https://p.ipic.vip/llhgzn.png)
![](https://p.ipic.vip/bkhzq1.png)![](https://p.ipic.vip/bdfa2d.png)

选择权限，看不懂不懂全勾Read and write
![](https://p.ipic.vip/v67rfm.png)

复制
![](https://p.ipic.vip/llx56k.png)

找到仓库的设置
![](https://p.ipic.vip/a165n3.png)

添加密钥
![](https://p.ipic.vip/1vzs48.png)

11. 提交代码到`github`

```sh
# 创建main分支
git checkout -b main

git add .
git commit -m 'first'
git push -u origin main
```

能看到
![](https://p.ipic.vip/zr0b1g.png)

这代表成功，看到红色的 <font color="red" size="5">x</font> 就代表构建失败，可点进去查看原因
![](https://p.ipic.vip/s3i2a1.png)

构建成功会发现多了个分支
![](https://p.ipic.vip/iwm1m2.png)

然后我们进入`Settings/Pages`
![](https://p.ipic.vip/rfcwj5.png)

选择`gh-pages`分支的`/`目录作为根目录

访问[https://ruan8.github.io/vue-press-project/](https://ruan8.github.io/vue-press-project/)
![](https://p.ipic.vip/mhnncp.png)
