import React, { FC, memo } from 'react';

import { IHintsBlock } from '@/components/HintsBlock/interface';
import { HintItem, HintsBlockContainer, InfoItem } from '@/components/HintsBlock/styled';
import { currencyQuotes } from '@/constants/currency';
import { getCurrencyBySearch } from '@/utils/getCurrencyBySearch';

export const HintsBlock: FC<IHintsBlock> = memo(({ searchValue, onClickSelectHint }) => {
  const hintsData = getCurrencyBySearch(searchValue, currencyQuotes);

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
