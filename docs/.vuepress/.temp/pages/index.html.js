import comp from "/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"icon\":\"home\",\"heroImage\":\"/images/toe_logo.svg\",\"heroText\":\"大连交通大学TOE创新实验室\",\"tagline\":\"网站主页✨\",\"heroFullScreen\":true,\"actions\":[{\"text\":\"项目\",\"link\":\"./get-started/\",\"icon\":\"signs-post\"},{\"text\":\"资料站\",\"icon\":\"lightbulb\",\"link\":\"./guide/\"},{\"text\":\"联系我们\",\"icon\":\"star\",\"link\":\"./demo/\"}],\"highlights\":[{\"header\":\"项目列表\",\"image\":\"/assets/image/markdown.svg\",\"bgImageStyle\":{\"background-repeat\":\"repeat\",\"background-size\":\"initial\"},\"features\":[{\"title\":\"Markdown 增强\",\"icon\":\"fab fa-markdown\",\"details\":\"新增文字对齐、上下角标、脚注、标记、任务列表、数学公式、流程图、图表与幻灯片支持\",\"link\":\"/zh/guide/markdown/\"},{\"title\":\"幻灯片页面\",\"icon\":\"person-chalkboard\",\"details\":\"添加幻灯片页面以显示你喜欢的内容\",\"link\":\"/zh/guide/layout/slides\"},{\"title\":\"布局增强\",\"icon\":\"object-group\",\"details\":\"添加路径导航、页脚、改进的导航栏、改进的页面导航等。\",\"link\":\"/zh/guide/layout/\"}]}],\"copyright\":false,\"footer\":\"MIT Licensed | Copyright © 2019-present Mr.Hope\"},\"headers\":[],\"readingTime\":{\"minutes\":0.62,\"words\":186},\"filePathRelative\":\"README.md\"}")
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
