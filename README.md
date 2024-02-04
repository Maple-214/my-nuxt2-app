# my-nuxt2-app 项目文档

```bash
#简单说明
技术选型 ssr框架nuxt+前端主流开发框架vue2+nuxt-i18n管理多语言国际化
开发环境 vscode编辑器(https://code.visualstudio.com/) + nodejs18(https://nodejs.org/en) + yarn (npm i yarn -g)包管理工具
```

## 启动

```bash
# 安装依赖
$ yarn install

# 本地开发环境启动 localhost:3000
$ yarn dev

# 带服务端构建&启动
$ yarn build
$ yarn start

# 静态构建(本项目采取的是静态构建)
$ yarn build:static
```

### `assets`

存放资源文件

具体信息可以看nuxt官方介绍 [官网介绍](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

页面组件(公用组件)文件夹

具体信息可以看nuxt官方介绍 [官网介绍](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

布局文件夹默认default，404页面error

具体信息可以看nuxt官方介绍 [官网介绍](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

约定式路由文件夹

具体信息可以看nuxt官方介绍 [官网介绍](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

全局的js插件文件夹

具体信息可以看nuxt官方介绍 [官网介绍](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

该目录包含您的静态文件。 该目录中的每个文件都映射到 `/`.

例如: `/static/robots.txt` 映射为 `/robots.txt`.

### `mock`

存放了一些了配置信息文件，因为要做国际化，所以所有文件都要对应中，日，英三国语言，具体信息可以进入代码查看

### `locales`

存放了项目的的翻译文本

### `store`

该目录包含您的 Vuex 存储文件。 在此目录中创建文件会自动激活 Vuex。(目前项目没用上)

具体信息可以看nuxt官方介绍 [官网介绍](https://nuxtjs.org/docs/2.x/directory-structure/store).
