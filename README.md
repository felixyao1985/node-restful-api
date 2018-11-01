express: nodejs 的框架

body-parser:方便我们从 post 请求中解析参数

morgan:把请求信息打印到控制台

jsonwebtoken:用来生成和确认 token 数据

mysql:mysql 操作

--目录结构

app  核心逻辑代码

--- common 封装的一些工具

--- models 自动生成的数据表对应model(build/auto-model)

--- router 路由层

config 配置文件目录

server 启动服务器
