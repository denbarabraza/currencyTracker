import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PATH } from '@/constants/path';
import { BankCard } from '@/pages/BankCard';
import { Home } from '@/pages/Home';
import { RootPage } from '@/pages/Pages/RootPage';
import { TimeLine } from '@/pages/TimeLine';

/* const router = createBrowserRouter([
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
      {
        path: PATH.CONTACTS,
        element: <div>Contacts</div>,
      },
    ],
  },
]); */

// export const Pages = () => {
//   return <RouterProvider router={router} />;
// };

export const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={PATH.HOME} />} />
      <Route path={PATH.HOME} element={<Home />} />
      <Route path={PATH.TIME_LINE} element={<TimeLine />} />
      <Route path={PATH.BANK_CARD} element={<BankCard />} />
      <Route path={PATH.CONTACTS} element={<div>Contacts</div>} />
    </Routes>
  );
};
