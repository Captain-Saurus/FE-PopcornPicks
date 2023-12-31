import React, { useRef } from "react";
import styled from "styled-components";
import Reservation from "../styles/components/reservation/ReservationCommon";
import ReservationOption from "../styles/components/reservation/ReservationOption";
import {
  TABLET_SIZE,
  LAPTOP_SIZE,
  LAPTOP_LARGE_SIZE,
} from "../constants/constants";
import Modal from "../components/Modal";
import useHasClickOutSideWithModal from "../hooks/useHasClickOutsideWithModal";

const PersonalReservationPage: React.FC = () => {
  let wrapperRef = useRef<HTMLDivElement | null>(null);
  useHasClickOutSideWithModal(wrapperRef);

  return (
    <>
      <ReservationSection ref={wrapperRef}>
        <Reservation />
        <ReservationOption />
      </ReservationSection>
      <Modal />
    </>
  );
};
export default PersonalReservationPage;

const ReservationSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  margin: 4% auto;
  border: 1px solid black;
  font-size: 10px;
  @media screen and (min-width: ${TABLET_SIZE}) {
    width: 80%;
  }
  @media screen and (min-width: ${LAPTOP_SIZE}) {
    width: 80%;
  }
  @media screen and (min-width: ${LAPTOP_LARGE_SIZE}) {
    width: 80%;
  }
`;
