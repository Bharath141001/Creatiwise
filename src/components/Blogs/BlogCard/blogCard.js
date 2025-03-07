import React from "react";
import styled from "styled-components";

const BlogCard = ({Image, DateText, TitleText, Tag1, Tag2}) => {
  return (
    <Card>
      <ImageContainer>
        <img src={Image} alt="Blog Thumbnail" className="blogImage" />
      </ImageContainer>

      <Content>
        <Date>{DateText}</Date>
        <Title>{TitleText}</Title>
        <Tags>
          <Tag>{Tag1}</Tag>
          <Tag>{Tag2}</Tag>
        </Tags>
      </Content>

      <ReadButton>Read</ReadButton>
    </Card>
  );
};

export default BlogCard;

const Card = styled.div`
  display: flex;
  align-items: center;
  background: black;
  color: white;
  padding: 20px;
  border-radius: 20px;
  gap: 30px;
  max-width: 1330px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 15px;
  }
`;

const ImageContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  flex-shrink: 0;

  .blogImage {
    width: 200px;
    height: auto;
    border-radius: 20px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: #ccc;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

    @media(max-width: 768px) {
        justify-content: center;
    }
`;

const Tag = styled.span`
  border: 2px solid white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: white;
`;

const ReadButton = styled.button`
  background: white;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: 0.3s;

  &:hover {
    background: gray;
    color: white;
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;
