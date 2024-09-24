export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"首页","i":"home"} }],
  ["/projects/OpenSource.html", { loader: () => import(/* webpackChunkName: "projects_OpenSource.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/projects/OpenSource.html.js"), meta: {"t":"实验室开源汇总"} }],
  ["/projects/", { loader: () => import(/* webpackChunkName: "projects_index.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/projects/index.html.js"), meta: {"t":"项目"} }],
  ["/learning/How_to_ask_questions.html", { loader: () => import(/* webpackChunkName: "learning_How_to_ask_questions.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/learning/How_to_ask_questions.html.js"), meta: {"t":"提问的艺术"} }],
  ["/learning/", { loader: () => import(/* webpackChunkName: "learning_index.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/learning/index.html.js"), meta: {"t":"TOE实验室资源站"} }],
  ["/learning/Summary_of_Excellent_Bloggers_and_Tutorials.html", { loader: () => import(/* webpackChunkName: "learning_Summary_of_Excellent_Bloggers_and_Tutorials.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/learning/Summary_of_Excellent_Bloggers_and_Tutorials.html.js"), meta: {"t":"优秀博主&课程汇总"} }],
  ["/learning/course_outline.html", { loader: () => import(/* webpackChunkName: "learning_course_outline.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/learning/course_outline.html.js"), meta: {"t":"课程大纲"} }],
  ["/learning/how_to_learn_by_youself.html", { loader: () => import(/* webpackChunkName: "learning_how_to_learn_by_youself.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/learning/how_to_learn_by_youself.html.js"), meta: {"t":"TOE战队培训方案"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
