import styled from "styled-components";

const ReservationSelect = () => {
  return (
    <>
      <MovieListDiv>
        <p>이미지만 보여주기 </p>
      </MovieListDiv>
      <MovieCalendarDiv>
        <p>캘린더</p>
      </MovieCalendarDiv>
      <p>선택한 영화명 </p>
      <MovieTimeDiv></MovieTimeDiv>
    </>
  );
};

export default ReservationSelect;

const MovieListDiv = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  border-bottom: 1px solid black;
`;

const MovieCalendarDiv = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid black;
`;

const MovieTimeDiv = styled.div`
  display: flex;
`;
