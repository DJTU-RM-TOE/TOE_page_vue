import comp from "/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/learning/index.html.vue"
const data = JSON.parse("{\"path\":\"/learning/\",\"title\":\"TOE实验室资源站\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"learning/README.md\",\"excerpt\":\"\\n\"}")
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
