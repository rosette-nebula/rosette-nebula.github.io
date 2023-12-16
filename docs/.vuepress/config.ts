import { defineConfig } from "vuepress/config";
import {} from "./scripts/themeNavAndSidebar";

export default defineConfig({
  title: "traveler小达",
  description: "记录人生旅行的点滴",

  head: [["link", { rel: "icon", href: "/images/favicon.jpg" }]],

  port: 9001,

  themeConfig: {
    // 头像
    logo: "/images/favicon.jpg",

    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "工具",
        items: [{ text: "wordpress", link: "/工具/wordpress/" }],
      },
    ],

    sidebar: {
      "/工具/wordpress/": [
        {
          title: "wordpress",
          path: "/工具/wordpress",
          children: ["wordpress6.2.2版本修改固定链接"],
        },
      ],
    },
    search: true, // 是否启用搜索
    searchMaxSuggestions: 5, // 一次最多展示几条搜索结果
    smoothScroll: true, // 页面滚动效果
    lastUpdated: "更新时间", // 显示最后更新时间
  },
});
