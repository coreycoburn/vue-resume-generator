import Readme from "./views/Readme.vue";

export default [
  {
    path: "/",
    name: "readme",
    component: Readme
  },
  {
    path: "/templates",
    name: "templates",
    component: () =>
      import(/* webpackChunkName: "template-1" */ "./views/templates/index.vue"),
    children: [
      {
        path: "clean-slate/resume",
        name: "clean-slate-resume",
        component: () =>
          import(/* webpackChunkName: "template-1-resume" */ "./views/templates/clean-slate/resume.vue")
      }
    ]
  }
];
