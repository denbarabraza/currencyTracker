import React, { FC } from 'react';

import { IErrorInfo } from '@/components/ErrorInfo/interface';
import { ErrorInfoItem } from '@/components/ErrorInfo/styled';

export const ErrorInfo: FC<IErrorInfo> = ({ error }) => {
  return <ErrorInfoItem>Ops, something went wrong...{error}</ErrorInfoItem>;
};
