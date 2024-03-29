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

  //   {
  //     key: "appsProject.projectList",
  //     path: `${APP_PREFIX_PATH}/project/project-list`,
  //     component: React.lazy(() => import("views/project/ProjectList")),
  //     authority: [ADMIN, USER],
  //   },
  //   {
  //     key: "appsProject.scrumBoard",
  //     path: `${APP_PREFIX_PATH}/project/scrum-board`,
  //     component: React.lazy(() => import("views/project/ScrumBoard")),
  //     authority: [ADMIN, USER],
  //     meta: {
  //       pageContainerType: "gutterless",
  //     },
  //   },
];

export default appsRoute;
