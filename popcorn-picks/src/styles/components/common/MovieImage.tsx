import React from "react";
import styled from "styled-components";

interface IMovieImageProps {
  imgSrc: string;
}

const MovieImage: React.FC<IMovieImageProps> = ({ imgSrc }) => {
  return <ImgDiv src={imgSrc} alt="이미지" />;
};

export default MovieImage;

const ImgDiv = styled.img`
  display: flex;
  object-fill: cover;
  width: 100%;
`;
