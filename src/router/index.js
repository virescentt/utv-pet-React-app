import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/posts', component: Posts},
    {path: '/about', component: About},
    {path: '/posts/:id', component: PostIdPage},
]

export const publicRoutes = [
    {path: '/login', component: Login},
    {path: '/error', component: Error},
]
