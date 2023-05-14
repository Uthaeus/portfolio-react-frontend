import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/root-layout";
import BlogLayout from "./components/blog-layout";
import AuthLayout from "./components/auth-layout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Blogs from "./pages/blogs";
import SignUp from "./components/auth/sign-up";
import SignIn from "./components/auth/sign-in";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
  },
  {
    path: "/blogs",
    element: <BlogLayout />,
    children: [
      {
        index: true,
        element: <Blogs />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/sign-up",
        element: <SignUp />
      },
      {
        path: "/auth/sign-in",
        element: <SignIn />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
