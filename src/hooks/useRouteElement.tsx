import { useRoutes } from "react-router-dom";
// import { lazy } from "react";

import routePaths from "constants/routePaths";
import Login from "pages/Login";
import AuthLayout from "layouts/AuthLayout";

const useRouteElement = () => {
  const elements = useRoutes([
    {
      path: routePaths.login,
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
  ]);

  return elements;
};

export default useRouteElement;
