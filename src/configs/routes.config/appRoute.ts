import React from "react";
import { ADMIN, USER } from "../../constants/roles.constants";
import { APP_PREFIX_PATH } from "../../constants/route.constants";

const appsRoute = [
  {
    key: "appsPage.landing",
    path: `${APP_PREFIX_PATH}/`,
    Component: React.lazy(() => import("../../view/landing/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsPage.services",
    path: `${APP_PREFIX_PATH}/`,
    Component: React.lazy(() => import("../../view/services")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsPage.works",
    path: `${APP_PREFIX_PATH}/`,
    Component: React.lazy(() => import("../../view/works")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsPage.shop",
    path: `${APP_PREFIX_PATH}/`,
    Component: React.lazy(() => import("../../view/shop")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsPage.partner",
    path: `${APP_PREFIX_PATH}/`,
    Component: React.lazy(() => import("../../view/partners")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsPage.about",
    path: `${APP_PREFIX_PATH}/`,
    Component: React.lazy(() => import("../../view/aboutUs")),
    authority: [ADMIN, USER],
  },

  {
    key: "appsPage.career",
    path: `${APP_PREFIX_PATH}/`,
    Component: React.lazy(() => import("../../view/careers")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsPage.contact",
    path: `${APP_PREFIX_PATH}/`,
    Component: React.lazy(() => import("../../view/contacts")),
    authority: [ADMIN, USER],
  },

  //
];

export default appsRoute;
