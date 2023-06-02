import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-7e3810a5.js";const o={},c=e(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="常见命令" tabindex="-1"><a class="header-anchor" href="#常见命令" aria-hidden="true">#</a> 常见命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 基本操作</span>
<span class="token comment"># 列出正在运行的 Docker 容器：  </span>
<span class="token function">docker</span> <span class="token function">ps</span>
<span class="token comment"># 停止正在运行的 Docker 容器：    </span>
<span class="token function">docker</span> stop <span class="token operator">&lt;</span>container_id<span class="token operator">&gt;</span>
<span class="token comment"># 重启正在运行的 Docker 容器：</span>
<span class="token function">docker</span> restart <span class="token operator">&lt;</span>container_id<span class="token operator">&gt;</span>  
<span class="token comment"># 列出所有的 Docker 容器：</span>
<span class="token function">docker</span> container list  
<span class="token comment"># 查看 Docker 容器的详细信息：</span>
<span class="token function">docker</span> container inspect <span class="token operator">&lt;</span>container_id<span class="token operator">&gt;</span>  
<span class="token comment"># 获取 Docker 容器的 Docker 镜像 ID:</span>
<span class="token function">docker</span> images <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>  
<span class="token comment"># 列出所有的 Docker 镜像：</span>
<span class="token function">docker</span> rmi <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>  

<span class="token comment"># 容器操作</span>
<span class="token comment"># 进入正在运行的 Docker 容器：</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>container_id<span class="token operator">&gt;</span> <span class="token function">bash</span>  
<span class="token comment"># 退出正在运行的 Docker 容器：</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>container_id<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>  
<span class="token comment"># 查看容器的日志：</span>
<span class="token function">docker</span> logs <span class="token operator">&lt;</span>container_id<span class="token operator">&gt;</span>  
<span class="token comment"># 发送日志到控制台： </span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>container_id<span class="token operator">&gt;</span>  
<span class="token comment"># 启动容器并提供网络接口：</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--net</span><span class="token operator">=</span>host <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>  
    

<span class="token comment"># 镜像操作</span>
<span class="token comment"># 列出所有的 Docker 镜像：  </span>
<span class="token function">docker</span> images    
<span class="token comment"># 下载 Docker 镜像：</span>
<span class="token function">docker</span> pull <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>  
<span class="token comment"># 查看 Docker 镜像的详细信息：</span>
<span class="token function">docker</span> rmi <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>  
<span class="token comment"># 创建 Docker 镜像仓库：</span>
<span class="token function">docker</span> push <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>  
<span class="token comment"># 从 Docker 镜像仓库中拉取镜像：</span>
<span class="token function">docker</span> pull <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>    
<span class="token comment"># 镜像注释：</span>
<span class="token function">docker</span> images <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>  
<span class="token comment">### 环境变量</span>
<span class="token comment"># 设置 Docker 环境变量：</span>
<span class="token function">docker</span> environment <span class="token builtin class-name">set</span> <span class="token operator">&lt;</span>variable_name<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>  
<span class="token comment"># 查看 Docker 环境变量：</span>
<span class="token function">docker</span> environment  
<span class="token comment"># 导出 Docker 环境变量： </span>
<span class="token function">docker</span> environment <span class="token builtin class-name">export</span> <span class="token operator">&lt;</span>variable_name<span class="token operator">&gt;</span>  
<span class="token comment"># 导入 Docker 环境变量：</span>
<span class="token function">docker</span> environment <span class="token function">import</span> <span class="token operator">&lt;</span>variable_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM：指定基础镜像，即在此镜像的基础上构建新镜像。
RUN：在镜像中执行命令，用于安装软件包、下载文件等操作。
COPY：将文件从主机复制到镜像中。
ADD：与 COPY 类似，但可以自动解压缩压缩文件并从 URL 下载文件。
WORKDIR：设置工作目录，即在此目录下执行后续的命令。
EXPOSE：声明容器运行时需要监听的网络端口。
CMD：指定容器启动时要执行的命令，可以被 Dockerfile 中的多个 CMD 指令覆盖。
ENTRYPOINT：与 CMD 类似，但是不可以被 Dockerfile 中的其他 ENTRYPOINT 指令覆盖，一般用于指定容器启动时的默认命令或程序。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[c];function i(l,r){return s(),a("div",null,t)}const m=n(o,[["render",i],["__file","index.html.vue"]]);export{m as default};
