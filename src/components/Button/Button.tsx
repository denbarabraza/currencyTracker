import React, { FC, memo } from 'react';

import { IButton } from './interface';
import { ButtonItem } from './styled';

export const Button: FC<IButton> = memo(({ title, callBack }) => {
  return (
    <ButtonItem onClick={callBack} type='button'>
      {title}
    </ButtonItem>
  );
});
