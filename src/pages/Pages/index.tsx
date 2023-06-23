import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PATH } from '@/constants/path';
import { BankCard } from '@/pages/BankCard';
import { Home } from '@/pages/Home';
import { TimeLine } from '@/pages/TimeLine';

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
