# chenxi-vue-app

`chenxi-vue-app` 是一个专属于晨曦工作室的 Vue 项目标准代码库。
它已经内置了前端组同学编写前端代码时需要的基本包，如：`vue@3.0.0` 和 `vue-router@4.0.0-0`

另外，为了保证代码规范的养成，`chenxi-vue-app` 还增加了 `eslint` 代码检查工具和 `prettier` 代码美化工具。
当前端开发者修改代码或提交代码入库时，`eslint` 和 `prettier` 会自动检查新增代码是否符合规范。
如果不符合，将会提醒开发者修改，并且拒绝不符合规范的代码入库。

> tips:
>
> 由于 `chenxi-vue-app` 基于 `vue@3.0.0` 和 `vue-router@4.0.0`，网络上非官方的教程基本已经过时。
>
> 请大家前往官网查看正确的教程：[Vue3](https://vue3js.cn/docs/zh/guide/introduction.html), [Vue-router for Vue3](https://next.router.vuejs.org/)

## 如何开发

### 项目安装依赖
```
npm install
```

### 开发时，编译和热重新加载
```
npm run serve
```

### 编译和压缩用于生产环境
```
npm run build
```

### 代码检查与自动修复
```
npm run lint
```

## 如何提交 Git 库

由于你是从模板代码库 `chenxi-vue-app` 下载的代码，因此当你开发自己的项目时，需要：
- 修改项目名
- 修改项目 git 仓库
- 修改你希望修改的所有文件

### 仓库修改
```
git remote rm origin
git remote add origin [项目的 url]
```

### Vue-CLI 的设置
详情参见 [Configuration Reference](https://cli.vuejs.org/config/).
