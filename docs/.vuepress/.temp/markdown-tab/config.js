import CodeTabs from "/home/evence/my_project/TOE_page_vue/node_modules/.store/@vuepress+plugin-markdown-tab@2.0.0-rc.47/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import Tabs from "/home/evence/my_project/TOE_page_vue/node_modules/.store/@vuepress+plugin-markdown-tab@2.0.0-rc.47/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/evence/my_project/TOE_page_vue/node_modules/.store/@vuepress+plugin-markdown-tab@2.0.0-rc.47/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
