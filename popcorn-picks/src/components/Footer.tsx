import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <p>footer data </p>
    </FooterSection>
  );
};
export default Footer;

const FooterSection = styled.section`
  display: flex;
  width: 100%;
  height: 100px;
  margin-top: 8%;
  background-color: #fd7f49;
`;
