const { defaultTheme } = require("vuepress");
const { path } = require('@vuepress/utils')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const {localTheme} = require('./theme')
// const {localTheme} = require('./theme')
module.exports = {
  lang: "en-US",
  title: "Cloud Native Patterns",
  description: "This is my first VuePress site",
  base:"/cloud-native-patterns/",
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  theme: localTheme({
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




