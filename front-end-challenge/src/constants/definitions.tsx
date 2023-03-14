import Dashboard from "pages/Dashboard";
import NewsDetail from "pages/NewsDetail";
import SearchResultPage from "pages/SearchResultPage";

export const ROUTES = [
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard,
  },
  {
    name: "NewsDetail",
    path: "/news-detail",
    component: NewsDetail,
  },
  {
    name: "SearchResultPage",
    path: "/search-news",
    component: SearchResultPage,
  },
];
