import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from 'react';
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { MainLayout } from "@/shared/ui/MainLayout";
import { PageLoader } from "@/shared/ui/PageLoader";

const HomePage = lazy(() => import('@/pages/HomePage'));
const BiblePage = lazy(() => import('@/pages/BiblePage'));
const PlansPage = lazy(() => import('@/pages/PlansPage'));
const VideoPage = lazy(() => import('@/pages/VideoPage'));
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
      {
        path: "/plans",
        element: (
          <Suspense fallback={<PageLoader />}>
            <PlansPage />
          </Suspense>
        ),
      },
      {
        path: "/video",
        element: (
          <Suspense fallback={<PageLoader />}>
            <VideoPage />
          </Suspense>
        ),
      },
    ],
  },
]);
