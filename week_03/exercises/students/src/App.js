import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import StudentDetails from "./pages/StudentDetails";
import Students from "./pages/Students";
import Root from "./layouts/Root";
import { ROUTES } from "./routes/routes";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Root />}>
      <Route path={ROUTES.home.path} element={<Students />} />
      <Route path={ROUTES.studentDetail.path} element={<StudentDetails />} />
    </Route>,
  ])
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
