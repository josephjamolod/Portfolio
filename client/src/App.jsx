import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));
  return <RouterProvider />;
}
