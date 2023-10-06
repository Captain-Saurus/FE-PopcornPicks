import React from "react";
import styled from "styled-components";
import Button from "../../styles/components/common/Button";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modules/modalReducer";

const SignupContainer = () => {
  const dispatch = useDispatch();

  /**
   * @todo 백엔드에서 회원정보 API받으면 검사후 해당 모달을 띄워야함
   */
  const handleOpenModal = () => {
    dispatch(openModal("RegisteredMemberModal"));
  };

  return (
    <>
      <SignupSection>
        <SignupHeader>
          <p>잠깐!✋</p>
          <p>혹시 이미 회원이신가요?</p>
        </SignupHeader>
        <SignupContent>
          <input type="text" placeholder="이름을 입력해주세요" />
          <input type="text" placeholder="생년월일을 입력해주세요" />
          <input type="text" placeholder="전화번호를 입력해주세요" />
          <BtnDiv onClick={handleOpenModal}>
            <Button comment="찾기" />
          </BtnDiv>
        </SignupContent>
      </SignupSection>
    </>
  );
};

export default SignupContainer;

const SignupSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
`;

const SignupHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 140px;
  justify-content: center;
  text-align: center;
  font-size: 18px;
`;

const SignupContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  border: 1px solid black;
  justify-content: space-around;
  > input {
    width: 60%;
    height: 30px;
    margin: 0 auto;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  width: 40%;
  margin: 0 auto;
`;
