import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/", // demo展示数据
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/article/",
    children: [
      {
        text: "Vue",
        icon: "pen-to-square",
        prefix: "vue/",
        children: [
          { text: 'vue2升级改造', icon: "pen-to-square", link: "vue.v2升级v3记录" }
        ],
      },
      {
        text: "React",
        icon: "pen-to-square",
        prefix: "react/",
        children: [
          { text: '自定义Hooks', icon: "pen-to-square", link: "react.自定义hooks" }
        ],
      },
      {
        text: "Uniapp",
        icon: "pen-to-square",
        prefix: "uniapp/",
        children: [
          { text: '小程序问题汇总', icon: "pen-to-square", link: "uniapp.小程序踩坑记录" }
        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
