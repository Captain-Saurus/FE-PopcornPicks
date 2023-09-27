import React from "react";
import styled from "styled-components";
import MovieImage from "../styles/components/common/MovieImage";
import Button from "../styles/components/common/Button";
import { LAPTOP_LARGE_SIZE, LAPTOP_SIZE } from "../constants/constants";

/**
 * @todo 이미지 클릭 시 데이터 받아서 출력해주기
 */
const DetailPage: React.FC = () => {
  return (
    <>
      <DetailSection>
        <ImageDiv>
          <MovieImage imgSrc="https://plus.unsplash.com/premium_photo-1675063044882-522a7d281b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80" />
        </ImageDiv>
        <InfoDiv>
          <InfoRow>
            <TitleInfo>영화 제목</TitleInfo>
          </InfoRow>
          <InfoRow>
            <SubInfo>감독 : ㅂㅂㅂ</SubInfo>
          </InfoRow>
          <InfoRow>
            <SubInfo>배우 : ㅇㅇㅇ, ㄱㄱㄱ, ㄴㄴㄴ</SubInfo>
          </InfoRow>
          <InfoRow>
            <SubInfo>장르 : ㅁㅁㅁ</SubInfo>
          </InfoRow>
          <InfoRow>
            <SubInfo>기본 정보 : 관람등급, 상영시간, 국가</SubInfo>
          </InfoRow>
          <InfoRow>
            <SubInfo>개봉일 : 1111.11.11</SubInfo>
          </InfoRow>
          <InfoRow>
            <Button comment={"예매하기"} />
          </InfoRow>
          <InfoRow>
            <SubInfo>줄거리</SubInfo>
          </InfoRow>
        </InfoDiv>
      </DetailSection>
    </>
  );
};

export default DetailPage;

const DetailSection = styled.section`
  display: flex;
  width: 100%;
  height: 65vh;
  justify-content: space-around;
  margin-top: 10%;

  @media screen and (min-width: ${LAPTOP_SIZE}) {
    width: 80%;
    margin: 10% auto;
  }
  @media screen and (min-width: ${LAPTOP_LARGE_SIZE}) {
    width: 80%;
    margin: 10% auto;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  width: 30%;
  height: 30%;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const TitleInfo = styled.div`
  display: flex;
  border-bottom: 1px soild black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubInfo = styled.div`
  display: flex;
  font-size: 16px;
`;
