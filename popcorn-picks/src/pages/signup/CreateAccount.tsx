import React from "react";
import styled from "styled-components";
import Button from "../../styles/components/common/Button";

const CreateAccount: React.FC = () => {
  return (
    <CreateSection>
      <CreateHeader>계정 생성</CreateHeader>
      <CreateBox>
        <InputDiv>
          <input type="text" placeholder="홍길동" autoFocus />
          <input type="text" placeholder="010-0000-0000" />
          <input type="text" placeholder="970802" />
          <input type="text" placeholder="아이디를 입력해주세요." />
          <p>사용할 수 있는 아이디입니다.</p>
          <input type="text" placeholder="비밀번호를 입력해주세요." />
          <input type="text" placeholder="한번 더 비밀번호를 입력해주세요." />
          <p>비밀번호가 동일합니다.</p>
        </InputDiv>
      </CreateBox>
      <ButtonDiv>
        <Button comment="가입" />
      </ButtonDiv>
    </CreateSection>
  );
};

export default CreateAccount;

const CreateSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const CreateHeader = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
`;

const CreateBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 65vh;
  border: 1px solid black;
  align-items: center;

  > p {
    margin: 0 auto;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  justify-content: space-around;
  > input {
    height: 30px;
  }
  > p {
    font-size: 12px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 60%;
  margin: 5% auto;
`;
