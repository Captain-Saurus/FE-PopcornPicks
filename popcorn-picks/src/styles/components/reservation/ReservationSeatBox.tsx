import React from "react";
import styled from "styled-components";

const ReservationSeatBox: React.FC = () => {
  return (
    <>
      <SeatDiv />
    </>
  );
};

export default ReservationSeatBox;

const SeatDiv = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: gray;
`;
