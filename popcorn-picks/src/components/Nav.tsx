import styled from "styled-components";
import WhiteCircle from "../styles/components/WhiteCircle";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <NavDiv>
        <span>
          <Link to="/movie">영화</Link>
        </span>
        <span>
          <Link to="/theater">극장</Link>
        </span>
        <WhiteCircle />
        <span>일반 예매</span>
        <span>퍼스널 예매</span>
      </NavDiv>
    </>
  );
};
export default Nav;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  height: 40px;
  background-color: #fd7f49;
  > span {
    display: flex;
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    height: 45px;
    > span {
      font-size: 16px;

      &:hover {
        cursor: pointer;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    height: 48px;
  }
  @media screen and (min-width: 1440px) {
    height: 52px;
  }
`;
