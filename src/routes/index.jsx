import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import DashboardCustomLayout from "../layouts/DashboardLayout/DashboardCustomLayout";

import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth } from "../hooks/Auth/useAuth";

import PageNotFound from "../components/shared/PageNotFound/PageNotFound";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ViewResult from "../pages/dashboard/view-result/ViewResult";
import Testimonial from "../pages/dashboard/testimonial/Testimonial";
import EditProfile from "../pages/dashboard/dashboard-home/EditProfile";
import ApplicationForm from "../pages/dashboard/exam-application/_components/ApplicationForm";
import Result from "../pages/dashboard/view-result/_components/Result";
import Testimony from "../pages/dashboard/testimonial/_components/Testimony";
import ExamApplication from "../pages/dashboard/exam-application/ExamApplication";
import TestimonyForm from "../pages/dashboard/testimonial/_components/TestimonyForm";
import ResultForm from "../pages/dashboard/view-result/_components/ResultForm";

const Routes = () => {
  const { token } = useAuth();
  const routesForAuthenticatedOnly = [
    {
      path: "*",
      element: <PageNotFound />,
    },

    {
      path: "/login",
      element: <Navigate to="/dashboard"></Navigate>,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          {/* <DashboardLayout></DashboardLayout> */}
          <DashboardCustomLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "dashboard/edit-profile",
          element: <EditProfile></EditProfile>
        },

        {
          path: "/",
          element: <Navigate to="/dashboard"></Navigate>,
        },
        {
          path: "dashboard/view-result",
          element: <ViewResult />,
        },
        {
          path: "dashboard/apply-result",
          element: <ResultForm></ResultForm>
        },
        {
          path: "dashboard/result",
          element: <Result></Result>
        },

        {
          path: "dashboard/exam-application",
          element: <ExamApplication></ExamApplication>
        },
        {
          path: "dashboard/new-application",
          element: <ApplicationForm></ApplicationForm>
        },
        {
          path: "dashboard/testimonial",
          element: <Testimonial />,
        },
        {
          path: "dashboard/apply-testimonial",
          element: <TestimonyForm></TestimonyForm>
        },
        {
          path: "dashboard/testimony",
          element: <Testimony></Testimony>
        }
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];

  const router = createBrowserRouter([
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
