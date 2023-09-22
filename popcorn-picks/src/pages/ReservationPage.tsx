import styled from "styled-components";
import Reservation from "../styles/components/reservation/ReservationCommon";
import ReservationOption from "../styles/components/reservation/ReservationSelect";

const ReservationPage = () => {
  return (
    <ReservationSection>
      <Reservation />
      <ReservationOption />
    </ReservationSection>
  );
};

export default ReservationPage;

const ReservationSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 99%;
  height: 70vh;
  margin: 4% auto;
  border: 1px solid black;
  font-size: 10px;
`;
