import React from "react";
import styled, { css } from "styled-components";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "twin.macro";
import { Marginer } from "../marginer";
import Button from "../button";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 3em;

  user-select: none;

  ${({ offset }: any) =>
    offset &&
    css`
      left: 0em;
    `}

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

const CardContainer = styled.div`
  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        py-1
        px-4
        md:py-2
        md:px-8    
    `}

  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  min-height: 4.3em;
`;

const ItemContainer = styled.div`
  ${tw`flex items-center justify-center relative`}
`;

const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`;

const SmallIcon = styled.span`
  ${tw`
        text-gray-700
        fill-current
        text-xs
        md:text-base
        ml-2
    `}
`;

const Name = styled.span`
  ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `}
`;

const LineSeparator = styled.span`
  ${tw`
        mx-2
        md:mx-5
        bg-red-300
    `}

  width: 2px;
  height: 45%;
`;

export default function BookCard() {
  const [startDate, setStartDate] = React.useState<Date>(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = React.useState(false);
  const [returnDate, setReturnDate] = React.useState<Date>(new Date());
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = React.useState(false);
  const isMobile = useMediaQuery({
    maxWidth: SCREENS.sm,
  });

  const handleToggleOpenStartDate = () => {
    setIsStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setIsReturnCalendarOpen(false);
  };

  const handleToggleOpenReturnDate = () => {
    setIsReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setIsStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={handleToggleOpenStartDate}>Pick up date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar
            offset={true}
            value={startDate}
            onChange={setStartDate as any}
          />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={handleToggleOpenReturnDate}>Return date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar value={returnDate} onChange={setReturnDate as any} />
        )}
      </ItemContainer>

      <Marginer
        direction="horizontal"
        margin={` ${isMobile ? `0.5em` : `2em`} `}
      />
      <Button text="Book your ride" />
    </CardContainer>
  );
}
