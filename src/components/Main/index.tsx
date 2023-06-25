import React from 'react';

import mainImage from '@/assets/image/mainImage.svg';
import { useAppSelector } from '@/hooks/useStoreControl';
import { Pages } from '@/pages/Pages';
import { getDateSelector } from '@/store/selectors/currencySelectors';
import { formatDate } from '@/utils/formatDate';

import {
  Circle,
  Container,
  DateBlock,
  MainIMG,
  UpdateInformation,
  Wrapper,
} from './styled';

export const Main = () => {
  const date = useAppSelector(getDateSelector);

  const updateDate = formatDate(date?.meta.last_updated_at);

  return (
    <Container>
      <Wrapper>
        <MainIMG alt='mainImage' src={mainImage} />
        {date && (
          <DateBlock>
            <Circle />
            <UpdateInformation>Last updated at {updateDate}</UpdateInformation>
          </DateBlock>
        )}
        <Pages />
      </Wrapper>
    </Container>
  );
};
