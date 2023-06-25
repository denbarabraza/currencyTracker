import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from '@/components/Loader';
import { routes } from '@/constants/routes';

export const Pages = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </React.Suspense>
  );
};
