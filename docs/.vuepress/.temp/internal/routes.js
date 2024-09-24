export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"首页","i":"home"} }],
  ["/projects/main.html", { loader: () => import(/* webpackChunkName: "projects_main.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/projects/main.html.js"), meta: {"t":""} }],
  ["/learning/how_to_learn.html", { loader: () => import(/* webpackChunkName: "learning_how_to_learn.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/learning/how_to_learn.html.js"), meta: {"t":"TOE战队培训方案"} }],
  ["/learning/main.html", { loader: () => import(/* webpackChunkName: "learning_main.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/learning/main.html.js"), meta: {"t":"TOE实验室资源站"} }],
  ["/learning/old.html", { loader: () => import(/* webpackChunkName: "learning_old.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/learning/old.html.js"), meta: {"t":"1 机器人通识"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/projects/", { loader: () => import(/* webpackChunkName: "projects_index.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/projects/index.html.js"), meta: {"t":"Projects"} }],
  ["/learning/", { loader: () => import(/* webpackChunkName: "learning_index.html" */"/home/evence/my_project/TOE_page_vue/docs/.vuepress/.temp/pages/learning/index.html.js"), meta: {"t":"Learning"} }],
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
