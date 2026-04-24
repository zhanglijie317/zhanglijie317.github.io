# 学术个人网站维护说明

这个网站是一个静态网页，不依赖复杂框架。你只需要修改少量文件，就可以持续更新内容。

## 文件说明

- `index.html`：页面结构，一般不用频繁改。
- `styles.css`：页面样式，比如颜色、字体、卡片布局。
- `content.js`：最重要的内容文件。你的教育背景、论文、项目、奖项、技能都在这里。
- `script.js`：把 `content.js` 里的内容自动渲染到页面上，一般不用改。

## 以后最常见的修改

### 1. 添加论文

打开 `content.js`，找到 `publications` 数组，照着下面格式新增一项：

```js
{
  title: "Your New Paper Title",
  subtitle: "with Coauthor A and Coauthor B",
  date: "Working Paper",
  venue: "Journal Name or Status",
  description: "One or two sentences describing the paper.",
  tags: ["Keyword 1", "Keyword 2", "Keyword 3"]
}
```

### 2. 添加科研经历

找到 `experience` 数组，新增：

```js
{
  title: "Project Role and Project Name",
  institution: "Program or Institution",
  date: "Start - End",
  description: "What you did and why it matters.",
  tags: ["Method", "Topic", "Contribution"]
}
```

### 3. 添加奖项

找到 `honors` 数组，新增：

```js
{
  title: "Award Name",
  date: "2026",
  description: "Optional short note."
}
```

### 4. 修改个人简介

找到 `profile` 里的这些字段：

- `tagline`：主页顶部的一句话简介
- `bio`：稍长一点的个人介绍
- `interests`：研究兴趣
- `contacts`：邮箱、电话、地点
- `currentProposal`：当前重点研究主题

## 如果你想上传简历

你可以把 PDF 简历放进当前文件夹，然后在 `index.html` 里加一个链接按钮，或者告诉我，我可以继续帮你补上。

## 如何查看网站

直接双击打开 `index.html` 就可以预览。

如果你之后想部署到 GitHub Pages、Netlify 或自己的域名，我也可以继续帮你做上线版本。
