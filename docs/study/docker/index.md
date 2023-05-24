# Docker

## 常见命令

```shell
# 基本操作
# 列出正在运行的 Docker 容器：  
docker ps
# 停止正在运行的 Docker 容器：    
docker stop <container_id>
# 重启正在运行的 Docker 容器：
docker restart <container_id>  
# 列出所有的 Docker 容器：
docker container list  
# 查看 Docker 容器的详细信息：
docker container inspect <container_id>  
# 获取 Docker 容器的 Docker 镜像 ID:
docker images <image_name>  
# 列出所有的 Docker 镜像：
docker rmi <image_name>  

# 容器操作
# 进入正在运行的 Docker 容器：
docker exec -it <container_id> bash  
# 退出正在运行的 Docker 容器：
docker exec -it <container_id> exit  
# 查看容器的日志：
docker logs <container_id>  
# 发送日志到控制台： 
docker logs -f <container_id>  
# 启动容器并提供网络接口：
docker run -it --net=host <image_name>  
    

# 镜像操作
# 列出所有的 Docker 镜像：  
docker images    
# 下载 Docker 镜像：
docker pull <image_name>  
# 查看 Docker 镜像的详细信息：
docker rmi <image_name>  
# 创建 Docker 镜像仓库：
docker push <image_name>  
# 从 Docker 镜像仓库中拉取镜像：
docker pull <image_name>    
# 镜像注释：
docker images -a | grep <image_name>  
### 环境变量
# 设置 Docker 环境变量：
docker environment set <variable_name>=<value>  
# 查看 Docker 环境变量：
docker environment  
# 导出 Docker 环境变量： 
docker environment export <variable_name>  
# 导入 Docker 环境变量：
docker environment import <variable_name>
```



#### Dockerfile

```
FROM：指定基础镜像，即在此镜像的基础上构建新镜像。
RUN：在镜像中执行命令，用于安装软件包、下载文件等操作。
COPY：将文件从主机复制到镜像中。
ADD：与 COPY 类似，但可以自动解压缩压缩文件并从 URL 下载文件。
WORKDIR：设置工作目录，即在此目录下执行后续的命令。
EXPOSE：声明容器运行时需要监听的网络端口。
CMD：指定容器启动时要执行的命令，可以被 Dockerfile 中的多个 CMD 指令覆盖。
ENTRYPOINT：与 CMD 类似，但是不可以被 Dockerfile 中的其他 ENTRYPOINT 指令覆盖，一般用于指定容器启动时的默认命令或程序。
```

