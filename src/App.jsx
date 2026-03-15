import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Navbar from "./components/nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Cases from "./pages/Cases";
import SassPlatformPage from "./pages/saas-platform";
import RegionalBankPage from "./pages/regional-bank";
import ManufacturingBusinessPage from "./pages/manufacturing-business";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-base-100 text-base-content antialiased">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/case-studies", element: <Cases /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/case-studies/saas-platform",
        element: <SassPlatformPage />,
      },
      {
        path: "/case-studies/regional-bank",
        element: <RegionalBankPage />,
      },
      {
        path: "/case-studies/manufacturing-business",
        element: <ManufacturingBusinessPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
