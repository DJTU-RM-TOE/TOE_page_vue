import { hasGlobalComponent } from "/home/evence/my_project/TOE_page_vue/node_modules/.store/@vuepress+helper@2.0.0-rc.47/node_modules/@vuepress/helper/lib/client/index.js";

import { useStyleTag } from "/home/evence/my_project/TOE_page_vue/node_modules/.store/@vueuse+core@11.1.0/node_modules/@vueuse/core/index.mjs";
import Badge from "/home/evence/my_project/TOE_page_vue/node_modules/.store/vuepress-plugin-components@2.0.0-rc.54/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/home/evence/my_project/TOE_page_vue/node_modules/.store/vuepress-plugin-components@2.0.0-rc.54/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "/home/evence/my_project/TOE_page_vue/node_modules/.store/vuepress-plugin-components@2.0.0-rc.54/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_4693668_2lpv5x1ucb3.css");
`);
  },
  rootComponents: [

  ],
};
