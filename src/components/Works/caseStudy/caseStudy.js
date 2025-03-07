/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styled from "styled-components";

const CaseStudyCard = ({Image, TitleText, DescriptionText, Tag1, Tag2}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={Image} alt="Project Image" className="projectImage" />
      </ImageContainer>

      <Content>
        <Title>{TitleText}</Title>
        <Description>
          {DescriptionText}
        </Description>
        
        <Tags>
          <Tag>{Tag1}</Tag>
          <Tag>{Tag2}</Tag>
        </Tags>

        <Button>View Case Study</Button>
      </Content>
    </CardContainer>
  );
};

export default CaseStudyCard;

const CardContainer = styled.div`
  display: flex;
  background: #CBCBCB7A;
  padding: 40px;
  border-radius: 20px;
  align-items: center;
  gap: 40px;
  margin: 10px 40px 30px 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 30px;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  border-radius: 20px;
  overflow: hidden;

  .projectImage {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #f0f0f0;
  margin-bottom: 16px;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;

const Tag = styled.span`
  border: 2px solid white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: white;
`;

const Button = styled.button`
  background: white;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: 0.3s;

  &:hover {
    background: black;
    color: white;
  }

  @media (max-width: 1024px) {
    align-self: center;
  }
`;
