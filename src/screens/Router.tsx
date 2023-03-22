import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./About";
import Home from "./Home";

const router = createBrowserRouter([
  {
    //사용자가 url로 이동하면, location이 이 url과 일치하면 렌더
    path: "/",
    element: <App />,
    children: [{path:"/", element:<Home/>},{ path: "about", element: <About /> }],
  },
]);

export default router;