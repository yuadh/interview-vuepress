# 【青训营day01】- HTML与CSS

什么是前端

- 使用web技术栈解决多端GUI人机交互的问题

HTML (内容)、CSS （样式）、JavaScript （行为）、通过 **网络协议** ，与服务器端进行交互

需要关注的问题

- 美观
- 功能
- 无障碍
- 安全
- 性能
- 兼容
- 体验
- ......

前端的边界不止于网页

node、electron、React Native、Web RTC 、WebGL、WebASSEMBLY



## HTML

**H**yper**T**ext **M**arkup **L**anguage

标签可以设置属性：`<img src="photo.jpg"/>`

一个例子

```html
<!doctype html> 
<html>
  <head>
    <mate charset="UTF-8"></mate>
    <title>页面标签</title>
  </head>
  <body>
    <h1>一级标题</h1>
    <p> 段落内容</p>
  </body>
</html>
```

- `<!doctype html>` html的版本
- `<mate>` 元信息

**注意：**

- 标签和属性不区分大小写，推荐小写
- 空标签可以不闭合，比如 `input`、`mate`
- 属性值推荐使用双引号包裹
- 某些属性值可以省略，比如 `required、readonly`

### 标题 h1-h6

不同标题标签对应不同的等级

### 链接标签 a

`<a href="xxURL">官网</>`

### 输入 input

- `<input />` - 普通输入框

- `<input type = "range"/>` - 滑轮选择

- `<input type = "number"/>` - 数字输入框

- `<input type = "data"/>` - 时间选择框
- `<textarea/>` - 长文本输入框

- `<input type = "checkbox"/>` - 复选框

- `<input type = "radio"/>`  - 单选框

- `<select>` - 下拉框

- `<datalist>` - 数据列表元素

### 图片 img

`<img src="xxURL" alt/>`

### 音频 audio

### 视频 video

### 列表标签

- `<ol></ol>` - 有序列表
- `<ul></ul>` - 无序列表
- `<li></li>` - 列表项

```html
<dl>
  <dt>导演</dt>
  <dd>陈凯歌</dd>
  <dt>主演</dt>
  <dd>xxx</dd>
</dl>
```

### 引用

- `<blockquote>` - 整段引用

- `<p>`  - 段落
- `<pre>` - 预定义格式文本，该元素中的文本通常按照原文件中的编排
- `<cite>` - 句子中引用
- `<q>` - 引用短的文本
- `code` - 代码引用
- `<strong>` - 强调
- `<em>` - 句子中的强调

### 语义化

开发者应该遵循语义来编写 **HTML**

- 了解每个标签和属性的含义
- 思考什么标签最适合描述这个内容
- 不适用可视化工具生成代码

HTML传达的是内容结构框架，而不是样式。

代码的可读性、可维护性、搜索引擎优化、提升无障碍性就是有语义化的HTML作用好处

![1673750307233.png](http://img.yuadh.com/imgs/2023/01/15/1673750307233.png)

html5 语义化页面标准结构

教学往往都是引路人，[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML)

## CSS













