import comp from "/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/projects/\",\"title\":\"Projects\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Projects\",\"article\":false,\"feed\":false,\"sitemap\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
