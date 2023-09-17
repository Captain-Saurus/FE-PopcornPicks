import styled from "styled-components";
import { REGION } from "../constants/constants";
import Button from "../styles/components/Button";

const TheaterPage = () => {
  return (
    <>
      <TheaterHeaderSection>
        <p>전체 극장</p>
      </TheaterHeaderSection>
      <TheaterRegionSection>
        <TheaterRegionTitleDiv>
          {REGION.map((regionName, index: number) => {
            return (
              <TheaterRegionDiv key={index}>{regionName}</TheaterRegionDiv>
            );
          })}
        </TheaterRegionTitleDiv>
        <TheaterRegionInfoDiv>
          {
            //TODO : 지역 선택 시 정보 게시
          }
          <p>df</p>
        </TheaterRegionInfoDiv>
      </TheaterRegionSection>
      <TheaterInfoSection>
        <TheaterTitleDiv>
          <p>영화관 이름</p>
        </TheaterTitleDiv>
        <TheaterSubTitleDiv>
          <p>위치</p>
        </TheaterSubTitleDiv>
        <TheaterSubContentDiv>
          <p>- 주소</p>
        </TheaterSubContentDiv>
        <TheaterSubTitleDiv>
          <p>시설 안내</p>
        </TheaterSubTitleDiv>
        <TheaterSubContentDiv>
          <p>1층 : </p>
          <p>2층 : </p>
          <p>3층 : </p>
        </TheaterSubContentDiv>
      </TheaterInfoSection>
      <ButtonSection>
        <Button comment="예매하기" />
      </ButtonSection>
    </>
  );
};
export default TheaterPage;

const TheaterHeaderSection = styled.section`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 6% auto;
  > p {
    font-weight: bold;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    > p {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 1024px) {
    margin: 3% auto;
    > p {
      font-size: 23px;
    }
  }
  @media screen and (min-width: 1440px) {
    > p {
      font-size: 26px;
    }
  }
`;

const TheaterRegionSection = styled.div`
  display: flex;
  width: 95%;
  height: 40vh;
  margin: 0 auto;
  box-shadow: 1px 0 0 0 #888, 0 1px 0 0 #888, 0 0 1px 0 #888 inset, 0 0 0 1px;
`;

const TheaterRegionTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  box-shadow: 0 0 1px 0 #888;
`;

const TheaterRegionDiv = styled.div`
  display: flex;
  flex-grow: 1;
  box-shadow: 0 0 1px 0 #888;
  align-items: center;
  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;

const TheaterRegionInfoDiv = styled.div`
  display: flex;
  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

const TheaterInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 20vh;
  margin: 3% auto;
  @media screen and (min-width: 1440px) {
    margin: 1% auto;
    font-size: 20px;
    height: 16vh;
  }
`;

const TheaterTitleDiv = styled.div`
  display: flex;
  height: 4vh;
  align-items: center;
  > p {
    font-size: 18px;
  }
`;

const TheaterSubTitleDiv = styled.div`
  display: flex;
  height: 3vh;
  align-items: center;
`;

const TheaterSubContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 2vh;
`;

const ButtonSection = styled.section`
  display: flex;
  margin-left: 5%;
  width: 15%;
`;
