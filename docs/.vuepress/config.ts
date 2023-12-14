import { defineUserConfig, defaultTheme } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { gitPlugin } from "@vuepress/plugin-git";

export default defineUserConfig({
  lang: "zh-CN",
  title: "traveler小达",
  description: "记录人生旅行的点滴",
  permalinkPattern: ":raw",
  head: [["link", { rel: "icon", href: "/images/favicon.jpg" }]],

  // 插件
  plugins: [backToTopPlugin(), nprogressPlugin(), gitPlugin()],

  port: 9001, // 端口
  open: false, // 启动项目打开浏览器

  // 主题
  theme: defaultTheme({
    logo: "/images/favicon.jpg",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "前端",
        link: "/前端",
      },
      {
        text: "工具",
        link: "/工具",
        children: [
          {
            text: "wordpress",
            link: "/工具/wordpress",
          },
        ],
      },
    ],
    // 某个页面的侧边栏
    sidebar: [
      {
        text: "wordpress",
        link: "/工具/wordpress/",
        children: [
          // 字符串 - 页面文件路径
          "wordpress6.2.2版本修改固定链接.md",
        ],
      },
    ],
  }),
});
