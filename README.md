# 晏阳技术组 · Yanyang Technology Group

介绍晏阳技术组及其五个开源项目的响应式静态网站。使用 React 函数组件与 Hooks、Vite、Tailwind CSS、DaisyUI、`react-router-dom` 的 `BrowserRouter`、Framer Motion 与 Lucide 图标。

## 本地运行

需要 Node.js 22.12.0 或更高版本及 npm。

```sh
npm ci
npm run dev
```

开发服务器的地址以终端输出为准。生产构建与本地预览：

```sh
npm run build
npm run preview
```

完整依赖及精确版本写在 `package.json`，`package-lock.json` 锁定依赖。构建产物为 `dist/`，无需 Node.js 生产服务、数据库、API Key 或运行时环境变量。

## 页面与交互

| 路由 | 页面 |
| --- | --- |
| `/` | 组织名称、五平台入口、项目分类筛选、五张项目卡片、组织介绍与页脚 |
| `/repos/ycomm-website` | YComm_WebSite 详情 |
| `/repos/ycomm-flutter` | YComm_Flutter 详情 |
| `/repos/yanyang-website` | Yanyang_WebSite 详情 |
| `/repos/mtr-yanyang` | MTR-YanYang 详情，包含已核实的 MC百科项目链接 |
| `/repos/colorfulsign` | ColorfulSign 详情 |
| `/repos/其他值` 或其他路径 | 友好的 404 与返回首页入口 |

- 主色为 `#0062ff`。导航栏提供浅色、深色、跟随系统三个选项，手动偏好保存在 `localStorage`；首次访问默认跟随系统，并在渲染前应用主题以减少闪烁。
- 首页显著位置与全站页脚均提供 GitHub、Gitee、Gitea、Modrinth、MCMod 链接，所有外链以 `target="_blank" rel="noopener noreferrer"` 打开。
- Hero 与页脚均展示指定文案：本项目开源，并使用 GPT-3.0 提供支持。
- 项目卡片桌面端三列（首张跨两列）、中等屏幕两列、移动端单列；平台入口可换行。
- Framer Motion 实现一次性入场、页面转场与筛选布局动画，卡片和链接提供轻微交互反馈；尊重系统减少动态效果偏好。
- 具备语义化页面结构、键盘焦点、跳过导航链接及主题按钮可访问名称。
- 所有项目图案均为本项目绘制的概念示意，不代表仓库的真实界面截图。

## 项目结构

```text
YTG_Website/
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── public/
│   ├── _redirects
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── data/repositories.js
    ├── hooks/useTheme.js
    ├── components/
    │   ├── Artwork.jsx
    │   ├── ExternalLink.jsx
    │   ├── Icons.jsx
    │   ├── Layout.jsx
    │   ├── PlatformLinks.jsx
    │   ├── RepositoryCard.jsx
    │   ├── Reveal.jsx
    │   └── ThemeSwitch.jsx
    └── pages/
        ├── Home.jsx
        ├── NotFound.jsx
        └── RepositoryDetail.jsx
```

项目文案、技术栈、外链、分类和来源核实日期集中在 `src/data/repositories.js`，首页与详情共用。配色与响应式样式在 `src/styles.css`。

## 部署到 Cloudflare Pages

1. 将完整项目提交到 GitHub 或 GitLab 仓库。
2. 在 Cloudflare 控制台进入 **Workers & Pages → Create application → Pages → Connect to Git**，连接仓库并选择生产分支。
3. 框架预设选择 **Vite**（或 **None**），填写以下设置。

| 设置 | 值 |
| --- | --- |
| 构建命令 | `npm run build` |
| 构建输出目录 | `dist` |
| 项目根目录 | 本项目所在目录 |
| Node.js | 22.12.0 或更高版本，可通过 Pages 构建变量 `NODE_VERSION` 指定 |

4. 保存并部署。Cloudflare 会安装依赖、构建并托管 `dist/`；也可自行构建后使用 Pages Direct Upload 上传该目录。
5. 部署后直接打开并刷新 `/repos/mtr-yanyang`，确认 SPA 深层链接能够加载。

`public/_redirects` 的内容为以下单行纯文本：

/* /index.html 200

Vite 会原样复制到 `dist/_redirects`。Cloudflare Pages 用该规则将 SPA 路径回退到 `index.html`，再由 `BrowserRouter` 渲染详情或 404 页面，避免直接访问或刷新深层路由时出现托管平台的 404。纯静态项目无需 Pages Functions。

参考：[Cloudflare Pages 重定向文档](https://developers.cloudflare.com/pages/configuration/redirects/)、[DaisyUI 的 Vite 安装方式](https://daisyui.com/docs/install/vite/)。

## 资料来源

项目介绍依据以下仓库的 README 与仓库描述整理：

- [YComm_WebSite](https://github.com/Yanyang-Technology-Group/YComm_WebSite#readme)
- [YComm_Flutter](https://github.com/Yanyang-Technology-Group/YComm_Flutter#readme)
- [Yanyang_WebSite](https://github.com/Yanyang-Technology-Group/Yanyang_WebSite#readme)
- [MTR-YanYang](https://github.com/Yanyang-Technology-Group/MTR-YanYang#readme)
- [ColorfulSign](https://github.com/Yanyang-Technology-Group/ColorfulSign#readme)

[MC百科作者页](https://www.mcmod.cn/author/42845.html)及其关联的 [MTR 晏阳优化版页面](https://www.mcmod.cn/class/31603.html)用于补充项目背景。MTR 的兼容范围以 GitHub README 为准；未为 ColorfulSign 添加未经确认的 MC百科项目链接。

资料为静态整理，不在访问时请求 GitHub API，不展示可能过期的星标、下载量或性能提升数字。项目功能与版本支持以仓库最新 README 和 Release 为准。

## 许可证

本介绍网站源码采用 [MIT License](LICENSE)。被介绍项目保留各自的许可证；Manrope 字体使用 OFL-1.1，其许可证随字体依赖包提供。指定的 GPT-3.0 文案是页面声明，本网站作为静态 SPA 运行，不会调用 GPT 或其他生成式 API。
