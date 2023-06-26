import React, { useEffect, useState } from 'react';

import { ArrowIcon, SelectedOption } from '@/components/CurrencySelect/styled';
import { getMonthName } from '@/utils/getMonthName';

import { Container, Option, OptionsContainer } from './styled';

export const DaySelect = () => {
  const [pastDays, setPastDays] = useState<string[] | null>(null);
  const [month, setMonth] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    ).getDate();
    const daysArr = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
    const pastDaysArr = daysArr.filter(day => parseInt(day, 10) < currentDate.getDate());

    setMonth(month);
    setPastDays(pastDaysArr);
    setSelectedDay(currentDate.getDate().toString());
  }, []);

  const monthName = getMonthName(month);

  const handleChange = (value: string) => {
    setSelectedDay(value);
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
