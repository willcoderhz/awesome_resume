## ttlili-resumer-web 项目简介

## 技术体系

- 核心：TypeScript(5x) + React18(18x) + ReactRouter(6x)
- CSS：tailwind(3x)
- HTTP 请求：Axios
- 国际化：i18next、react-i18next
- [](https://)构建系统：Vite(4x)

## [](https://)三方插件

- XXXX

## 目录规划

```js
|- dist // 构建成果
|- public
|- src
  |- api // api接口管理
  |- assets  // 静态资源
  |- components // 全局组件
     |- lang // 国际化资源
     |- build // 编辑面板布局
        |- LeftSidebar  // 编辑面板主体部分
        |- Center       // 编辑面板主体部分
        |- RightSidebar // 编辑面板主体部分
     |- home // 首页布局组件
     |- ...  // 其它组件
  |- config // 全局配置
  |- constants // 全局常量
  |- templates // 简历模版
  |- router  // 路由
  |- store   // 状态
  |- utils   // 工具函数
  |- views   // 页面
  |- App.tsx  // 根组件
  |- main.tsx
|-type // ts类型
```

## 使用说明

```bash
# 安装依赖
yarn 

# 运行开发环境
yarn dev


```

## 项目规范

- 代码规范：eslint + pritter
- 提交规范：githooks（husky）
- api 接口约定（按照 views 页面分组进行接口抽离）
- git 分支策略

## 项目实现的功能概览

- 主题切换
- 国际化

## 功能及 UI 参考

- XXXX

## 性能优化
