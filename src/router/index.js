//route 访问路径，路由
//router 路由管理者
import { createRouter, createWebHashHistory } from 'vue-router';// 创建路由实例并传递 `routes` 配置const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//创建路由 route

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/user/Login.vue";
import Register from "@/views/user/Register.vue";
import Mine from "@/views/user/Mine.vue";
import { useUserStore } from '@/stores/user';

const routes = [
    { path: '/', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/user/login', name: 'login', component: Login },
    { path: '/user/register', name: 'register', component: Register },
    { path: '/user/mine', name: 'mine', component: Mine }
]
//创建路由管理 router
const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {

    const userStore = useUserStore();
    const token = userStore.user.token;

    if (to.name !== 'login' && token == '') { next({ name: 'login' }) }
    else next()

});

//导出路由
export default router