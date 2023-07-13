import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from '@/components/Loader';
import { routes } from '@/constants/routes';

export const Pages = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </React.Suspense>
  );
};
