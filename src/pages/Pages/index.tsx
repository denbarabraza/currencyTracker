import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { PATH } from '@/constants/path';
import { BankCard } from '@/pages/BankCard';
import { Home } from '@/pages/Home';
import { RootPage } from '@/pages/Pages/RootPage';
import { TimeLine } from '@/pages/TimeLine';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <Navigate to={PATH.HOME} />,
      },
      {
        path: PATH.HOME,
        element: <Home />,
      },
      {
        path: PATH.TIME_LINE,
        element: <TimeLine />,
      },
      {
        path: PATH.BANK_CARD,
        element: <BankCard />,
      },
    ],
  },
]);

export const Pages = () => {
  return <RouterProvider router={router} />;
};
