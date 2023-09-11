import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 120px;
  font-size: 13px;
`;

const MainDiv = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  > img {
    width: 230px;
    height: 53px;
  }
`;

const MainContentSection = styled.div`
  display: flex;
`;

const MainContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;

const SubDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  width: 80%;
  margin: 0 auto;
  > p {
    width: 60px;
  }
`;

const Header = () => {
  return (
    <HeaderDiv>
      <MainDiv>
        <img
          src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          alt="로고"
        />
        <MainContentSection>
          <MainContentDiv>
            <svg
              fill="none"
              width="30"
              height="40"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <p>로그인</p>
          </MainContentDiv>
          <MainContentDiv>
            <svg
              fill="none"
              width="30"
              height="40"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>
            <p>빠른 예매</p>
          </MainContentDiv>
        </MainContentSection>
      </MainDiv>
      <SubDiv>
        <p>영화</p>
        <p>극장</p>
        <p>예매</p>
        <p>혜택</p>
      </SubDiv>
    </HeaderDiv>
  );
};
export default Header;
