`cheerio`是为服务器特别定制的，快速、灵活的`jQuery`核心实现.

#### 安装
```shell
npm i cheerio
```

#### 特点

 - 相似的语法：`cheerio`实现了核心`jQuery`的子集。`cheerio`会从`jQuery`库中删除所有`DOM`矛盾和浏览器的尴尬部分,展示她真正华丽的`API`。
 - 非常快：`cheerio`使用一个非常简单的、一致的`DOM`模型。作为一个结果分析、处理和呈现的工具非常有效。基础的端到端基准测试显示其速度是`JSDOM`的**8**倍。
 - 非常的灵活：`cheerio`基于`htmlparser2`。`cheerio`可以解析几乎任何`HTML`或`XML`文档。

#### 使用
首先你需要加载`HTML`，`jQuery`的这一步是必须的，因为一个`jQuery`运行，常用`DOM`。在`cheerio`中，我们需要把`HTML document`传进去。
```javascript
var cheerio = require('cheerio'),
$ = cheerio.load('<ul id="fruits">...</ul>');
```
如果你需要修改默认的解析选项你也可以传一个额外的对象给`.load()`：
```javascript
$ = cheerio.load('<ul id="fruits">...</ul>', {
    normalizeWhitespace: true,
    xmlMode: true
});
```
这些解析选项直接取自[htmlparser2](https://github.com/fb55/htmlparser2/wiki/Parser-options)，因此也可以在`cheerio`中使用任何在`htmlparser2`中有效的选项。默认的选项是:
```javascript
{
    normalizeWhitespace: false,
    xmlMode: false,
    decodeEntities: true
}
```

#### 抓取[求书网](http://www.aidusk.com/)例子
```shell
npm i axios cheerio
```

```javascript
const axios = require("axios");
const cheerio = require("cheerio");
const baseURL = "http://www.aidusk.com/";

/**
 * 获取页面html
 * @param {String} url 路径
 * @param {Object} params 参数
 */
async function getPage(url = "", params = {}) {
  const { data } = await axios({ method: "get", url: baseURL + url, params });
  const page = cheerio.load(data);
  return page;
}

/**
 * 按关键词查询
 * @param {String} keyword 关键词
 */
async function search(keyword) {
  const $ = await getPage("search.php", { searchkey: keyword });
  const listNode = $(".read_list li");
  return listNode.toArray().map((item) => {
    // 小说封面图
    const coverImg = $(item).find(".pic img").attr("src");
    const [t1, t2, t3] = $(item).find(".w1").children().get();
    // 小说id
    const id = $(t1).find(".c1").attr("href").replace(/[^\d]/g, "");
    // 小说名
    const name = $(t1)
      .find(".c1")
      .text()
      .replace(/[《》]/g, "");
    // 小说作者和更新时间
    const [author, updateDate] = $(t2)
      .text()
      .split(" ")
      .map((item) => item.split("：")[1]);
    // 小说描述
    const desc = $(t3).text().replace(/\s/g, "");
    return {
      id,
      name,
      coverImg,
      desc,
      author,
      updateDate,
    };
  });
}

search("天蚕土豆").then((res) => {
  console.log(res);
});
```
#### 打印![打印图片](https://img-blog.csdnimg.cn/0196c7e61d164ac9a58c94620538d7ff.png)