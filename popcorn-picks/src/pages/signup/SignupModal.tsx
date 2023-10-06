import React from "react";
import styled from "styled-components";
import Button from "../../styles/components/common/Button";
import { closeModal } from "../../store/modules/modalReducer";
import { useDispatch } from "react-redux";

const SignupModal: React.FC = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <ModalContainer>
        <ModalHeader>이미 가입한 회원입니다.</ModalHeader>
        <BtnDiv onClick={handleCloseModal}>
          <Button comment="확인" />
        </BtnDiv>
      </ModalContainer>
    </>
  );
};

export default SignupModal;

const ModalContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 90%;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
`;

const ModalHeader = styled.section`
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const BtnDiv = styled.div`
  display: flex;
  width: 30%;
  margin: 0 auto;
`;
