import React from "react";
import styled from "styled-components";
import {
  LAPTOP_LARGE_SIZE,
  LAPTOP_SIZE,
  TABLET_SIZE,
} from "../../constants/constants";

//TODO : 내부 SVG 파일은 props로 받아서 재사용할 수 있도록 수정하기
const WhiteCircle: React.FC = () => {
  return (
    <>
      <CircleStyle>
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 25 25"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
          />
        </svg>
      </CircleStyle>
    </>
  );
};

export default WhiteCircle;

const CircleStyle = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  > svg {
    width: 20px;
  }
  @media screen and (min-width: ${TABLET_SIZE}) {
    width: 70px;
    height: 70px;
    > svg {
      width: 30px;
    }
  }
  @media screen and (min-width: ${LAPTOP_SIZE}) {
    width: 80px;
    height: 80px;
    > svg {
      width: 35px;
    }
  }
  @media screen and (min-width: ${LAPTOP_LARGE_SIZE}) {
    width: 100px;
    height: 100px;
    > svg {
      width: 40px;
    }
  }
`;
