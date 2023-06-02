import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c,a as s,b as n,d as a,w as o,e as u}from"./app-7e3810a5.js";const r={},d=s("h1",{id:"vuepress2-0-github-actions部署到github-pages教程",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress2-0-github-actions部署到github-pages教程","aria-hidden":"true"},"#"),n(" VuePress2.0 + Github Actions部署到Github Pages教程")],-1),v={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/Ruan8/vue-press-project",target:"_blank",rel:"noopener noreferrer"},m=u(`<ol><li>首先创建一个<code>github</code>远程仓库<code>vue-press-project</code></li><li>把仓库克隆下来</li><li>初始化项目</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
<span class="token function">npm</span> i vuepress@next <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在<code>package.json</code>文件添加一些<code>scripts</code></li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>将默认的临时目录和缓存目录添加到 <code>.gitignore</code> 文件中</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>创建你的第一篇文档</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>在本地启动服务器来开发你的文档网站</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li>创建 <code>.github/workflows/docs.yml</code> 文件来配置工作流</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy

<span class="token key atrule">on</span><span class="token punctuation">:</span>
    <span class="token key atrule">push</span><span class="token punctuation">:</span>
        <span class="token key atrule">branches</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> main

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
        <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
        <span class="token key atrule">steps</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
            <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
              <span class="token key atrule">with</span><span class="token punctuation">:</span>
                  <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">16</span>
                  <span class="token key atrule">cache</span><span class="token punctuation">:</span> npm
            <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install

            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
              <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run docs<span class="token punctuation">:</span>build

            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
              <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
              <span class="token key atrule">with</span><span class="token punctuation">:</span>
                  <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
                  <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
              <span class="token key atrule">env</span><span class="token punctuation">:</span>
                  <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>根目录创建<code>vuepress.config.js</code>文件，定义部署站点的基础路径</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/vue-press-project/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// github仓库名</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li>配置<code>GITHUB_TOKEN</code></li></ol><p><img src="https://p.ipic.vip/wix3iz.png" alt=""><img src="https://p.ipic.vip/zr4nlf.png" alt=""><img src="https://p.ipic.vip/y5qsvr.png" alt=""><img src="https://p.ipic.vip/llhgzn.png" alt=""><img src="https://p.ipic.vip/bkhzq1.png" alt=""><img src="https://p.ipic.vip/bdfa2d.png" alt=""></p><p>选择权限，看不懂不懂全勾Read and write <img src="https://p.ipic.vip/v67rfm.png" alt=""></p><p>复制 <img src="https://p.ipic.vip/llx56k.png" alt=""></p><p>找到仓库的设置 <img src="https://p.ipic.vip/a165n3.png" alt=""></p><p>添加密钥 <img src="https://p.ipic.vip/1vzs48.png" alt=""></p><ol start="11"><li>提交代码到<code>github</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建main分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> main

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;first&#39;</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>能看到 <img src="https://p.ipic.vip/zr0b1g.png" alt=""></p>`,23),g=s("img",{src:"https://p.ipic.vip/s3i2a1.png",alt:""},null,-1),b=s("p",null,[n("构建成功会发现多了个分支 "),s("img",{src:"https://p.ipic.vip/iwm1m2.png",alt:""})],-1),h=s("p",null,[n("然后我们进入"),s("code",null,"Settings/Pages"),s("img",{src:"https://p.ipic.vip/rfcwj5.png",alt:""})],-1),_=s("p",null,[n("选择"),s("code",null,"gh-pages"),n("分支的"),s("code",null,"/"),n("目录作为根目录")],-1),y={href:"https://ruan8.github.io/vue-press-project/",target:"_blank",rel:"noopener noreferrer"},f=s("img",{src:"https://p.ipic.vip/mhnncp.png",alt:""},null,-1);function x(j,q){const e=t("ExternalLinkIcon"),p=t("font");return l(),c("div",null,[d,s("p",null,[s("a",v,[n("VuePress官方文档"),a(e)]),s("a",k,[n("vue-press-project github地址"),a(e)])]),m,s("p",null,[n("这代表成功，看到红色的 "),a(p,{color:"red",size:"5"},{default:o(()=>[n("x")]),_:1}),n(" 就代表构建失败，可点进去查看原因 "),g]),b,h,_,s("p",null,[n("访问"),s("a",y,[n("https://ruan8.github.io/vue-press-project/"),a(e)]),f])])}const E=i(r,[["render",x],["__file","vue-press.html.vue"]]);export{E as default};