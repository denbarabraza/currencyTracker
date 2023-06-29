import React, { FC, memo } from 'react';
import { IHintsBlock } from 'src/components/HintsBlock/interface';
import {
  HintItem,
  HintsBlockContainer,
  InfoItem,
} from 'src/components/HintsBlock/styled';

import { currencyQuotes } from '@/constants/currency';
import { getCurrencBySearch } from '@/utils/getCurrencBySearch';

export const HintsBlock: FC<IHintsBlock> = memo(({ searchValue, onClickSelectHint }) => {
  const hintsData = getCurrencBySearch(searchValue, currencyQuotes);

  return (
    <HintsBlockContainer data-cy='hintsBlock'>
      {hintsData.length > 0 ? (
        hintsData?.map(hint => (
          <HintItem key={hint.symbol} onClick={() => onClickSelectHint(hint.code)}>
            {hint.name} ({hint.code})
          </HintItem>
        ))
      ) : (
        <InfoItem>No result, change the entered value</InfoItem>
      )}
    </HintsBlockContainer>
  );
});
