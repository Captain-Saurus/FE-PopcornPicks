import styled from "styled-components";

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
      <p>moviep</p>
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
  margin: 2% auto;
  > p {
    font-weight: bold;
  }
`;

const MovieFilterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
