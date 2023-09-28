import React, { useState } from "react";
import styled from "styled-components";
import {
  TABLET_SIZE,
  LAPTOP_SIZE,
  LAPTOP_LARGE_SIZE,
} from "../constants/constants";
import ReservationSeatBox from "../styles/components/reservation/ReservationSeatBox";
import Button from "../styles/components/common/Button";

const Modal: React.FC = () => {
  const closeModal = () => {};
  return (
    <>
      <ModalContainer>
        <ModalHeader>영화이름/시간/n관</ModalHeader>
        <CloseButton>X</CloseButton>
        <ModalSeatInfo>잔여좌석 n/n</ModalSeatInfo>
        <ScreenDiv>screen</ScreenDiv>
        <SeatDiv>
          {/**
           * @todo 시트박스 정보 , 위치에 따라 렌더링 수정 필요
           */}
          <ReservationSeatBox />
          <ReservationSeatBox />
          <ReservationSeatBox />
          <ReservationSeatBox />
          <ReservationSeatBox />
        </SeatDiv>
        <ButtonDiv>
          <Button comment={"취소"} />
          <Button comment={"인원/좌석 선택"} />
        </ButtonDiv>
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
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: #fea985;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const ModalSeatInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-weight: bold;
  font-size: 16px;
`;

const ScreenDiv = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const SeatDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  display: flex;
`;
