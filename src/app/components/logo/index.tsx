import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png";

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
        gap-4
    `}
`;

const LogoText = styled.div`
  ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
        uppercase
    `}
`;

const Image = styled.div`
  ${tw`
        h-6
        md:h-9
    `};
  width: auto;
  img {
    width: auto;
    height: 100%;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="Car logo" />
      </Image>
      <LogoText>hai chao</LogoText>
    </LogoContainer>
  );
}

export default Logo;
