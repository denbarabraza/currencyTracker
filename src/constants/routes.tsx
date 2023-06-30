import React from 'react';
import { Navigate, RouteObject } from 'react-router';

import { PATH } from '@/constants/path';
import TimeLineContainer from '@/pages/TimeLineContainer';

const Home = React.lazy(() =>
  import('@/pages/Home').then(({ Home }) => ({ default: Home })),
);
/* const TimeLineContainer = React.lazy(() =>
  import('@/pages/TimeLineContainer').then(({ TimeLineContainer }) => ({
    default: TimeLineContainer,
  })),
); */
const BankCard = React.lazy(() =>
  import('@/pages/BankCard').then(({ BankCard }) => ({ default: BankCard })),
);
const Contacts = React.lazy(() =>
  import('@/pages/Contacts').then(({ Contacts }) => ({ default: Contacts })),
);
const PageNotFound = React.lazy(() =>
  import('@/pages/PageNotFound').then(({ PageNotFound }) => ({ default: PageNotFound })),
);

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={PATH.HOME} /> },
  { path: PATH.HOME, element: <Home /> },
  { path: PATH.TIME_LINE, element: <TimeLineContainer /> },
  { path: PATH.BANK_CARD, element: <BankCard /> },
  { path: PATH.CONTACTS, element: <Contacts /> },
  { path: '*', element: <PageNotFound /> },
];
