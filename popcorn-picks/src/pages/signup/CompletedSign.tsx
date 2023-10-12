import React from "react";
import styled from "styled-components";
import Button from "../../styles/components/common/Button";

const CompletedSign: React.FC = () => {
  return (
    <>
      <CompletedSection>
        <CompletedHeader>🎊가입이 완료되었습니다🎊</CompletedHeader>
        <CompletedBox>
          <TextDiv>
            <p>회원이 되신걸 축하드립니다.</p>
            <p>PopcornPicks의 서비스를 모두 이용할 수 있습니다.</p>
            <p>아래 버튼 클릭 시,</p>
            <p>로그인 화면으로 이동합니다.</p>
          </TextDiv>
          <ButtonDiv>
            <Button comment="로그인으로 이동" />
          </ButtonDiv>
        </CompletedBox>
      </CompletedSection>
    </>
  );
};

export default CompletedSign;

const CompletedSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  align-items: center;
`;

const CompletedHeader = styled.div`
  display: flex;
  height: 70px;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
`;

const CompletedBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 65vh;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 60%;
  margin: 5% auto;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  text-align: center;
  > p {
    font-size: 14px;
  }
`;
