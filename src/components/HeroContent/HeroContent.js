import React from "react";
import styled from "styled-components";
import { DORADESIGN, PROFILE_IMAGE, SECOND_IMAGE, SILVS, WAVE } from "../../images";

const HeroContent = () => {
  return (
    <HeroWrapper>
      <Title>
        I AM A <img src={PROFILE_IMAGE} alt="Profile" className="Image" /> FREELANCE
      </Title>
      <Title>
        DESIGNER <img src={SECOND_IMAGE} alt="Portfolio" className="Image" /> FROM
      </Title>
      <Title>SAN FRANCISCO</Title>

      <MiddleWrapper>
        <Logos>
          <img src={DORADESIGN} alt="Doradesign" className="Logo"  />
          <img src={WAVE} alt="Wave" className="Logo"/>
          <img src={SILVS} alt="Silvia" className="Logo" />
        </Logos>
        <Description>
          Welcome to my portfolio. Here, artistry meets functionality.
          Dive into a curated showcase of distinctive branding and
          web designs, each crafted to captivate and inspire.
        </Description>
      </MiddleWrapper>
    </HeroWrapper>
  );
};

export default HeroContent;

const HeroWrapper = styled.section`
  background: black;
  color: white;
  text-align: center;
  padding: 80px 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  .Image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    display: inline-block;
    margin: 0 10px;

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
  }
`;

const MiddleWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logos = styled.div`
  display: flex;
  gap: 100px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    gap: 20px;
  }

  .Logo {
    width: 100px;

    @media(max-width: 768px) {
        width: 70px;
    }
  }
`;


const Description = styled.p`
  max-width: 400px;
  font-size: 16px;
  line-height: 1.5;
  color: gray;
  display: flex;
  
`;
