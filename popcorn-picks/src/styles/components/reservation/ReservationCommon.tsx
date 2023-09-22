import styled from "styled-components";
import { RESERVATION_PROCESS, REGION } from "../../../constants/constants";

const Reservation = () => {
  return (
    <>
      <ProcessSection>
        {RESERVATION_PROCESS.map((item, index: number) => {
          return <ProcessDiv key={index}>{item}</ProcessDiv>;
        })}
      </ProcessSection>
      <TheaterRegionDiv>
        <RegionDiv>
          {REGION.map((item, index: number) => {
            return <RegionDiv key={index}>{item}</RegionDiv>;
          })}
        </RegionDiv>
      </TheaterRegionDiv>
      <TheaterListDiv>영화관 리스트(가로 스크롤)</TheaterListDiv>
    </>
  );
};

export default Reservation;

const ProcessSection = styled.section`
  display: flex;
  height: 40px;
`;

const ProcessDiv = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const TheaterRegionDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  border-bottom: 1px solid black;
`;

const RegionDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  font-size: 10px;
  align-items: center;
`;

const TheaterListDiv = styled.div`
  display: flex;
  border: 1px solid black;
  height: 40px;
  align-items: center;
  justify-contents: center;
`;
