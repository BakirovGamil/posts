import Nothing from "../pages/Nothing";
import PostId from "../pages/PostId";
import Posts from "../pages/Posts";

export const publicRoutes = [
    {path: "*", element: <Posts/>},
    {path: "/", element: <Posts/>},
    {path: "posts", element: <Posts/>},
    {path: "posts/:id", element: <PostId/>},
    {path: "nothing", element: <Nothing/>},
];