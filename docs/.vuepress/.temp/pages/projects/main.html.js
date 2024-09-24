import comp from "/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/projects/main.html.vue"
const data = JSON.parse("{\"path\":\"/projects/main.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"projects/main.md\",\"excerpt\":\"\"}")
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
