import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/root-layout";
import BlogLayout from "./components/blog-layout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Blogs from "./pages/blogs";

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
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
