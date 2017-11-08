webpackJsonp([18],{468:function(s,t,v){s.exports=v(543)},543:function(s,t,v){var _=v(11)(null,v(544),null,null,null);s.exports=_.exports},544:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,v=s._self._c||t;return v("section",[v("h2",[s._v("Checkbox 复选框")]),s._v(" "),v("p",[s._v("复选框，可设置其状态、传入特殊 class 以及复选框图标位置。")]),s._v(" "),v("h3",[s._v("示例")]),s._v(" "),v("ul",[v("li",[s._v("基本用法"),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":"",class:"language-html"}},[v("span",{attrs:{class:"hljs-tag"}},[s._v("<"),v("span",{attrs:{class:"hljs-name"}},[s._v("cube-checkbox")]),s._v(" "),v("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),v("span",{attrs:{class:"hljs-string"}},[s._v('"checked"')]),s._v(">")]),s._v("\n  Checkbox\n"),v("span",{attrs:{class:"hljs-tag"}},[s._v("</"),v("span",{attrs:{class:"hljs-name"}},[s._v("cube-checkbox")]),s._v(">")]),s._v("\n")])]),s._v("\n如果选中了，则 "),v("code",{pre:!0},[s._v("checked")]),s._v(" 的值就为 "),v("code",{pre:!0},[s._v("true")]),s._v("。")]),s._v(" "),v("li",[s._v("禁用状态"),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":"",class:"language-html"}},[v("span",{attrs:{class:"hljs-tag"}},[s._v("<"),v("span",{attrs:{class:"hljs-name"}},[s._v("cube-checkbox")]),s._v(" "),v("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),v("span",{attrs:{class:"hljs-string"}},[s._v('"checked"')]),s._v(" "),v("span",{attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),v("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),s._v("\n  Disabled Checkbox\n"),v("span",{attrs:{class:"hljs-tag"}},[s._v("</"),v("span",{attrs:{class:"hljs-name"}},[s._v("cube-checkbox")]),s._v(">")]),s._v("\n")])]),s._v("\n设置 "),v("code",{pre:!0},[s._v("disabled")]),s._v(" 为 "),v("code",{pre:!0},[s._v("true")]),s._v(" 即为禁用状态")]),s._v(" "),v("li",[s._v("复选框图标位置"),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":"",class:"language-html"}},[v("span",{attrs:{class:"hljs-tag"}},[s._v("<"),v("span",{attrs:{class:"hljs-name"}},[s._v("cube-checkbox")]),s._v(" "),v("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),v("span",{attrs:{class:"hljs-string"}},[s._v('"checked"')]),s._v(" "),v("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v("="),v("span",{attrs:{class:"hljs-string"}},[s._v('"right"')]),s._v(">")]),s._v("\n  Position Checkbox\n"),v("span",{attrs:{class:"hljs-tag"}},[s._v("</"),v("span",{attrs:{class:"hljs-name"}},[s._v("cube-checkbox")]),s._v(">")]),s._v("\n")])]),s._v("\n设置 "),v("code",{pre:!0},[s._v("position")]),s._v(" 为 "),v("code",{pre:!0},[s._v("'right'")]),s._v(" 则复选框图标位置在右边")]),s._v(" "),v("li",[s._v("改变 model 的值"),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":"",class:"language-html"}},[v("span",{attrs:{class:"hljs-tag"}},[s._v("<"),v("span",{attrs:{class:"hljs-name"}},[s._v("cube-checkbox")]),s._v(" "),v("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),v("span",{attrs:{class:"hljs-string"}},[s._v('"checked"')]),s._v(" "),v("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),v("span",{attrs:{class:"hljs-string"}},[s._v('"labelValue"')]),s._v(">")]),s._v("\n  Set label Checkbox\n"),v("span",{attrs:{class:"hljs-tag"}},[s._v("</"),v("span",{attrs:{class:"hljs-name"}},[s._v("cube-checkbox")]),s._v(">")]),s._v("\n")])]),s._v("\n设置 "),v("code",{pre:!0},[s._v("label")]),s._v("，当复选框选中的时候，"),v("code",{pre:!0},[s._v("checked")]),s._v(" 的值就是 "),v("code",{pre:!0},[s._v("'labelValue'")]),s._v("，当未选中的时候，"),v("code",{pre:!0},[s._v("checked")]),s._v(" 的值就是 "),v("code",{pre:!0},[s._v("false")]),s._v("；所以其实在单个复选框的场景下，最好不要设置 "),v("code",{pre:!0},[s._v("label")]),s._v("。")])]),s._v(" "),v("h3",[s._v("Props 配置")]),s._v(" "),v("table",[v("thead",[v("tr",[v("th",[s._v("参数")]),s._v(" "),v("th",[s._v("说明")]),s._v(" "),v("th",[s._v("类型")]),s._v(" "),v("th",[s._v("可选值")]),s._v(" "),v("th",[s._v("默认值")])])]),s._v(" "),v("tbody",[v("tr",[v("td",[s._v("disabled")]),s._v(" "),v("td",[s._v("是否被禁用")]),s._v(" "),v("td",[s._v("Boolean")]),s._v(" "),v("td",[s._v("true/false")]),s._v(" "),v("td",[s._v("false")])]),s._v(" "),v("tr",[v("td",[s._v("position")]),s._v(" "),v("td",[s._v("位置")]),s._v(" "),v("td",[s._v("String")]),s._v(" "),v("td",[s._v("left/right")]),s._v(" "),v("td",[s._v("left")])]),s._v(" "),v("tr",[v("td",[s._v("label")]),s._v(" "),v("td",[s._v("如果选中的话，则是把该值映射到 v-model 上")]),s._v(" "),v("td",[s._v("Boolean/String")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("''")])])])]),s._v(" "),v("h3",[s._v("事件")]),s._v(" "),v("table",[v("thead",[v("tr",[v("th",[s._v("事件名")]),s._v(" "),v("th",[s._v("说明")]),s._v(" "),v("th",[s._v("参数")])])]),s._v(" "),v("tbody",[v("tr",[v("td",[s._v("input")]),s._v(" "),v("td",[s._v("选中状态发生改变时触发")]),s._v(" "),v("td",[s._v("设置的 label 的值或者是否选中的布尔值")])])])])])}]}}});