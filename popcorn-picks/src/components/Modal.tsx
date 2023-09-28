import React, { useState } from "react";
import styled from "styled-components";
import {
  TABLET_SIZE,
  LAPTOP_SIZE,
  LAPTOP_LARGE_SIZE,
} from "../constants/constants";

const Modal: React.FC = () => {
  const closeModal = () => {};
  return (
    <>
      <ModalContainer>
        <ModalHeader>영화이름/시간/n관</ModalHeader>
        <CloseButton>X</CloseButton>
        <ModalSeatInfo>잔여좌석 n/n</ModalSeatInfo>
        <p>zsdsd</p>
        <p>zsdsd</p>
        <p>zsdsd</p>
        <p>zsdsd</p>
      </ModalContainer>
    </>
  );
};

export default Modal;

const ModalContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 80%;
  height: 500px;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
`;

const ModalHeader = styled.section`
  width: 100%;
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const ModalSeatInfo = styled.div`
  text-align: center;
`;
