import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import Mg5Green from "../../../assets/images/mg-mg5-green.png";

const AboutUsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        py-4
        px-7
        md:px-0
        bg-white
    `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `}
`;

export default function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={Mg5Green} alt="Jeeb car" />
      </CarContainer>
      <InfoContainer>
        <Title>Fell The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni fugit
          dolore quaerat quibusdam expedita minima nam iste mollitia officia
          aperiam, nesciunt incidunt natus, non aliquid? Explicabo fugit officia
          tempora provident? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Magni fugit dolore quaerat quibusdam expedita minima nam iste
          mollitia officia aperiam, nesciunt incidunt natus, non aliquid?
          Explicabo fugit officia tempora provident?
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
