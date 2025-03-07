import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <MarqueeText>
        WEBFLOW ✹ FIGMA ✹ DESIGNER ✹ DEVELOP
      </MarqueeText>

      <MainContent>
        <TalkSection>
          <TalkHeading>LET’S TALK!</TalkHeading>
          <Email href="mailto:bharathraja141001@gmail.com">
            bharathraja141001@gmail.com ↗
          </Email>
        </TalkSection>

        <FooterBottom>
          <Copyright>© Bharath - 2025</Copyright>
          <SocialLinks>
            <SocialLink href="#">Dribbble</SocialLink>
            <SocialLink href="#">Behance</SocialLink>
            <SocialLink href="#">Twitter</SocialLink>
            <SocialLink href="#">Instagram</SocialLink>
          </SocialLinks>
        </FooterBottom>
      </MainContent>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background: #0d0d0d;
  color: white;
  text-align: center;
  padding: 50px 20px;
`;

const MarqueeText = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;

  @media(max-width: 1024px) {
    font-size: 2.8rem;
  }
  @media(max-width: 768px) {
    font-size: 2rem;
  }

  @media(max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TalkSection = styled.div`
  margin-bottom: 40px;
`;

const TalkHeading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Email = styled.a`
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  margin-top: 10px;
  display: block;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: gray;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: #aaa;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;

  @media(max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  font-size: 1rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: gray;
  }
`;
