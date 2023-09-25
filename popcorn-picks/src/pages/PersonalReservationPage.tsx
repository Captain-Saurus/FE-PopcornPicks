import React from "react";
import styled from "styled-components";
import Reservation from "../styles/components/reservation/ReservationCommon";
import ReservationOption from "../styles/components/reservation/ReservationOption";

const PersonalReservationPage: React.FC = () => {
  return (
    <ReservationSection>
      <Reservation />
      <ReservationOption />
    </ReservationSection>
  );
};
export default PersonalReservationPage;

const ReservationSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 70vh;
  margin: 4% auto;
  border: 1px solid black;
  font-size: 10px;
`;
