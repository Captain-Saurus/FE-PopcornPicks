import React from "react";
import styled from "styled-components";
import WhiteCircle from "../styles/components/WhiteCircle";
import {
  TABLET_SIZE,
  LAPTOP_LARGE_SIZE,
  LAPTOP_SIZE,
} from "../constants/constants";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  //todo : 검색해서도 들어갈 수 있도록 영화의 이름을 라우팅으로 날리고 싶음
  const RoutingMovie = (index: number) => {
    navigate(`/movie/${index}`);
  };
  return (
    <>
      <MainImgDiv
        src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1156&q=80"
        alt="영화 홍보 이미지"
      />
      <RankSection>
        {dummy.map((item, index: number) => {
          return (
            <RankDiv key={index} onClick={() => RoutingMovie(index)}>
              <p>1</p>
              <RankImgDiv
                src="https://plus.unsplash.com/premium_photo-1675063044882-522a7d281b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
                alt="랭크 이미지"
              />
              <p>영화 제목</p>
            </RankDiv>
          );
        })}
      </RankSection>
      <MainInfoSection>
        <MainInfoDiv>
          <WhiteCircle />
          <WhiteCircle />
          <WhiteCircle />
          <WhiteCircle />
          <WhiteCircle />
        </MainInfoDiv>
      </MainInfoSection>
    </>
  );
};
export default MainPage;

const ImgDiv = styled.img`
  display: flex;
  object-fill: cover;
`;

const MainImgDiv = styled(ImgDiv)`
  width: 100%;
  max-height: 180px;
  @media screen and (min-width: ${TABLET_SIZE}) {
    max-height: 200px;
  }
  @media screen and (min-width: ${LAPTOP_SIZE}) {
    max-height: 250px;
  }
  @media screen and (min-width: ${LAPTOP_LARGE_SIZE}) {
    max-height: 300px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const RankImgDiv = styled(ImgDiv)`
  width: 100%;
`;

const RankSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const RankDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 18%;
  @font-face {
    font-family: "PartialSansKR-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/PartialSansKR-Regular.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  > p {
    display: flex;
    font-family: "PartialSansKR-Regular";
    font-size: 11px;
    margin-top: 4%;
    margin-bottom: 4%;
  }
  @media screen and (min-width: ${TABLET_SIZE}) {
    > p {
      font-size: 16px;
    }
  }
  @media screen and (min-width: ${LAPTOP_SIZE}) {
    > p {
      font-size: 18px;
    }
  }
  @media screen and (min-width: ${LAPTOP_LARGE_SIZE}) {
    > p {
      font-size: 22px;
    }
  }
`;

const MainInfoSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 80px;
  margin-top: 8%;
  @media screen and (min-width: ${TABLET_SIZE}) {
    height: 100px;
  }
  @media screen and (min-width: ${LAPTOP_SIZE}) {
    height: 120px;
  }
  @media screen and (min-width: ${LAPTOP_LARGE_SIZE}) {
    height: 150px;
  }
`;

const MainInfoDiv = styled.div`
  display: flex;
  width: 95%;
  background-color: #fd7f49;
  border-radius: 8px;
  justify-content: space-around;
  align-items: center;
`;

const dummy = [1, 2, 3, 4, 5];
