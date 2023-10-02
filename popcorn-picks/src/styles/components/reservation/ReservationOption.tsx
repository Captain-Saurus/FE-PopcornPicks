import React from "react";
import styled from "styled-components";
import ReservationBox from "./ReservationBox";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store/modules/modalReducer";

const mockDataGenre = {
  title: "선호하는 장르",
  content: ["#코미디", "#멜로", "#로맨틱코미디", "#액션", "#SF", "#추리"],
};

const mockDataTime = {
  title: "선호하는 시간",
  content: ["#조조", "#오전", "#오후", "#가장 빠른 시간"],
};

const mockDataStyle = {
  title: "선호하는 스타일",
  content: ["#영상미", "#사운드", "#출입구 가까이", "#맨 앞자리"],
};

const ReservationOption: React.FC = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <OptionSection>
        <MovieOptionDiv onClick={handleOpenModal}>
          <ReservationBox data={mockDataGenre} />
        </MovieOptionDiv>
        <MovieOptionDiv>
          <ReservationBox data={mockDataTime} />
        </MovieOptionDiv>
        <MovieOptionDiv>
          <ReservationBox data={mockDataStyle} />
        </MovieOptionDiv>
      </OptionSection>
      <RecommendSection>
        {
          // todo 피그마 요구사항에 맞춰 수정하기 영화 포스터 및 정보데이터 재사용하게 컴포넌트 분리하기
        }
        {/* <MovieCard></MovieCard>/ */}
      </RecommendSection>
    </>
  );
};
export default ReservationOption;

const OptionSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MovieOptionDiv = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
  align-items: center;
`;

const RecommendSection = styled.section`
  display: flex;
  flex-grow: 1.5;
`;
