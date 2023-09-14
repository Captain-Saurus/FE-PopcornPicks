import styled from "styled-components";
import MovieCard from "../styles/components/MovieCard";

const MoviePage = () => {
  return (
    <>
      <MovieHeaderSection>
        <p>전체 영화</p>
        <MovieFilterDiv>
          <input type="checkbox" />
          <p>상영 중인 영화만 보기</p>
        </MovieFilterDiv>
      </MovieHeaderSection>
      <MovieBodySection>
        {dummy.map((item, index: number) => {
          //TODO : 더미 -> API 쏘는 데이터로 변환하기
          return <MovieCard key={index} />;
        })}
      </MovieBodySection>
    </>
  );
};
export default MoviePage;

const dummy = [1, 2, 3, 4, 5, 6, 7, 8];

const MovieHeaderSection = styled.section`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 6% auto;
  > p {
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 23px;
    margin: 3% auto;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

const MovieFilterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

const MovieBodySection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 3%;
`;
