import React from 'react';

import mainImage from '@/assets/image/mainImage.svg';
import { useAppSelector } from '@/hooks/useStoreControl';
import { Pages } from '@/routes';
import { getDateSelector } from '@/store/selectors/homeSelectors';
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
    <Container data-cy='main'>
      <Wrapper>
        <MainIMG alt='mainImage' src={mainImage} title='mainImage' />
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
