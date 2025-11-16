import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from 'react';
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import HomePage from "@/pages/HomePage";
import { MainLayout } from "@/shared/ui/MainLayout";
import { PageLoader } from "@/shared/ui/PageLoader";

const BiblePage = lazy(() => import('@/pages/BiblePage'));
export const router = createBrowserRouter([
  {
    element: <MainLayout header={<Navbar />} footer={<Footer />} />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/bible",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BiblePage />
          </Suspense>
        ),
      },
    ],
  },
]);
