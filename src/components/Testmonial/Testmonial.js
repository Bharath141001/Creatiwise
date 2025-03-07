import React from "react";
import styled from "styled-components";
import { USER } from "../../images";

const Testimonial = () => {
    return (
        <>
        <Heading>✹ What they say</Heading>
        <TestimonialWrapper>
            <LeftSection>
                <UserInfo>
                    <img src={USER} alt="Bharath" className="userImage" />
                    <UserDetails>
                        <UserName>Bharath</UserName>
                        <UserCompany>Creatiwise</UserCompany>
                    </UserDetails>
                </UserInfo>
            </LeftSection>

            <RightSection>
                <Quote>❝</Quote>
                <TestimonialText>
                    Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.
                    Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.
                </TestimonialText>

                <Navigation>
                    <NavButton className="prev">←</NavButton>
                    <NavButton className="next">→</NavButton>
                </Navigation>
            </RightSection>
        </TestimonialWrapper>
        </>
    );
};

export default Testimonial;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
  color: #e8e8e8;
  margin-left:32px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-left: 8px;
  }
`;

const TestimonialWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  color: white;
  padding: 60px 40px;
  gap: 50px;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
`;



const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  .userImage {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const UserCompany = styled.p`
  font-size: 1rem;
  color: #aaa;
`;

const RightSection = styled.div`
  flex: 2;
  position: relative;
`;

const Quote = styled.span`
  font-size: 4rem;
  color: #777;
  position: absolute;
  top: -10px;
  left: -10px;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: white;
`;

const Navigation = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

    @media(max-width: 768px) {
        justify-content: center;
    }
`;

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  background: white;
  color: black;
  transition: 0.3s;

  &:hover {
    background: gray;
    color: white;
  }

  &.prev {
    background: linear-gradient(to right, #ff5733, #ff7961);
  }

  &.next {
    background: linear-gradient(to right, white, gray);
  }
`;
