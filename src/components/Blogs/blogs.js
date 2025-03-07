import React from "react";
import styled from "styled-components";
import { APPIMAGE, ENVELOPE, APPIMAGE_2 } from "../../images";
import BlogCard from "./BlogCard/blogCard";

const Blogs = () => {
  return (
      <>
      <Section>
        <Title>
            <span className="icon">✹</span> Blogs
        </Title>
        <ViewAll href="#">view all</ViewAll>
      </Section>
      <BlogCard Image={ENVELOPE} DateText="Nov 9, 2023" TitleText="How UX works in web" Tag1="UI" Tag2="UX" />
      <BlogCard Image={APPIMAGE_2} DateText="Aug 18, 2023" TitleText="Case study - Analysis Application." Tag1="DESIGN" Tag2="PRINT" />
      <BlogCard Image={APPIMAGE} DateText="Feb 16, 2023" TitleText="3 ways to develop your skill" Tag1="FIGMA" Tag2="WEB"  />
      </>
  );
};

export default Blogs;

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
