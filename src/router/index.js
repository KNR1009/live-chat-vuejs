import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome";
import Chatroom from "../views/ChatRoom";
import useValidate from "../auth/validate";

// ナビゲーションガードの準備
// eslint-disable-next-line no-unused-vars
const requireAuth = async (to, from, next) => {
  // ローカルストレージのセッションが有効かをチェック
  const uid = window.localStorage.getItem("uid");
  const client = window.localStorage.getItem("client");
  const accessToken = window.localStorage.getItem("access-token");
  if (!uid || !client || !accessToken) {
    console.log("ログインしていません");
    next({ name: "Welcome" });
  }
  await useValidate();
  next();
};

// ログイン中はwelcomeページにアクセスできないようにする
const noRequireAuth = async (to, from, next) => {
  const uid = window.localStorage.getItem("uid");
  const client = window.localStorage.getItem("client");
  const accessToken = window.localStorage.getItem("access-token");

  if (!uid && !client && !accessToken) {
    next();
    return;
  }

  await useValidate();
  next({ name: "Chatroom" });
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: noRequireAuth,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
