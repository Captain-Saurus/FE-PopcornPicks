import styled from "styled-components";
import WhiteCircle from "../styles/components/WhiteCircle";

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  height: 40px;
  background-color: #fd7f49;
  > p {
    display: flex;
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    height: 45px;
    > p {
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

const Nav = () => {
  return (
    <>
      <NavDiv>
        <p>영화</p>
        <p>극장</p>
        <WhiteCircle />
        <p>예매</p>
        <p>혜택</p>
      </NavDiv>
    </>
  );
};
export default Nav;
