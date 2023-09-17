import styled from "styled-components";
import { RESERVATION_PROCESS, REGION } from "../../constants/constants";

const Reservation = () => {
  return (
    <>
      <ReservationSection>
        <ProcessSection>
          {RESERVATION_PROCESS.map((item, index: number) => {
            return <ProcessDiv key={index}>{item}</ProcessDiv>;
          })}
        </ProcessSection>
        <TheaterSection>
          <TheaterSelectedTitle>선택한 영화관</TheaterSelectedTitle>
          <TheaterRegionDiv>
            <RegionDiv>
              {REGION.map((item, index: number) => {
                return <RegionDiv key={index}>{item}</RegionDiv>;
              })}
            </RegionDiv>
            <TheaterListDiv>영화관 리스트</TheaterListDiv>
          </TheaterRegionDiv>
        </TheaterSection>
      </ReservationSection>
    </>
  );
};

export default Reservation;

const ReservationSection = styled.section`
  display: flex;
  width: 99%;
  height: 40vh;
  margin: 0 auto;
  border: 1px solid black;
  font-size: 10px;
`;

const ProcessSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 10%;
`;

const ProcessDiv = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const TheaterSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 28%;
  border: 1px solid black;
`;

const TheaterSelectedTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border: 1px solid black;
`;

const TheaterRegionDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const RegionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  font-size: 10px;
`;

const TheaterListDiv = styled.div`
  display: flex;
  border: 1px solid black;
`;
