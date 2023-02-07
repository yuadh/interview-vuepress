(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{369:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"router"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[s._v("#")]),s._v(" Router")]),s._v(" "),t("p",[t("code",[s._v("yarn add react-router-dom@5")])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("BrowserRouter "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" Router"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Route"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Link"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-router-dom'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"编程式导航"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编程式导航"}},[s._v("#")]),s._v(" 编程式导航")]),s._v(" "),t("p",[t("strong",[s._v("目标")]),s._v("：能够按钮的点击事件中跳转路由")]),s._v(" "),t("p",[t("strong",[s._v("内容")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("场景：点击登录按钮，登录成功后，通过代码跳转到后台首页，如何实现？")]),s._v(" "),t("li",[s._v("编程式导航：通过 JS 代码来实现页面跳转")]),s._v(" "),t("li",[s._v("可以通过 "),t("code",[s._v("useHistory")]),s._v(" hook 来拿到路由提供的 history 对象，用于获取浏览器历史记录的相关信息。常用操作：\n"),t("ul",[t("li",[t("code",[s._v("push(path)")]),s._v("：跳转到某个页面，参数 path 表示要跳转的路径")]),s._v(" "),t("li",[t("code",[s._v("replace(patch)")]),s._v("：跳转到某个页面，会替换当前的历史记录")]),s._v(" "),t("li",[t("code",[s._v("go(n)")]),s._v("： 前进或后退到某个页面，参数 n 表示前进或后退页面数量（比如：-1 表示后退到上一页）")])])])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" useHistory "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-router-dom'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("Login")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" history "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useHistory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  \n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onLogin")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    history"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  \t"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("onClick")]),t("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("onLogin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("登录")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("button")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("code",[s._v("push(path)")]),s._v("和 "),t("code",[s._v("replace(path)")]),s._v(" 跳转路由的区别：")]),s._v(" "),t("p",[s._v("浏览器会自动记录访问过来的页面路径，可以简单的把理解为通过一个 数组 来记录的。")]),s._v(" "),t("p",[s._v("比如：我们访问了 3 个页面：['/login', '/home', '/search']，当前所在页面为：'/search'")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("此时，如果我们又通过 "),t("code",[s._v("push('/a')")]),s._v(" 方法访问了一个新页面：'/a'，此时，就相当于往数组中 push 了一条数据，")]),s._v(" "),t("ul",[t("li",[s._v("那么，访问该页面后，浏览器中的记录为：['/login', '/home', '/search', '/a']")])])]),s._v(" "),t("li",[t("p",[s._v("此时，如果我们又通过 "),t("code",[s._v("replace('/a')")]),s._v(" 方法访问了一个新页面：'/a'，此时，就相当于把当前页面地址，替换为 '/a'")]),s._v(" "),t("ul",[t("li",[s._v("那么，访问该页面后，浏览器中的记录为：['/login', '/home', '/a']")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);