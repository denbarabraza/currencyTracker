import React, { ChangeEvent, FC, memo, useCallback, useState } from 'react';

import search from '@/assets/image/search.svg';
import { HintsBlock } from '@/components/HintsBlock';
import { useAppSelector } from '@/hooks/useStoreControl';
import { getSearchCurrencySelector } from '@/store/selectors/mapSelectors';

import { ISearch } from './interface';
import { Container, InputContainer, InputItem, SearchIcon } from './styled';

export const Search: FC<ISearch> = memo(({ onSearch }) => {
  const searchValue = useAppSelector(getSearchCurrencySelector);

  const [searchCurrency, setSearchCurrency] = useState<string>(searchValue);
  const [isHintsOpen, setIsHintsOpen] = useState<boolean>(false);

  const handleSearchClick = useCallback(() => {
    onSearch(searchCurrency.trim());
    setIsHintsOpen(false);
  }, [onSearch, searchCurrency]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchCurrency(event.target.value);
      if (event.target.value.length > 0) setIsHintsOpen(true);
      else setIsHintsOpen(false);
    },
    [setSearchCurrency, setIsHintsOpen],
  );

  const handleResultClick = useCallback(
    (title: string) => {
      onSearch(title);
      setIsHintsOpen(false);
      setSearchCurrency('');
    },
    [onSearch, setIsHintsOpen, setSearchCurrency],
  );

  return (
    <Container>
      <InputContainer>
        <InputItem
          data-cy='inputItem'
          type='text'
          placeholder='Search by cyrrency'
          value={searchCurrency}
          onChange={onChange}
        />
        <SearchIcon
          data-cy='searchIcn'
          src={search}
          alt='del icon'
          onClick={handleSearchClick}
        />
      </InputContainer>
      {isHintsOpen && (
        <HintsBlock searchValue={searchCurrency} onClickSelectHint={handleResultClick} />
      )}
    </Container>
  );
});
