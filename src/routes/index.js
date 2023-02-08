import pages from "../pages";
import Layout from "../components/Layout";
import path from "./configPath";
const publicRoutes = [
    {
        path: path.home,
        component: pages.Home,
        layout: Layout.DefaultLayout
    },
    {
        path: path.zingChart,
        component: pages.Home,
        layout: Layout.DefaultLayout
    },
]
const privateRoutes = [
    {
        path: path.home,
        component: pages.Home,
        layout: Layout.DefaultLayout
    },
    {
        path: path.zingChart,
        component: pages.Home,
        layout: Layout.DefaultLayout
    },
]

export { publicRoutes, privateRoutes };