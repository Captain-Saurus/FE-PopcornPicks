import React from "react";
import styled from "styled-components";

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
  height: 8vh;
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
`;
