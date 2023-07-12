import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '@/hooks/useStoreControl';
import { setDataForChart, setDayTimeLine } from '@/store/actions/timeLineActions';
import { dateControl } from '@/utils/dateControl';
import { getMonthName } from '@/utils/getMonthName';

import {
  DayArrowIcon,
  DayOption,
  DayOptionsContainer,
  DaySelectContainer,
  DaySelectedOption,
} from './styled';

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
    dispatch(setDataForChart(null));
    setSelectedDay(dayValue);
    const day = `0${dayValue}`.slice(-2);

    dispatch(setDayTimeLine(`${year}-${month}-${day}`));
    setIsOpen(false);
  };
  const onClickSelectedOption = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DaySelectContainer data-cy='daySelect' data-testid='daySelect'>
      <DaySelectedOption onClick={onClickSelectedOption} data-cy='daySelectOption'>
        {selectedDay} {monthName}
        <DayArrowIcon open={isOpen} />
      </DaySelectedOption>
      <DayOptionsContainer open={isOpen} data-cy='optionsContainer'>
        {pastDays?.map(day => (
          <DayOption key={day} onClick={() => handleChange(day)} data-cy='day'>
            {day} {monthName}
          </DayOption>
        ))}
      </DayOptionsContainer>
    </DaySelectContainer>
  );
};
