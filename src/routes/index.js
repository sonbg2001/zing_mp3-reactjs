import pages from "../pages";
import Layout from "../components/Layout";
import paths from "./configPath";
const publicRoutes = [
  {
    path: paths.home,
    component: pages.Home,
    layout: Layout.DefaultLayout,
  },
  {
    path: paths.zingChart,
    component: pages.ZingChart,
    layout: Layout.DefaultLayout,
  },
  {
    path: paths.radio,
    component: pages.Radio,
    layout: Layout.DefaultLayout,
  },
  {
    path: paths.follow,
    component: pages.Follow,
    layout: Layout.DefaultLayout,
  },
  {
    path: paths.new,
    component: pages.New,
    layout: Layout.DefaultLayout,
  },
  {
    path: paths.category,
    component: pages.Category,
    layout: Layout.DefaultLayout,
  },
  {
    path: paths.top100,
    component: pages.Top100,
    layout: Layout.DefaultLayout,
  },
  {
    path: paths.mv,
    component: pages.MV,
    layout: Layout.DefaultLayout,
  },
];
const privateRoutes = [
  {
    path: paths.home,
    component: pages.Home,
    layout: Layout.DefaultLayout,
  },
  {
    path: paths.zingChart,
    component: pages.Home,
    layout: Layout.DefaultLayout,
  },
];

export { publicRoutes, privateRoutes };
