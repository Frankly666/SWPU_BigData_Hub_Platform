import type { RouteObject } from "react-router";
import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("../views/home"));
const User = lazy(() => import("../views/user"));
const Community = lazy(() => import("../views/community"));
const Technology = lazy(() => import("../views/technology"));
const EditEssay = lazy(() => import("../views/editEssay"));
const ArticlePublished = lazy(() => import("../views/articlePublished"));
const ArticleDetail = lazy(() => import("../views/articleDetail"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/user",
    element: <User />
  },
  {
    path: "/community",
    element: <Community />
  },
  {
    path: "/technology",
    element: <Technology />
  },
  {
    path: "/editEssay",
    element: <EditEssay />
  },
  {
    path: "/published",
    element: <ArticlePublished />
  },
  {
    path: "/articleDetail/:articleId",
    element: <ArticleDetail />
  }
];

export const siderRoutes = ["/community"];
export const headerRoutes = [
  "/home",
  "/community",
  "/technology",
  "/published"
];
