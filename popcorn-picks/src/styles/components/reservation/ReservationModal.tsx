import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import ReservationSeatBox from "./ReservationSeatBox";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/modules/modalReducer";

const ReservationModal: React.FC = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <ModalContainer>
        <ModalHeader>영화이름/시간/n관</ModalHeader>
        <CloseButton onClick={handleCloseModal}>X</CloseButton>
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

export default ReservationModal;

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
  cursor: pointer;
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
