import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieImage from "../styles/components/common/MovieImage";
import {
  TABLET_SIZE,
  LAPTOP_LARGE_SIZE,
  LAPTOP_SIZE,
  BACKEND_API_ADDRESS,
} from "../constants/constants";
import { useNavigate } from "react-router-dom";
import YouTube, { YouTubeProps } from "react-youtube";
import { IMovie, ITrailers } from "../interfaces/movie";
import QuickButton from "../styles/components/common/QuickButton";
import Notice from "../assets/svgs/Notice.svg";
import Event from "../assets/svgs/Event.svg";
import Inquiry from "../assets/svgs/Inquiry.svg";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState<IMovie[]>();
  const [trailer, setTrailer] = useState<ITrailers[] | undefined>();

  useEffect(() => {
    getMovie();
    // getTrailers();
  }, []);

  const getMovie = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_API_ADDRESS}movie/daily_box/list`
      );
      setMovie(response?.data.data);
    } catch (e) {
      throw new Error(`${e}`);
    }
  };

  const getTrailers = async () => {
    try {
      const response = await axios.get(`${BACKEND_API_ADDRESS}movie/trailers`);
      setTrailer(response?.data.data);
    } catch (e) {
      throw new Error(`${e}`);
    }
  };

  //todo : 검색해서도 들어갈 수 있도록 영화의 이름을 라우팅으로 날리고 싶음
  const RoutingMovie = (index: number) => {
    navigate(`/movie/${index}`);
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "300",
  };

  return (
    <>
      {/* <MainImgDiv
        src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1156&q=80"
        alt="영화 트레일러"
      /> */}
      <YouTube
        videoId={trailer ? trailer[0]?.movieId : "fR1Dd_EGBmM"}
        opts={opts}
      />
      <RankSection>
        {movie &&
          movie.map((item: IMovie) => {
            return (
              <RankDiv key={item.rank} onClick={() => RoutingMovie(item.rank)}>
                <p>{item.rank}</p>
                <MovieImage imgSrc={item.movieImageUrl} />
                <p>{item.movieName}</p>
              </RankDiv>
            );
          })}
      </RankSection>
      <QuickSection>
        <QuickButton imgSrc={Event} comment="이벤트" />
        <QuickButton imgSrc={Notice} comment="공지사항" />
        <QuickButton imgSrc={Inquiry} comment="1:1문의" />
      </QuickSection>
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

const QuickSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 0 auto;
`;
