import React, { useEffect, useState } from 'react';

import { ArrowIcon, SelectedOption } from '@/components/CurrencySelect/styled';
import { useAppDispatch } from '@/hooks/useStoreControl';
import { setDayTimeLine } from '@/store/actions/currencyActions';
import { dateControl } from '@/utils/dateControl';
import { getMonthName } from '@/utils/getMonthName';

import { Container, Option, OptionsContainer } from './styled';

export const DaySelect = () => {
  const dispatch = useAppDispatch();
  const [pastDays, setPastDays] = useState<string[] | null>(null);
  const [year, setYear] = useState<number>(1);
  const [month, setMonth] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const date = dateControl();

    setMonth(date.month);
    setYear(date.year);
    setPastDays(date.pastDaysArr);
    setSelectedDay(date.day);
  }, []);

  const monthName = getMonthName(+month);

  const handleChange = (dayValue: string) => {
    setSelectedDay(dayValue);
    const day = `0${dayValue}`.slice(-2);

    dispatch(setDayTimeLine(`${year}-${month}-${day}`));
    setIsOpen(false);
  };

  return (
    <Container>
      <SelectedOption onClick={() => setIsOpen(!isOpen)}>
        {selectedDay} {monthName}
        <ArrowIcon className={isOpen ? 'open' : ''} />
      </SelectedOption>
      <OptionsContainer className={isOpen ? 'open' : ''}>
        {pastDays?.map(day => (
          <Option key={day} onClick={() => handleChange(day)}>
            {day} {monthName}
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  );
};
