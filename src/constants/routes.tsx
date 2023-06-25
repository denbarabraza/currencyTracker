import React from 'react';
import { Navigate, RouteObject } from 'react-router';

import { PATH } from '@/constants/path';

const Home = React.lazy(() =>
  import('@/pages/Home').then(({ Home }) => ({ default: Home })),
);
const TimeLine = React.lazy(() =>
  import('@/pages/TimeLine').then(({ TimeLine }) => ({ default: TimeLine })),
);
const BankCard = React.lazy(() =>
  import('@/pages/BankCard').then(({ BankCard }) => ({ default: BankCard })),
);

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={PATH.HOME} /> },
  { path: PATH.HOME, element: <Home /> },
  { path: PATH.TIME_LINE, element: <TimeLine /> },
  { path: PATH.BANK_CARD, element: <BankCard /> },
];
