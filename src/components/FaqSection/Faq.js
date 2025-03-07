import React, { useState } from "react";
import styled from "styled-components";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
    },
    {
      question: "What tools and software do you use for UX design?",
      answer: "FIgma, Adobe XD Design",
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer: "User A/B Testing and User Performance metrics from analytics",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQWrapper>
      <Heading>✹ Frequently asked questions</Heading>
      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem key={index} onClick={() => toggleFAQ(index)}>
            <Question>{faq.question}</Question>
            {openIndex === index && <Answer>{faq.answer}</Answer>}
          </FAQItem>
        ))}
      </FAQList>
    </FAQWrapper>
  );
};

export default FAQSection;

const FAQWrapper = styled.section`
  background: black;
  color: white;
  padding: 60px 40px;
  margin: auto;
  max-width: auto;

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

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

const FAQItem = styled.div`
  cursor: pointer;
  padding: 15px 0;

  &:hover {
    color: gray;
  }
`;

const Question = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Answer = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #ccc;
  line-height: 1.5;
`;
