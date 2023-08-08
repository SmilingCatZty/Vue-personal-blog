import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Smilling Cat",
  description: "一只阳崽崽的个人博客",

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page: any) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page: any) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  theme,

  head: [
    // 导入外部脚本
    ['link', { rel: "stylesheet", href: "/assets/css/plugins.scss" }]
    // ['script', { src: "/assets/js/particle-line.js" }], // 粒子线条
    // ['script', { src: "https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js" }],
    // ['script', { src: "/assets/js/sakura.js" }], // 樱花
    // [
    //   "script",
    //   {},
    //   `\
    //   setTimeout(() => {
    //     L2Dwidget.init({ "model": { jsonPath:
    //           "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
    //         "scale": 1 }, "display": { "position": "left", "width": 100, "height": 150,
    //         "hOffset": 0, "vOffset": 0 }, "mobile": { "show": true, "scale": 0.5 },
    //       "react": { "opacityDefault": 0.8, "opacityOnHover": 0.1 } });
    //   }, 2000);
    //   `,
    // ],
    // ['script', { src: "/assets/js/lantern.js" }], // 灯笼js
    // ["link", { rel: "stylesheet", href: "/assets/css/lantern.css" }], // 灯笼css
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
