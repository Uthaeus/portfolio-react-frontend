import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useEffect } from "react";

import { UserContext } from "./components/store/user-context";
import RootLayout from "./components/root-layout";
import BlogLayout from "./components/blog-layout";
import AuthLayout from "./components/auth-layout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Blogs from "./pages/blogs";
import SignUp from "./components/auth/sign-up";
import SignIn from "./components/auth/sign-in";
import NewBlog from "./components/blog/new-blog";
import BlogDetail from "./components/blog/blog-detail";
import EditBlog from "./components/blog/edit-blog";
import AdminOptions from "./components/admin/admin-options";
import Categories from "./components/category/categories";
import CategoryDetail from "./components/category/category-detail";
import EditCategory from "./components/category/edit-category";
import NewCategory from "./components/category/new-category";

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
      },
      {
        path: "/admin",
        element: <AdminOptions />,
      },
      {
        path: "/categories",
        element: <Categories />
      },
      {
        path: "/categories/:id",
        element: <CategoryDetail />
      },
      {
        path: "/categories/:id/edit",
        element: <EditCategory />
      },
      {
        path: "/categories/new",
        element: <NewCategory />
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
      },
      {
        path: "/blogs/new",
        element: <NewBlog />
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />
      },
      {
        path: "/blogs/:id/edit",
        element: <EditBlog />
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
  const userCtx = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem("portfolio_token");

    if (token && token !== undefined && !userCtx.user) {
      fetch("http://localhost:4000/user_current", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then(data => {
          userCtx.login(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
