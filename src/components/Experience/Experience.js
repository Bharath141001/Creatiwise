import React from "react";
import styled from "styled-components";

const Experience = () => {
  const experiences = [
    { title: "Lead Product Designer", company: "Fortknox", date: "Mar 2022 - Oct 2023" },
    { title: "Intern Designer", company: "OmniSafe", date: "Mar 2022 - Oct 2023" },
    { title: "UI Designer", company: "Doradesign", date: "Mar 2022 - Oct 2023" },
    { title: "Frontend Developer", company: "OpacityAuthor", date: "Mar 2022 - Oct 2023" },
  ];

  return (
    <ExperienceWrapper>
      <Heading>✹ Experience</Heading>
      <ExperienceList>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index}>
            <JobTitle>{exp.title}</JobTitle>
            <CompanyInfo>
              <Company>{exp.company}</Company>
              <Date>{exp.date}</Date>
            </CompanyInfo>
          </ExperienceItem>
        ))}
      </ExperienceList>
    </ExperienceWrapper>
  );
};

export default Experience;

const ExperienceWrapper = styled.section`
  background: black;
  color: white;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExperienceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #444;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const CompanyInfo = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
    margin-top: 10px;
  }
`;

const Company = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Date = styled.p`
  font-size: 1rem;
  color: #aaa;
`;
