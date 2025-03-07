import React from "react";
import styled from "styled-components";

const Expertise = () => {
  return (
    <ExpertiseWrapper>
      <Heading>✹ Expertise</Heading>

      <Content>
        <Column>
          <Block>
            <Title>▪ Branding</Title>
            <Description>
              I create efficient, adaptable, and engaging websites. No predefined patterns.
              No sluggish, complex code. Webflow forms the foundation of my web development approach.
              I employ it to provide safe, top-notch bespoke websites.
            </Description>
          </Block>

          <Block>
            <Title>▪ UX Design</Title>
            <Description>
              I comprehend and resolve digital product issues using a user-focused methodology.
              Investigation, compassion, and visual conveyance are a few techniques I apply to captivate
              and involve your users while fulfilling your business requirements.
            </Description>
          </Block>
        </Column>

        <Column>
          <Block>
            <Title>▪ UI Design</Title>
            <Description>
              I create efficient, adaptable, and engaging websites. No predefined patterns.
              No sluggish, complex code. Webflow forms the foundation of my web development approach.
              I employ it to provide safe, top-notch bespoke websites.
            </Description>
          </Block>

          <Block>
            <Title>▪ Development</Title>
            <Description>
              I create user-friendly, adaptive, engaging websites. No cookie-cutters.
              No cumbersome, complex coding. Webflow forms the foundation of my web development approach.
              I employ it to produce safe, top-notch personalized websites.
            </Description>
          </Block>
        </Column>
      </Content>
    </ExpertiseWrapper>
  );
};

export default Expertise;

const ExpertiseWrapper = styled.section`
  background: black;
  color: white;
  padding: 80px 20px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const Block = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #cccccc;
`;
