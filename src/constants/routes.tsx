import React from 'react';
import { Navigate, RouteObject } from 'react-router';

import { PATH } from '@/constants/path';

const Home = React.lazy(() =>
  import('@/pages/Home').then(({ Home }) => ({ default: Home })),
);
const TimeLine = React.lazy(() => import('@/components/TimeLineContainer'));
const BankCard = React.lazy(() => import('@/components/BankCardContainer'));
const Contacts = React.lazy(() =>
  import('@/pages/Contacts').then(({ Contacts }) => ({ default: Contacts })),
);
const PageNotFound = React.lazy(() =>
  import('@/pages/PageNotFound').then(({ PageNotFound }) => ({ default: PageNotFound })),
);

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={PATH.HOME} /> },
  { path: PATH.HOME, element: <Home /> },
  { path: PATH.TIME_LINE, element: <TimeLine /> },
  { path: PATH.BANK_CARD, element: <BankCard /> },
  { path: PATH.CONTACTS, element: <Contacts /> },
  { path: '*', element: <PageNotFound /> },
];
