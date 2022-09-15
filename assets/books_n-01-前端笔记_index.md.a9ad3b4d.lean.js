import{_ as h,c as x,d as _,w as f,a as n,r as g,o as y,V as B,e as t}from"./app.32bb6aff.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:c,createTextVNode:p,resolveComponent:u,withCtx:l,createVNode:r,openBlock:i,createElementBlock:s}=B;function e(o,d){const a=u("el-button");return i(),s("div",null,[r(a,{type:"primary",onClick:o.add},{default:l(()=>[p(c(o.count),1)]),_:1},8,["onClick"])])}const{ref:k}=B;return{render:e,...{setup(o,{expose:d}){d();const a=k(0);function v(){a.value++}const m={count:a,add:v,ref:k};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}}}()}},N='{"title":"\u524D\u7AEF\u7B14\u8BB0\u6C47\u603B","description":"","frontmatter":{},"headers":[],"relativePath":"books/n-01-\u524D\u7AEF\u7B14\u8BB0/index.md","lastUpdated":1662548658000}',C=n("h1",{id:"\u524D\u7AEF\u7B14\u8BB0\u6C47\u603B",tabindex:"-1"},"\u524D\u7AEF\u7B14\u8BB0\u6C47\u603B",-1),E=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{count}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("ref"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" count "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"function"),t("  "),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  count`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"++"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1);function V(c,p,u,l,r,i){const s=g("render-demo-0"),e=g("demo");return y(),x("div",null,[C,_(e,{sourceCode:`
<template>
  <el-button type="primary" @click="add">{{count}}</el-button>
</template>

<script setup>
import {ref} from 'vue'

const count = ref(0)

function  add() {
  count.value++
}

<\/script>

`},{highlight:f(()=>[E]),default:f(()=>[_(s)]),_:1})])}var A=h(b,[["render",V]]);export{N as __pageData,A as default};
