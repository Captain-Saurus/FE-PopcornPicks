import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../styles/components/common/Button";
import CreateAccount from "./CreateAccount";

const Provision: React.FC = () => {
  const [test, setTest] = useState<boolean>(true);

  const testClick = () => {
    setTest(false);
  };
  return (
    <>
      {test ? (
        <ProvisionSection>
          <ProvisionHeader>약관 동의</ProvisionHeader>
          <ProvisionBox>
            <ProvisionTitle>1. 어쩌고</ProvisionTitle>
            <ProvisionContent></ProvisionContent>
            <Agreediv>
              <input type="checkbox" />
              <p>동의합니다</p>
            </Agreediv>
          </ProvisionBox>
          <ProvisionBox>
            <ProvisionTitle>2. 어쩌고</ProvisionTitle>
            <ProvisionContent></ProvisionContent>
            <Agreediv>
              <input type="checkbox" />
              <p>동의합니다</p>
            </Agreediv>
          </ProvisionBox>
          <ProvisionBox>
            <ProvisionTitle>3. 어쩌고</ProvisionTitle>
            <ProvisionContent></ProvisionContent>
            <Agreediv>
              <input type="checkbox" />
              <p>동의합니다</p>
            </Agreediv>
          </ProvisionBox>
          <ButtonDiv onClick={testClick}>
            <Button comment="다음" />
          </ButtonDiv>
        </ProvisionSection>
      ) : (
        <CreateAccount />
      )}
    </>
  );
};

export default Provision;

const ProvisionSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const ProvisionHeader = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
`;

const ProvisionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 30vh;
`;

const ProvisionTitle = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: center;
`;

const ProvisionContent = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  border: 1px solid black;
`;

const Agreediv = styled.div`
  display: flex;
  align-items: center;
  > p {
    font-size: 14px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 40%;
  height: 10vh;
  align-items: center;
`;
