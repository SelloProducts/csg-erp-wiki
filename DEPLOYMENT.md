# CSG ERP Wiki：GitHub Pages 部署

## 项目检查结论

- 框架：MkDocs 1.6.1，主题：Material for MkDocs 9.7.7（保留原版本）。
- `docs/` 是 Markdown、图片、CSS 和 JavaScript 源文件；`mkdocs.yml` 是站点配置。
- `python -m mkdocs build --strict` 生成 `site/` 静态网站，入口是 `site/index.html`。
- 原包已经带有 `site/` 构建产物，发布时应重新构建。
- `start.sh` 是 macOS/Linux 本地预览脚本，不是线上服务器或部署命令。
- GitHub Pages 提供公开阅读和浏览器搜索；访客不能直接在线编辑。维护者通过仓库修改 Markdown 后自动发布。

## 此版本的修改

1. 新增 `.github/workflows/deploy.yml`：推送到 `main` 或手动运行后，安装依赖、严格构建、上传 `site/`、部署至 Pages。
2. `mkdocs.yml` 增加 `site_url: !ENV [SITE_URL, 'http://127.0.0.1:8000/']`。Actions 从 Pages 配置自动获取完整 URL，包括仓库子路径或自定义域名，无须填用户名和仓库名。
3. 明确 `docs_dir: docs`、`site_dir: site`、`use_directory_urls: true`。原有正文、主题及截图保持原样。将旧 Notion 导出 Markdown 的长文件名缩短为 `user-module.md`，避免 Windows 长路径导致构建失败；该文件原本不在菜单中。
4. 构建流程写入 `site/.nojekyll`。保留原 `.gitignore`，不提交本地虚拟环境和构建产物。

## 方式一：网页上传（无须在电脑上安装 Python）

1. 在 GitHub 创建一个 **Public** 仓库，例如 `csg-erp-wiki`，默认分支用 `main`。
2. 解压部署包。上传项目文件夹**里面的内容**，仓库根目录要直接看到 `mkdocs.yml`、`requirements.txt`、`docs/`；不要上传 ZIP，也不要多套一层目录。
3. 确保隐藏文件 `.gitignore` 和 `.github/workflows/deploy.yml` 也上传了。如果网页拖拽没有包含 `.github`，用 **Add file → Create new file** 创建 `.github/workflows/deploy.yml`，复制部署包里该文件的完整内容并提交。
4. 打开 **Settings → Pages → Build and deployment → Source → GitHub Actions**。不要选择 `main /docs`：那个目录是源文档，不是构建好的网站。
5. 打开 **Actions → Deploy CSG ERP Wiki → Run workflow → main → Run workflow**。首次上传自动运行如果因 Pages 尚未启用而失败，完成第 4 步后重新运行即可。
6. `build` 和 `deploy` 都成功后，在 **Settings → Pages** 或 workflow 的部署环境查看实际网址。普通项目仓库通常是 `https://你的用户名.github.io/csg-erp-wiki/`。

## 方式二：用 Git 推送

先创建空 Public 仓库，不勾选初始化 README。在解压后的项目根目录打开终端，把下面地址中的 `YOUR_USERNAME` 换成你的 GitHub 用户名：

```powershell
git init
git branch -M main
git add .
git commit -m "Prepare CSG ERP wiki for GitHub Pages"
git remote add origin https://github.com/YOUR_USERNAME/csg-erp-wiki.git
git push -u origin main
```

然后执行方式一的第 4–6 步。工作流使用内置 GitHub 凭证，不用配置个人访问令牌。后续更新 `docs/` 或 `mkdocs.yml` 并推送到 `main` 就会重新发布。

## Windows 本地预览（可选）

安装 Python 3.12 或更新版本后，在项目根目录执行：

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

浏览器访问 `http://127.0.0.1:8000/`。停止预览用 Ctrl+C。

模拟 GitHub Pages 的仓库子路径并构建：

```powershell
$env:SITE_URL = 'https://YOUR_USERNAME.github.io/csg-erp-wiki/'
.\.venv\Scripts\python.exe -m mkdocs build --strict
Remove-Item Env:SITE_URL
```

MkDocs 自动处理页面导航和相对资源链接；不要把图片链接改成以 `/` 开头的路径。此项目不需要 Vite 的 `base`、SPA 的路由回退或后台服务器。

## 发布范围

`docs/` 里的 Markdown 即使没有列在菜单里，也可能构建成可访问页面并进入搜索；图片同样公开可访问。发布前检查截图中的客户、账户和业务信息。此检查没有替你审核截图是否适合公开。

## 已完成验证

- 本地安装原项目指定版本后，使用仓库子路径 `https://example.github.io/csg-erp-wiki/` 严格构建成功。
- 检查生成 HTML 中的本地图片、样式、脚本和页面链接：没有发现缺失文件或跳出仓库路径的链接。此检查不验证外部网站、页面内锚点或浏览器搜索交互。
- 部署 ZIP 包包含隐藏的 `.github/workflows/deploy.yml` 和 `.gitignore`，不包含 `site/` 旧构建产物；GitHub Actions 会重新生成网站。
- 尚未在你的 GitHub 仓库执行线上部署；需按上面的步骤启用 Pages。

## 官方参考

- https://www.mkdocs.org/user-guide/deploying-your-docs/
- https://www.mkdocs.org/user-guide/configuration/#site_url
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
