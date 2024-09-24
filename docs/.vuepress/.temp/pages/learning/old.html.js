import comp from "/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/learning/old.html.vue"
const data = JSON.parse("{\"path\":\"/learning/old.html\",\"title\":\"1 机器人通识\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":7.28,\"words\":2183},\"filePathRelative\":\"learning/old.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
