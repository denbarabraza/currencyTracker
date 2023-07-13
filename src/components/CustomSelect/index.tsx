import React, { FC, useEffect, useState } from 'react';

import { ICustomSelect, selectEnum } from '@/components/CustomSelect/interface';
import { useAppDispatch } from '@/hooks/useStoreControl';
import { setDataForChart, setDayTimeLine } from '@/store/actions/timeLineActions';
import { dateControl } from '@/utils/dateControl';
import { getMonthName } from '@/utils/getMonthName';

import { ArrowIcon, Container, Option, OptionsContainer, SelectedOption } from './styled';

export const CustomSelect: FC<ICustomSelect> = ({ options, value, onChange, type }) => {
  const dispatch = useAppDispatch();

  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isDayOpen, setIsDayOpen] = useState(false);
  const [pastDays, setPastDays] = useState<string[] | null>(null);
  const [year, setYear] = useState<number>(1);
  const [month, setMonth] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('');

  const selectedOption = options?.find(option => option.name === value);
  const monthName = getMonthName(+month);
  const typeRule = type === selectEnum.Currency;
  const selectValue = typeRule ? selectedOption?.name : `${selectedDay} ${monthName}`;
  const isOpenSelect = typeRule ? isCurrencyOpen : isDayOpen;
  const dataCyContainer = typeRule ? 'currencySelect' : 'daySelect';
  const dataCySelectValue = typeRule ? 'selectCurrencyOptions' : 'selectDayOptions';
  const dataCyOptions = typeRule ? 'selectCurrencyOption' : 'selectDayOption';

  const handleSelectOption = (option: string) => () => {
    if (typeRule) {
      if (onChange) {
        onChange(option);
      }
      setIsCurrencyOpen(prev => !prev);
    } else {
      dispatch(setDataForChart(null));
      setSelectedDay(option);
      const day = `0${option}`.slice(-2);

      dispatch(setDayTimeLine(`${year}-${month}-${day}`));
      setIsDayOpen(prev => !prev);
    }
  };

  const onClickOpenSelect = () => {
    if (typeRule) {
      setIsCurrencyOpen(prev => !prev);
    } else {
      setIsDayOpen(prev => !prev);
    }
  };

  useEffect(() => {
    const { month, year, pastDaysArr, day } = dateControl();

    setMonth(month);
    setYear(year);
    setPastDays(pastDaysArr);
    setSelectedDay(day);
  }, []);

  return (
    <Container data-testid='selectCurrencyDay' data-cy={dataCyContainer}>
      <SelectedOption onClick={onClickOpenSelect} data-cy={dataCySelectValue}>
        {selectValue}
        <ArrowIcon open={isOpenSelect} />
      </SelectedOption>
      <OptionsContainer open={isOpenSelect} data-cy={dataCyOptions}>
        {typeRule
          ? options?.map(({ name }) => (
              <Option key={name} onClick={handleSelectOption(name)}>
                {name}
              </Option>
            ))
          : pastDays?.map(day => (
              <Option key={day} onClick={handleSelectOption(day)} data-cy='day'>
                {day} {monthName}
              </Option>
            ))}
      </OptionsContainer>
    </Container>
  );
};
