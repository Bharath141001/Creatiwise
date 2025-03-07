import React from "react";
import styled from "styled-components";
import CaseStudyCard from "./caseStudy/caseStudy";
import { APPIMAGE, ENVELOPE, APPIMAGE_2 } from "../../images";

const WorksSection = () => {
  return (
      <><Section>
          <Title>
              <span className="icon">✹</span> Works
          </Title>
          <ViewAll href="#">view all</ViewAll>
         </Section>
          <CaseStudyCard 
            Image={ENVELOPE} 
            TitleText="Analysis Application" 
            DescriptionText="With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence." 
            Tag1="FIGMA"
            Tag2="UX"
          />
          <CaseStudyCard 
            Image={APPIMAGE_2} 
            TitleText="Fortknox Application" 
            DescriptionText="With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence." 
            Tag1="MOBILE"
            Tag2="WEB"
          />
          <CaseStudyCard 
            Image= {APPIMAGE} 
            TitleText="Zenocide Application" 
            DescriptionText="With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence." 
            Tag1="APP"
            Tag2="WEB"
          />
      </>

  );
};

export default WorksSection;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
  padding: 20px 40px;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e8e8e8;

  .icon {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ViewAll = styled.a`
  font-size: 1rem;
  color: #e8e8e8;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: white;
    margin-top: 2px;
  }

  &:hover {
    color: white;
  }
`;
