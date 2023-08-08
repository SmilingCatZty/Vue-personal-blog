import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "文章",
      icon: "book",
      prefix: "article/",
      children: "structure",
    },
    {
      text: "Example",
      icon: "book",
      prefix: "demo/",
      children: "structure",
    },
    "resume",
    "slides",
  ],
});
