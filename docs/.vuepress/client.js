import { defineClientConfig } from '@vuepress/client'
import MyComponent from './components/MyComponent.vue'


export default defineClientConfig({
  enhance({ app }) {
    app.component('MyComponent', MyComponent)
  },
})