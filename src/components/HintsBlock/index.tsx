import React, { FC, memo } from 'react';

import { IHintsBlock } from '@/components/HintsBlock/interface';
import { HintItem, HintsBlockContainer, InfoItem } from '@/components/HintsBlock/styled';
import { currencyQuotes } from '@/constants/currency';
import { getCurrencyBySearch } from '@/utils/getCurrencyBySearch';

export const HintsBlock: FC<IHintsBlock> = memo(({ searchValue, onClickSelectHint }) => {
  const hintsData = getCurrencyBySearch(searchValue, currencyQuotes);

  const onClickHintItemHandler = (code: string) => () => {
    onClickSelectHint(code);
  };

  return (
    <HintsBlockContainer data-cy='hintsBlock'>
      {hintsData.length > 0 ? (
        hintsData?.map(({ symbol, code, name }) => {
          return (
            <HintItem key={symbol} onClick={onClickHintItemHandler(code)}>
              {name} ({code})
            </HintItem>
          );
        })
      ) : (
        <InfoItem>No result, change the entered value</InfoItem>
      )}
    </HintsBlockContainer>
  );
});
