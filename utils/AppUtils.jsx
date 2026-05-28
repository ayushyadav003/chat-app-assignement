import Chat from "../src/pages/Chat";
import Home from "../src/pages/Home";

export const routes = [
    {route:'/', desc:'Home Page', element: <Home />},
    {route:'/chat', desc:'Chat Page', element: <Chat />},
]