import React from "react";
import styled from "styled-components";
import {
  LAPTOP_SIZE,
  LAPTOP_LARGE_SIZE,
  TABLET_SIZE,
} from "../../../constants/constants";

interface IQuickButton {
  imgSrc: string;
  comment: string;
}

const QuickButton: React.FC<IQuickButton> = ({ imgSrc, comment }) => {
  return (
    <ButtonDiv>
      <img src={imgSrc} alt="퀵버튼" />
      <p>{comment}</p>
    </ButtonDiv>
  );
};

export default QuickButton;

const ButtonDiv = styled.div`
  display: flex;
  width: 30%;
  height: 6vh;
  border: 1px solid black;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  margin: 3% auto;
  cursor: pointer;

  > img {
    width: 18%;
  }
  > p {
    width: 45%;
    font-size: 12px;
  }
  @media screen and (min-width: ${TABLET_SIZE}) {
    width: 28%;
    height: 8vh;

    > img {
      width: 20%;
    }
    > p {
      width: 45%;
      font-size: 16px;
    }
  }
  @media screen and (min-width: ${LAPTOP_SIZE}) {
    width: 28%;
    height: 12vh;

    > img {
      width: 15%;
    }
    > p {
      width: 45%;
      font-size: 18px;
    }
  }
  @media screen and (min-width: ${LAPTOP_LARGE_SIZE}) {
    width: 28%;
    height: 12vh;

    > img {
      width: 15%;
    }
    > p {
      width: 40%;
      font-size: 24px;
    }
  }
`;
