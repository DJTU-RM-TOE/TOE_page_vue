import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "/home/evence/my_project/TOE_page_vue/node_modules/.store/vuepress-theme-hope@2.0.0-rc.56/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "/home/evence/my_project/TOE_page_vue/node_modules/.store/@vuepress+plugin-catalog@2.0.0-rc.47/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"

import "/home/evence/my_project/TOE_page_vue/node_modules/.store/@vuepress+helper@2.0.0-rc.47/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/home/evence/my_project/TOE_page_vue/node_modules/.store/@vuepress+helper@2.0.0-rc.47/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/home/evence/my_project/TOE_page_vue/node_modules/.store/vuepress-theme-hope@2.0.0-rc.56/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
