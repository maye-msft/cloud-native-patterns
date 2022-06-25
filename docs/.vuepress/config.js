const { defaultTheme } = require("vuepress");
// import { localTheme } from './theme'
// const {localTheme} = require('./theme')
module.exports = {
  lang: "en-US",
  title: "Cloud Native Patterns",
  description: "This is my first VuePress site",
  base:"/cloud-native-patterns/",
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: "Submit a pattern",
        link: "/page1",
      },
    ],
    sidebar: [
        // SidebarItem
        {
          text: '',
         
        },

      ],
    })
};
